import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-full lg:col-span-1">
            <div className="flex items-center gap-1 mb-6">
              <span className="font-display font-bold text-2xl tracking-tight text-brand">
                Dr.Sanfer
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-8">
              Dr Sanfer là thương hiệu dược phẩm tiên phong trong giải pháp chăm sóc sức khỏe chủ động, đồng hành cùng sự phát triển của hệ thống nhà thuốc Việt.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Liên kết</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-brand">Trang chủ</a></li>
              <li><a href="#about" className="hover:text-brand">Sản phẩm</a></li>
              <li><a href="#benefits" className="hover:text-brand">Chính sách B2B</a></li>
              <li><a href="#" className="hover:text-brand">Về Dr Sanfer</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Chủ đề</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-brand">Dinh dưỡng gia đình</a></li>
              <li><a href="#" className="hover:text-brand">Cẩm nang dược sĩ</a></li>
              <li><a href="#" className="hover:text-brand">Kiến thức bốc thuốc</a></li>
              <li><a href="#" className="hover:text-brand">Tin tức ngành dược</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Liên hệ</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand shrink-0" />
                <span>17 Bis Bùi Thị Xuân, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand shrink-0" />
                <span>Hotline: 093 822 95 99</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand shrink-0" />
                <span>cs@drsanfer.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-medium uppercase tracking-widest">
          <p>© 2024 DR SANFER PHARMA. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Chính sách bảo mật</a>
            <a href="#" className="hover:text-white">Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
