import React from 'react';
import { Landmark, Users, MapPin, Award, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
    return (
        <section id="about" className="py-8 sm:py-12 lg:py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-lg border border-slate-100">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
                        <div>
                            <h2 className="text-2xl font-bold text-brand-dark mb-4">专业团队，立足中原</h2>
                            <p className="text-sm sm:text-base text-brand-base leading-relaxed mb-4 sm:mb-6">
                                河南寰耀数字技术有限公司核心团队主要来自<span className="font-bold text-brand-dark">华为、海康威视、H3C</span>等头部科技企业，具备丰富的省市级重点项目实施与统筹经验。
                            </p>
                            <p className="text-sm sm:text-base text-brand-base leading-relaxed mb-4 sm:mb-6">
                                公司于 2025 年战略落户<span className="font-bold text-brand-dark">郑州</span>，围绕区域数字经济发展与重点行业升级需求，持续服务政府、能源、制造等关键领域客户，在山东、湖北、河南等地积累了扎实的项目经验与行业认知。
                            </p>
                            <a href="#contact" className="text-brand-red font-semibold hover:underline inline-flex items-center group">
                                了解企业能力与合作方向 <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            {[
                                { icon: Landmark, title: '政企服务', sub: '聚焦 G 端与 B 端场景' },
                                { icon: Users, title: '专业团队', sub: '头部科技企业经验' },
                                { icon: MapPin, title: '立足郑州', sub: '服务中原与周边区域' },
                                { icon: Award, title: '综合能力', sub: '覆盖规划到落地全链路' }
                            ].map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col justify-center items-center text-center hover:shadow-md transition-shadow">
                                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-brand-base mb-2" />
                                        <div className="font-bold text-brand-dark text-sm sm:text-base">{item.title}</div>
                                        <div className="text-[11px] sm:text-xs text-brand-light mt-1">{item.sub}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
