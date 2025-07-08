'use client';

import { useEffect, useRef } from 'react';

interface Props {
  className?: string;
}

const MatrixBackground: React.FC<Props> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const cellSize = 16; // Size of each grid cell (reduced for better density)
    const fontSize = 10; // Actual font size (slightly smaller for better fit)
    const chars = '0123456789ABCDEF'; // Hex characters only
    const pairSpacing = 4; // Space between characters in a pair (reduced for better fit)
    const density = 1.2; // Higher number = more dense characters

    // Set initial canvas size
    const { width, height } = container.getBoundingClientRect();
    canvas.width = width;
    canvas.height = height;
    
    ctx.font = `${fontSize}px ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace`;
    ctx.textBaseline = 'top';
    let columns = Math.floor((width * density) / cellSize);
    let rows = Math.floor((height * density) / cellSize);
    let grid: { chars: [string, string]; nextUpdate: number }[][] = Array(rows).fill(0).map(() =>
      Array(columns).fill(0).map(() => ({
        chars: [
          chars[Math.floor(Math.random() * chars.length)],
          chars[Math.floor(Math.random() * chars.length)]
        ],
        nextUpdate: Math.random() * 100
      }))
    );

    const resizeCanvas = () => {
      if (canvasRef.current && containerRef.current) {
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const scale = window.devicePixelRatio || 1;
        
        // Get the actual computed height to handle vh units correctly
        const computedStyle = window.getComputedStyle(container);
        const height = parseFloat(computedStyle.height);
        const width = rect.width;
        
        canvasRef.current.width = width * scale;
        canvasRef.current.height = height * scale;
        canvasRef.current.style.width = `${width}px`;
        canvasRef.current.style.height = `${height}px`;

        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          ctx.scale(scale, scale);
          ctx.font = `${fontSize}px ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace`;
          ctx.textBaseline = 'top';
        }

        // Update grid dimensions
        columns = Math.floor((width * density) / cellSize);
        rows = Math.floor((height * density) / cellSize);
        grid = Array(rows).fill(0).map(() =>
          Array(columns).fill(0).map(() => ({
            chars: [
              chars[Math.floor(Math.random() * chars.length)],
              chars[Math.floor(Math.random() * chars.length)]
            ],
            nextUpdate: Math.random() * 100
          }))
        );
      }
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
            cell.nextUpdate = timestamp + Math.random() * 6000 + 2000;
          }
          
          // Calculate opacity based on vertical position
          const midPoint = rows / 2;
          let opacity = 0.15; // Base opacity for better visibility
          
          if (y < midPoint) {
            // Fade in from 0 to full opacity in the first half
            opacity *= (y / midPoint);
          }
          
          ctx.fillStyle = `rgba(200, 200, 200, ${opacity})`;
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
    <div ref={containerRef} className={`${className} overflow-hidden`}>
      <canvas
        ref={canvasRef}
        className={`w-full h-full pointer-events-none`}
        style={{ mixBlendMode: 'screen', opacity: 1 }}
      />
    </div>
  );
};

export default MatrixBackground;
