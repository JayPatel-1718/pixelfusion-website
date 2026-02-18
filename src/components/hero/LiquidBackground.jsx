import React, { useEffect, useState, useRef } from 'react';

const LiquidBackground = () => {
    const requestRef = useRef();
    const currentPos = useRef({ x: 0, y: 0 });
    const targetPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            targetPos.current = { x: e.clientX, y: e.clientY };
        };

        const animate = () => {
            currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.03; // Even smoother follow
            currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.03;

            // Updating styles directly would be better for performance, 
            // but since we are using React components for blobs, 
            // we'll keep the current approach but optimize state if needed.
            // For now, let's just make the animation logic more fluid.

            requestRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(requestRef.current);
        };
    }, []);

    const blobs = [
        {
            color: 'rgba(67, 97, 238, 0.35)', // Deep Royal Blue
            shineColor: 'rgba(72, 149, 239, 0.25)',
            size: '90vw',
            top: '-25%',
            left: '-20%',
            delay: '0s',
            moveType: 'roam-1'
        },
        {
            color: 'rgba(114, 9, 183, 0.25)', // Deep Purple
            shineColor: 'rgba(181, 23, 158, 0.2)',
            size: '80vw',
            top: '20%',
            left: '40%',
            delay: '-10s',
            moveType: 'roam-2'
        },
        {
            color: 'rgba(76, 201, 240, 0.2)', // Soft Cyan
            shineColor: 'rgba(255, 255, 255, 0.15)',
            size: '70vw',
            top: '60%',
            left: '-15%',
            delay: '-20s',
            moveType: 'roam-3'
        },
        {
            color: 'rgba(63, 55, 201, 0.25)', // Indigo
            shineColor: 'rgba(72, 149, 239, 0.2)',
            size: '60vw',
            top: '35%',
            left: '65%',
            delay: '-30s',
            moveType: 'roam-4'
        },
        // Additional mid-sized blobs for density
        {
            color: 'rgba(72, 149, 239, 0.15)',
            shineColor: 'rgba(76, 201, 240, 0.1)',
            size: '45vw',
            top: '70%',
            left: '30%',
            delay: '-5s',
            moveType: 'roam-2'
        },
        // Specular Highlights (fast & bright) - Very dimmed
        {
            color: 'rgba(255, 255, 255, 0.04)',
            shineColor: 'rgba(255, 255, 255, 0.2)',
            size: '40vw',
            top: '40%',
            left: '20%',
            delay: '-15s',
            moveType: 'roam-shine'
        },
        {
            color: 'rgba(255, 255, 255, 0.03)',
            shineColor: 'rgba(255, 255, 255, 0.15)',
            size: '35vw',
            top: '15%',
            left: '75%',
            delay: '-25s',
            moveType: 'roam-shine'
        },
    ];

    return (
        <div className="liquid-container">
            {/* The "Water" Layer */}
            <div className="liquid-water-layer">
                {blobs.map((blob, i) => (
                    <div
                        key={i}
                        className={`liquid-wrapper ${blob.moveType}`}
                        style={{
                            top: blob.top,
                            left: blob.left,
                            animationDelay: blob.delay
                        }}
                    >
                        <div
                            className="liquid-blob"
                            style={{
                                background: `radial-gradient(circle at 40% 40%, ${blob.shineColor} 0%, ${blob.color} 35%, transparent 100%)`,
                                width: blob.size,
                                height: blob.size,
                                animationDelay: blob.delay,
                                transform: `translate3d(${(currentPos.current.x - (typeof window !== 'undefined' ? window.innerWidth : 0) / 2) * (0.01 * (i + 1))}px, ${(currentPos.current.y - (typeof window !== 'undefined' ? window.innerHeight : 0) / 2) * (0.01 * (i + 1))}px, 0)`
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* The "Glass Surface" Overlay */}
            <div className="glass-surface"></div>

            <style>
                {`
                .liquid-container {
                    position: absolute;
                    inset: 0;
                    overflow: hidden;
                    z-index: 0;
                    background: #000;
                    pointer-events: none;
                }

                .liquid-water-layer {
                    position: absolute;
                    inset: 0;
                    filter: blur(60px) contrast(1.2);
                    animation: hue-cycle 20s infinite linear;
                    will-change: filter;
                }

                @keyframes hue-cycle {
                    0% { filter: blur(60px) contrast(1.2) hue-rotate(0deg); }
                    100% { filter: blur(60px) contrast(1.2) hue-rotate(360deg); }
                }

                .glass-surface {
                    position: absolute;
                    inset: 0;
                    z-index: 10;
                    backdrop-filter: blur(15px);
                    background: radial-gradient(
                        circle at center,
                        rgba(255, 255, 255, 0.03) 0%,
                        rgba(0, 0, 0, 0.4) 100%
                    );
                    /* Subtle glass reflection shadow */
                    box-shadow: inset 0 0 100px rgba(0,0,0,0.5);
                }

                /* Add a fine grain/noise to the glass for realism */
                .glass-surface::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    opacity: 0.02;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Cfilter id='noiseFilter'%3%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3%3C/filter%3%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3%3C/svg%3");
                    pointer-events: none;
                }

                .liquid-wrapper {
                    position: absolute;
                    will-change: transform;
                    width: 100%;
                    height: 100%;
                }

                .liquid-blob {
                    border-radius: 50%;
                    mix-blend-mode: screen;
                    will-change: transform, border-radius;
                    animation: morph-blob 20s infinite alternate ease-in-out, shine-pulse 15s infinite alternate ease-in-out;
                }
                
                .roam-1 { animation: drift-roam-1 60s infinite ease-in-out; }
                .roam-2 { animation: drift-roam-2 70s infinite ease-in-out; }
                .roam-3 { animation: drift-roam-3 80s infinite ease-in-out; }
                .roam-4 { animation: drift-roam-4 90s infinite ease-in-out; }
                .roam-shine { animation: drift-roam-shine 40s infinite ease-in-out; }

                @keyframes morph-blob {
                    0% { border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%; transform: scale(1) rotate(0deg); }
                    50% { border-radius: 60% 40% 40% 60% / 60% 60% 40% 40%; transform: scale(1.3) rotate(20deg); }
                    100% { border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%; transform: scale(1) rotate(-10deg); }
                }

                @keyframes shine-pulse {
                    0% { opacity: 0.2; transform: scale(0.9); }
                    50% { opacity: 0.5; transform: scale(1.1); }
                    100% { opacity: 0.2; transform: scale(0.9); }
                }

                @keyframes drift-roam-1 {
                    0% { transform: translate(0, 0) rotate(0deg); }
                    50% { transform: translate(20vw, 15vh) rotate(180deg); }
                    100% { transform: translate(0, 0) rotate(360deg); }
                }

                @keyframes drift-roam-2 {
                    0% { transform: translate(0, 0); }
                    50% { transform: translate(-25vw, -10vh); }
                    100% { transform: translate(0, 0); }
                }

                @keyframes drift-roam-3 {
                    0% { transform: translate(0, 0); }
                    50% { transform: translate(15vw, -20vh); }
                    100% { transform: translate(0, 0); }
                }

                @keyframes drift-roam-4 {
                    0% { transform: translate(0, 0); }
                    50% { transform: translate(-20vw, 25vh); }
                    100% { transform: translate(0, 0); }
                }

                @keyframes drift-roam-shine {
                    0% { transform: translate(0, 0) scale(1); opacity: 0.1; }
                    50% { transform: translate(30vw, 30vh) scale(1.5); opacity: 0.4; }
                    100% { transform: translate(0, 0) scale(1); opacity: 0.1; }
                }
                `}
            </style>
        </div>
    );
};

export default LiquidBackground;
