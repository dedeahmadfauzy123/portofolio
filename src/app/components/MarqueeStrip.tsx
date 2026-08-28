import React from 'react';

export default function MarqueeStrip() {
  const keywords = [
    "Full Stack Dev", "Biology Education", "Photography", "Videography",
    "Next.js", "React", "TypeScript", "PostgreSQL", "Public Speaking",
    "Leadership", "BSI Scholar", "EdTech", "Digital Media", "Adobe Premiere",
    "Canva", "Git & GitHub", "Prisma ORM", "Tailwind CSS"
  ];

  // Join items with dot separator for one sequence
  const renderKeywords = () => (
    <>
      {keywords.map((word, index) => (
        <React.Fragment key={index}>
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#1B365D] font-semibold mx-4">
            {word}
          </span>
          <span className="text-[#4A7FB5] font-black">·</span>
        </React.Fragment>
      ))}
    </>
  );

  return (
    <div 
      className="overflow-hidden border-y border-[#1B365D]/10 py-3 bg-[#EDF2F8]"
      style={{
        maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)'
      }}
      aria-label="Skills and Qualifications Marquee"
    >
      <div className="flex whitespace-nowrap marquee-track w-max">
        {/* Render twice for seamless loop */}
        <div className="flex items-center">
          {renderKeywords()}
        </div>
        <div className="flex items-center" aria-hidden="true">
          {renderKeywords()}
        </div>
      </div>
    </div>
  );
}
