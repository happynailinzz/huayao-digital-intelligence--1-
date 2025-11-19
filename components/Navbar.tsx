
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NavItem } from '../types';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NAV_ITEMS: NavItem[] = [
    { label: '首页', href: '/' },
    { label: '服务与解决方案', href: '/solutions' },
    { label: '成功案例', href: '/cases' },
    { label: '行业动态', href: '/news' },
    { label: '联系我们', href: '/contact' },
];

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path: string) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    const handleMobileNavClick = (href: string) => {
        setIsOpen(false);
        navigate(href);
    };

    // Determine if navbar should be transparent (Home page + Top + Not open)
    const isHome = location.pathname === '/';
    const isTransparent = isHome && !isScrolled && !isOpen;

    // Dynamic styles based on state
    const navBgClass = isTransparent 
        ? 'bg-transparent border-transparent' 
        : 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm';
    
    const textColorClass = isTransparent 
        ? 'text-white/90 hover:text-white' 
        : 'text-brand-base hover:text-brand-dark';

    const activeColorClass = isTransparent
        ? 'text-white font-bold after:bg-white'
        : 'text-brand-red font-semibold';

    const logoTextClass = isTransparent ? 'text-white' : 'text-brand-dark';

    // Logo Colors Logic
    // Top Right: Brand Red (Always)
    const cTopRight = '#dc2626';
    // Top Left: Light Gray (Always)
    const cTopLeft = '#94a3b8';
    // Bottom Left: Medium Gray (Always)
    const cBottomLeft = '#475569';
    // Bottom Right: Dark Gray (becomes White on transparent dark bg)
    const cBottomRight = isTransparent ? '#ffffff' : '#1e293b';

    return (
        <nav 
            className={`fixed w-full z-50 transition-all duration-300 ${navBgClass}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div 
                        className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" 
                        onClick={() => navigate('/')}
                    >
                        {/* Programmatic SVG Logo: 4 Squares */}
                        <svg viewBox="0 0 100 100" className="h-9 w-9" xmlns="http://www.w3.org/2000/svg" aria-label="华曜数智 Logo">
                            {/* Top Left: Light Gray */}
                            <rect x="5" y="5" width="42" height="42" rx="6" fill={cTopLeft} />
                            {/* Top Right: Brand Red */}
                            <rect x="53" y="5" width="42" height="42" rx="6" fill={cTopRight} />
                            {/* Bottom Left: Medium Gray */}
                            <rect x="5" y="53" width="42" height="42" rx="6" fill={cBottomLeft} />
                            {/* Bottom Right: Dark Gray (Dynamic) */}
                            <rect x="53" y="53" width="42" height="42" rx="6" fill={cBottomRight} />
                        </svg>

                        <span className={`font-bold text-xl tracking-tight font-sans transition-colors ${logoTextClass}`}>华曜数智</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.label}
                                    to={item.href}
                                    className={`relative px-1 py-2 text-sm font-medium transition-colors ${
                                        isActive(item.href)
                                            ? activeColorClass
                                            : textColorClass
                                    }`}
                                >
                                    {item.label}
                                    {isActive(item.href) && (
                                        <span className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full ${isTransparent ? 'bg-white' : 'bg-brand-red'}`}></span>
                                    )}
                                </Link>
                            ))}
                            <Link 
                                to="/contact" 
                                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg transform hover:-translate-y-0.5 ${
                                    isTransparent 
                                        ? 'bg-white text-brand-dark hover:bg-brand-red hover:text-white' 
                                        : 'bg-brand-dark hover:bg-brand-red text-white'
                                }`}
                            >
                                立即咨询
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-md focus:outline-none transition-colors ${
                                isTransparent ? 'text-white hover:bg-white/10' : 'text-brand-dark hover:bg-slate-100'
                            }`}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-slate-200 absolute w-full shadow-lg animate-fade-in-up" style={{animationDuration: '0.2s'}}>
                    <div className="px-4 pt-2 pb-4 space-y-2">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.label}
                                onClick={() => handleMobileNavClick(item.href)}
                                className={`w-full text-left block px-3 py-3 rounded-md text-base font-medium border-b border-slate-50 ${
                                     isActive(item.href) ? 'text-brand-red bg-slate-50' : 'text-brand-dark hover:bg-slate-50'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                        <button
                            onClick={() => handleMobileNavClick('/contact')}
                            className="w-full text-left text-brand-red font-bold block px-3 py-3 rounded-md text-base mt-2 flex items-center"
                        >
                            立即咨询 <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};
