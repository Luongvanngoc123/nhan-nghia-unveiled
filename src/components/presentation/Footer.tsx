import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const references = [
  'Nguyễn Trãi. (1976). Nguyễn Trãi toàn tập (Đào Duy Anh dịch và chú giải). Hà Nội: NXB Khoa học Xã hội.',
  'Bùi Văn Nguyên. (1999). Thơ văn Nguyễn Trãi. Hà Nội: NXB Giáo dục.',
  'Trần Đình Hượu. (1995). Nho giáo và văn học Việt Nam trung cận đại. Hà Nội: NXB Văn hóa Thông tin.',
  'Nguyễn Huệ Chi (Chủ biên). (1984). Từ điển văn học (bộ mới). Hà Nội: NXB Thế giới.',
  'Mai Quốc Liên. (2000). Nguyễn Trãi – Về tác gia và tác phẩm. Hà Nội: NXB Giáo dục.',
  'Sách giáo khoa Ngữ văn 10, Tập 2, Bộ Chân trời sáng tạo/Kết nối tri thức (Chương trình GDPT 2018).',
];

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="py-20 bg-burgundy text-primary-foreground">
      <div ref={contentRef} className="max-w-4xl mx-auto px-6">
        <h2 className="font-display text-2xl md:text-3xl text-gold-light mb-8">
          Tài Liệu Tham Khảo
        </h2>

        <ol className="space-y-4">
          {references.map((ref, index) => (
            <li
              key={index}
              className="flex gap-4 font-body text-sm text-primary-foreground/80"
            >
              <span className="font-display text-gold-light shrink-0">
                [{index + 1}]
              </span>
              <span className="leading-relaxed">{ref}</span>
            </li>
          ))}
        </ol>

        <div className="mt-16 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="font-display text-lg text-gold-light">
                Báo Cáo Nghiên Cứu Khoa Học
              </p>
              <p className="font-sans text-sm text-primary-foreground/60 mt-1">
                Sự vận động và phát triển của tư tưởng nhân nghĩa trong thơ văn Nguyễn Trãi
              </p>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-sans text-sm text-gold-light hover:text-gold transition-colors flex items-center gap-2 group"
            >
              Về đầu trang
              <svg
                className="w-4 h-4 group-hover:-translate-y-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
