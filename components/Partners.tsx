
import React from 'react';

type PartnerLogo = {
    name: string;
    src: string;
    maxHeight: string;
    padding?: string;
};

const PARTNERS: PartnerLogo[] = [
    {
        name: "HUAWEI",
        src: "/images/huawei.png",
        maxHeight: "max-h-14 sm:max-h-16",
        padding: "py-3"
    },
    {
        name: "iFLYTEK",
        src: "/images/ifly.png",
        maxHeight: "max-h-12 sm:max-h-14",
        padding: "py-2"
    },
    {
        name: "Hikvision",
        src: "/images/hik.png",
        maxHeight: "max-h-10 sm:max-h-14",
        padding: "py-2"
    },
    {
        name: "xFusion",
        src: "/images/fusion.png",
        maxHeight: "max-h-10 sm:max-h-12",
        padding: "py-2"
    },
    {
        name: "H3C",
        src: "/images/h3c.png",
        maxHeight: "max-h-10 sm:max-h-12",
        padding: "py-2"
    }
];

export const Partners: React.FC = () => {
    return (
        <section className="py-12 border-y border-slate-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-xs sm:text-sm font-bold text-brand-red uppercase tracking-[0.3em] sm:tracking-widest mb-6 sm:mb-10">战略合作伙伴</p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-8 lg:gap-10 items-stretch justify-items-center">
                    {PARTNERS.map((partner, index) => {
                        const isLast = index === PARTNERS.length - 1;
                        return (
                            <div 
                                key={partner.name} 
                                className={`flex items-center justify-center rounded-2xl border border-slate-100 bg-white/80 px-4 sm:px-6 transition-all duration-300 hover:shadow-lg hover:border-slate-200 w-full ${isLast ? 'col-span-2 sm:col-span-1 max-w-[220px] justify-self-center' : ''}`}
                                title={partner.name}
                            >
                                <img 
                                    src={partner.src} 
                                    alt={`${partner.name} Logo`} 
                                    loading="lazy"
                                    className={`w-full ${partner.maxHeight} object-contain transition duration-300 ${partner.padding ?? ''}`}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
