import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface QuoteCardProps {
  quote: string;
  source: string;
  translation?: string;
}

const QuoteCard = ({ quote, source, translation }: QuoteCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.95, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
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
  }, []);

  return (
    <div
      ref={cardRef}
      className="my-6 sm:my-12 relative bg-gradient-to-br from-cream to-ivory rounded-lg p-5 sm:p-8 md:p-10 shadow-[var(--shadow-soft)] border border-burgundy/10"
    >
      {/* Decorative Quote Mark */}
      <svg
        className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-8 sm:w-12 h-8 sm:h-12 text-gold/30"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>

      <blockquote className="font-display text-base sm:text-xl md:text-2xl text-burgundy italic leading-relaxed">
        {quote}
      </blockquote>

      {translation && (
        <p className="mt-2 sm:mt-4 font-body text-xs sm:text-base text-ink-light">
          ({translation})
        </p>
      )}

      <cite className="block mt-4 sm:mt-6 font-sans text-xs sm:text-sm text-gold tracking-wider">
        — {source}
      </cite>
    </div>
  );
};

export default QuoteCard;
