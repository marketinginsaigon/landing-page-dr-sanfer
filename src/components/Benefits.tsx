import { motion } from "motion/react";
import { Pill, ShieldCheck, Zap, BarChart3, Users, Headphones } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Chất lượng khẳng định",
      desc: "Sản phẩm được nghiên cứu bài bản, đạt chuẩn GMP và đầy đủ giấy phép lưu hành từ Bộ Y Tế."
    },
    {
      icon: <Zap size={32} />,
      title: "Chính sách linh hoạt",
      desc: "Chiết khấu hấp dẫn, thưởng doanh số tháng/quý và các chương trình ưu đãi độc quyền cho đối tác."
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Hỗ trợ Marketing",
      desc: "Cung cấp POSM, tờ rơi, banner và hỗ trợ chạy quảng cáo tại điểm bán cho nhà thuốc."
    },
    {
      icon: <Users size={32} />,
      title: "Đào tạo chuyên sâu",
      desc: "Tổ chức các buổi training về sản phẩm và kỹ năng tư vấn bốc thuốc hiệu quả cho dược sĩ."
    },
    {
      icon: <Headphones size={32} />,
      title: "Chăm sóc tận tâm",
      desc: "Đội ngũ chuyên viên trình dược viên hỗ trợ 24/7, xử lý mọi phát sinh nhanh chóng."
    },
    {
      icon: <Pill size={32} />,
      title: "Danh mục đa dạng",
      desc: "Hệ sinh thái sản phẩm Dr Sanfer bao quát mọi nhu cầu chăm sóc sức khỏe chủ động."
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Tại sao hàng ngàn nhà thuốc <br /> tin chọn <span className="text-brand">Dr Sanfer?</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16">
          Chúng tôi không chỉ cung cấp sản phẩm, chúng tôi cung cấp giải pháp tăng trưởng bền vững cho nhà thuốc của bạn.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 bg-gray-50 rounded-2xl text-left border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-xl transition-all"
            >
              <div className="text-brand mb-6 p-3 bg-white w-fit rounded-xl shadow-sm">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
