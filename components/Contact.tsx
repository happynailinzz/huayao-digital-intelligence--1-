
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Check } from 'lucide-react';

export const Contact: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            
            // Reset after showing success message
            setTimeout(() => {
                setIsSuccess(false);
                (e.target as HTMLFormElement).reset();
            }, 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-8 sm:py-12 lg:py-20 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-slate-900 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 shadow-2xl relative overflow-hidden">
                    {/* Decor */}
                    <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-brand-red/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    
                    <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                        <div className="flex flex-col justify-center h-full order-2 lg:order-1">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-5 lg:mb-6 leading-tight">共建数字未来</h2>
                            <p className="text-slate-400 mb-6 sm:mb-8 lg:mb-10 text-base sm:text-lg lg:text-xl leading-relaxed">无论您是政府机构还是企业客户，我们都期待为您提供量身定制的数字化解决方案，助力您的业务实现智能升级。</p>
                            
                            <div className="space-y-4 sm:space-y-5 lg:space-y-6 text-slate-300">
                                <div className="flex items-center gap-4 sm:gap-5 group cursor-pointer hover:text-white transition-colors duration-300">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300 flex-shrink-0">
                                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-base sm:text-lg font-medium">中国 · 郑州（总部）</p>
                                        <p className="text-xs sm:text-sm text-slate-500">面对面深度交流</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 sm:gap-5 group cursor-pointer hover:text-white transition-colors duration-300">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300 flex-shrink-0">
                                        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-base sm:text-lg font-medium">185-66666-774</p>
                                        <p className="text-xs sm:text-sm text-slate-500">工作日 9:00-18:00</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 sm:gap-5 group cursor-pointer hover:text-white transition-colors duration-300">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300 flex-shrink-0">
                                        <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-base sm:text-lg font-medium">183296@qq.com</p>
                                        <p className="text-xs sm:text-sm text-slate-500">24小时内回复</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative bg-white/5 p-5 sm:p-6 md:p-7 lg:p-8 rounded-xl border border-white/10 backdrop-blur-sm order-1 lg:order-2">
                             {isSuccess ? (
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center h-full animate-fade-in-up z-20 bg-slate-900/95 rounded-xl">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                                        <Check className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">提交成功</h3>
                                    <p className="text-slate-400 text-sm sm:text-base px-4">我们的专家顾问将尽快与您联系。</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className={`space-y-4 sm:space-y-5 lg:space-y-6 transition-opacity duration-300 ${isSubmitting ? 'opacity-50 pointer-events-none' : ''}`}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                                        <div>
                                            <label className="block text-sm text-slate-400 mb-2 sm:mb-3">姓名</label>
                                            <input type="text" required className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 sm:py-4 text-white placeholder-slate-600 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-all text-base sm:text-lg" placeholder="请输入您的姓名" />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-slate-400 mb-2 sm:mb-3">电话</label>
                                            <input type="tel" required className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 sm:py-4 text-white placeholder-slate-600 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-all text-base sm:text-lg" placeholder="请输入联系电话" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm text-slate-400 mb-2 sm:mb-3">单位名称</label>
                                        <input type="text" required className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 sm:py-4 text-white placeholder-slate-600 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-all text-base sm:text-lg" placeholder="公司或机构全称" />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-slate-400 mb-2 sm:mb-3">需求类型</label>
                                        <select className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 sm:py-4 text-slate-300 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-all appearance-none text-base sm:text-lg">
                                            <option value="" disabled defaultValue="">请选择感兴趣的领域</option>
                                            <option value="digital">数字化转型</option>
                                            <option value="computing">算力与数据中心</option>
                                            <option value="ai">人工智能</option>
                                            <option value="xinchuang">信创国产化</option>
                                            <option value="energy">源网荷储</option>
                                            <option value="other">其他咨询</option>
                                        </select>
                                    </div>
                                    <button type="submit" disabled={isSubmitting} className="w-full bg-brand-red hover:bg-red-600 active:bg-red-700 text-white font-bold py-3 sm:py-4 lg:py-5 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2 mt-4 sm:mt-6 disabled:bg-slate-700 group text-base sm:text-lg touch-manipulation">
                                        {isSubmitting ? (
                                            <span>提交中...</span>
                                        ) : (
                                            <>
                                                <span>提交需求</span>
                                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
