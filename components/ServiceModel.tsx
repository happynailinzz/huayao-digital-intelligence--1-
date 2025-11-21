
import React from 'react';
import { FileText, Settings, ShoppingBag, Coins } from 'lucide-react';

const SERVICES = [
    { 
        id: '01', 
        title: '咨询规划', 
        desc: '基于行业洞察，提供数字化转型的顶层设计与战略咨询。',
        icon: FileText
    },
    { 
        id: '02', 
        title: '系统集成', 
        desc: '整合软硬件资源，交付高可用、高性能的数字化系统。',
        icon: Settings
    },
    { 
        id: '03', 
        title: '产品销售', 
        desc: '代理华为、超聚变等头部厂商的核心产品，渠道优势显著。',
        icon: ShoppingBag
    },
    { 
        id: '04', 
        title: '项目投融资', 
        desc: '解决政企项目资金难题，提供灵活的投融资解决方案。',
        icon: Coins
    }
];

export const ServiceModel: React.FC = () => {
    return (
        <section id="model" className="py-8 sm:py-16 lg:py-20 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section - Centered */}
                <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-brand-red font-bold tracking-[0.4em] uppercase text-xs sm:text-sm mb-2">服务能力</h2>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand-dark mb-3 sm:mb-4 lg:mb-6">四位一体 · 端到端服务能力</h3>
                    <p className="text-xs sm:text-sm lg:text-base text-brand-base leading-relaxed">
                        相比传统 IT 集成商，华曜数智具备完整的产业链整合能力，提供从顶层规划到资金支持的全链路服务，一站式解决客户痛点。
                    </p>
                </div>
                
                {/* 4-Column Grid Layout */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                    {SERVICES.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div key={item.id} className="group bg-slate-50 rounded-lg sm:rounded-xl p-3 sm:p-6 lg:p-8 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-brand-red/20 transition-all duration-300 relative overflow-hidden">
                                {/* Number Background Watermark */}
                                <div className="absolute top-1 right-2 sm:top-2 sm:right-4 text-3xl sm:text-4xl lg:text-6xl font-bold text-slate-200/50 group-hover:text-brand-red/5 transition-colors select-none">
                                    {item.id}
                                </div>

                                {/* Icon */}
                                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-md sm:rounded-lg bg-white shadow-sm flex items-center justify-center text-brand-dark mb-2 sm:mb-4 lg:mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors relative z-10">
                                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h4 className="text-xs sm:text-sm lg:text-lg xl:text-xl font-bold text-brand-dark mb-1 sm:mb-2 lg:mb-3 group-hover:text-brand-red transition-colors leading-tight">
                                        {item.title}
                                    </h4>
                                    <p className="text-[10px] sm:text-xs lg:text-sm text-brand-base leading-relaxed line-clamp-3 sm:line-clamp-none">
                                        {item.desc}
                                    </p>
                                </div>
                                
                                {/* Bottom Line Decor */}
                                <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-red group-hover:w-full transition-all duration-500"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
