import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-pink-50 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-rose-50 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-50 text-brand rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
              Đối tác tin cậy cho nhà thuốc
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
              Advancing Care <br />
              Through <span className="text-brand">Science</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Enabling meaningful health improvements through informed, science-backed choices. Dr Sanfer kết hợp khoa học tiên tiến với giải pháp chăm sóc thực tế cho nhịp sống hiện đại.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#contact" className="px-8 py-4 bg-brand text-white rounded-full font-semibold shadow-lg shadow-pink-200 hover:shadow-xl hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2">
                Hợp tác ngay <ArrowRight size={20} />
              </a>
              <a href="#about" className="px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-all flex items-center justify-center">
                Tìm hiểu sản phẩm
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {[
                "100% Chính hãng",
                "Chiết khấu cao",
                "Hỗ trợ đào tạo"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <CheckCircle2 size={18} className="text-brand-secondary" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-pink-100 to-rose-50 rounded-2xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=1000&auto=format&fit=crop" 
                alt="Pharmacy interior" 
                className="w-full h-full object-cover mix-blend-overlay opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="bg-white/90 backdrop-blur p-6 rounded-xl shadow-xl max-w-xs transform hover:scale-105 transition-transform">
                  <p className="text-brand font-bold text-3xl mb-1">2000+</p>
                  <p className="text-gray-500 text-sm font-medium">Nhà thuốc đang đồng hành cùng Dr Sanfer trên toàn quốc</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -bottom-6 -right-6 md:-right-12 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce-slow">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900 leading-none">Chất lượng</p>
                <p className="text-xs text-gray-500">Đạt chuẩn GMP</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
