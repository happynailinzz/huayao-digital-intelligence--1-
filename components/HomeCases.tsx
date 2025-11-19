
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CaseCard } from './CaseCard';
import { CASES } from '../data/mock';
import { CaseStudy } from '../types';

export const HomeCases: React.FC = () => {
    // Specific IDs based on user request:
    // 1: 省大型国企数字化转型项目
    // 4: 教育专项债与数字化项目
    // 3: 某市源网荷储一体化信息化项目
    const targetIds = ['1', '4', '3'];
    
    const displayedCases = targetIds
        .map(id => CASES.find(c => c.id === id))
        .filter((item): item is CaseStudy => item !== undefined);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
                    <div>
                        <h2 className="text-brand-red font-bold tracking-[0.4em] uppercase text-xs sm:text-sm mb-2 sm:mb-3">成功案例</h2>
                        <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark">数字转型的实践典范</h3>
                    </div>
                    <Link to="/cases" className="text-brand-base hover:text-brand-red font-medium flex items-center transition-colors text-sm sm:text-base">
                        查看全部案例 <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {displayedCases.map((item, index) => (
                        <div key={item.id} className="reveal">
                            <CaseCard item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
