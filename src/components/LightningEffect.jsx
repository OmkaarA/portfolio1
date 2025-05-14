import React, { useEffect, useRef } from 'react';

export default function LightningEffect() {
    const containerRef = useRef(null);

    useEffect(() => {
        let timeoutId;

        function lightningStrike() {
            const container = containerRef.current;
            if (!container) return;
            container.innerHTML = '';
            const left = 10 + Math.random() * 80;
            const segments = 5 + Math.floor(Math.random() * 3);
            const svgNS = "http://www.w3.org/2000/svg";
            const svg = document.createElementNS(svgNS, "svg");
            svg.setAttribute("width", "60");
            svg.setAttribute("height", "100vh");
            svg.style.position = "absolute";
            svg.style.left = `calc(${left}vw - 30px)`;
            svg.style.top = "0";
            svg.style.pointerEvents = "none";
            svg.style.zIndex = "2";
            svg.style.overflow = "visible";

            let pointsStr = `30,0 `;
            let currX = 30;
            let currY = 0;
            for (let i = 0; i < segments; i++) {
                currX += (Math.random() - 0.5) * 30;
                currY += window.innerHeight / segments;
                pointsStr += `${currX},${currY} `;
            }

            const polyline = document.createElementNS(svgNS, "polyline");
            polyline.setAttribute("points", pointsStr);
            polyline.setAttribute("stroke", "#fff");
            polyline.setAttribute("stroke-width", "3");
            polyline.setAttribute("stroke-linecap", "round");
            polyline.setAttribute("stroke-linejoin", "round");
            polyline.setAttribute("fill", "none");
            polyline.style.filter = "drop-shadow(0 0 8px #fff) drop-shadow(0 0 16px #7abaff)";
            polyline.style.opacity = "0.92";
            polyline.style.animation = "strike-anim 0.35s cubic-bezier(.7,0,.7,1) forwards";

            svg.appendChild(polyline);
            container.appendChild(svg);

            setTimeout(() => {
                if (container.contains(svg)) container.removeChild(svg);
            }, 350);
        }

        function scheduleLightning() {
            const min = 900, max = 2500;
            timeoutId = setTimeout(() => {
                lightningStrike();
                scheduleLightning();
            }, min + Math.random() * (max - min));
        }
        scheduleLightning();

        return () => {
            clearTimeout(timeoutId);
            if (containerRef.current) containerRef.current.innerHTML = '';
        };
    }, []);

    return <div className="lightning-strike" id="lightning-strike" ref={containerRef}></div>;
}
