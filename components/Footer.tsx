
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-start gap-2">
                        <div className="flex items-center gap-3">
                            {/* Programmatic SVG Logo: 4 Squares (Standard Colors) */}
                            <svg viewBox="0 0 100 100" className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" aria-label="华曜数智 Logo">
                                {/* Top Left: Light Gray */}
                                <rect x="5" y="5" width="42" height="42" rx="6" fill="#94a3b8" />
                                {/* Top Right: Brand Red */}
                                <rect x="53" y="5" width="42" height="42" rx="6" fill="#dc2626" />
                                {/* Bottom Left: Medium Gray */}
                                <rect x="5" y="53" width="42" height="42" rx="6" fill="#475569" />
                                {/* Bottom Right: Dark Gray */}
                                <rect x="53" y="53" width="42" height="42" rx="6" fill="#1e293b" />
                            </svg>
                            <span className="font-bold text-lg text-brand-dark">华曜数智</span>
                        </div>
                        <p className="text-xs text-brand-light mt-1">中原数字经济的关键赋能者</p>
                    </div>
                    <div className="flex gap-6 text-sm text-brand-base">
                        <Link to="/solutions" className="hover:text-brand-dark transition-colors">解决方案</Link>
                        <Link to="/cases" className="hover:text-brand-dark transition-colors">成功案例</Link>
                        <span className="text-slate-300">|</span>
                        <span>© 2025 河南华曜数智科技有限公司. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
