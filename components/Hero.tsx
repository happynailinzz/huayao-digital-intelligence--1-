
import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-[520px] sm:min-h-[600px] lg:h-screen flex items-center justify-center overflow-hidden bg-slate-900 py-20 sm:py-0">
            {/* Full Width Background Image */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="/images/hero-strategy.jpg" 
                    alt="Digital Network Background" 
                    className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite]"
                    style={{ animationDirection: 'alternate' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40 sm:from-black/50 sm:via-black/35 sm:to-black/20"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-16">
                <div className="max-w-3xl animate-fade-in-up">
                    
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/30 border border-white/20 text-white text-xs font-semibold mb-8 backdrop-blur-md shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
                        2025 战略落户郑州 · 中原数字经济关键赋能者
                    </div>

                    {/* Headline - Added text-shadow for better readability without overlay */}
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 sm:mb-8 leading-tight drop-shadow-lg">
                        政企数字化转型与<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-400 filter drop-shadow-md">智能升级的领先服务商</span>
                    </h1>

                    {/* Description - Added text-shadow */}
                    <p className="mt-4 text-base sm:text-lg md:text-xl text-white mb-8 sm:mb-10 max-w-2xl leading-relaxed font-light drop-shadow-md">
                        聚焦<span className="text-white font-bold">“东数西算”</span>与<span className="text-white font-bold">“信创国产化”</span>战略，凭借华为等头部企业基因，打造咨询、集成、销售、投融资“四位一体”服务能力，构建可信赖的数字底座。
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                        <button 
                            onClick={() => scrollToSection('contact')}
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-red hover:bg-red-600 text-white font-bold text-lg shadow-xl shadow-red-900/40 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group border border-transparent"
                        >
                            开启合作 
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button 
                            onClick={() => scrollToSection('domains')}
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-lg border border-white/30 backdrop-blur-md transition-all flex items-center justify-center gap-2 group shadow-lg"
                        >
                            核心业务
                            <ChevronRight className="w-5 h-5 text-slate-200 group-hover:text-white transition-colors" />
                        </button>
                    </div>

                    {/* Stats / Trust Indicators - Enhanced visibility */}
                    <div className="mt-16 pt-8 border-t border-white/20 grid grid-cols-3 gap-8 md:gap-12 max-w-lg bg-black/10 rounded-xl p-4 backdrop-blur-sm">
                        <div>
                            <div className="text-3xl font-bold text-white drop-shadow-md">3<span className="text-brand-red text-xl">+</span></div>
                            <div className="text-xs text-white/90 mt-1 font-medium">省份核心深耕</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white drop-shadow-md">Top</div>
                            <div className="text-xs text-white/90 mt-1 font-medium">头部科技基因</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white drop-shadow-md">100<span className="text-brand-red text-xl">%</span></div>
                            <div className="text-xs text-white/90 mt-1 font-medium">信创国产适配</div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};
