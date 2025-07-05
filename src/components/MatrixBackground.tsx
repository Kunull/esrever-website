'use client';

import { useEffect, useRef } from 'react';

const MatrixBackground = ({ className = '' }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const cellSize = 20; // Size of each grid cell
    const fontSize = 11; // Actual font size
    const chars = '0123456789ABCDEF'; // Hex characters only
    const pairSpacing = 6; // Space between characters in a pair
    const density = 1; // Higher number = more dense characters
    const columns = Math.floor((window.innerWidth * density) / cellSize);
    const rows = Math.floor((window.innerHeight * density) / cellSize);
    const grid: { chars: [string, string]; nextUpdate: number }[][] = Array(rows).fill(0).map(() =>
      Array(columns).fill(0).map(() => ({
        chars: [
          chars[Math.floor(Math.random() * chars.length)],
          chars[Math.floor(Math.random() * chars.length)]
        ],
        nextUpdate: Math.random() * 100
      }))
    );

    const resizeCanvas = () => {
      // Get the actual height of the hero section
      const heroSection = document.querySelector('section');
      const heroHeight = heroSection?.getBoundingClientRect().height || window.innerHeight;
      
      canvas.width = window.innerWidth;
      canvas.height = heroHeight;
      ctx.font = `${fontSize}px ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace`;
      ctx.textBaseline = 'top';
    };

    const draw = (timestamp: number) => {
      // Clear the canvas completely
      ctx.fillStyle = 'rgb(0, 0, 0)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
          const cell = grid[y][x];
          
          if (timestamp >= cell.nextUpdate) {
            // Update both characters together
            cell.chars = [
              chars[Math.floor(Math.random() * chars.length)],
              chars[Math.floor(Math.random() * chars.length)]
            ];
            cell.nextUpdate = timestamp + Math.random() * 3000 + 500;
          }
          
          // Calculate opacity based on vertical position
          const midPoint = rows / 2;
          let opacity = 0.2; // Base opacity reduced
          
          if (y < midPoint) {
            // Fade in from 0 to full opacity in the first half
            opacity *= (y / midPoint);
          }
          
          ctx.fillStyle = `rgba(220, 220, 220, ${opacity})`;
          // Draw character pair (hex-like)
          const baseX = x * cellSize;
          const yPos = y * cellSize + (cellSize - fontSize) / 2 + fontSize;
          
          const [char1, char2] = cell.chars;
          const xPos1 = baseX + (cellSize - pairSpacing - ctx.measureText(char1 + char2).width) / 2;
          const xPos2 = xPos1 + ctx.measureText(char1).width + pairSpacing;
          
          ctx.fillText(char1, xPos1, yPos);
          ctx.fillText(char2, xPos2, yPos);
        }
      }

      requestAnimationFrame(draw);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full pointer-events-none ${className}`}
      style={{ mixBlendMode: 'screen', opacity: 0.6 }}
    />
  );
};

export default MatrixBackground;
