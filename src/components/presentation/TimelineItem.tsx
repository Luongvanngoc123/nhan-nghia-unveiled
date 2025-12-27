import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TimelineItemProps {
  year?: string;
  title: string;
  description: string;
  index: number;
}

const TimelineItem = ({ year, title, description, index }: TimelineItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        itemRef.current,
        { opacity: 0, x: index % 2 === 0 ? -30 : 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: itemRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, itemRef);

    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={itemRef}
      className="relative pl-8 pb-10 border-l-2 border-burgundy/20 last:pb-0"
    >
      {/* Timeline Dot */}
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-ivory border-2 border-burgundy" />

      {year && (
        <span className="font-display text-sm text-gold font-medium">
          {year}
        </span>
      )}
      <h4 className="font-display text-xl text-ink mt-1">{title}</h4>
      <p className="font-body text-ink-light mt-2 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default TimelineItem;
