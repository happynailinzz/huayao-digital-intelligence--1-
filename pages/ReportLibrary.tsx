import React from 'react';
import { Download, ExternalLink, FileText } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';

interface ResourceLink {
    label: string;
    href: string;
    primary?: boolean;
}

interface ReportResource {
    title: string;
    description: string;
    category: string;
    scene: string;
    links: ResourceLink[];
}

interface ReportSection {
    title: string;
    description: string;
    resources: ReportResource[];
}

const resourceBase = '/report-library/resources';

const reportSections: ReportSection[] = [
    {
        title: '报告 / 简报',
        description: '面向行业趋势、客户沟通和专题研究的报告资料。',
        resources: [
            {
                title: '2025煤炭行业发展年度报告',
                description: '中国煤炭工业协会发布的行业年度报告，适合做煤炭行业趋势研判、项目解读与客户沟通。',
                category: '行业报告',
                scene: '煤炭行业趋势、项目研判、客户沟通',
                links: [
                    { label: '下载页', href: `${resourceBase}/coal-industry-report-2025/`, primary: true },
                    { label: '在线预览', href: `${resourceBase}/coal-industry-report-2025/view/` },
                    { label: 'PDF直链', href: `${resourceBase}/coal-industry-report-2025/downloads/china-coal-industry-report-2025.pdf` },
                ],
            },
            {
                title: '源网荷储 / 新型储能 / 虚拟电厂专题简报',
                description: '适合用于能源数字化、储能、园区能源协同与项目机会研判。',
                category: '能源简报',
                scene: '能源数字化、储能、虚拟电厂',
                links: [
                    { label: '下载页', href: `${resourceBase}/henan-vpp-storage-briefing-2026/`, primary: true },
                    { label: '在线预览', href: `${resourceBase}/henan-vpp-storage-briefing-2026/view/` },
                    { label: 'PDF直链', href: `${resourceBase}/henan-vpp-storage-briefing-2026/downloads/henan-vpp-storage-report-2026.pdf` },
                ],
            },
            {
                title: '郑州高新区 AIGC / OPC 政策简报',
                description: '适合做园区政策判断、AIGC 应用机会与项目沟通。',
                category: '政策简报',
                scene: '园区政策、AIGC、OPC 应用机会',
                links: [
                    { label: '下载页', href: `${resourceBase}/aigc-opc-policy-briefing-zhengzhou-gaoxin/`, primary: true },
                    { label: '在线预览', href: `${resourceBase}/aigc-opc-policy-briefing-zhengzhou-gaoxin/view/` },
                    { label: 'PDF直链', href: `${resourceBase}/aigc-opc-policy-briefing-zhengzhou-gaoxin/downloads/aigc-opc-policy-briefing-zhengzhou-gaoxin.pdf` },
                ],
            },
            {
                title: 'Anthropic《2026 State of AI Agents》',
                description: '适合做 Agent 趋势、AI 工作流和产品路线参考。',
                category: 'AI 趋势',
                scene: 'Agent 趋势、AI 工作流、产品路线',
                links: [
                    { label: '下载页', href: `${resourceBase}/state-of-ai-agents-2026/`, primary: true },
                ],
            },
        ],
    },
    {
        title: '政策文件 / 方案汇编',
        description: '集中归档政策原文、行动方案和官方文件汇编。',
        resources: [
            {
                title: '国家能源局煤矿数字化智能化相关官方文件汇编',
                description: '适合做煤矿数字化、智能化政策研究和方案论证。',
                category: '官方文件',
                scene: '煤矿数字化、智能化政策研究',
                links: [
                    { label: '下载页', href: `${resourceBase}/nea-coalmine-standards-review-2026/`, primary: true },
                    { label: '在线预览', href: `${resourceBase}/nea-coalmine-standards-review-2026/view/` },
                    { label: 'PDF直链', href: `${resourceBase}/nea-coalmine-standards-review-2026/downloads/nea-coalmine-digital-intelligent-official-docs-2026-review.pdf` },
                ],
            },
            {
                title: '南阳市“人工智能+”行动方案（2026-2028年）',
                description: '适合做区域 AI 行动方案、地市政策和应用落地研究。',
                category: '行动方案',
                scene: '区域 AI 政策、地市应用落地',
                links: [
                    { label: '下载页', href: `${resourceBase}/nanyang-ai-plan-2026/`, primary: true },
                ],
            },
            {
                title: 'AI教育行动方案 2026',
                description: '适合做教育数字化、AI+教育和产教融合方向沟通。',
                category: '教育政策',
                scene: '教育数字化、AI+教育、产教融合',
                links: [
                    { label: '下载页', href: `${resourceBase}/ai-education-action-plan-2026/`, primary: true },
                    { label: '在线预览', href: `${resourceBase}/ai-education-action-plan-2026/view/` },
                    { label: 'PDF直链', href: `${resourceBase}/ai-education-action-plan-2026/downloads/ai-education-action-plan-2026.pdf` },
                ],
            },
            {
                title: '平顶山 2026 重点工作任务通知',
                description: '适合做地方重点任务、政策研判与项目抓手提取。',
                category: '地方政策',
                scene: '重点任务、政策研判、项目抓手',
                links: [
                    { label: '下载页', href: `${resourceBase}/pds-2026-key-work-notice/`, primary: true },
                    { label: '在线预览', href: `${resourceBase}/pds-2026-key-work-notice/view/` },
                    { label: 'PDF直链', href: `${resourceBase}/pds-2026-key-work-notice/downloads/pds-2026-key-work-tasks-notice.pdf` },
                ],
            },
        ],
    },
    {
        title: '重点项目清单',
        description: '围绕省市重点项目台账、区域机会和项目跟踪使用。',
        resources: [
            {
                title: '河南省重点项目 2026',
                description: '适合做河南省级项目观察、投资机会筛选与项目台账整理。',
                category: '项目清单',
                scene: '省级项目观察、投资机会筛选',
                links: [
                    { label: '下载页', href: `${resourceBase}/henan-key-projects-2026/`, primary: true },
                    { label: '在线预览', href: `${resourceBase}/henan-key-projects-2026/view/` },
                    { label: 'PDF直链', href: `${resourceBase}/henan-key-projects-2026/downloads/2026-henan-key-projects.pdf` },
                ],
            },
            {
                title: '郑州市重点项目 2026',
                description: '适合做郑州本地项目跟踪、主体台账与落地机会研判。',
                category: '项目清单',
                scene: '郑州项目跟踪、主体台账',
                links: [
                    { label: '下载页', href: `${resourceBase}/zhengzhou-key-projects-2026/`, primary: true },
                    { label: '在线预览', href: `${resourceBase}/zhengzhou-key-projects-2026/view/` },
                    { label: 'PDF直链', href: `${resourceBase}/zhengzhou-key-projects-2026/downloads/2026-zhengzhou-key-projects.pdf` },
                ],
            },
            {
                title: '许昌市重点项目 2026',
                description: '适合做许昌项目梳理、地方机会盘点与区域项目资料归档。',
                category: '项目清单',
                scene: '许昌项目梳理、区域机会盘点',
                links: [
                    { label: '下载页', href: `${resourceBase}/xuchang-key-projects-2026/`, primary: true },
                    { label: '在线预览', href: `${resourceBase}/xuchang-key-projects-2026/view/` },
                    { label: 'PDF直链', href: `${resourceBase}/xuchang-key-projects-2026/downloads/2026-xuchang-key-projects.pdf` },
                ],
            },
        ],
    },
];

export const ReportLibrary: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageHeader
                title="资料导航"
                subtitle="集中汇总政策文件、专题简报、研究报告与 PDF 下载页，方便客户、合作方和内部团队统一查阅。"
            />

            <section className="py-16 sm:py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-14">
                        {reportSections.map((section) => (
                            <section key={section.title} className="reveal">
                                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 mb-7">
                                    <div>
                                        <div className="text-brand-red font-bold tracking-[0.35em] uppercase text-xs mb-2">Resource Library</div>
                                        <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark">{section.title}</h2>
                                        <p className="mt-2 text-sm sm:text-base text-brand-base">{section.description}</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {section.resources.map((resource, index) => (
                                        <article
                                            key={resource.title}
                                            className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-brand-red/20 transition-all duration-300 animate-fade-in-up flex flex-col"
                                            style={{ animationDelay: `${index * 80}ms` }}
                                        >
                                            <div className="flex items-start justify-between gap-4 mb-4">
                                                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold">
                                                    {resource.category}
                                                </span>
                                                <FileText className="w-5 h-5 text-slate-300 group-hover:text-brand-red transition-colors flex-shrink-0" />
                                            </div>

                                            <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-red transition-colors leading-snug mb-3">
                                                {resource.title}
                                            </h3>
                                            <p className="text-sm text-brand-base leading-relaxed mb-4 flex-grow">
                                                {resource.description}
                                            </p>
                                            <div className="text-xs text-slate-500 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 mb-5">
                                                <span className="font-bold text-slate-700">适用场景：</span>{resource.scene}
                                            </div>

                                            <div className="flex flex-wrap gap-2 mt-auto">
                                                {resource.links.map((link) => (
                                                    <a
                                                        key={link.label}
                                                        href={link.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold transition-all ${
                                                            link.primary
                                                                ? 'bg-brand-red text-white hover:bg-red-600 shadow-lg shadow-red-100'
                                                                : 'bg-slate-50 text-brand-base border border-slate-200 hover:border-brand-red/30 hover:text-brand-red hover:bg-white'
                                                        }`}
                                                    >
                                                        {link.label === 'PDF直链' ? <Download className="w-3.5 h-3.5" /> : <ExternalLink className="w-3.5 h-3.5" />}
                                                        {link.label}
                                                    </a>
                                                ))}
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
