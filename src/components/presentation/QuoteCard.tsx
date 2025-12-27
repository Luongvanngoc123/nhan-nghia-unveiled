import { useEffect, useRef } from 'react';
import { animate, onScroll } from 'animejs';

interface QuoteCardProps {
  quote: string;
  source: string;
  translation?: string;
}

const QuoteCard = ({ quote, source, translation }: QuoteCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    if (!cardRef.current || !quoteRef.current) return;

    // Card entrance animation
    const cardAnimation = animate(cardRef.current, {
      opacity: [0, 1],
      scale: [0.9, 1],
      translateY: [40, 0],
      duration: 800,
      ease: 'outExpo',
      autoplay: onScroll({
        target: cardRef.current,
        enter: 'bottom 85%',
        leave: 'top 15%',
      }),
    });

    // Quote text staggered animation
    const words = quoteRef.current.querySelectorAll('.quote-word');
    const wordsAnimation = animate(words, {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
      delay: (_el: Element, i: number) => 200 + i * 50,
      ease: 'outQuad',
      autoplay: onScroll({
        target: cardRef.current,
        enter: 'bottom 80%',
        leave: 'top 20%',
      }),
    });

    return () => {
      cardAnimation.pause();
      wordsAnimation.pause();
    };
  }, []);

  // Split quote into words for staggered animation
  const quoteWords = quote.split(' ').map((word, i) => (
    <span key={i} className="quote-word inline-block mr-[0.3em]">
      {word}
    </span>
  ));

  return (
    <div
      ref={cardRef}
      className="my-12 relative bg-gradient-to-br from-cream to-ivory rounded-lg p-8 md:p-10 shadow-[var(--shadow-soft)] border border-burgundy/10 opacity-0"
    >
      {/* Decorative Quote Mark */}
      <svg
        className="absolute -top-4 -left-4 w-12 h-12 text-gold/30"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>

      <blockquote
        ref={quoteRef}
        className="font-display text-xl md:text-2xl text-burgundy italic leading-relaxed"
      >
        {quoteWords}
      </blockquote>

      {translation && (
        <p className="mt-4 font-body text-base text-ink-light">
          ({translation})
        </p>
      )}

      <cite className="block mt-6 font-sans text-sm text-gold tracking-wider">
        — {source}
      </cite>
    </div>
  );
};

export default QuoteCard;
