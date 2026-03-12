import React from 'react';

const LiquidBackground = () => {
    const blobs = [
        {
            color: 'rgba(67, 97, 238, 0.25)', // Deep Royal Blue
            size: '70vw',
            top: '-10%',
            left: '-10%',
            moveType: 'roam-1'
        },
        {
            color: 'rgba(114, 9, 183, 0.15)', // Deep Purple
            size: '60vw',
            top: '30%',
            left: '30%',
            moveType: 'roam-2'
        },
        {
            color: 'rgba(76, 201, 240, 0.15)', // Soft Cyan
            size: '50vw',
            top: '50%',
            left: '-5%',
            moveType: 'roam-3'
        }
    ];

    return (
        <div className="liquid-container">
            <div className="liquid-water-layer">
                {blobs.map((blob, i) => (
                    <div
                        key={i}
                        className={`liquid-blob ${blob.moveType}`}
                        style={{
                            background: blob.color,
                            width: blob.size,
                            height: blob.size,
                            top: blob.top,
                            left: blob.left,
                        }}
                    />
                ))}
            </div>

            <div className="glass-surface"></div>

            <style>
                {`
                .liquid-container {
                    position: absolute;
                    inset: 0;
                    overflow: hidden;
                    z-index: 0;
                    background: #050505;
                    pointer-events: none;
                }

                .liquid-water-layer {
                    position: absolute;
                    inset: 0;
                    filter: blur(80px);
                    will-change: transform;
                }

                .glass-surface {
                    position: absolute;
                    inset: 0;
                    z-index: 1;
                    background: radial-gradient(
                        circle at center,
                        rgba(0, 0, 0, 0) 0%,
                        rgba(5, 5, 5, 0.8) 100%
                    );
                }

                .liquid-blob {
                    position: absolute;
                    border-radius: 50%;
                    mix-blend-mode: screen;
                    will-change: transform;
                }
                
                .roam-1 { animation: drift-1 30s infinite alternate ease-in-out; }
                .roam-2 { animation: drift-2 40s infinite alternate ease-in-out; }
                .roam-3 { animation: drift-3 50s infinite alternate ease-in-out; }

                @keyframes drift-1 {
                    0% { transform: translate(0, 0) scale(1); }
                    100% { transform: translate(15vw, 10vh) scale(1.2); }
                }

                @keyframes drift-2 {
                    0% { transform: translate(0, 0) scale(1.1); }
                    100% { transform: translate(-10vw, -15vh) scale(0.9); }
                }

                @keyframes drift-3 {
                    0% { transform: translate(0, 0) scale(0.9); }
                    100% { transform: translate(20vw, -5vh) scale(1.1); }
                }
                `}
            </style>
        </div>
    );
};

export default LiquidBackground;
