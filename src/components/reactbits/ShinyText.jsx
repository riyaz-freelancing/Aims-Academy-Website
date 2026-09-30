import React from 'react';

export default function ShinyText({ text, className = '', disabled = false, speed = 5 }) {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`inline-block bg-clip-text text-transparent bg-[linear-gradient(110deg,#0F2942,45%,#DC2626,55%,#0F2942)] bg-[length:250%_100%] animate-shiny ${
        disabled ? '' : 'animate-shine'
      } ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(120deg, rgba(255,255,255,0.7) 0%, rgba(245,158,11,1) 50%, rgba(255,255,255,0.7) 100%)',
        backgroundSize: '200% 100%',
        animation: disabled ? 'none' : `shine ${animationDuration} infinite linear`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {text}
    </span>
  );
}
