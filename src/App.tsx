import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import ProductShowcase from "./components/ProductShowcase.tsx";
import Benefits from "./components/Benefits.tsx";
import LeadForm from "./components/LeadForm.tsx";
import Footer from "./components/Footer.tsx";
import { motion } from "motion/react";
import { ClipboardList, PackageCheck, Truck, Sparkles, CheckCircle } from "lucide-react";

export default function App() {
  const steps = [
    {
      icon: <ClipboardList size={28} />,
      title: "Đăng ký thông tin",
      desc: "Để lại thông tin liên hệ và tên nhà thuốc của bạn tại form bên dưới."
    },
    {
      icon: <PackageCheck size={28} />,
      title: "Tư vấn & Lên đơn",
      desc: "Chuyên viên sẽ liên hệ tư vấn danh mục hàng hot và chính sách ưu đãi."
    },
    {
      icon: <Truck size={28} />,
      title: "Giao hàng & Setup",
      desc: "Giao hàng nhanh chóng và hỗ trợ trưng bày, POSM tại điểm bán."
    },
    {
      icon: <Sparkles size={28} />,
      title: "Hỗ trợ Marketing",
      desc: "Triển khai các chương trình thu hút khách hàng và đào tạo dược sĩ."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero />
        
        <ProductShowcase />

        {/* Mission & Values Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl font-bold mb-8 text-gray-900 border-l-4 border-brand pl-6">Sứ mệnh & Tầm nhìn</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-brand mb-3">Sứ mệnh</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Cung cấp các sản phẩm chăm sóc sức khỏe dễ tiếp cận, đáng tin cậy và khác biệt, nhằm thúc đẩy thói quen tự chăm sóc sức khỏe chủ động. Đề cao các yếu tố an toàn, hiệu quả và tiện lợi.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand mb-3">Tầm nhìn</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Trở thành đơn vị tin cậy cung cấp giải pháp chăm sóc sức khỏe tiêu dùng hàng đầu tại Việt Nam, không ngừng mở rộng danh mục để đáp ứng nhu cầu mọi độ tuổi.
                    </p>
                  </div>
                </div>
              </motion.div>
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-217359992300?q=80&w=1000&auto=format&fit=crop" 
                  alt="Medical Professional" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold text-gray-900">Giá trị cốt lõi</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { 
                  title: "Đổi mới dựa trên khoa học", 
                  desc: "Mỗi sản phẩm đều được nghiên cứu nghiêm ngặt dựa trên nền tảng khoa học tiên tiến, bảo đảm hiệu quả và độ tin cậy cao." 
                },
                { 
                  title: "Lấy khách hàng làm trung tâm", 
                  desc: "Thấu hiểu sâu sắc nhu cầu sức khỏe khách hàng là nền tảng định hướng phát triển sản phẩm, tập trung vào sự thoải mái." 
                },
                { 
                  title: "Đồng hành bền vững", 
                  desc: "Định vị là người đồng hành đáng tin cậy lâu dài trong hành trình cải thiện sức khỏe bền vững của người tiêu dùng." 
                }
              ].map((val, i) => (
                <div key={i} className="text-center group">
                  <div className="w-16 h-16 bg-pink-50 text-brand rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand group-hover:text-white transition-all transform group-hover:rotate-6">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="text-lg font-bold mb-3">{val.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <Benefits />

        {/* Process Section */}
        <section id="process" className="py-24 bg-brand text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-white rounded-full" />
            <div className="absolute top-1/2 right-1/4 w-64 h-64 border border-white rounded-full" />
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Quy trình hợp tác 4 bước</h2>
              <p className="text-pink-100 opacity-80 max-w-xl mx-auto">Chuyên nghiệp - Nhanh chóng - Đơn giản để bắt đầu hành trình tăng trưởng.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
              {/* Connector line for desktop */}
              <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[1px] bg-white/20 -z-0" />
              
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center relative z-10"
                >
                  <div className="w-20 h-20 bg-white text-brand rounded-full flex items-center justify-center shadow-xl mb-6 transform hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-pink-100 text-sm opacity-80 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <LeadForm />
      </main>

      <Footer />
    </div>
  );
}
