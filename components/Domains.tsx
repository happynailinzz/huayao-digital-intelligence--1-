
import React from 'react';
import { MonitorSmartphone, Server, BrainCircuit, ShieldCheck, Tag, Zap, ArrowRight } from 'lucide-react';
import { DomainItem } from '../types';

// Extended interface locally since images are specific to this visual representation
interface DomainWithImage extends DomainItem {
    imageUrl: string;
}

const DOMAINS: DomainWithImage[] = [
    {
        id: '1',
        title: '智能化与数字化转型',
        description: '为政企提供顶层设计与落地实施，推动业务流程重塑与管理升级，实现降本增效。',
        icon: MonitorSmartphone,
        imageUrl: '/images/domain-digital-foundation.jpg'
    },
    {
        id: '2',
        title: '算力与数据中心',
        description: '响应“东数西算”战略，建设绿色、高效的数据中心基础设施，提供强大的算力底座。',
        icon: Server,
        // Updated image as requested, optimized width for performance
        imageUrl: '/images/domain-industrial-automation.jpg'
    },
    {
        id: '3',
        title: '人工智能',
        description: '结合科大讯飞等 AI 核心技术，在智慧城市、智能制造等场景落地 AI 应用。',
        icon: BrainCircuit,
        imageUrl: '/images/domain-energy-storage.jpg'
    },
    {
        id: '4',
        title: '信创国产化',
        description: '基于华为鲲鹏/昇腾生态，提供从硬件到软件的全栈国产化替代方案，保障信息安全。',
        icon: ShieldCheck,
        imageUrl: '/images/domain-smart-city.jpg'
    },
    {
        id: '5',
        title: '数据标注',
        description: '提供高质量的数据清洗与标注服务，为 AI 模型训练提供精准的燃料。',
        icon: Tag,
        imageUrl: '/images/shared-data-governance.jpg'
    },
    {
        id: '6',
        title: '源网荷储（信息化）',
        description: '聚焦能源行业，通过信息化手段实现电源、电网、负荷、储能的协同互动。',
        icon: Zap,
        imageUrl: '/images/shared-power-grid.jpg'
    },
];

export const Domains: React.FC = () => {
    return (
        <section id="domains" className="py-8 sm:py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-brand-red font-bold tracking-[0.4em] uppercase text-xs sm:text-sm mb-2 sm:mb-3">核心产业</h2>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand-dark">六大产业领域深耕</h3>
                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm lg:text-base text-brand-base max-w-2xl mx-auto">依托头部科技企业技术底座，提供全场景解决方案。</p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                    {DOMAINS.map((domain) => {
                        const Icon = domain.icon;
                        return (
                            <div 
                                key={domain.id}
                                className="group relative h-48 sm:h-56 lg:h-80 rounded-xl lg:rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <img 
                                        src={domain.imageUrl} 
                                        alt={domain.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/30 opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>
                                </div>

                                {/* Content */}
                                <div className="absolute inset-0 p-3 sm:p-6 lg:p-8 flex flex-col justify-end z-10">
                                    {/* Icon Badge */}
                                    <div className="absolute top-3 right-3 sm:top-8 sm:right-8 w-8 h-8 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-colors duration-300">
                                        <Icon className="w-4 h-4 sm:w-7 sm:h-7 text-white" />
                                    </div>

                                    {/* Text Info */}
                                    <div className="transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                                        <h4 className="text-xs sm:text-base lg:text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2 lg:mb-3 group-hover:text-white transition-colors leading-tight">
                                            {domain.title}
                                        </h4>
                                        <p className="text-slate-200 text-[10px] sm:text-xs lg:text-sm leading-relaxed opacity-90 line-clamp-2 lg:line-clamp-3 group-hover:line-clamp-none group-hover:opacity-100 mb-2 sm:mb-3 lg:mb-4 transition-all">
                                            {domain.description}
                                        </p>
                                        
                                        {/* Interactive Link */}
                                        <div className="flex items-center text-brand-red font-bold text-[10px] sm:text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                            了解更多 <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Bottom Line Decor */}
                                <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-brand-red group-hover:w-full transition-all duration-700 ease-out"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
