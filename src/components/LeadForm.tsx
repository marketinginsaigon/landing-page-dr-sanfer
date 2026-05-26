import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle } from "lucide-react";
import type { LeadData } from "../types";

export default function LeadForm() {
  const [formData, setFormData] = useState<LeadData>({
    fullName: "",
    pharmacyName: "",
    phoneNumber: "",
    address: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          fullName: "",
          pharmacyName: "",
          phoneNumber: "",
          address: "",
          email: "",
          message: ""
        });
      }
    } catch (error) {
      console.error("Error submitting lead:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="md:w-5/12 bg-brand p-10 lg:p-14 text-white flex flex-col justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold mb-6">Trở thành đối tác chiến lược</h2>
              <p className="text-pink-100 mb-10 leading-relaxed">
                Để lại thông tin, đội ngũ chuyên viên của Dr Sanfer sẽ liên hệ tư vấn lộ trình hợp tác tối ưu cho nhà thuốc của bạn trong vòng 24h.
              </p>
              
              <ul className="space-y-6">
                {[
                  "Tư vấn danh mục sản phẩm hot",
                  "Chính sách chiết khấu & thưởng",
                  "Hỗ trợ trưng bày & POSM",
                  "Đào tạo kiến thức chuyên sâu"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-pink-200 mt-1 shrink-0" size={20} />
                    <span className="text-sm font-medium text-pink-50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 pt-12 border-t border-pink-400/30">
              <p className="text-xs uppercase tracking-widest text-pink-200 mb-2 font-semibold">Hotline hỗ trợ 24/7</p>
              <p className="text-2xl font-bold">1900 6789</p>
            </div>
          </div>

          <div className="md:w-7/12 p-10 lg:p-14">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                  <CheckCircle size={40} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Gửi thông tin thành công!</h3>
                  <p className="text-gray-600">Cảm ơn bạn đã quan tâm. Dr Sanfer sẽ liên hệ với bạn sớm nhất có thể.</p>
                </div>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2 text-brand font-semibold hover:underline"
                >
                  Gửi yêu cầu khác
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Họ và tên *</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Nguyễn Văn A"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Tên Nhà thuốc *</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Nhà thuốc An Tâm"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all"
                      value={formData.pharmacyName}
                      onChange={(e) => setFormData({...formData, pharmacyName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                   <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Số điện thoại *</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="09xx xxx xxx"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Địa chỉ (Tỉnh/Thành phố) *</label>
                    <input 
                      required
                      type="text" 
                      placeholder="TP. Hồ Chí Minh"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Email (Không bắt buộc)</label>
                  <input 
                    type="email" 
                    placeholder="example@gmail.com"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Ghi chú</label>
                  <textarea 
                    rows={3}
                    placeholder="Tôi muốn tìm hiểu về chính sách..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button 
                  disabled={isSubmitting}
                  type="submit" 
                  className="w-full py-4 bg-brand text-white rounded-lg font-bold shadow-lg shadow-pink-100 hover:bg-pink-700 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? "Đang xử lý..." : "Đăng ký nhận báo giá ngay"} <Send size={18} />
                </button>
                <p className="text-[10px] text-gray-400 text-center mt-4 uppercase font-medium tracking-tight">
                  Dr Sanfer cam kết bảo mật thông tin đối tác tuyệt đối
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
