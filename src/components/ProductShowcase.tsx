import { motion } from "motion/react";

export default function ProductShowcase() {
  const products = [
    {
      name: "Sanfer Intimate Care Lactobacillus",
      tag: "Made in Japan",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop",
      desc: "Chứa lợi khuẩn Lactobacillus từ gạo lên men, giúp duy trì cân bằng hệ vi sinh vùng kín và độ pH lý tưởng."
    },
    {
      name: "Sanfer Intimate Care Antibacterial",
      tag: "Made in Japan",
      image: "https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?q=80&w=800&auto=format&fit=crop",
      desc: "Bộ đôi Prebiotic và chiết xuất hạt bưởi giúp kháng khuẩn, giảm mùi, bảo vệ vùng da nhạy cảm."
    },
    {
      name: "FFC Glyneru Night Collagen",
      tag: "Functional Food",
      image: "https://images.unsplash.com/photo-1611073107050-717017686dec?q=80&w=800&auto=format&fit=crop",
      desc: "Collagen uống ban đêm kết hợp Glycine & GABA giúp thư giãn, cải thiện giấc ngủ và làm đẹp da."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">Danh mục sản phẩm chiến lược</h2>
            <p className="text-gray-500 max-w-xl">Hệ sinh thái sản phẩm được chọn lọc kỹ lưỡng, phù hợp với hành vi tiêu dùng của khách hàng tại nhà thuốc.</p>
          </div>
          <button className="text-brand font-bold flex items-center gap-2 hover:underline">
            Xem toàn bộ Catalogue 
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg group"
            >
              <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider rounded-lg text-brand shadow-sm">
                    {product.tag}
                  </span>
                </div>
              </div>
              <div className="p-8 text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-6">{product.desc}</p>
                <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Sẵn hàng</span>
                  <button className="text-sm font-bold text-gray-400 group-hover:text-brand transition-colors">Chi tiết</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
