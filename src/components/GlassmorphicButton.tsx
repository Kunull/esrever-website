import React, { useEffect, useRef } from 'react';

interface Props {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const GlassmorphicButton: React.FC<Props> = ({ children, href, className = '' }) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const glow = glowRef.current;
    if (!button || !glow) return;

    const updateGlow = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate relative position (0 to 1)
      const relativeX = x / rect.width;
      const relativeY = y / rect.height;
      
      // Update glow position
      glow.style.background = `radial-gradient(circle at ${relativeX * 100}% ${relativeY * 100}%, rgba(255,255,255,0.15), rgba(255,255,255,0.05))`;
    };

    const handleMouseEnter = () => {
      glow.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      glow.style.opacity = '0';
    };

    button.addEventListener('mousemove', updateGlow);
    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', updateGlow);
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <a
      ref={buttonRef}
      href={href}
      className={`relative overflow-hidden ${className}`}
    >
      <div 
        ref={glowRef}
        className="absolute inset-0 transition-opacity duration-300 opacity-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15), rgba(255,255,255,0.05))',
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </a>
  );
};

export default GlassmorphicButton;
