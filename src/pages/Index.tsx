import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import HeroSection from '@/components/presentation/HeroSection';
import TableOfContents from '@/components/presentation/TableOfContents';
import ContentSection from '@/components/presentation/ContentSection';
import QuoteCard from '@/components/presentation/QuoteCard';
import KeyPointCard from '@/components/presentation/KeyPointCard';
import Footer from '@/components/presentation/Footer';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Refresh ScrollTrigger after all content is loaded
    ScrollTrigger.refresh();
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className="min-h-screen bg-ivory">
      {/* Hero */}
      <HeroSection />

      {/* Table of Contents */}
      <TableOfContents />

      {/* Section 1: Mở Đầu */}
      <ContentSection
        id="mo-dau"
        number="01"
        title="Phần Mở Đầu"
        subtitle="Lý do chọn đề tài"
      >
        <p>
          Lịch sử dân tộc Việt Nam là lịch sử của những cuộc đấu tranh dựng nước và giữ nước vĩ đại. 
          Trong dòng chảy hào hùng ấy, thế kỷ XV nổi lên như một mốc son chói lọi với chiến thắng 
          Chi Lăng – Xương Giang, chấm dứt 20 năm đô hộ tàn bạo của giặc Minh.
        </p>
        
        <p>
          <strong>Nguyễn Trãi (1380 – 1442)</strong> không chỉ để lại cho hậu thế một sự nghiệp cứu nước 
          lẫy lừng mà còn di tặng một kho tàng văn chương đồ sộ. Xuyên suốt các tác phẩm của ông, 
          từ những áng văn chính luận đanh thép như <em>Bình Ngô đại cáo</em>, <em>Quân trung từ mệnh tập</em> 
          đến những vần thơ trữ tình sâu lắng trong <em>Ức Trai thi tập</em>, <em>Quốc âm thi tập</em>, 
          tư tưởng chủ đạo bao trùm tất cả là: <strong>Tư tưởng Nhân nghĩa</strong>.
        </p>

        <QuoteCard
          quote="Nghiên cứu về tư tưởng nhân nghĩa của Nguyễn Trãi không chỉ giúp ta hiểu rõ hơn về tầm vóc của một danh nhân văn hóa thế giới mà còn thấy được bản sắc văn hóa Việt Nam."
          source="Mục đích nghiên cứu"
        />

        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <KeyPointCard
            number={1}
            title="Phân tích – Tổng hợp"
            description="Nghiên cứu hệ thống quan điểm qua các tác phẩm văn học tiêu biểu"
            delay={0}
          />
          <KeyPointCard
            number={2}
            title="So sánh văn học"
            description="Đối chiếu với quan điểm Nho giáo gốc của Khổng Tử và Mạnh Tử"
            delay={1}
          />
          <KeyPointCard
            number={3}
            title="Trích dẫn – Chứng minh"
            description="Phân tích qua văn bản các tác phẩm tiêu biểu"
            delay={2}
          />
        </div>
      </ContentSection>

      {/* Section 2: Cơ sở lý luận */}
      <ContentSection
        id="co-so"
        number="02"
        title="Cơ Sở Lý Luận"
        subtitle="Nho giáo nguyên thủy và bối cảnh lịch sử"
        variant="highlight"
      >
        <p>
          Trong học thuyết của <strong>Khổng Tử</strong> và <strong>Mạnh Tử</strong>, 
          "Nhân" (仁) là lòng thương người, là quy phạm đạo đức cao nhất của người quân tử; 
          "Nghĩa" (義) là những điều phải làm cho hợp đạo lý, khuôn phép.
        </p>

        <p>
          Tuy nhiên, trong xã hội phong kiến Trung Quốc và cả Việt Nam trước đó, "Nhân nghĩa" 
          thường bị giới hạn trong phạm vi tu dưỡng cá nhân ("Tu thân, tề gia") hoặc mối quan hệ 
          vua – tôi, cha – con mang tính đẳng cấp.
        </p>

        <QuoteCard
          quote="Đến thế kỷ XV, khi nhà Minh xâm lược Đại Việt với chiêu bài 'Phù Trần diệt Hồ', chúng đã lợi dụng khái niệm nhân nghĩa để mị dân, che đậy dã tâm cướp nước."
          source="Bối cảnh lịch sử"
        />

        <p>
          Trước bối cảnh đó, Nguyễn Trãi nhận thấy cần phải có một ngọn cờ tư tưởng chính nghĩa 
          để tập hợp lòng dân, đập tan luận điệu giả trá của kẻ thù. Ông đã kế thừa hạt nhân 
          "thương người" của Nho giáo nhưng thổi vào đó một nội dung hoàn toàn mới: 
          <strong> Nhân nghĩa phải gắn liền với sự tồn vong của dân tộc và cuộc sống của nhân dân</strong>.
        </p>

        <p className="text-lg font-display text-burgundy italic">
          Đây là bước chuyển biến mang tính cách mạng trong lịch sử tư tưởng Việt Nam trung đại.
        </p>
      </ContentSection>

      {/* Section 3: Nhân nghĩa và Yêu nước */}
      <ContentSection
        id="yeu-nuoc"
        number="03"
        title="Nhân Nghĩa Gắn Liền Với Chủ Nghĩa Yêu Nước"
        subtitle="Sự chuyển biến về chất"
      >
        <p>
          Khác với những nhà nho ẩn dật chỉ lo giữ mình trong sạch, Nguyễn Trãi là một nhà hành động. 
          Với ông, nhân nghĩa không phải là lý thuyết suông trong sách vở thánh hiền, 
          mà là kim chỉ nam cho công cuộc cứu nước.
        </p>

        <QuoteCard
          quote="Việc nhân nghĩa cốt ở yên dân,
Quân điếu phạt trước lo trừ bạo."
          source="Bình Ngô Đại Cáo"
          translation="Việc nhân nghĩa cốt là để yên dân, Quân đi đánh giặc trước tiên phải lo trừ bạo"
        />

        <p>
          Nếu Nho giáo nói "Nhân giả ái nhân" (Người có lòng nhân thì yêu thương con người nói chung), 
          thì Nguyễn Trãi cụ thể hóa mục đích của nhân nghĩa là <strong>"yên dân"</strong>. 
          Muốn dân được yên ổn làm ăn sinh sống, thì điều kiện tiên quyết là đất nước phải sạch bóng quân thù.
        </p>

        <QuoteCard
          quote="Đem đại nghĩa để thắng hung tàn,
Lấy chí nhân để thay cường bạo."
          source="Bình Ngô Đại Cáo"
        />

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-cream rounded-lg p-6 border-l-4 border-burgundy">
            <h4 className="font-display text-xl text-burgundy mb-3">Phe ta</h4>
            <p className="font-body text-ink-light">
              <strong className="text-gold">Đại nghĩa, chí nhân</strong> — Tượng trưng cho chính nghĩa, 
              lòng yêu nước, bảo vệ dân.
            </p>
          </div>
          <div className="bg-cream rounded-lg p-6 border-l-4 border-ink-light">
            <h4 className="font-display text-xl text-ink mb-3">Phe địch</h4>
            <p className="font-body text-ink-light">
              <strong>Hung tàn, cường bạo</strong> — Tượng trưng cho phi nghĩa, 
              xâm lược, cướp bóc.
            </p>
          </div>
        </div>

        <QuoteCard
          quote="Nướng dân đen trên ngọn lửa hung tàn,
Vùi con đỏ xuống dưới hầm tai vạ."
          source="Bình Ngô Đại Cáo"
          translation="Tội ác của giặc Minh với nhân dân Đại Việt"
        />

        <p className="text-lg font-display text-burgundy italic mt-8">
          Đóng góp đầu tiên và quan trọng nhất của Nguyễn Trãi là đã <strong>dân tộc hóa tư tưởng nhân nghĩa</strong>, 
          biến nó thành nền tảng lý luận cho chủ quyền quốc gia.
        </p>
      </ContentSection>

      {/* Section 4: Tư tưởng thân dân */}
      <ContentSection
        id="than-dan"
        number="04"
        title="Tư Tưởng Thân Dân"
        subtitle="Lấy dân làm gốc của nhân nghĩa"
        variant="highlight"
      >
        <p>
          Nếu như gắn nhân nghĩa với yêu nước là một bước tiến, thì việc gắn nhân nghĩa với tư tưởng 
          "lấy dân làm gốc" đã đưa Nguyễn Trãi lên tầm vóc của một <strong>nhà tư tưởng vượt thời đại</strong>.
        </p>

        <p>
          Trong xã hội phong kiến, người dân thường bị coi là "thảo dân", là đối tượng để cai trị. 
          Nhưng Nguyễn Trãi, qua trải nghiệm đau thương từ sự sụp đổ của nhà Hồ, 
          đã rút ra bài học xương máu về sức mạnh của nhân dân.
        </p>

        <QuoteCard
          quote="Phúc chu thủy tín dân như thủy."
          source="Quan Hải (Đóng cửa biển)"
          translation="Lật thuyền mới biết dân như nước"
        />

        <p>
          Hình ảnh ẩn dụ <strong>"dân như nước"</strong> vừa hùng vĩ, vừa mang tính cảnh tỉnh sâu sắc. 
          Nước có thể nâng thuyền (ủng hộ triều đình, bảo vệ đất nước), 
          nhưng nước cũng có thể lật thuyền (nổi dậy lật đổ chế độ bạo tàn).
        </p>

        <QuoteCard
          quote="Ăn lộc đền ơn kẻ cấy cày."
          source="Bảo kính cảnh giới – bài 19"
        />

        <p>
          Câu thơ Nôm mộc mạc nhưng chứa đựng một nhân cách lớn. Một vị quan đầu triều, 
          một khai quốc công thần lại không tự cho mình quyền hưởng thụ mặc nhiên, 
          mà ý thức rõ ràng rằng bát cơm, manh áo mình có là nhờ ơn của "kẻ cấy cày".
        </p>

        <p className="text-lg font-display text-burgundy italic">
          Đây là tư tưởng dân chủ sơ khai, hiếm thấy trong lịch sử tư tưởng phong kiến, 
          cho thấy cái tâm "sáng tựa sao Khuê" của Ức Trai.
        </p>
      </ContentSection>

      {/* Section 5: Khát vọng hòa bình */}
      <ContentSection
        id="hoa-binh"
        number="05"
        title="Khát Vọng Hòa Bình"
        subtitle="Đỉnh cao nhân văn"
      >
        <p>
          Lí tưởng nhân nghĩa của Nguyễn Trãi không chỉ dừng lại ở biên giới quốc gia hay tình thương 
          với đồng bào mình, mà còn mở rộng ra thành <strong>chủ nghĩa nhân đạo cao cả đối với kẻ thù</strong>.
        </p>

        <p>
          Trong lịch sử chiến tranh vệ quốc, hiếm có cuộc chiến nào kết thúc một cách nhân văn 
          như cuộc khởi nghĩa Lam Sơn. Sau khi quân ta vây hãm thành Đông Quan, thay vì tiêu diệt 
          địch đến cùng để trả thù, Nguyễn Trãi chủ trương <strong>"vây thành diệt viện"</strong> và dùng 
          <strong> "tâm công"</strong> (đánh vào lòng người) để địch ra hàng.
        </p>

        <QuoteCard
          quote="Thần vũ chẳng giết hại,
Thể lòng trời ta mở đường hiếu sinh."
          source="Bình Ngô Đại Cáo"
          translation="Thuận theo đạo lý tự nhiên, tôn trọng sự sống, chừa cho kẻ thù một con đường sống"
        />

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <KeyPointCard
            number={1}
            title="Tránh hy sinh"
            description="Tránh cho quân dân ta những hy sinh xương máu không cần thiết trong những trận công thành cuối cùng"
            delay={0}
          />
          <KeyPointCard
            number={2}
            title="Kiến tạo hòa bình"
            description="Dập tắt ngọn lửa hận thù, giữ thể diện cho 'nước lớn', kiến tạo nền hòa bình lâu dài"
            delay={1}
          />
        </div>

        <QuoteCard
          quote="Dẽ có Ngu cầm đàn một tiếng,
Dân giàu đủ khắp đòi phương."
          source="Bảo kính cảnh giới – bài 43"
          translation="Ước có cây đàn vua Ngu Thuấn gảy một tiếng, cho dân được giàu đủ khắp mọi phương"
        />

        <p className="text-lg font-display text-burgundy italic">
          Tư tưởng nhân nghĩa lúc này đã đạt đến đỉnh cao của triết lý hòa bình. 
          Nguyễn Trãi hiểu rằng chiến tranh chỉ là phương tiện bất đắc dĩ, 
          <strong> hòa bình mới là mục đích tối thượng của nhân loại</strong>.
        </p>
      </ContentSection>

      {/* Section 6: Nghệ thuật thể hiện */}
      <ContentSection
        id="nghe-thuat"
        number="06"
        title="Nghệ Thuật Thể Hiện"
        subtitle="Văn chương Nguyễn Trãi"
        variant="highlight"
      >
        <p>
          Tư tưởng lớn cần một hình thức nghệ thuật tương xứng để lan tỏa. 
          Nguyễn Trãi đã sử dụng tài tình cả văn tự Hán và Nôm, cả thể văn biền ngẫu 
          và thơ đường luật để chuyển tải lí tưởng nhân nghĩa.
        </p>

        <div className="space-y-8 mt-8">
          <div className="bg-ivory rounded-lg p-6 border border-border">
            <h4 className="font-display text-xl text-burgundy mb-4">
              Văn Chính Luận
            </h4>
            <p className="font-sans text-sm text-gold tracking-wider uppercase mb-3">
              Bình Ngô đại cáo, Quân trung từ mệnh tập
            </p>
            <ul className="space-y-2 font-body text-ink-light">
              <li>• Lối văn biền ngẫu mẫu mực, lập luận chặt chẽ</li>
              <li>• Giọng điệu đanh thép, hùng hồn</li>
              <li>• Các cặp câu đối xứng tạo âm hưởng hào sảng</li>
              <li>• Kết hợp lí lẽ sắc bén và tình cảm nồng nàn</li>
            </ul>
          </div>

          <div className="bg-ivory rounded-lg p-6 border border-border">
            <h4 className="font-display text-xl text-burgundy mb-4">
              Thơ Trữ Tình
            </h4>
            <p className="font-sans text-sm text-gold tracking-wider uppercase mb-3">
              Quốc âm thi tập, Ức Trai thi tập
            </p>
            <ul className="space-y-2 font-body text-ink-light">
              <li>• Vần thơ bình dị, mộc mạc</li>
              <li>• Sử dụng từ ngữ dân gian, tục ngữ, ca dao</li>
              <li>• Triết lý sâu xa được diễn tả gần gũi</li>
              <li>• Hình ảnh thiên nhiên gắn với nỗi niềm ưu ái</li>
            </ul>
          </div>
        </div>

        <p className="text-lg font-display text-burgundy italic mt-8">
          Sự kết hợp giữa trí tuệ uyên bác của một nhà nho và tâm hồn nhạy cảm của một thi sĩ 
          đã giúp Nguyễn Trãi biến những khái niệm đạo đức trừu tượng thành những rung động thẩm mỹ 
          sâu sắc, có sức sống vượt thời gian.
        </p>
      </ContentSection>

      {/* Section 7: Kết luận */}
      <ContentSection
        id="ket-luan"
        number="07"
        title="Kết Luận"
        subtitle="Giá trị và bài học thời đại"
      >
        <p>
          Qua quá trình nghiên cứu và phân tích, có thể khẳng định: <strong>Tư tưởng nhân nghĩa 
          là sợi chỉ đỏ xuyên suốt, là linh hồn trong toàn bộ di sản thơ văn của Nguyễn Trãi</strong>.
        </p>

        <div className="grid md:grid-cols-3 gap-4 my-8">
          <KeyPointCard
            number={1}
            title="Yêu Nước"
            description="Đấu tranh chống ngoại xâm, bảo vệ chủ quyền quốc gia"
            delay={0}
          />
          <KeyPointCard
            number={2}
            title="Thương Dân"
            description="Lấy dân làm gốc, biết ơn và chăm lo cho đời sống nhân dân"
            delay={1}
          />
          <KeyPointCard
            number={3}
            title="Hòa Bình"
            description="Khoan dung, độ lượng, dập tắt chiến tranh"
            delay={2}
          />
        </div>

        <h3 className="font-display text-2xl text-burgundy mt-12 mb-6">
          Bài học lịch sử và ý nghĩa thời đại
        </h3>

        <div className="space-y-6">
          <div className="bg-cream rounded-lg p-6 border-l-4 border-gold">
            <h4 className="font-display text-lg text-ink mb-3">
              Đối với công cuộc xây dựng đất nước
            </h4>
            <p className="font-body text-ink-light">
              Bài học <strong>"Lấy dân làm gốc"</strong> (Dân vi bản) vẫn là nguyên tắc vàng 
              trong quản lý xã hội hiện đại. "Việc nhân nghĩa cốt ở yên dân" ngày nay chính là 
              mục tiêu <em>"Dân giàu, nước mạnh, dân chủ, công bằng, văn minh"</em>.
            </p>
          </div>

          <div className="bg-cream rounded-lg p-6 border-l-4 border-burgundy">
            <h4 className="font-display text-lg text-ink mb-3">
              Đối với ngoại giao
            </h4>
            <p className="font-body text-ink-light">
              Tư tưởng hòa bình, hữu nghị, "mở đường hiếu sinh" của Nguyễn Trãi là tiền đề 
              cho đường lối ngoại giao <strong>"cây tre Việt Nam"</strong> hiện nay: mềm dẻo 
              nhưng kiên quyết, làm bạn với tất cả các nước, chuộng hòa bình nhưng sẵn sàng 
              bảo vệ độc lập chủ quyền.
            </p>
          </div>
        </div>

        <QuoteCard
          quote="Di sản tư tưởng của Nguyễn Trãi không chỉ là niềm tự hào của quá khứ mà còn là hành trang quý báu cho thế hệ trẻ hôm nay trên con đường hội nhập và phát triển."
          source="Ý nghĩa thời đại"
        />

        <p className="text-center text-lg font-display text-burgundy italic mt-12">
          Nguyễn Trãi xứng đáng là <strong>nhà nhân đạo chủ nghĩa lớn nhất</strong> 
          <br />của văn học trung đại Việt Nam.
        </p>
      </ContentSection>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;
