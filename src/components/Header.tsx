import { motion } from "motion/react";
import { Menu, X, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="font-display font-bold text-2xl tracking-tight text-brand">
            Dr.Sanfer
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#about" className="hover:text-brand transition-colors">About Us</a>
          <a href="#products" className="hover:text-brand transition-colors">Products</a>
          <a href="#benefits" className="hover:text-brand transition-colors">The Sanfer</a>
          <a href="#contact" className="px-5 py-2.5 bg-brand text-white rounded-full hover:bg-pink-700 transition-all flex items-center gap-2">
            Contact Us <ChevronRight size={16} />
          </a>
        </nav>

        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 p-4"
        >
          <div className="flex flex-col gap-4 text-gray-600">
            <a href="#about" onClick={() => setIsMenuOpen(false)}>Sản phẩm</a>
            <a href="#benefits" onClick={() => setIsMenuOpen(false)}>Lợi ích nhà thuốc</a>
            <a href="#process" onClick={() => setIsMenuOpen(false)}>Quy trình</a>
            <a 
              href="#contact" 
              className="w-full py-3 bg-brand text-white rounded-lg text-center font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Đăng ký B2B
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
