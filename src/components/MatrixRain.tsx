'use client';

import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters (mix of katakana and binary)
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const charSize = 16;
    const columns = canvas.width / charSize;
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100; // Start above canvas at random positions
    }

    // Animation speed for each column (varying speeds)
    const speeds = drops.map(() => Math.random() * 2 + 1);

    const draw = () => {
      // Semi-transparent black to create fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0'; // Matrix green
      ctx.font = `${charSize}px monospace`;

      // Draw each column
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // Draw character
        const x = i * charSize;
        const y = drops[i] * charSize;
        
        // Vary the opacity based on position
        const opacity = Math.min(1, Math.max(0.1, 1 - (y / canvas.height)));
        ctx.fillStyle = `rgba(0, 255, 0, ${opacity})`;
        
        ctx.fillText(char, x, y);

        // Move drop down based on its speed
        drops[i] += speeds[i];

        // Reset drop to top when it reaches bottom
        if (drops[i] * charSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-30"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default MatrixRain;
