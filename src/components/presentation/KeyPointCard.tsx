import { useEffect, useRef } from 'react';
import { animate, onScroll } from 'animejs';

interface KeyPointCardProps {
  number: number;
  title: string;
  description: string;
  delay?: number;
}

const KeyPointCard = ({ number, title, description, delay = 0 }: KeyPointCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    // Card entrance animation with anime.js scroll
    const cardAnimation = animate(cardRef.current, {
      opacity: [0, 1],
      translateY: [60, 0],
      rotate: [2, 0],
      duration: 700,
      delay: delay * 150,
      ease: 'outBack',
      autoplay: onScroll({
        target: cardRef.current,
        enter: 'bottom 85%',
        leave: 'top 15%',
      }),
    });

    // Number animation
    const numberAnimation = numberRef.current && animate(numberRef.current, {
      scale: [0, 1],
      opacity: [0, 0.2],
      duration: 600,
      delay: delay * 150 + 200,
      ease: 'outElastic(1, .5)',
      autoplay: onScroll({
        target: cardRef.current,
        enter: 'bottom 85%',
        leave: 'top 15%',
      }),
    });

    return () => {
      cardAnimation.pause();
      if (numberAnimation) numberAnimation.pause();
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className="group relative bg-ivory rounded-lg p-6 border border-border hover:border-burgundy/30 transition-all duration-300 hover:shadow-[var(--shadow-soft)] opacity-0"
    >
      <span
        ref={numberRef}
        className="font-display text-5xl font-light text-burgundy/20 group-hover:text-burgundy/40 transition-colors opacity-0"
      >
        {String(number).padStart(2, '0')}
      </span>
      <h4 className="font-display text-xl text-ink mt-2 group-hover:text-burgundy transition-colors">
        {title}
      </h4>
      <p className="font-body text-sm text-ink-light mt-3 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default KeyPointCard;
