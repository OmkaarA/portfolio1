import React, { useEffect, useRef, useCallback } from 'react';

export default function RainEffect() {
    const rainRef = useRef(null);
    const puddleRef = useRef(null);

    // Memoize spawnDropAndPuddle to avoid redefining it on every render
    const spawnDropAndPuddle = useCallback(() => {
        const rain = rainRef.current;
        const puddle = puddleRef.current;
        if (!rain || !puddle) return;

        const drop = document.createElement('div');
        drop.className = 'raindrop';
        const left = Math.random() * 100;
        drop.style.left = left + 'vw';
        drop.style.animationDuration = (0.7 + Math.random() * 0.7) + 's';
        drop.style.animationDelay = (Math.random() * 2) + 's';
        drop.style.height = (12 + Math.random() * 18) + 'px';
        rain.appendChild(drop);

        setTimeout(() => {
            const splash = document.createElement('div');
            splash.className = 'puddle-splash';
            splash.style.position = 'absolute';
            splash.style.left = `calc(${left}vw - 8px)`;
            splash.style.bottom = '10px';
            splash.style.width = '16px';
            splash.style.height = '8px';
            splash.style.borderRadius = '50%';
            splash.style.background = 'rgba(163,191,250,0.25)';
            splash.style.opacity = '0.7';
            splash.style.pointerEvents = 'none';
            puddle.appendChild(splash);

            // Use requestAnimationFrame for smoother fade-out
            setTimeout(() => {
                let start;
                const duration = 1000;
                const fade = (timestamp) => {
                    if (!start) start = timestamp;
                    const progress = Math.min((timestamp - start) / duration, 1);
                    splash.style.opacity = (0.7 * (1 - progress)).toString();
                    if (progress < 1) {
                        requestAnimationFrame(fade);
                    } else if (splash.parentNode) {
                        puddle.removeChild(splash);
                    }
                };
                requestAnimationFrame(fade);
            }, 1200 + Math.random() * 800);

            if (drop.parentNode) rain.removeChild(drop);
            spawnDropAndPuddle();
        }, (parseFloat(drop.style.animationDelay) + parseFloat(drop.style.animationDuration)) * 1000);
    }, []);

    useEffect(() => {
        const rain = rainRef.current;
        const puddle = puddleRef.current;
        if (!rain || !puddle) return;
        rain.innerHTML = '';
        puddle.innerHTML = '';

        for (let i = 0; i < 60; i++) {
            spawnDropAndPuddle();
        }

        return () => {
            rain.innerHTML = '';
            puddle.innerHTML = '';
        };
    }, [spawnDropAndPuddle]);

    return (
        <>
            <div className="rain" id="rain" ref={rainRef}></div>
            <div
                id="puddle"
                ref={puddleRef}
                style={{
                    position: 'fixed',
                    left: 0,
                    bottom: 0,
                    width: '100vw',
                    height: '80px',
                    pointerEvents: 'none',
                    zIndex: 1
                }}
            />
        </>
    );
}
