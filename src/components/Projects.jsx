import React, { useEffect } from 'react';
import placeholder1 from '../assets/img/placeholder1.png';
import placeholder2 from '../assets/img/placeholder2.png';
import placeholder3 from '../assets/img/placeholder3.png';
import placeholder4 from '../assets/img/placeholder4.png';

export default function Projects() {
    useEffect(() => {
        function setupSwiper(swiperId, prevBtnId, nextBtnId, imgCount) {
            const swiper = document.getElementById(swiperId);
            let idx = 0;
            function update() {
                if (swiper) {
                    swiper.style.transform = `translateX(-${idx * 100}%)`;
                }
            }
            const prevBtn = document.getElementById(prevBtnId);
            const nextBtn = document.getElementById(nextBtnId);
            if (prevBtn) {
                prevBtn.onclick = function () {
                    idx = (idx - 1 + imgCount) % imgCount;
                    update();
                };
            }
            if (nextBtn) {
                nextBtn.onclick = function () {
                    idx = (idx + 1) % imgCount;
                    update();
                };
            }
        }
        setupSwiper("swiper-portfolio", "prev-portfolio", "next-portfolio", 2);
        setupSwiper("swiper-task", "prev-task", "next-task", 2);
        setupSwiper("swiper-weather", "prev-weather", "next-weather", 2);
        setupSwiper("swiper-ui", "prev-ui", "next-ui", 2);
    }, []);

    return (
        <>
            <h2 className="projects-heading">Projects</h2>
            {/* Portfolio Website Project */}
            <section className="project-highlight" id="portfolio-website" style={{ marginTop: '2rem' }}>
                <div className="project-highlight-content">
                    <div className="project-swiper" style={{ position: 'relative', minHeight: 0 }}>
                        <div className="swiper-images" style={{ display: 'flex', transition: 'transform 0.5s' }} id="swiper-portfolio">
                            <img src={placeholder1} alt="Portfolio Website 1" />
                            <img src={placeholder2} alt="Portfolio Website 2" />
                        </div>
                        <button className="swiper-btn" id="prev-portfolio"
                            style={{
                                position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)',
                                background: '#fff', border: 'none', borderRadius: '50%', width: 32, height: 32, cursor: 'pointer', zIndex: 3
                            }}>&#8592;</button>
                        <button className="swiper-btn" id="next-portfolio"
                            style={{
                                position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
                                background: '#fff', border: 'none', borderRadius: '50%', width: 32, height: 32, cursor: 'pointer', zIndex: 3
                            }}>&#8594;</button>
                    </div>
                    <div className="project-info">
                        <h2>Portfolio Website</h2>
                        <p>A personal portfolio site to showcase my work and skills. Built with React and styled-components.</p>
                        <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                </div>
            </section>
            {/* Task Manager App Project */}
            <section className="project-highlight" id="task-manager-app" style={{ marginTop: '2rem' }}>
                <div className="project-highlight-content">
                    <div className="project-swiper" style={{ position: 'relative', minHeight: 0 }}>
                        <div className="swiper-images" style={{ display: 'flex', transition: 'transform 0.5s' }} id="swiper-task">
                            <img src={placeholder2} alt="Task Manager App 1" />
                            <img src={placeholder3} alt="Task Manager App 2" />
                        </div>
                        <button className="swiper-btn" id="prev-task"
                            style={{
                                position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)',
                                background: '#fff', border: 'none', borderRadius: '50%', width: 32, height: 32, cursor: 'pointer', zIndex: 3
                            }}>&#8592;</button>
                        <button className="swiper-btn" id="next-task"
                            style={{
                                position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
                                background: '#fff', border: 'none', borderRadius: '50%', width: 32, height: 32, cursor: 'pointer', zIndex: 3
                            }}>&#8594;</button>
                    </div>
                    <div className="project-info">
                        <h2>Task Manager App</h2>
                        <p>A simple and intuitive task manager built with Next.js and Tailwind CSS.</p>
                        <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                </div>
            </section>
            {/* Weather Dashboard Project */}
            <section className="project-highlight" id="weather-dashboard" style={{ marginTop: '2rem' }}>
                <div className="project-highlight-content">
                    <div className="project-swiper" style={{ position: 'relative', minHeight: 0 }}>
                        <div className="swiper-images" style={{ display: 'flex', transition: 'transform 0.5s' }} id="swiper-weather">
                            <img src={placeholder3} alt="Weather Dashboard 1" />
                            <img src={placeholder4} alt="Weather Dashboard 2" />
                        </div>
                        <button className="swiper-btn" id="prev-weather"
                            style={{
                                position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)',
                                background: '#fff', border: 'none', borderRadius: '50%', width: 32, height: 32, cursor: 'pointer', zIndex: 3
                            }}>&#8592;</button>
                        <button className="swiper-btn" id="next-weather"
                            style={{
                                position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
                                background: '#fff', border: 'none', borderRadius: '50%', width: 32, height: 32, cursor: 'pointer', zIndex: 3
                            }}>&#8594;</button>
                    </div>
                    <div className="project-info">
                        <h2>Weather Dashboard</h2>
                        <p>Responsive weather dashboard using OpenWeatherMap API and vanilla JS.</p>
                        <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                </div>
            </section>
            {/* UI Component Library Project */}
            <section className="project-highlight" id="ui-component-library" style={{ marginTop: '2rem' }}>
                <div className="project-highlight-content">
                    <div className="project-swiper" style={{ position: 'relative', minHeight: 0 }}>
                        <div className="swiper-images" style={{ display: 'flex', transition: 'transform 0.5s' }} id="swiper-ui">
                            <img src={placeholder4} alt="UI Component Library 1" />
                            <img src={placeholder1} alt="UI Component Library 2" />
                        </div>
                        <button className="swiper-btn" id="prev-ui"
                            style={{
                                position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)',
                                background: '#fff', border: 'none', borderRadius: '50%', width: 32, height: 32, cursor: 'pointer', zIndex: 3
                            }}>&#8592;</button>
                        <button className="swiper-btn" id="next-ui"
                            style={{
                                position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
                                background: '#fff', border: 'none', borderRadius: '50%', width: 32, height: 32, cursor: 'pointer', zIndex: 3
                            }}>&#8594;</button>
                    </div>
                    <div className="project-info">
                        <h2>UI Component Library</h2>
                        <p>Reusable React UI components for rapid prototyping and development.</p>
                        <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                </div>
            </section>
        </>
    );
}
