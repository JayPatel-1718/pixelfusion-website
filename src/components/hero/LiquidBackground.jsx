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
        { color: 'rgba(15, 61, 62, 0.45)', size: '45vw', top: '10%', left: '15%', delay: '0s', moveType: 'move-1' },
        { color: 'rgba(242, 84, 45, 0.25)', size: '40vw', top: '40%', left: '60%', delay: '-5s', moveType: 'move-2' },
        { color: 'rgba(15, 61, 62, 0.3)', size: '35vw', top: '60%', left: '25%', delay: '-10s', moveType: 'move-3' },
        { color: 'rgba(242, 84, 45, 0.2)', size: '50vw', top: '15%', left: '70%', delay: '-15s', moveType: 'move-4' },
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
                            transform: `translate3d(${(currentPos.current.x - window.innerWidth / 2) * (0.015 * (i + 1))}px, ${(currentPos.current.y - window.innerHeight / 2) * (0.015 * (i + 1))}px, 0)`
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
                    filter: blur(80px);
                    pointer-events: none;
                    background: #050505;
                }
                .liquid-wrapper {
                    position: absolute;
                    will-change: transform;
                }
                .liquid-blob {
                    border-radius: 50%;
                    mix-blend-mode: screen;
                    will-change: transform, border-radius;
                    animation: morph-blob 20s infinite alternate ease-in-out;
                }
                
                /* Movement Animations */
                .move-1 { animation: drift-1 30s infinite alternate ease-in-out; }
                .move-2 { animation: drift-2 35s infinite alternate ease-in-out; }
                .move-3 { animation: drift-3 25s infinite alternate ease-in-out; }
                .move-4 { animation: drift-4 40s infinite alternate ease-in-out; }

                @keyframes morph-blob {
                    0% { border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%; }
                    33% { border-radius: 60% 40% 40% 60% / 60% 60% 40% 40%; }
                    66% { border-radius: 40% 60% 40% 60% / 60% 40% 60% 40%; }
                    100% { border-radius: 60% 40% 60% 40% / 40% 60% 40% 60%; }
                }

                @keyframes drift-1 {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(15vw, 10vh); }
                }
                @keyframes drift-2 {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(-10vw, -15vh); }
                }
                @keyframes drift-3 {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(-12vw, 12vh); }
                }
                @keyframes drift-4 {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(10vw, -10vh); }
                }
                `}
            </style>
        </div>
    );
};

export default LiquidBackground;
