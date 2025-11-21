
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
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    
                    <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                        <div className="flex flex-col justify-center h-full">
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">共建数字未来</h2>
                            <p className="text-slate-400 mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">无论您是政府机构还是企业客户，我们都期待为您提供量身定制的数字化解决方案，助力您的业务实现智能升级。</p>
                            
                            <div className="space-y-3 sm:space-y-4 lg:space-y-6 text-slate-300">
                                <div className="flex items-center gap-3 sm:gap-4 group">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-colors duration-300">
                                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                    </div>
                                    <span className="text-base sm:text-lg">中国 · 郑州（总部）</span>
                                </div>
                                <div className="flex items-center gap-3 sm:gap-4 group">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-colors duration-300">
                                        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                    </div>
                                    <span className="text-base sm:text-lg">185-66666-774</span>
                                </div>
                                <div className="flex items-center gap-3 sm:gap-4 group">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-colors duration-300">
                                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                    </div>
                                    <span className="text-base sm:text-lg">183296@qq.com</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative bg-white/5 p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl border border-white/10 backdrop-blur-sm">
                             {isSuccess ? (
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center h-full animate-fade-in-up z-20 bg-slate-900/95 rounded-xl">
                                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                                        <Check className="w-10 h-10 text-green-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">提交成功</h3>
                                    <p className="text-slate-400 mt-3">我们的专家顾问将尽快与您联系。</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className={`space-y-3 sm:space-y-4 lg:space-y-5 transition-opacity duration-300 ${isSubmitting ? 'opacity-50 pointer-events-none' : ''}`}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
                                        <div>
                                            <label className="block text-sm text-slate-400 mb-2">姓名</label>
                                            <input type="text" required className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-2 sm:py-3 text-white placeholder-slate-600 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-all" placeholder="您的姓名" />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-slate-400 mb-2">电话</label>
                                            <input type="text" required className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-2 sm:py-3 text-white placeholder-slate-600 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-all" placeholder="联系电话" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm text-slate-400 mb-2">单位名称</label>
                                        <input type="text" required className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-2 sm:py-3 text-white placeholder-slate-600 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-all" placeholder="公司或机构全称" />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-slate-400 mb-2">需求类型</label>
                                        <select className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-2 sm:py-3 text-slate-300 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-all appearance-none">
                                            <option value="" disabled defaultValue="">请选择感兴趣的领域</option>
                                            <option value="digital">数字化转型</option>
                                            <option value="computing">算力与数据中心</option>
                                            <option value="ai">人工智能</option>
                                            <option value="xinchuang">信创国产化</option>
                                            <option value="energy">源网荷储</option>
                                            <option value="other">其他咨询</option>
                                        </select>
                                    </div>
                                    <button type="submit" disabled={isSubmitting} className="w-full bg-brand-red hover:bg-red-600 text-white font-bold py-2 sm:py-3 lg:py-4 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2 mt-3 sm:mt-4 disabled:bg-slate-700 group">
                                        {isSubmitting ? (
                                            <span>提交中...</span>
                                        ) : (
                                            <>
                                                <span>提交需求</span>
                                                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
