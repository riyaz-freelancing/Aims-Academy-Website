import React, { useState } from 'react';

export default function FlipCard({
  frontContent,
  backContent,
  className = '',
  triggerMode = 'both', // 'hover' | 'click' | 'both'
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    if (triggerMode === 'hover' || triggerMode === 'both') {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    if (triggerMode === 'hover' || triggerMode === 'both') {
      setIsFlipped(false);
    }
  };

  const handleClick = () => {
    if (triggerMode === 'click' || triggerMode === 'both') {
      setIsFlipped((prev) => !prev);
    }
  };

  return (
    <div
      className={`group cursor-pointer [perspective:1200px] ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Front Face */}
        <div className="w-full h-full [backface-visibility:hidden]">
          {frontContent}
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {backContent}
        </div>
      </div>
    </div>
  );
}
