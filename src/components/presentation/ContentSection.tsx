import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ContentSectionProps {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  variant?: 'default' | 'highlight' | 'quote';
  backgroundImage?: string;
}

const ContentSection = ({
  id,
  number,
  title,
  subtitle,
  children,
  variant = 'default',
  backgroundImage,
}: ContentSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      ).fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.4'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const bgClass = variant === 'highlight' ? 'bg-cream' : 'bg-ivory';

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`py-12 sm:py-20 md:py-32 ${bgClass} scroll-mt-16 sm:scroll-mt-20 relative overflow-hidden`}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-ivory/90 dark:bg-ink/90" />
        </div>
      )}
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="relative mb-8 sm:mb-12">
          <span className="font-display text-5xl sm:text-7xl md:text-8xl font-light text-burgundy/10 absolute -left-1 sm:-left-2 md:-left-8 -top-4 sm:-top-8 select-none">
            {number}
          </span>
          <div className="relative">
            {subtitle && (
              <span className="font-sans text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase text-gold mb-2 sm:mb-3 block">
                {subtitle}
              </span>
            )}
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-ink leading-tight">
              {title}
            </h2>
            <div className="mt-4 sm:mt-6 w-12 sm:w-16 h-0.5 bg-gradient-to-r from-burgundy to-burgundy/20" />
          </div>
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="prose prose-sm sm:prose-lg max-w-none prose-headings:font-display prose-headings:text-ink prose-p:text-ink-light prose-p:leading-relaxed prose-strong:text-burgundy prose-blockquote:border-l-gold prose-blockquote:text-burgundy prose-blockquote:italic prose-blockquote:font-display prose-p:text-sm sm:prose-p:text-base"
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
