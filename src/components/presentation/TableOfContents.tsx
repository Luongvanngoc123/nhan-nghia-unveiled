import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  { id: 'mo-dau', title: 'Phần Mở Đầu', subtitle: 'Lý do chọn đề tài' },
  { id: 'co-so', title: 'Cơ Sở Lý Luận', subtitle: 'Nho giáo và bối cảnh lịch sử' },
  { id: 'yeu-nuoc', title: 'Nhân Nghĩa & Yêu Nước', subtitle: 'Chủ nghĩa yêu nước' },
  { id: 'than-dan', title: 'Tư Tưởng Thân Dân', subtitle: 'Lấy dân làm gốc' },
  { id: 'hoa-binh', title: 'Khát Vọng Hòa Bình', subtitle: 'Lòng khoan dung' },
  { id: 'nghe-thuat', title: 'Nghệ Thuật Thể Hiện', subtitle: 'Văn chương Nguyễn Trãi' },
  { id: 'ket-luan', title: 'Kết Luận', subtitle: 'Giá trị và bài học' },
];

const TableOfContents = () => {
  const containerRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        itemsRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-16 sm:py-24 md:py-32 bg-cream"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-burgundy text-center mb-3 sm:mb-4">
          Mục Lục
        </h2>
        <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-10 sm:mb-16" />

        <nav className="space-y-2 sm:space-y-4">
          {sections.map((section, index) => (
            <a
              key={section.id}
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
              href={`#${section.id}`}
              className="group flex items-baseline gap-2 sm:gap-4 py-3 sm:py-4 border-b border-border/50 hover:border-burgundy/30 transition-colors"
            >
              <span className="font-display text-xl sm:text-3xl text-burgundy/30 group-hover:text-burgundy transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-base sm:text-xl text-ink group-hover:text-burgundy transition-colors truncate">
                  {section.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-ink-light mt-0.5 sm:mt-1 truncate">
                  {section.subtitle}
                </p>
              </div>
              <svg
                className="w-4 sm:w-5 h-4 sm:h-5 text-burgundy/30 group-hover:text-burgundy group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-all flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default TableOfContents;
