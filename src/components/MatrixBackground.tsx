'use client';

import { useEffect, useRef } from 'react';

const HexDumpBackground = ({ className = '' }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const fontSize = 11;
    const lineHeight = fontSize * 1.6;
    const bytesPerLine = 16;
    const offsetWidth = 75;
    const hexWidth = bytesPerLine * fontSize * 2.5;
    const asciiWidth = bytesPerLine * fontSize * 0.7;
    const columnPadding = 50;
    const columnWidth = offsetWidth + hexWidth + asciiWidth + columnPadding;
    const columnGap = 20;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    const drawHexColumn = (startX: number, numRows: number) => {
      const dpr = window.devicePixelRatio || 1;
      const adjustedStartX = startX / dpr;
      
      for (let i = 0; i < numRows; i++) {
        const y = (i + 1) * lineHeight;
        const lineOffset = i * bytesPerLine;
        
        // Line number
        const offsetHex = lineOffset.toString(16).padStart(8, '0');
        ctx.fillStyle = '#888888';
        ctx.fillText(offsetHex + ':', adjustedStartX + 10, y);

        // Generate random bytes for this line
        const bytes = Array(bytesPerLine).fill(0).map(() => Math.floor(Math.random() * 256));
        let asciiPart = '';

        // Draw hex values
        for (let j = 0; j < bytesPerLine; j++) {
          const byte = bytes[j];
          const hexByte = byte.toString(16).padStart(2, '0');
          
          // Position for hex values
          const xPos = adjustedStartX + offsetWidth + j * (fontSize * 2.2);
          ctx.fillStyle = '#AAAAAA';
          ctx.fillText(hexByte, xPos, y);
          
          // Add separator between groups of 4
          if ((j + 1) % 4 === 0 && j < bytesPerLine - 1) {
            ctx.fillStyle = '#666666';
            ctx.fillText('│', xPos + fontSize * 1.8, y);
          }

          // Build ASCII part
          asciiPart += byte >= 32 && byte <= 126 ? String.fromCharCode(byte) : '.';
        }

        // Separator before ASCII
        const separatorX = adjustedStartX + offsetWidth + hexWidth + 10;
        ctx.fillStyle = '#666666';
        ctx.fillText('║', separatorX, y);

        // ASCII representation
        ctx.fillStyle = '#AAAAAA';
        ctx.fillText(asciiPart, separatorX + 15, y);
      }
    };

    const drawHexDump = () => {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px 'Fira Code', monospace`;

      // Calculate number of columns and rows needed to fill the screen
      const dpr = window.devicePixelRatio || 1;
      const screenWidth = canvas.width / dpr;
      const screenHeight = canvas.height / dpr;
      
      // Calculate number of columns with fixed gap
      const numColumns = Math.floor((screenWidth + columnGap) / (columnWidth + columnGap));
      const totalWidth = numColumns * columnWidth + (numColumns - 1) * columnGap;
      const startX = (screenWidth - totalWidth) / 2;
      
      // Calculate number of rows needed
      const numRows = Math.ceil(screenHeight / lineHeight);
      
      // Draw columns
      for (let col = 0; col < numColumns; col++) {
        drawHexColumn(startX + col * (columnWidth + columnGap), numRows);
      }
    };

    const render = () => {
      drawHexDump();
    };

    resizeCanvas();
    window.addEventListener('resize', () => {
      resizeCanvas();
      drawHexDump();
    });
    drawHexDump();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ filter: 'blur(0.5px)' }}
    />
  );
};

export default HexDumpBackground;
