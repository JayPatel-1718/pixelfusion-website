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
        {
            color: 'rgba(15, 61, 62, 0.4)',
            shineColor: 'rgba(255, 255, 255, 0.15)',
            size: '80vw',
            top: '-15%',
            left: '-15%',
            delay: '0s',
            moveType: 'roam-1'
        },
        {
            color: 'rgba(242, 84, 45, 0.3)',
            shineColor: 'rgba(255, 180, 150, 0.3)',
            size: '70vw',
            top: '20%',
            left: '30%',
            delay: '-10s',
            moveType: 'roam-2'
        },
        {
            color: 'rgba(15, 61, 62, 0.35)',
            shineColor: 'rgba(180, 255, 255, 0.2)',
            size: '60vw',
            top: '60%',
            left: '-5%',
            delay: '-20s',
            moveType: 'roam-3'
        },
        {
            color: 'rgba(242, 84, 45, 0.2)',
            shineColor: 'rgba(255, 255, 255, 0.45)',
            size: '50vw',
            top: '30%',
            left: '65%',
            delay: '-30s',
            moveType: 'roam-4'
        },
        // Specular Highlights (fast & bright)
        {
            color: 'rgba(255, 255, 255, 0.08)',
            shineColor: 'rgba(255, 255, 255, 0.6)',
            size: '30vw',
            top: '40%',
            left: '20%',
            delay: '-5s',
            moveType: 'roam-shine'
        },
        {
            color: 'rgba(255, 255, 255, 0.05)',
            shineColor: 'rgba(255, 255, 255, 0.5)',
            size: '25vw',
            top: '10%',
            left: '70%',
            delay: '-15s',
            moveType: 'roam-shine'
        },
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
                            background: `radial-gradient(circle at 35% 35%, ${blob.shineColor} 0%, ${blob.color} 50%, transparent 100%)`,
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
                    filter: blur(80px); /* Slightly less blur for more defined light shapes */
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
                    will-change: transform, border-radius, background;
                    animation: morph-blob 12s infinite alternate ease-in-out, shine-pulse 8s infinite alternate ease-in-out;
                }
                
                /* Free Roaming Movement */
                .roam-1 { animation: drift-roam-1 45s infinite ease-in-out; }
                .roam-2 { animation: drift-roam-2 55s infinite ease-in-out; }
                .roam-3 { animation: drift-roam-3 65s infinite ease-in-out; }
                .roam-4 { animation: drift-roam-4 75s infinite ease-in-out; }
                .roam-shine { animation: drift-roam-shine 30s infinite ease-in-out; }

                @keyframes morph-blob {
                    0% { border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%; transform: scale(1); }
                    33% { border-radius: 60% 40% 40% 60% / 60% 60% 40% 40%; transform: scale(1.1); }
                    66% { border-radius: 40% 60% 40% 60% / 60% 40% 60% 40%; transform: scale(0.9); }
                    100% { border-radius: 60% 40% 60% 40% / 40% 60% 40% 60%; transform: scale(1); }
                }

                @keyframes shine-pulse {
                    0% { filter: brightness(1); opacity: 0.8; }
                    50% { filter: brightness(1.4); opacity: 1; }
                    100% { filter: brightness(1); opacity: 0.8; }
                }

                @keyframes drift-roam-1 {
                    0% { transform: translate(0, 0) rotate(0deg); }
                    33% { transform: translate(25vw, 15vh) rotate(120deg); }
                    66% { transform: translate(-15vw, 30vh) rotate(240deg); }
                    100% { transform: translate(0, 0) rotate(360deg); }
                }

                @keyframes drift-roam-2 {
                    0% { transform: translate(0, 0) rotate(0deg); }
                    45% { transform: translate(-30vw, 20vh) rotate(-180deg); }
                    80% { transform: translate(15vw, -10vh) rotate(-280deg); }
                    100% { transform: translate(0, 0) rotate(-360deg); }
                }

                @keyframes drift-roam-3 {
                    0% { transform: translate(0, 0); }
                    25% { transform: translate(35vw, -20vh); }
                    50% { transform: translate(10vw, 45vh); }
                    75% { transform: translate(-35vw, 10vh); }
                    100% { transform: translate(0, 0); }
                }

                @keyframes drift-roam-4 {
                    0% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(-45vw, -35vh) scale(1.3); }
                    100% { transform: translate(0, 0) scale(1); }
                }

                @keyframes drift-roam-shine {
                    0% { transform: translate(0, 0) scale(1); opacity: 0.3; }
                    25% { transform: translate(40vw, 40vh) scale(1.5); opacity: 0.8; }
                    50% { transform: translate(-40vw, 20vh) scale(1); opacity: 0.4; }
                    75% { transform: translate(20vw, -40vh) scale(1.8); opacity: 0.7; }
                    100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
                }
                `}
            </style>
        </div>
    );
};

export default LiquidBackground;
