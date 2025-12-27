import { useEffect, useRef, ReactNode } from 'react';
import { animate, onScroll, stagger } from 'animejs';

interface ContentSectionProps {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  variant?: 'default' | 'highlight' | 'quote';
}

const ContentSection = ({
  id,
  number,
  title,
  subtitle,
  children,
  variant = 'default',
}: ContentSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !contentRef.current) return;

    // Number animation - slide from left
    const numberAnimation = numberRef.current && animate(numberRef.current, {
      opacity: [0, 0.1],
      translateX: [-50, 0],
      duration: 1000,
      ease: 'outExpo',
      autoplay: onScroll({
        target: sectionRef.current,
        enter: 'bottom 75%',
        leave: 'top 25%',
      }),
    });

    // Header animation
    const headerAnimation = animate(headerRef.current, {
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 800,
      ease: 'outQuart',
      autoplay: onScroll({
        target: sectionRef.current,
        enter: 'bottom 75%',
        leave: 'top 25%',
      }),
    });

    // Underline animation
    const lineAnimation = lineRef.current && animate(lineRef.current, {
      scaleX: [0, 1],
      opacity: [0, 1],
      duration: 600,
      delay: 400,
      ease: 'outQuart',
      autoplay: onScroll({
        target: sectionRef.current,
        enter: 'bottom 75%',
        leave: 'top 25%',
      }),
    });

    // Content animation
    const contentAnimation = animate(contentRef.current, {
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 800,
      delay: 200,
      ease: 'outQuart',
      autoplay: onScroll({
        target: sectionRef.current,
        enter: 'bottom 70%',
        leave: 'top 30%',
      }),
    });

    // Animate paragraphs inside content
    const paragraphs = contentRef.current.querySelectorAll('p');
    const paragraphAnimation = paragraphs.length > 0 && animate(paragraphs, {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
      delay: stagger(100, { start: 400 }),
      ease: 'outQuad',
      autoplay: onScroll({
        target: sectionRef.current,
        enter: 'bottom 70%',
        leave: 'top 30%',
      }),
    });

    return () => {
      if (numberAnimation) numberAnimation.pause();
      headerAnimation.pause();
      if (lineAnimation) lineAnimation.pause();
      contentAnimation.pause();
      if (paragraphAnimation) paragraphAnimation.pause();
    };
  }, []);

  const bgClass = variant === 'highlight' ? 'bg-cream' : 'bg-ivory';

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`py-20 md:py-32 ${bgClass} scroll-mt-20`}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="relative mb-12 opacity-0">
          <span
            ref={numberRef}
            className="font-display text-7xl md:text-8xl font-light text-burgundy/10 absolute -left-2 md:-left-8 -top-8 select-none opacity-0"
          >
            {number}
          </span>
          <div className="relative">
            {subtitle && (
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-3 block">
                {subtitle}
              </span>
            )}
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink leading-tight">
              {title}
            </h2>
            <div
              ref={lineRef}
              className="mt-6 w-16 h-0.5 bg-gradient-to-r from-burgundy to-burgundy/20 origin-left opacity-0"
            />
          </div>
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-ink prose-p:text-ink-light prose-p:leading-relaxed prose-strong:text-burgundy prose-blockquote:border-l-gold prose-blockquote:text-burgundy prose-blockquote:italic prose-blockquote:font-display opacity-0"
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
