import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Users } from "lucide-react";

interface TeamMember {
  name: string;
  task: string;
}

interface TeamSection {
  title: string;
  members: TeamMember[];
}

const teamData: TeamSection[] = [
  {
    title: "Phần 1: Mở đầu và Tiểu sử",
    members: [
      { name: "Đinh Thị Ánh Tuyết", task: "Viết Mở đầu (lí do chọn đề tài, vị trí Nguyễn Trãi)" },
      { name: "Nguyễn Văn Nam", task: "Viết Tiểu sử (năm sinh – gia đình – Lam Sơn – Lệ Chi Viên – minh oan)" },
    ],
  },
  {
    title: "Phần 2: Yêu nước và Chống xâm lăng",
    members: [
      { name: "Trần Thị Ni Na", task: "Phân tích khái niệm 'Nhân nghĩa, yêu nước, trừ bạo'" },
      { name: "Lương Văn Ngọc", task: "Sưu tầm dẫn chứng Bình Ngô đại cáo (phiên âm + dịch)" },
    ],
  },
  {
    title: "Phần 3: Thân dân, Lấy dân làm gốc",
    members: [
      { name: "Phạm Thị Tươi", task: "Phân tích tư tưởng trọng dân, thương dân" },
      { name: "Đinh Ngọc Như Ý", task: "Tìm thơ/dẫn chứng về dân (Quốc âm thi tập, Quan hải)" },
    ],
  },
  {
    title: "Phần 4: Hòa bình và Khoan dung",
    members: [
      { name: "Lê Thị Thảo Ly", task: "Phân tích chính sách khoan dung với giặc Minh" },
      { name: "Lê Thị Duyên", task: "Tìm dẫn chứng trong Bình Ngô đại cáo, Quân trung từ mệnh tập" },
    ],
  },
  {
    title: "Phần 5: Tổng kết và Bài học",
    members: [
      { name: "Lê Xuân Đạt", task: "Viết Nghệ thuật" },
      { name: "Võ Văn Lê Dũng", task: "Bài học cho thế hệ trẻ" },
      { name: "Hoàng Văn Vũ", task: "Viết kết luận" },
    ],
  },
];

const TeamMembersDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-burgundy text-ivory rounded-full shadow-lg hover:bg-burgundy/90 transition-all duration-300 hover:scale-105 group"
          aria-label="Xem thành viên nhóm"
        >
          <Users className="w-5 h-5" />
          <span className="font-serif text-sm">Thành viên nhóm</span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-ivory dark:bg-ink border-burgundy/20">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-burgundy text-center mb-4">
            Phân Công Thành Viên Nhóm
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {teamData.map((section, sectionIndex) => (
            <div key={sectionIndex} className="border-l-4 border-burgundy/30 pl-4">
              <h3 className="font-display text-lg text-burgundy mb-3">
                {section.title}
              </h3>
              <div className="space-y-3">
                {section.members.map((member, memberIndex) => (
                  <div
                    key={memberIndex}
                    className="bg-parchment/50 dark:bg-ink/50 rounded-lg p-3 border border-burgundy/10"
                  >
                    <p className="font-serif font-semibold text-ink dark:text-ivory">
                      {member.name}
                    </p>
                    <p className="font-serif text-sm text-ink/70 dark:text-ivory/70 mt-1">
                      {member.task}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-burgundy/20 text-center">
          <p className="font-serif text-sm text-ink/60 dark:text-ivory/60">
            Tổng cộng: <span className="font-semibold text-burgundy">11 thành viên</span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TeamMembersDialog;
