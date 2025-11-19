
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseCardProps {
    item: CaseStudy;
}

export const CaseCard: React.FC<CaseCardProps> = ({ item }) => {
    const [imageError, setImageError] = useState(false);

    return (
        <div className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <div className={`h-48 relative overflow-hidden ${item.imageColor}`}>
                {item.imageUrl && !imageError ? (
                    <img 
                        src={item.imageUrl} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    /* Fallback to color block and text if no image or error */
                    <>
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:16px_16px]"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-4xl select-none">
                            {item.category}
                        </div>
                    </>
                )}
                
                {/* Category Badge */}
                <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 backdrop-blur text-brand-dark text-xs font-bold px-2 py-1 rounded shadow-sm">
                        {item.category}
                    </span>
                </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-red transition-colors line-clamp-2">
                    {item.title}
                </h3>
                <p className="text-brand-base text-sm mb-6 flex-1 leading-relaxed line-clamp-3">
                    {item.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-wrap gap-2">
                        {item.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                                #{tag}
                            </span>
                        ))}
                    </div>
                    <span className="text-brand-red opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                        <ArrowRight className="w-5 h-5" />
                    </span>
                </div>
            </div>
        </div>
    );
};
