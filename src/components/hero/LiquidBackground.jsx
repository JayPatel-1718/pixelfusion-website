import React, { useEffect, useState, useRef } from 'react';

const LiquidBackground = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const requestRef = useRef();
    const currentPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        const animate = () => {
            currentPos.current.x += (mousePos.x - currentPos.current.x) * 0.05;
            currentPos.current.y += (mousePos.y - currentPos.current.y) * 0.05;
            requestRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(requestRef.current);
        };
    }, [mousePos]);

    const blobs = [
        { color: 'rgba(15, 61, 62, 0.5)', size: '55vw', top: '-10%', left: '-10%', delay: '0s', moveType: 'free-move-1' },
        { color: 'rgba(242, 84, 45, 0.3)', size: '50vw', top: '20%', left: '50%', delay: '-7s', moveType: 'free-move-2' },
        { color: 'rgba(15, 61, 62, 0.35)', size: '45vw', top: '50%', left: '10%', delay: '-14s', moveType: 'free-move-3' },
        { color: 'rgba(242, 84, 45, 0.25)', size: '60vw', top: '40%', left: '40%', delay: '-21s', moveType: 'free-move-4' },
        { color: 'rgba(15, 61, 62, 0.3)', size: '40vw', top: '10%', left: '70%', delay: '-28s', moveType: 'free-move-1' },
    ];

    return (
        <div className="liquid-container">
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
                            background: blob.color,
                            width: blob.size,
                            height: blob.size,
                            animationDelay: blob.delay,
                            transform: `translate3d(${(currentPos.current.x - window.innerWidth / 2) * (0.02 * (i + 1))}px, ${(currentPos.current.y - window.innerHeight / 2) * (0.02 * (i + 1))}px, 0)`
                        }}
                    />
                </div>
            ))}
            <style>
                {`
                .liquid-container {
                    position: absolute;
                    inset: 0;
                    overflow: hidden;
                    z-index: 0;
                    filter: blur(100px);
                    pointer-events: none;
                    background: #050505;
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
                    animation: morph-blob 15s infinite alternate ease-in-out;
                }
                
                /* High-Engagement Free Movement */
                .free-move-1 { animation: large-drift-1 40s infinite linear; }
                .free-move-2 { animation: large-drift-2 45s infinite linear; }
                .free-move-3 { animation: large-drift-3 50s infinite linear; }
                .free-move-4 { animation: large-drift-4 55s infinite linear; }

                @keyframes morph-blob {
                    0% { border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%; }
                    33% { border-radius: 60% 40% 40% 60% / 60% 60% 40% 40%; }
                    66% { border-radius: 40% 60% 40% 60% / 60% 40% 60% 40%; }
                    100% { border-radius: 60% 40% 60% 40% / 40% 60% 40% 60%; }
                }

                @keyframes large-drift-1 {
                    0% { transform: translate(0, 0) rotate(0deg); }
                    25% { transform: translate(30vw, 20vh) rotate(90deg); }
                    50% { transform: translate(10vw, 40vh) rotate(180deg); }
                    75% { transform: translate(-20vw, 20vh) rotate(270deg); }
                    100% { transform: translate(0, 0) rotate(360deg); }
                }

                @keyframes large-drift-2 {
                    0% { transform: translate(0, 0) rotate(0deg); }
                    33% { transform: translate(-30vw, 30vh) rotate(-120deg); }
                    66% { transform: translate(20vw, -20vh) rotate(-240deg); }
                    100% { transform: translate(0, 0) rotate(-360deg); }
                }

                @keyframes large-drift-3 {
                    0% { transform: translate(0, 0); }
                    20% { transform: translate(40vw, -10vh); }
                    40% { transform: translate(20vw, 40vh); }
                    60% { transform: translate(-30vw, 20vh); }
                    80% { transform: translate(-10vw, -30vh); }
                    100% { transform: translate(0, 0); }
                }

                @keyframes large-drift-4 {
                    0% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(-40vw, -40vh) scale(1.2); }
                    100% { transform: translate(0, 0) scale(1); }
                }
                `}
            </style>
        </div>
    );
};

export default LiquidBackground;
