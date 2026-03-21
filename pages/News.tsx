
import React, { useEffect, useMemo, useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { NEWS } from '../data/mock';
import { Calendar, ArrowRight, Tag, ExternalLink } from 'lucide-react';

export const News: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8;

    const handleNewsClick = (originalUrl: string | undefined) => {
        if (originalUrl) {
            // 在新窗口/标签页中打开原文链接
            window.open(originalUrl, '_blank', 'noopener,noreferrer');
        }
    };

    const sortedNews = useMemo(() => {
        return [...NEWS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }, []);

    const totalPages = Math.ceil(sortedNews.length / pageSize);
    const paginatedNews = sortedNews.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    return (
        <div className="min-h-screen bg-white">
            <PageHeader 
                title="CEO专栏" 
                subtitle="聚焦 CEO 对产业趋势、企业战略与数智化升级路径的持续观察与深度思考。"
            />

            <section className="py-20 bg-slate-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-8">
                        {paginatedNews.map((item, index) => (
                            <article 
                                key={item.id} 
                                className="group flex flex-col md:flex-row bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up cursor-pointer"
                                style={{ animationDelay: `${index * 100}ms` }}
                                onClick={() => handleNewsClick(item.originalUrl)}
                            >
                                {/* Image Section */}
                                <div className="md:w-80 h-56 md:h-auto flex-shrink-0 relative overflow-hidden bg-slate-200">
                                    {item.imageUrl ? (
                                        <img 
                                            src={item.imageUrl} 
                                            alt={item.title} 
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                            onError={(e) => {
                                                // Fallback if image fails to load
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center', 'text-slate-400', 'text-sm', 'font-medium');
                                                if(e.currentTarget.parentElement) {
                                                    e.currentTarget.parentElement.innerText = '暂无图片';
                                                }
                                            }}
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-400">
                                            暂无图片
                                        </div>
                                    )}
                                    <div className="absolute top-3 left-3">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur text-brand-red text-xs font-bold rounded-full shadow-sm flex items-center gap-1">
                                            <Tag className="w-3 h-3" />
                                            {item.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                                    <div className="flex items-center text-xs font-medium text-slate-500 mb-3">
                                        <Calendar className="w-3.5 h-3.5 mr-1.5" />
                                        <span>{item.date}</span>
                                    </div>
                                    
                                    <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-4 group-hover:text-brand-red transition-colors line-clamp-2 leading-tight">
                                        {item.title}
                                    </h3>
                                    
                                    <p className="text-brand-base text-sm leading-relaxed mb-6 line-clamp-3 md:line-clamp-2 flex-grow">
                                        {item.summary}
                                    </p>
                                    
                                    <div className="flex items-center text-brand-red font-bold text-sm group/btn w-fit mt-auto">
                                        查看原文 
                                        <ExternalLink className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                    
                    {/* Pagination Placeholder */}
                    <div className="mt-12 flex flex-col items-center gap-4">
                        <div className="text-sm text-slate-500">
                            第 {currentPage} / {totalPages} 页，共 {sortedNews.length} 篇
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-2">
                            {pageNumbers.map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`min-w-10 px-3 py-2 rounded-lg border text-sm font-medium transition-colors ${
                                        currentPage === page
                                            ? 'bg-brand-red text-white border-brand-red'
                                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-brand-red/30'
                                    }`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                                disabled={currentPage === 1}
                                className="px-5 py-3 bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 hover:border-brand-red/30 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                上一页
                            </button>
                            <button
                                onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                                disabled={currentPage === totalPages}
                                className="px-5 py-3 bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 hover:border-brand-red/30 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                下一页
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
