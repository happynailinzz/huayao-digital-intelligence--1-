
import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Domains } from '../components/Domains';
import { ServiceModel } from '../components/ServiceModel';

export const Solutions: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageHeader 
                title="服务与解决方案" 
                subtitle="依托华为等头部企业技术底座，提供全场景数字化解决方案，助力政企智能升级。"
            />
            
            {/* Reuse Domains Component with slightly different context if needed, or just display it */}
            <Domains />
            
            {/* Reuse Service Model */}
            <ServiceModel />
            
            {/* Additional Solutions Content could go here */}
            <section className="py-20 bg-brand-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-10">为什么选择华曜数智？</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-black/30 border border-white/10 p-8 rounded-2xl shadow-2xl">
                            <div className="text-4xl font-extrabold text-white mb-2">10+</div>
                            <div className="text-sm text-white/80 tracking-wide">年行业经验</div>
                        </div>
                        <div className="bg-black/30 border border-white/10 p-8 rounded-2xl shadow-2xl">
                            <div className="text-4xl font-extrabold text-white mb-2">50+</div>
                            <div className="text-sm text-white/80 tracking-wide">大型项目案例</div>
                        </div>
                         <div className="bg-black/30 border border-white/10 p-8 rounded-2xl shadow-2xl">
                            <div className="text-4xl font-extrabold text-white mb-2">100+</div>
                            <div className="text-sm text-white/80 tracking-wide">技术专家团队</div>
                        </div>
                         <div className="bg-black/30 border border-white/10 p-8 rounded-2xl shadow-2xl">
                            <div className="text-4xl font-extrabold text-white mb-2">100%</div>
                            <div className="text-sm text-white/80 tracking-wide">自主可控方案</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
