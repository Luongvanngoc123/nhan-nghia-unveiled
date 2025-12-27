import { useEffect, useRef } from 'react';
import { animate, onScroll } from 'animejs';

interface TimelineItemProps {
  year?: string;
  title: string;
  description: string;
  index: number;
}

const TimelineItem = ({ year, title, description, index }: TimelineItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!itemRef.current) return;

    // Item slide in from alternating sides
    const itemAnimation = animate(itemRef.current, {
      opacity: [0, 1],
      translateX: [index % 2 === 0 ? -40 : 40, 0],
      duration: 700,
      ease: 'outQuart',
      autoplay: onScroll({
        target: itemRef.current,
        enter: 'bottom 85%',
        leave: 'top 15%',
      }),
    });

    // Dot pop animation
    const dotAnimation = dotRef.current && animate(dotRef.current, {
      scale: [0, 1],
      duration: 500,
      delay: 200,
      ease: 'outElastic(1, .6)',
      autoplay: onScroll({
        target: itemRef.current,
        enter: 'bottom 85%',
        leave: 'top 15%',
      }),
    });

    return () => {
      itemAnimation.pause();
      if (dotAnimation) dotAnimation.pause();
    };
  }, [index]);

  return (
    <div
      ref={itemRef}
      className="relative pl-8 pb-10 border-l-2 border-burgundy/20 last:pb-0 opacity-0"
    >
      {/* Timeline Dot */}
      <div
        ref={dotRef}
        className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-ivory border-2 border-burgundy scale-0"
      />

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
