
import { CaseStudy, NewsItem } from '../types';

export const CASES: CaseStudy[] = [
    // --- 4 New Supplemental Cases ---
    {
        id: 'n1',
        title: '某国有集团全球视频会议系统',
        category: '企业数字化',
        description: '针对集团总部及全球分支机构（含海外），建设高清、稳定、安全的视频会议系统。支持跨国低延时传输，集成即时通讯与协同办公功能，实现“全球一会”，大幅降低差旅成本，提升跨地域指挥调度与沟通效率。',
        imageColor: 'bg-blue-950',
        tags: ['视频会议', '全球协同', '数字化办公', '降本增效'],
        imageUrl: '/images/case-video-conference.jpg'
    },
    {
        id: 'n2',
        title: '上市企业出海IT合规与系统搭建',
        category: '企业数字化',
        description: '为上市企业出海业务提供GDPR等数据隐私合规咨询，搭建符合国际标准的IT基础设施与云平台架构。确保业务在海外市场合规稳健运行，有效规避数据跨境法律风险，支撑企业全球化战略布局。',
        imageColor: 'bg-indigo-950',
        tags: ['出海合规', '数据安全', 'GDPR', 'IT基础设施'],
        imageUrl: '/images/case-overseas-compliance.jpg'
    },
    {
        id: 'n3',
        title: '省级国企骨干光传输网络升级',
        category: '企业数字化',
        description: '实施省级骨干光传输网络（OTN）扩容升级，构建超高速、低时延、高可靠的全光底座。带宽容量提升10倍，支撑集团海量业务数据实时传输与容灾备份，为数字化转型提供坚实的网络保障。',
        imageColor: 'bg-slate-900',
        tags: ['全光网络', 'OTN', '数字底座', '网络升级'],
        imageUrl: '/images/case-otn-upgrade.jpg'
    },
    {
        id: 'n4',
        title: '集团园区网络与工业互联网升级',
        category: '企业数字化',
        description: '对下属多地分支厂区进行园区网络架构重构，部署工业互联网平台。实现生产设备100%联网互通，生产数据实时采集与边缘计算分析，彻底消除网络孤岛，全面支撑智能制造应用落地。',
        imageColor: 'bg-zinc-900',
        tags: ['工业互联网', '园区网络', '智能制造', '设备物联'],
        imageUrl: '/images/case-industrial-internet.jpg'
    },

    // --- 7 Real Project Cases (Existing) ---
    {
        id: '1',
        title: '省大型国企数字化转型项目',
        category: '企业数字化',
        description: '开展“十五五”规划信息化咨询，实施信创国产化替代与三大系统（OA/ERP/会议）互联互通。构建集团信息骨干网与工业互联网，部署AI算力中心。实施后生产效率提升15%，年增利2-4亿元，树立煤化工行业数字化标杆。',
        imageColor: 'bg-slate-800',
        tags: ['顶层设计', '信创替代', '工业互联网', '降本增效'],
        imageUrl: '/images/case-state-enterprise-digital.jpg'
    },
    {
        id: '2',
        title: '某市智慧配电网项目',
        category: '智慧能源',
        description: '总投资6500万元，覆盖40平方公里，融合5G、AI与物联网技术，建设智能配电线路与自动化终端。实现全景监测与秒级定位，巡检效率提升60%，线损降至1.05%，有力支撑区域绿色能源发展。',
        imageColor: 'bg-emerald-900',
        tags: ['智慧电力', '5G+AI', '物联网', '节能减排'],
        imageUrl: '/images/shared-power-grid.jpg'
    },
    {
        id: '3',
        title: '某市源网荷储一体化信息化项目',
        category: '智慧能源',
        description: '构建源、网、荷、储协同体系，实时采集电力数据，实现分布式能源监测与动态调度。作为能源数字化转型示范工程，促进新能源消纳与系统安全，助力绿色低碳政策落地。',
        imageColor: 'bg-teal-800',
        tags: ['源网荷储', '协同调度', '新能源', '碳中和'],
        imageUrl: '/images/case-energy-collaboration.jpg'
    },
    {
        id: '4',
        title: '教育专项债与数字化项目',
        category: '智慧教育',
        description: '协助申报并执行教育专项债，覆盖30余所学校，建设智慧校园与AI辅助系统。有效改善教育设施，促进区域教育均衡与教学质量提升，形成可复制的县域教育高质量发展样板。',
        imageColor: 'bg-blue-900',
        tags: ['智慧校园', '专项债', 'AI教学', '教育均衡'],
        imageUrl: '/images/case-education-bond.jpg'
    },
    {
        id: '5',
        title: '省级智慧教育平台项目',
        category: '智慧教育',
        description: '集成45项政务服务，服务用户超1100万，汇聚7.48亿条数据。覆盖资源配置、教师结构分析与学情监测，AI档案管理员大幅提升效率，成为推动教育高质量发展的数字化驱动力。',
        imageColor: 'bg-indigo-900',
        tags: ['大数据平台', '政务服务', 'AI分析', '数据治理'],
        imageUrl: '/images/case-education-platform.jpg'
    },
    {
        id: '6',
        title: '华为ICT产业学院项目',
        category: '产教融合',
        description: '联合20余所高校引入华为认证课程，累计培养学生1200人次。提升师资“双师型”比例至65%，学生平均起薪上涨25%，成为区域ICT人才培养标杆。',
        imageColor: 'bg-rose-900',
        tags: ['ICT人才', '华为认证', '校企合作', '高质量就业'],
        imageUrl: '/images/case-ict-academy.jpg'
    },
    {
        id: '7',
        title: '智能制造产业学院项目',
        category: '产教融合',
        description: '聚焦SMT、PLC、工业视觉与AI机器人实训。累计培训580人次，师资“双师型”比例提升至55%。学生多次获国家级奖项，就业率超70%，有效支撑区域智能制造产业人才供给。',
        imageColor: 'bg-orange-900',
        tags: ['智能制造', '工业视觉', '实训基地', '技能人才'],
        imageUrl: '/images/case-smart-manufacturing-academy.jpg'
    },

    // --- 4 Restored Mock Cases ---
    {
        id: '8',
        title: '智慧政务“一网通办”平台',
        category: '企业数字化', 
        description: '打通30+委办局数据壁垒，构建城市大脑，实现政务服务100%网上可办，企业办事效率提升50%，大幅优化营商环境。',
        imageColor: 'bg-blue-800',
        tags: ['数字政府', '数据共享', '便民服务'],
        imageUrl: '/images/case-digital-government.jpg'
    },
    {
        id: '9',
        title: '集团级企业数据中台建设',
        category: '企业数字化',
        description: '为大型制造集团构建统一数据资产管理体系，打破信息孤岛，实现生产、销售、库存数据实时联动，为经营决策提供精准支撑。',
        imageColor: 'bg-slate-700',
        tags: ['数据治理', 'BI分析', '数字化转型'],
        imageUrl: '/images/shared-data-governance.jpg'
    },
    {
        id: '10',
        title: '5G+智慧校园全光网改造',
        category: '智慧教育',
        description: '基于F5G全光网技术，构建高带宽、低延时的校园网络底座，支撑VR沉浸式教学与4K高清直播，打造未来教室示范点。',
        imageColor: 'bg-indigo-800',
        tags: ['F5G', '智慧教学', '校园物联网'],
        imageUrl: '/images/case-smart-campus.jpg'
    },
    {
        id: '11',
        title: '工业AI视觉质检系统',
        category: '企业数字化', 
        description: '利用先进计算机视觉算法替代人工质检，应用于汽车零部件生产线，缺陷识别率达99.9%，检测效率提升10倍。',
        imageColor: 'bg-zinc-800',
        tags: ['工业AI', '机器视觉', '智能制造'],
        imageUrl: '/images/case-industrial-vision.jpg'
    }
];

export const NEWS: NewsItem[] = [
    {
        id: 'n1',
        title: '河南举行高质量完成"十四五"规划系列主题新闻发布会（2025-10-09）',
        date: '2025-10-09',
        summary: '河南以数字化转型为引领，推动制造业高质量发展，多项数字经济指标领先全国。',
        category: '智能化与数字化转型',
        imageUrl: '/images/news-digital-transformation-henan.jpg',
        originalUrl: 'http://www.scio.gov.cn/xwfb/dfxwfb/gssfbh/hn_13841/202510/t20251009_934036.html'
    },
    {
        id: 'n2',
        title: '河南"十四五"数智强省建设成效显著（2025-09-28）',
        date: '2025-09-28',
        summary: '河南将坚持"数据要素×"与"人工智能+"，加快推进数字化智能化转型。',
        category: '智能化与数字化转型',
        imageUrl: '/images/news-digital-strong-province.jpg',
        originalUrl: 'https://dzswgf.mofcom.gov.cn/news/29/2025/9/1759125389068.html'
    },
    {
        id: 'n3',
        title: '河南省加快人工智能赋能新型工业化行动方案（2025—2027年）解读（2025-09-16）',
        date: '2025-09-16',
        summary: '政策强调智能制造与AI深度融合、数据标注基地标准化建设。',
        category: '人工智能',
        imageUrl: '/images/news-ai-industrialization-action.jpg',
        originalUrl: 'http://www.shenqiu.gov.cn/p_detail_16483.html'
    },
    {
        id: 'n4',
        title: '中部第二！河南制造业数字化转型成效显著（2025-08-28）',
        date: '2025-08-28',
        summary: '河南多层次推进制造业数字化转型，企业智能化改造成效突出。',
        category: '智能化与数字化转型',
        imageUrl: '/images/news-manufacturing-digitalization.jpg',
        originalUrl: 'https://app.dahecube.com/nweb/pc/article.html?artid=248720%3Frecid%3D167'
    },
    {
        id: 'n5',
        title: '河南省推动"人工智能+"行动计划（2024—2026年）政策解读（2025-08-23）',
        date: '2025-08-23',
        summary: '河南以人工智能引领数字化转型，召开专题推进会议部署产业发展。',
        category: '人工智能',
        imageUrl: '/images/news-ai-action-plan-policy.jpg',
        originalUrl: 'https://dzswgf.mofcom.gov.cn/news/23/2025/8/1755242639923.html'
    },
    {
        id: 'n6',
        title: '河南省人民政府关于印发支持人工智能产业生态发展政策措施（2025-08-08）',
        date: '2025-08-08',
        summary: '河南促进AI模型研发应用和算力供给，打造AI产业生态新高地。',
        category: '人工智能',
        imageUrl: '/images/news-ai-industry-support.jpg',
        originalUrl: 'https://www7.zzu.edu.cn/nsp/info/1035/2056.htm'
    },
    {
        id: 'n7',
        title: '河南省中西医结合医院医疗电子票据系统信创适配升级改造公告（2025-08-13）',
        date: '2025-08-13',
        summary: '医疗系统信创适配升级，推动国产化医疗信息化应用。',
        category: '信创国产化',
        imageUrl: '/images/news-medical-xinchuang.jpg',
        originalUrl: 'http://www.hntcm.com/mobile/viewnews.aspx?id=14674'
    },
    {
        id: 'n8',
        title: '河南：2025年实施源网荷储一体化项目800个（2025-02-05）',
        date: '2025-02-05',
        summary: '2025年河南计划实施800个源网荷储项目，绿色基础设施建设成重点。',
        category: '源网荷储（信息化）',
        imageUrl: '/images/news-grid-storage-projects.jpg',
        originalUrl: 'http://piinfo.com.cn/news/show-2448.html'
    },
    {
        id: 'n9',
        title: '2025年河南省政府工作报告全文（2025-02-04）',
        date: '2025-02-04',
        summary: '河南空港智算中心揭牌投运，国家数据要素综合试验区获批建设。',
        category: '算力与数据中心',
        imageUrl: '/images/news-henan-work-report.jpg',
        originalUrl: 'https://www.hnswjrb.gov.cn/2025/02-05/3307583.html'
    },
    {
        id: 'n10',
        title: '河南省人民政府办公厅关于印发加快推进源网荷储一体化实施方案的通知（2025-01-20）',
        date: '2025-01-20',
        summary: '建成多标准统一的"河南链"服务体系，加快源网荷储一体化建设。',
        category: '源网荷储（信息化）',
        imageUrl: '/images/news-grid-storage-implementation.jpg',
        originalUrl: 'https://www.hnsxny.cn/system/policy/openlist'
    },
    {
        id: 'n11',
        title: '河南省2025年数据资源发展工作要点（2025-04-08）',
        date: '2025-04-08',
        summary: '推进数据资源开发及算力平台建设，全省算力规模年底突破90E Flops。',
        category: '算力与数据中心',
        imageUrl: '/images/news-data-resources-development.jpg',
        originalUrl: 'https://new.tzxm.gov.cn/zckd/gfxwj/202504/t20250409_1397143.shtml'
    },
    {
        id: 'n12',
        title: '河南数字经济核心产业企业总量达25.96万家（2025-01-02）',
        date: '2025-01-02',
        summary: '2024年底河南数字经济核心产业企业突破25万家，居全国第5、中部第1。',
        category: '智能化与数字化转型',
        imageUrl: '/images/news-digital-economy-enterprises.jpg',
        originalUrl: 'https://www.cods.org.cn/c/2025-01-03/19631.html'
    },
    {
        id: 'n13',
        title: '关于征集数据标注优秀案例的通知（2025-01-14）',
        date: '2025-01-14',
        summary: '河南推进数据标注产业高质量发展，国家数据局征集优秀案例。',
        category: '数据标注',
        imageUrl: '/images/news-data-annotation-cases.jpg',
        originalUrl: 'http://henan.kjzch.com/zhengzhou/2025-01-15/848558.html'
    },
    {
        id: 'n14',
        title: '河南省加快人工智能赋能新型工业化行动方案（2025—2027年）（2025-09-16）',
        date: '2025-09-16',
        summary: '政策支持郑州等地建设数据标注基地，打造标准化标注体系。',
        category: '数据标注',
        imageUrl: '/images/news-ai-industrialization-2027.jpg',
        originalUrl: 'https://www.shenqiu.gov.cn/p_detail_16484.html'
    },
    {
        id: 'n15',
        title: '河南省推动"人工智能+"行动计划（2024—2026年）发布（2024-10-29）',
        date: '2024-10-29',
        summary: '河南持续推进"人工智能+"，数字技术与制造优势、应用场景深度融合。',
        category: '人工智能',
        imageUrl: '/images/news-ai-action-plan-2024.jpg',
        originalUrl: 'https://new.tzxm.gov.cn/zckd/fzgh/202410/t20241031_1394152.shtml'
    },
    {
        id: 'n16',
        title: '《河南省加强数字政府建设实施方案（2023—2025年）》印发（2023-05-10）',
        date: '2023-05-10',
        summary: '政务云加强信创国产化，推动国产服务器和软件应用。',
        category: '信创国产化',
        imageUrl: '/images/news-digital-government-xinchuang.jpg',
        originalUrl: 'https://www.hnzwfw.gov.cn/2023/05-10/41000171.html'
    }
];
