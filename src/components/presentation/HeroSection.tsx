import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import heroLandscape from '@/assets/hero-landscape.jpg';

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 1.5 }
      )
        .fromTo(
          decorRef.current,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 1.2 },
          '-=0.8'
        )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 1 },
          '-=0.6'
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.4'
        )
        .fromTo(
          scrollRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.2'
        );

      // Floating animation for scroll indicator
      gsap.to(scrollRef.current, {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: 'power1.inOut',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero Background Image */}
      <div
        ref={imageRef}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroLandscape}
          alt="Tranh thủy mặc núi Lam Sơn với hình ảnh học giả"
          className="w-full h-full object-cover"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/70 via-ivory/50 to-ivory" />
        <div className="absolute inset-0 bg-gradient-to-r from-ivory/60 via-transparent to-ivory/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Decorative Element */}
        <div
          ref={decorRef}
          className="mx-auto mb-12 w-32 h-px bg-gradient-to-r from-transparent via-burgundy to-transparent origin-center"
        />

        {/* Main Title */}
        <h1
          ref={titleRef}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-ink leading-tight mb-8"
        >
          <span className="block text-burgundy mb-2 drop-shadow-sm">Tư Tưởng Nhân Nghĩa</span>
          <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-ink-light mt-4">
            Trong Thơ Văn Nguyễn Trãi
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="font-body text-lg md:text-xl text-ink-light max-w-3xl mx-auto leading-relaxed"
        >
          Từ cốt lõi Nho gia đến chủ nghĩa yêu nước
          <br className="hidden md:block" />
          và tinh thần nhân văn hiện thực
        </p>

        {/* Decorative Quote */}
        <div className="mt-16 max-w-2xl mx-auto bg-ivory/80 backdrop-blur-sm rounded-lg p-6 border border-burgundy/10">
          <blockquote className="font-display text-xl md:text-2xl italic text-burgundy/90">
            "Việc nhân nghĩa cốt ở yên dân,
            <br />
            Quân điếu phạt trước lo trừ bạo."
          </blockquote>
          <cite className="block mt-4 font-sans text-sm text-ink-light tracking-wider uppercase">
            — Bình Ngô Đại Cáo
          </cite>
        </div>

        {/* Scroll Indicator */}
        <div
          ref={scrollRef}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-sans text-xs text-ink-light tracking-widest uppercase bg-ivory/70 px-3 py-1 rounded-full backdrop-blur-sm">
            Cuộn xuống
          </span>
          <svg
            className="w-6 h-6 text-burgundy"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
