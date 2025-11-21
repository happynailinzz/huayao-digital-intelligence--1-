
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
        id: 'n13',
        title: '河南公布省级数据标注基地建设先行先试城市名单（2024-12-20）',
        date: '2024-12-20',
        summary: '河南多地获批省级数据标注基地，加速数据要素产业发展。',
        category: '数据要素',
        imageUrl: '/images/news-data-annotation-policy.jpg',
        originalUrl: 'http://www.caict.ac.cn/english/research/whitepapers/202509/P020250924573446494952.pdf'
    },
    {
        id: 'n9',
        title: '2024年河南省大数据产业发展工作方案发布（2024-09-25）',
        date: '2024-09-25',
        summary: '明确算力、大数据、人工智能等为河南新质生产力重点产业，加快数据中心建设。',
        category: '宏观趋势',
        imageUrl: '/images/news-data-marking.jpg',
        originalUrl: 'https://m.c114.com.cn/w92-1272979.html'
    },
    {
        id: 'n8',
        title: '河南省人民政府办公厅关于印发人工智能赋能新型工业化行动方案（2025-09-16）',
        date: '2025-09-16',
        summary: '政策主推AI与制造业融合发展，助力郑州、洛阳等关键城市升级。',
        category: '智能制造',
        imageUrl: '/images/news-ai-industrialization.jpg',
        originalUrl: 'https://www.shenqiu.gov.cn/p_detail_16484.html'
    },
    {
        id: 'n5',
        title: '河南出台方案加快人工智能赋能新型工业化（2025-09-15）',
        date: '2025-09-15',
        summary: '精招AI企业，培育省级专精特新企业，打造科技型初创企业群体。',
        category: '智能制造',
        imageUrl: '/images/news-ai-industrialization.jpg',
        originalUrl: 'http://www.ha.chinanews.com.cn/news/hnxw/2025/0916/62956.shtml'
    },
    {
        id: 'n6',
        title: '河南省加快人工智能赋能新型工业化行动方案（2025—2027年）发布（2025-09-14）',
        date: '2025-09-14',
        summary: '到2027年，河南人工智能产业规模将破1600亿元，政策支持创新与应用场景打造。',
        category: '智能制造',
        imageUrl: '/images/news-ai-action-plan.jpg',
        originalUrl: 'https://app.dahecube.com/nweb/pc/article.html?artid=247499%3Frecid%3D46'
    },
    {
        id: 'n16',
        title: '河南省2025年推进信创及数字基础设施国产化发展（2025-07-10）',
        date: '2025-07-10',
        summary: '信创产品在AI、元宇宙等新领域深化推进，政务云硬软件国产化进程提速。',
        category: '信创前沿',
        imageUrl: '/images/news-xinchuang-infrastructure.jpg',
        originalUrl: 'https://www.hnhx.gov.cn/portal/ztzl/eynzt/yhys/hqzc/webinfo/2025/07/phone1751276503803471.htm'
    },
    {
        id: 'n14',
        title: '河南省推动数据标注产业高质量发展政策意见（2025-07-10）',
        date: '2025-07-10',
        summary: '数据企业加快信创国产化，深化数据标注与AI等新技术融合。',
        category: '数据要素',
        imageUrl: '/images/news-data-policy.jpg',
        originalUrl: 'https://www.hnhx.gov.cn/portal/ztzl/eynzt/yhys/hqzc/webinfo/2025/07/phone1751276503803471.htm'
    },
    {
        id: 'n12',
        title: '河南发布第九批源网荷储一体化项目名单（2025-05-25）',
        date: '2025-05-25',
        summary: '河南第九批源网荷储项目共53个，突出企业储能配置与自发用电、调节优化。',
        category: '智慧能源',
        imageUrl: '/images/news-energy-storage.jpg',
        originalUrl: 'http://cnnes.cc/hangye/20250526/10850.html'
    },
    {
        id: 'n1',
        title: '河南省加快数字化转型推动制造业高质量发展工作推进会召开（2025-05-10）',
        date: '2025-05-10',
        summary: '河南实施数字化转型全覆盖行动，提升制造业智能化水平，推动高质量发展。',
        category: '政策解读',
        imageUrl: '/images/news-digital-transformation-1.jpg',
        originalUrl: 'https://www.hnzwfw.gov.cn/2023/05-10/41000171.html'
    },
    {
        id: 'n10',
        title: 'AI时代算力发展趋势及河南概况（2025-03-30）',
        date: '2025-03-30',
        summary: '到2025年，河南数据中心机架数达15万，新建大型数据中心，支撑AI产业发展。',
        category: '宏观趋势',
        imageUrl: '/images/news-data-center.jpg',
        originalUrl: 'https://pdf.dfcfw.com/pdf/H3_AP202504011649803989_1.pdf'
    },
    {
        id: 'n7',
        title: '河南省加快推进"人工智能+"行动工作要点公布（2025-03-27）',
        date: '2025-03-27',
        summary: '郑州数据交易中心争创国家级场所，省级数据标注基地加速布局。',
        category: '智能制造',
        imageUrl: '/images/news-ai-data-center.jpg',
        originalUrl: 'https://kingduns.com/regulations-c-1689.html'
    },
    {
        id: 'n4',
        title: '数字经济产业链分析之河南概况（2024-05-28）',
        date: '2024-05-28',
        summary: '河南数字经济规模2022年突破1.9万亿元，占GDP31.5%。政策利好推动数字经济快速发展。',
        category: '宏观趋势',
        imageUrl: '/images/news-digital-economy-4.jpg',
        originalUrl: 'https://pdf.dfcfw.com/pdf/H3_AP202405301634928732_1.pdf'
    },
    {
        id: 'n2',
        title: '河南省加强数字政府建设实施方案（2023—2025年）印发（2023-05-09）',
        date: '2023-05-09',
        summary: '到2025年，河南将建成安全高效的数字基础设施，数据赋能政府治理。',
        category: '政策解读',
        imageUrl: '/images/news-digital-government.jpg',
        originalUrl: 'https://www.hnzwfw.gov.cn/2023/05-10/41000171.html'
    },
    {
        id: 'n15',
        title: '《河南省加强数字政府建设实施方案》推信创国产化产品标准（2023-05-09）',
        date: '2023-05-09',
        summary: '文件强化政务云信创国产化要求，推动国产服务器和软件全面应用。',
        category: '信创前沿',
        imageUrl: '/images/news-digital-gov-xinchuang.jpg',
        originalUrl: 'https://www.hnzwfw.gov.cn/2023/05-10/41000171.html'
    },
    {
        id: 'n11',
        title: '河南省推动配网改造升级 促进源网荷储一体化（2022-12-11）',
        date: '2022-12-11',
        summary: '河南公布源网荷储一体化实施方案，推动电网效率与智能化转型。',
        category: '智慧能源',
        imageUrl: '/images/news-smart-grid.jpg',
        originalUrl: 'https://www.las.ac.cn/front/product/detail?id=a56e36e11e24a059c1e7d321660d7398'
    },
    {
        id: 'n3',
        title: '2025年"数字河南"是啥样？这些变化和你有关（2021-12-23）',
        date: '2021-12-23',
        summary: '河南数字化转型战略加速推进，聚焦经济社会数字变革和创新发展。',
        category: '区域动态',
        imageUrl: '/images/news-digital-economy.jpg',
        originalUrl: 'http://www.lankao.gov.cn/sitesources/lkxrmzf/page_pc/xwzx/rdgz/article70a312ac9d864bd99d6f9011d3e55c5b.html'
    }
];
