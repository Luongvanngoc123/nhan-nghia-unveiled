import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface KeyPointCardProps {
  number: number;
  title: string;
  description: string;
  delay?: number;
}

const KeyPointCard = ({ number, title, description, delay = 0 }: KeyPointCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: delay * 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className="group relative bg-ivory rounded-lg p-4 sm:p-6 border border-border hover:border-burgundy/30 transition-all duration-300 hover:shadow-[var(--shadow-soft)]"
    >
      <span className="font-display text-3xl sm:text-5xl font-light text-burgundy/20 group-hover:text-burgundy/40 transition-colors">
        {String(number).padStart(2, '0')}
      </span>
      <h4 className="font-display text-base sm:text-xl text-ink mt-1 sm:mt-2 group-hover:text-burgundy transition-colors">
        {title}
      </h4>
      <p className="font-body text-xs sm:text-sm text-ink-light mt-2 sm:mt-3 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default KeyPointCard;
