import React from 'react';

export const SoundWave = () => {
  const leftWave = [
      20, 25, 30, 20, 35, 40, 50, 40, 30, 60, 
      80, 50, 70, 90, 60, 80, 100, 70, 90, 60,
      100, 80, 60, 40, 70, 50, 40, 30, 50, 30, 
      25, 30, 20, 15, 20
  ];

  const rightWave = [
      20, 15, 20, 30, 25, 30, 50, 30, 40, 50, 
      70, 40, 60, 80, 100, 60, 90, 70, 100, 80,
      60, 90, 70, 50, 80, 60, 30, 40, 50, 40, 
      35, 20, 30, 25, 20
  ];

  return (
    <div className="w-full h-32 bg-[#1A1A1A] flex items-center justify-center overflow-hidden">
      <div className="flex items-center gap-1.5 h-full py-8">
          {leftWave.map((height, i) => (
          <div 
              key={`l-${i}`} 
              className="w-1.5 md:w-2 bg-[#D95F29] rounded-full"
              style={{ height: `${height}%` }}
          />
          ))}
           {rightWave.map((height, i) => (
          <div 
              key={`r-${i}`} 
              className="w-1.5 md:w-2 bg-[#D95F29] rounded-full"
              style={{ height: `${height}%` }}
          />
          ))}
      </div>
    </div>
  );
};

