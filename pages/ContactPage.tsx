
import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Contact } from '../components/Contact';
import { BrandStrategy } from '../components/BrandStrategy';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const ContactPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageHeader 
                title="联系我们" 
                subtitle="期待与您的合作，共创数字未来。"
            />

            {/* Brand Strategy Section */}
            <BrandStrategy />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-12 mb-8 sm:mb-12 lg:mb-20">
                    <div className="bg-slate-50 p-4 sm:p-6 lg:p-8 rounded-xl border border-slate-100 text-center hover:shadow-lg transition-shadow duration-300">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-red/10 text-brand-red rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                            <Phone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                        </div>
                        <h3 className="font-bold text-brand-dark mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base">咨询热线</h3>
                        <p className="text-brand-base text-xs sm:text-sm lg:text-base font-medium">185-66666-774</p>
                        <p className="text-brand-light text-xs mt-1 sm:mt-2">周一至周五 9:00-18:00</p>
                    </div>
                    <div className="bg-slate-50 p-4 sm:p-6 lg:p-8 rounded-xl border border-slate-100 text-center hover:shadow-lg transition-shadow duration-300">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-red/10 text-brand-red rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                            <Mail className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                        </div>
                        <h3 className="font-bold text-brand-dark mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base">商务邮箱</h3>
                        <p className="text-brand-base text-xs sm:text-sm lg:text-base font-medium">183296@qq.com</p>
                        <p className="text-brand-light text-xs mt-1 sm:mt-2">我们将于24小时内回复</p>
                    </div>
                    <div className="bg-slate-50 p-4 sm:p-6 lg:p-8 rounded-xl border border-slate-100 text-center hover:shadow-lg transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-red/10 text-brand-red rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                        </div>
                        <h3 className="font-bold text-brand-dark mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base">公司总部</h3>
                        <p className="text-brand-base text-xs sm:text-sm lg:text-base font-medium">中国 · 郑州</p>
                        <p className="text-brand-light text-xs mt-1 sm:mt-2">期待与您面对面交流</p>
                    </div>
                </div>
            </div>

            {/* Reusing the Contact Form Section */}
            <Contact />
        </div>
    );
};