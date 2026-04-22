
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
        id: "ceo-1",
        title: "DeepSeek 的尽头是“隐患闭环”：为什么煤矿/煤化工的 AI 很容易沦为演示？",
        date: "2026-02-19",
        summary: "最近，DeepSeek 很热。很多朋友都在问：“我们怎么用 AI 给安全和管理提效？",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-1.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/05pzCiWNI-s-aChTOTIynQ"
    },
    {
        id: "ceo-2",
        title: "企业提效≠上 AI：流程不闭环，AI 就是“内耗加速器",
        date: "2026-02-21",
        summary: "上周我参加了一个“AI 提效推进会”。会前我挺期待，想着终于能把那些重复汇总、反复改稿、跨部门追人的脏活累活干掉。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-2.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/cBmwLc8omhswkiAsawSZaA"
    },
    {
        id: "ceo-3",
        title: "大屏只是门面，数据治理才是调度中心的发动机",
        date: "2026-02-22",
        summary: "“你花了几百万做调度中心大屏，结果关键时刻还在微信群里问数据。”这句话听着刺耳，但很多项目现场都发生过。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-3.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/u9wS2TCGKOgf3MPZgMcYWg"
    },
    {
        id: "ceo-4",
        title: "2026，别再谈趋势焦虑，先把落地顺序排出来",
        date: "2026-02-23",
        summary: "2026，别再谈趋势焦虑，先把落地顺序排出来这两年，你一定听过一句话：「要顺势而为。」这句话当然没错。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-4.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/YHgQ6hGs3OmKlZF8qdjr3w"
    },
    {
        id: "ceo-5",
        title: "国企信创不是换设备：2026必须一起做的“算力+数据+流程”",
        date: "2026-02-24",
        summary: "国企信创不是换设备：2026必须一起做的“算力+数据+流程”这两年很多国企在信创上都没少投入：设备换了、系统迁",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-5.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/6aW97gBEzyiSSbTywM0x6w"
    },
    {
        id: "ceo-6",
        title: "河南这波“AI+产业协同”不是热词，已经进入园区和项目对接阶段",
        date: "2026-02-25",
        summary: "这两年，很多地方都在讲“AI+产业协同”。但真正决定含金量的，不是口号，而是一个问题：有没有进入具体项目对接？",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-6.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/-knEKXsCjmlWvOErQx3fBw"
    },
    {
        id: "ceo-7",
        title: "河南交投的数字化招采节奏，给其他省管集团什么启示？",
        date: "2026-02-25",
        summary: "2025年的数字化转型，河南交投这波不太一样。不是“上几个系统”就算完事，而是把数字化当成一套工程在推进：先定范围、再建设、再试运行、再补治理。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-7.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/Ro4O7_gL9GwWm86ZHGLI5Q"
    },
    {
        id: "ceo-8",
        title: "逮虾户的春节七天（新手上手版）",
        date: "2026-02-26",
        summary: "一句话版：这个春节，不是我在过节，是 OpenClaw 在“上岗培训 + 连续加班 + 绩效冲刺”。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-8.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/DDLfbWqAb6IgSuRXWsoO4Q"
    },
    {
        id: "ceo-9",
        title: "AI 狂欢退潮后，政企数字化拿什么做“保底”？",
        date: "2026-02-27",
        summary: "去客户现场聊项目，你会很快发现一个现实：现在不挂上“AI”，项目都像没穿正装。问题是，正装穿上了，活儿未必干成。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-9.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/MzQ-jDwabFVozRbROST56w"
    },
    {
        id: "ceo-10",
        title: "2026年2月人工智能行业观察（国内篇）：从会做模型到会交付结果",
        date: "2026-02-27",
        summary: "2月国内AI从技术热度走向产业兑现，真正的胜负手开始转向可交付、可验收、可持续运营能力。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-10.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/d6l9PoX9_2Etl1Ma4qpJFA"
    },
    {
        id: "ceo-11",
        title: "2026年2月人工智能行业观察（海外篇）：模型差距在缩小，控制权差距在拉大",
        date: "2026-02-27",
        summary: "2月海外AI的关键变化，不是模型参数，而是算力、入口、合规与现金流控制点的重排。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-11.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/RQt-ZPuWGl19FSpbk2JpBw"
    },
    {
        id: "ceo-12",
        title: "政企数字化转型，关键不是上系统，而是能验收",
        date: "2026-02-27",
        summary: "政企数字化转型真正的分水岭，不在系统数量，而在能否形成可验收、可复用、可持续的经营闭环。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-12.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/If6XmAV7EYmGDytd-8ZoCA"
    },
    {
        id: "ceo-13",
        title: "矿安〔2026〕1号：那些一直拖着没做智能化的矿山，今年没法再等了",
        date: "2026-03-01",
        summary: "矿安〔2026〕1号首次将矿山智能化建设与安全生产合规硬挂钩，28条硬措施覆盖煤矿、露天矿、金属非金属矿山、高寒高海拔矿山四大场景。本文拆解政策核心条款，结合各类矿山现状数据与已可实现能力，给出分类行动建议。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-13.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/1K55qDTuZxXrpyeZdPZCqw"
    },
    {
        id: "ceo-14",
        title: "对刘宁书记有关河南科技创新发展文章中五个关键信号的解读",
        date: "2026-03-01",
        summary: "从河南AI与数智化转型一线视角解读五个关键信号，核心在项目交付与经营结果。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-14.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/tBtSbRJXOUAdnRG1XLZURQ"
    },
    {
        id: "ceo-15",
        title: "政企数字化项目，为什么总卡在验收前一公里？",
        date: "2026-03-01",
        summary: "预算批了、系统上了、汇报也做了，项目却常常卡在验收前。真正的根因不是技术不够新，而是目标、数据、流程和责任没有闭环。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-15.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/Huhb0tct612AOdQ3UHTTVA"
    },
    {
        id: "ceo-16",
        title: "矿山智能化的中原机会：河南凭什么能接住这波产业升级？",
        date: "2026-03-02",
        summary: "矿山智能化不是买设备，是一套体系。平宝公司已验收：22→6人/班、减员156人、年省1800万。河南不是旁观者，中原有机会，问题是谁敢先站出来接单。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-16.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/--QmT9SMR6jI7vvt0VWrxg"
    },
    {
        id: "ceo-17",
        title: "郑州“算力逆袭”真相：不是风口，是一条430亿产业链",
        date: "2026-03-02",
        summary: "郑州算力崛起，不是短期风口，而是政策、基础设施、龙头牵引与场景落地共同作用的产业链升级。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-17.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/N7UtmDsnwPsVpwK3g1rjRQ"
    },
    {
        id: "ceo-18",
        title: "河南1010个源网荷储项目，数字化这道关怎么过？",
        date: "2026-03-04",
        summary: "河南分四批做了192个项目、290亿投资，现在一口气又押1010个。装机容量不是瓶颈，数字化能不能跟上才是关键。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-18.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/sJ8OSH_apc33mMLUihSrRg"
    },
    {
        id: "ceo-19",
        title: "信创进入\"2.0时代\"，河南企业该怎么接这波红利？",
        date: "2026-03-05",
        summary: "2027年截止，国央企信创替代100%目标倒计时。问题不是有没有国产产品，而是怎么在不崩业务的前提下完成迁移。这篇讲清楚\"换\"和\"用好\"的区别，以及河南企业可执行的切入路径。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-19.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/9tque1YXix0l_cdb4YdONQ"
    },
    {
        id: "ceo-20",
        title: "河南“十五五”规划：数智强省建设的机遇与挑战",
        date: "2026-03-06",
        summary: "中原大地要“起飞”，数智化就是那股劲儿！2026年，河南省政府工作报告一出来，大家伙儿都看到了“十五五”时期河南要干的大事儿。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-20.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/J-xDnLcCOZ0w6rnHOwOFTg"
    },
    {
        id: "ceo-21",
        title: "政府工作报告首次把“高质量数据集+人工智能治理”连起来，释放了什么信号？",
        date: "2026-03-07",
        summary: "政府工作报告首次把数据资源开发、数据要素制度、高质量数据集、人工智能治理连成一条线。真正的信号不是又提了一次AI，而是数据治理正在从项目化走向制度化，未来政企智能化竞争，先拼的不是模型，而是数据底座。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-21.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/NJE6ocYZ9aAUXMT6SogfIw"
    },
    {
        id: "ceo-22",
        title: "数据治理不是“建中台”：河南国企最该先统一的20个指标清单",
        date: "2026-03-07",
        summary: "数据治理的第一步不是上平台，而是把高频经营指标口径统一。先把20个最常用指标做成“能对账、能追责、能验收”的标准件，后面的中台、AI、看板才有意义。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-22.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/A4Bnds82wjdrD2N3Zv4hdA"
    },
    {
        id: "ceo-23",
        title: "郑州市长两会发声背后，郑州数字化升级的逻辑正在变",
        date: "2026-03-07",
        summary: "庄建球两会发声中，“国家中心城市建设”与“十五五开局任务”被放在一起，释放出明确信号：郑州数字化升级正在从局部工具走向城市级抓手，从项目级推进走向系统级能力建设。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-23.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/qaC69lZo5tq7qJgY3P6-jA"
    },
    {
        id: "ceo-24",
        title: "河南“人工智能+”行动：不是概念升级，而是产业重做",
        date: "2026-03-07",
        summary: "这两年，大家都在聊 AI。 但对河南来说，关键已经不是“要不要上 AI”，而是“怎么把 AI 变成可验收、可复制、可持续的项目”。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-24.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/WZ71MZdnwb_cVS_VNHquhg"
    },
    {
        id: "ceo-25",
        title: "工信部在“部长通道”释放明确信号：2026年，AI进入制造业将从概念推进转向场景落地",
        date: "2026-03-09",
        summary: "工信部在“部长通道”释放明确信号：2026年，AI进入制造业将从概念推进转向场景落地，“人工智能+制造”已经不是选择题，而是产业侧必须回答的现实问题。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-25.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/Ab5B1xmVbxbTjezdLUY4rg"
    },
    {
        id: "ceo-26",
        title: "河南发改委这份“AI数读报告”，其实在释放一个更重要的信号",
        date: "2026-03-09",
        summary: "河南发改系统开始主动用“AI数读”的方式来表达省域发展逻辑，说明数字与数字化正在从支撑工具转变为组织方式。河南的数字化，正在从政策表达进入项目化落地阶段。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-26.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/wrsGHR6lOnZfykwQmyJZCg"
    },
    {
        id: "ceo-27",
        title: "今年政府工作报告提到的“超大规模智算集群+全国一体化调度”，真正的风向变了",
        date: "2026-03-09",
        summary: "政府工作报告首次把超大规模智算集群、算电协同、全国一体化算力监测调度写入年度任务，意味着中国算力基础设施正在从分散建设走向全国统筹、区域协同、算电一体、调度运营的新阶段。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-27.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/zUzzVGWNKcITV-wCeLv7Ng"
    },
    {
        id: "ceo-28",
        title: "国家发改委连续发文，政务项目治理的逻辑正在变",
        date: "2026-03-09",
        summary: "国家发改委连续发文，一份推动招标投标领域人工智能应用，一份推动投资项目审批与工程建设审批系统数据共享，释放出明确信号：政府项目管理正在进入“全流程协同 + AI介入”的新阶段。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-28.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/1naU6_y-Eg-MLgSKqw2pZg"
    },
    {
        id: "ceo-29",
        title: "从全国两会到郑州试点：数据要素，正在从政策词变成项目词",
        date: "2026-03-10",
        summary: "全国两会持续强调人工智能+、高质量数据集和数字技术与实体经济深度融合，叠加河南明确提出抓好郑州要素市场化配置综合改革试点、加快建设国家数据要素综合试验区，数据要素正在从政策语言进入项目语言。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-29.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/ITcvcYAyqhbAKtlp7JEszg"
    },
    {
        id: "ceo-30",
        title: "从3个信号看，河南电力数字化的项目窗口已经打开",
        date: "2026-03-10",
        summary: "河南能源监管办将电力现货市场建设、电力市场数字化监管、新能源并网消纳并列为年度重点，说明河南电力数字化正从方向判断走向项目窗口。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-30.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/sRe3GVnVdwRf9ZgEhJFfHw"
    },
    {
        id: "ceo-31",
        title: "OpenClaw 的爆火，会怎样影响国内 AI 行业和普通人？",
        date: "2026-03-12",
        summary: "OpenClaw 的爆火，表面看像是一个 Agent 产品突然出圈，但更值得关注的是，它正在推动国内 AI 行业把关注点从模型竞争转向系统能力、工作流重构和长期交付能力。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-31.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/FT_2HZx29snnp7ID8j1z-g"
    },
    {
        id: "ceo-32",
        title: "AI 众生相——OpenClaw 热度下的国内厂商图谱之互联网大厂篇",
        date: "2026-03-12",
        summary: "OpenClaw 这波热度，表面看是一个开源 Agent 项目火了。但往深里看，它更像一张显影纸——同一个 OpenClaw，把不同厂商最想抢的那段价值链，照得特别清楚。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-32.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/Jg9jDU2ZAaaOl6u0qJrKAg"
    },
    {
        id: "ceo-33",
        title: "AI 众生相——OpenClaw 爆火之后，哪些人在真正开始赚钱",
        date: "2026-03-13",
        summary: "OpenClaw 这波爆火，很多人盯着的是模型、工具调用和自动化能力。但真正最先开始赚钱的，未必是做模型的人，而是那些已经开始卖部署、托管、私有化、安全和行业交付确定性的人。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-33.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/XsfdRSBpdvgOAnMK_xZ75g"
    },
    {
        id: "ceo-34",
        title: "两会之后，职业教育、产教融合、数字人才培养，这条政策线正在悄悄变强",
        date: "2026-03-13",
        summary: "两会之后，教育数字化最值得持续跟踪的，不只是AI课堂，而是职业教育、产教融合、数字人才培养这条政策线。它的真正价值，在于把人才培养重新拉回到产业需求、岗位能力和真实场景上。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-34.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/N7VpR_zfDLRvg9Lm0Ha1qg"
    },
    {
        id: "ceo-35",
        title: "AI 众生相——openclaw 之下，地方政府、园区和更多厂商在忙什么",
        date: "2026-03-13",
        summary: "OpenClaw 这波热度，已经不只是技术圈里的事了。它正在往地方政府、产业园区、算力基础设施和更多服务型厂商那里外溢，背后真正值得看的，是一整条围绕 Agent 的项目、政策和产业配套链条。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-35.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/yB70u9B_NVc6jUKmYpftCA"
    },
    {
        id: "ceo-36",
        title: "全国两会最新信号到河南新型基础设施布局，机会在产业底座重构",
        date: "2026-03-13",
        summary: "全国两会持续强调超大规模智算集群、算电协同和重点行业AI商业化规模化应用，叠加河南明确推进5G、工业互联网、智算中心等新型基础设施建设，河南的算力网络机会正在从单点建设走向产业底座重构。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-36.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/iDSYGuhjDN4O72DJhRa5vw"
    },
    {
        id: "ceo-37",
        title: "河南2026年信息通信业硬指标：算力+工业互联网+AI三线推进",
        date: "2026-03-16",
        summary: "河南通信管理局2026年工作会给出硬指标：5G用户8000万户、基站27万个、10G-PON端口200万个、重点领域5G应用项目7300个，并明确算力基础设施、工业互联网标识解析、人工智能+三条主线，政企数字化项目窗口已经打开。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-37.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/YeCUS9gZ3RcIzHo86UGLtQ"
    },
    {
        id: "ceo-38",
        title: "郑州两会提到的这5件事，可能正在拼出一套地方版AI组合拳",
        date: "2026-03-16",
        summary: "郑州两会提案层面同时出现AI+创新联合体、产业投资基金、城市级数字化转型人才实训基地、可信数据空间以及经开区/高新区和超算、智算基础设施等信号，说明郑州的AI推进逻辑，正在从概念热度转向组合落地。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-38.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/qZlHiuNcK4TrpjuJ-9NZaQ"
    },
    {
        id: "ceo-39",
        title: "国家超算互联网核心节点落地郑州，行业落地项目机会在哪",
        date: "2026-03-16",
        summary: "国家超算互联网核心节点在郑州正式上线试运行，可对外提供超3万卡国产AI算力。算力枢纽落地之后，制造、医疗、科研、政务四大领域的项目窗口已经打开，谁能把算力翻译成可交付的项目方案，谁就能接住这波机会。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-39.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/iq5A-KvIM8I4SUbFIsPR0A"
    },
    {
        id: "ceo-40",
        title: "OpenClaw 爆火之后，谁会吃到第一波红利？从黄仁勋最新演讲看中美硬件厂商的新卡位",
        date: "2026-03-17",
        summary: "OpenClaw 爆火之后，谁会吃到第一波红利？从黄仁勋最新演讲看中美硬件厂商的新卡位",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-40.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/KjqE_5Q1X6A_0l23RXDnQg"
    },
    {
        id: "ceo-41",
        title: "河南省2026年项目机会在哪？我们把18地市的政府工作报告都翻了一遍，帮你画出来了",
        date: "2026-03-19",
        summary: "河南省2026年项目机会在哪？我们把18地市的政府工作报告都翻了一遍，帮你画出来了作者：余炜勋来源：本文基于",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-41.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/D-zHk7yWnCHdP5eE0bf3JQ"
    },
    {
        id: "ceo-42",
        title: "河南省2026年算力和AI重点看什么？我们拆完政策和项目，发现机会主要在这4条线",
        date: "2026-03-19",
        summary: "河南省2026年算力与AI布局：7.8万P算力底座+行业大模型落地+数据安全风口作者：余炜勋来源：本文基于河",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-42.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/qwETmmJHLvAOWNa0CQgpQQ"
    },
    {
        id: "ceo-43",
        title: "河南省2026年智改数转怎么做？200个智能车间背后，真正值得盯的是这几类项目",
        date: "2026-03-19",
        summary: "河南省2026年智改数转：200个智能车间背后的产业链机会作者：余炜勋来源：本文基于河南省人民政府公开文件及",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-43.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/fDqmdl_tOUmjw278xMk04Q"
    },
    {
        id: "ceo-44",
        title: "河南省2026年智慧教育会怎么推进？从AI教学到师范生培养，机会正在往这几个环节集中",
        date: "2026-03-19",
        summary: "河南省2026年智慧教育：AI驱动教与学，师范生数字素养前置培养作者：余炜勋来源：本文基于河南省人民政府公开",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-44.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/u9SkxFOcD-h6rDizPcUdmw"
    },
    {
        id: "ceo-45",
        title: "河南省2026年源网荷储机会有多大？91个项目加速落地后，真正的增量市场在这里",
        date: "2026-03-21",
        summary: "河南省2026年源网荷储：55%可再生能源背后的万亿级市场作者：余炜勋来源：本文基于河南省人民政府公开文件及",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-45.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/YBF_C8NKW2ntMfjIisDRzQ"
    },
    {
        id: "ceo-46",
        title: "许昌正式出手，中小企业数字化转型的项目窗口已经打开",
        date: "2026-03-22",
        summary: "许昌正式出手，中小企业数字化转型的项目窗口已经打开",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-46.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/XtKoETY7b-MHjvH1Uv_Yhg"
    },
    {
        id: "ceo-47",
        title: "南阳“AI+制造”进入项目化阶段：智算中心、数谷园区与工厂改造三线并进，地市级产业升级窗口已打开",
        date: "2026-03-22",
        summary: "南阳把制造端改造、算力底座建设与园区载体推进放进同一条主线，释放出地市级AI+制造从口号走向项目化落地的强信号。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-47.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/eLVrGdLBYJ4ZvawRnhyFmA"
    },
    {
        id: "ceo-48",
        title: "洛阳把 AI、数字化、源网荷储写进 2026 年度计划，意味着什么？",
        date: "2026-03-25",
        summary: "洛阳2026发展计划已将人工智能、数字化、源网荷储纳入年度任务口径。本文先列政府工作计划要点，再做项目化解读。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-48.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/gcQkbpC6ZxCCORnTAvR8jg"
    },
    {
        id: "ceo-49",
        title: "132项重点工作分工落地，平顶山项目机会不在“概念”，在责任清单",
        date: "2026-03-25",
        summary: "平顶山2026重点工作进入责任分解阶段。项目机会正从概念讨论转向清单推进，重点看源网荷储、国资改革、AI应用与数字化验收闭环。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-49.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/BeaEZL300k_0F2uwfHYTEA"
    },
    {
        id: "ceo-50",
        title: "AI 生剧专题一｜AI赋能微短剧、中剧、漫剧：先看行业变局，再看工具对比与路径选择",
        date: "2026-03-25",
        summary: "从行业底层变化出发，全方位对比主流厂商与工具在微短剧、中剧、漫剧中的适配度，给出面向产业化交付的选择逻辑。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-50.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/K0hx4AAL3MmaVHDz6fIbYA"
    },
    {
        id: "ceo-51",
        title: "AI 生剧专题二｜郑州为什么更适合做AI微短剧产业中枢：产业底盘、政策条件与落地便利性",
        date: "2026-03-25",
        summary: "本篇聚焦郑州现有产业环境、政策承接能力与AI工具落地便利性，解析其在微短剧与漫剧赛道形成产业中枢的现实路径。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-51.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/0Zjn1F31GFNLpEntG30VhA"
    },
    {
        id: "ceo-52",
        title: "AI 生剧专题三｜从工具热到产业红利：AI赋能微短剧、中剧、漫剧的三大结合点与落地路径",
        date: "2026-03-25",
        summary: "专题收官篇：从内容能力、产业能力、组织能力三条结合线出发，给出AI赋能微短剧、中剧、漫剧的90天落地路线图。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-52.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/Hb4YQaLd8CBvz5voa_ZgCw"
    },
    {
        id: "ceo-53",
        title: "从“张雪峰离世”看中年危机：不是脆弱，是系统压力过载",
        date: "2026-03-25",
        summary: "从“张雪峰离世”话题的舆情扩散出发，拆解中年职场焦虑的三重机制，并给出可执行的反脆弱重建路径。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-53.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/QWh_hvSI7jheJf28K0ZzdA"
    },
    {
        id: "ceo-54",
        title: "AI 生剧番外特别篇-- Sora“关停”争议背后：AI时代真正的战争，不是参数，而是能效比",
        date: "2026-03-30",
        summary: "从“模型崇拜”到“经营约束”，AI商业逻辑正在重构。AI下半场比的不是谁更聪明，而是谁能把单位算力和单位能耗转成可持续现金流。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-54.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/n4Zuk79YvmNuYwb3OpblmA"
    },
    {
        id: "ceo-55",
        title: "2026年3月人工智能行业观察：算力重构、国产突围、AI普惠，这个月行业真的变了",
        date: "2026-03-30",
        summary: "2026年3月，全球AI行业告别单一模型竞赛，正式进入算力重构、国产突围与大规模普及并行的新阶段。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-55.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/pUCdoRhzlrUSlPVK1v96bQ"
    },
    {
        id: "ceo-56",
        title: "华为2025年报的680亿利润背后，藏着它下一阶段最重要的野心",
        date: "2026-03-31",
        summary: "华为2025年报最值得关注的，不是680亿利润本身，而是其增长逻辑正在从传统业务支撑，转向“算力底座 + 鸿蒙生态 + 行业智能化”协同推进的新结构。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-56.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/-NDNar-5SN1JCJNzMSQfmw"
    },
    {
        id: "ceo-57",
        title: "河南省发改委推动13家人工智能行业赋能中心落地：八大场景打开了哪些新机会？",
        date: "2026-03-31",
        summary: "河南首批13家人工智能行业赋能中心，覆盖政务、制造、教育、交通、医疗、文旅、种植、科学智能。名单背后是项目化落地与持续运营的新订单结构。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-57.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/BBkb9l4zfH7ghVLYdtYcyA"
    },
    {
        id: "ceo-58",
        title: "智谱上市后首份财报：MaaS ARR 突破17亿、增长60倍，中国大模型的估值逻辑该变了",
        date: "2026-04-01",
        summary: "智谱上市后首份财报显示，公司2025年收入达7.24亿元，同比增长131.9%。真正更值得重视的是平台与API业务高增、MaaS能力兑现、Agent与Coding开始推动Token商业化",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-58.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/DFnU06YMk97yBnv6JYlNLA"
    },
    {
        id: "ceo-59",
        title: "巴菲特最新 CNBC 深度采访，真正值得看的不是“卖早了苹果”",
        date: "2026-04-03",
        summary: "这两天，巴菲特接受 CNBC 深度采访，传播最广的一句话，是他承认自己“卖苹果卖早了”。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-59.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/EItZdjGTTiuI6lqABns9VQ"
    },
    {
        id: "ceo-60",
        title: "参观完这家机械装备企业，我才真正明白数字化转型到底在转什么！",
        date: "2026-04-03",
        summary: "参观完这家机械装备企业，我才真正明白数字化转型到底在转什么！附大型制造业集团IT信息化总体规划方案！推荐阅读！",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-60.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/SjXINCbGHh_KHi-FwNVrBA"
    },
    {
        id: "ceo-61",
        title: "河南省工信厅启动“数据治理服务进百企”：从“报需求”到“拿项目”，企业要抢的不是名额，而是交付能力",
        date: "2026-04-04",
        summary: "河南“数据治理服务进百企”进入实操期。真正的分水岭，不在报名动作，而在是否能把经营痛点拆成可实施、可验收、可复制的项目包。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-61.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/3khD42QX5Ij5tNJA97WUsA"
    },
    {
        id: "ceo-62",
        title: "河南移动加码“智算+算网+大模型”：郑州—许昌双中心联动后，真正的竞争进入“交付期”",
        date: "2026-04-04",
        summary: "河南算力建设正在从“参数竞争”进入“结果竞争”。底座能力只是门槛，行业胜负手是能否把算力、模型、数据和业务流程打成可复制的交付闭环。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-62.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/u7UsKDcL7sMKff1WGCIKDA"
    },
    {
        id: "ceo-63",
        title: "河南省发改委发布2026年重点建设项目名单：1418个项目、总投资约3.2万亿元，哪些赛道已进入项目窗口？",
        date: "2026-04-06",
        summary: "河南省发改委发布《2026年重点建设项目名单》，全省共遴选1418个项目、总投资约3.2万亿元，力争完成年度投资1万亿元以上。真正值得重视的，不只是规模，而是算力、网络、数据、平台和行业场景开始被放进同一张项目图里。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-63.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/RKjOPf3zysEV6u3RGpAgIQ"
    },
    {
        id: "ceo-64",
        title: "武汉这次无人驾驶出租车萝卜快跑“集体抛锚”，暴露的不是车的问题，而是系统的问题",
        date: "2026-04-06",
        summary: "武汉萝卜快跑多车异常，真正暴露的不是单车故障，而是自动驾驶进入真实城市运营后，系统稳定性、应急能力、平台协同与运营治理开始成为决定成败的核心门槛。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-64.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/yNjqMkE2hn1pEocrfgGlVQ"
    },
    {
        id: "ceo-65",
        title: "郑州算力节点落地后，2026年最值得做的6类信创项目",
        date: "2026-04-07",
        summary: "郑州核心算力节点释放的真正信号，不是单点算力建设，而是信创项目化落地加速：围绕基础设施升级、平台治理、系统迁移与数据治理形成可招采、可实施、可验收的项目机会。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-65.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/YTopXS__lzCpUm25_vUTpA"
    },
    {
        id: "ceo-66",
        title: "河南数据产业“施工图”落地：10个集聚区、500家骨干企业背后，真正的项目窗口在哪？",
        date: "2026-04-07",
        summary: "河南数据产业从政策愿景进入项目化落地期。10个集聚区、500家骨干企业目标背后，真正增量在交易、可信空间、数据产品化、算力与合规服务。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-66.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/D-kl-QdRHjBh4kJymgJL-w"
    },
    {
        id: "ceo-67",
        title: "河南“人工智能+教育”进入落地期：真正的机会，不在“AI课堂”，而在人才供给体系重构",
        date: "2026-04-07",
        summary: "河南教育“人工智能+教育”进入项目转化期，关键不在工具展示，而在教学、实训、就业与产业协同的可验收闭环。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-67.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/8cnDHN7kj1ynBxgQ041a3Q"
    },
    {
        id: "ceo-68",
        title: "从《2026年许昌市重点建设项目名单》看许昌的强市之路",
        date: "2026-04-08",
        summary: "许昌正在依托电力装备产业基础，把新产品孵化、中试验证、储能建设、源网荷储协同、公共服务平台和场景承接能力，一段一段接起来。源、源网荷储和公共服务平台正在被项目化、工程化、区域化。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-68.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/YrHOD0LrDYI7R7YQWGTT9w"
    },
    {
        id: "ceo-69",
        title: "走进郑煤机深度调研才知道，矿山智能化真正值钱的，不是设备更大了，而是系统开始“长脑子”了",
        date: "2026-04-19",
        summary: "从郑煤机近年经营数据、原生数字化工厂、成套化智能综采工作面和行业标杆成果出发，观察矿山智能化为何正在从单机升级走向系统重构。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-69.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/-eal6iDFS0nM_z4mSQrtNQ"
    },
    {
        id: "ceo-70",
        title: "郑州335个重点项目正式下发：一起看看2604.5亿元，年度计划投资780.8亿元落在哪里",
        date: "2026-04-19",
        summary: "郑州2026年重点建设项目名单正式下发，335个重点项目、总投资2604.5亿元、年度计划投资780.8亿元。真正值得盯的，不是headline数据，而是数据中心、AI平台、源网荷储、电网数字化和产业园区项目开始成批出现。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-70.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/Cig2Ld9R7mbJBNu2pWjrHQ"
    },
    {
        id: "ceo-71",
        title: "AI时代，最先被重做的，可能真的是公司里的中层",
        date: "2026-04-19",
        summary: "陈航谈“未来的公司没有文档、没有中层”，刘润谈“公司中层可能即将消失”。真正值得重视的，不是中层会不会物理消失，而是AI正在重做公司里的信息处理、任务转译和流程协调机制。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-71.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/MF3-IoXvajCkRnHcdLhQqA"
    },
    {
        id: "ceo-72",
        title: "AIGC+OPC 从郑州走向全省：河南各地市谁会接住下一轮“人工智能+”红利？",
        date: "2026-04-19",
        summary: "AIGC+OPC在郑州高新区打开了一个口子之后，河南“人工智能+”正在从概念期进入清单期、场景期和分工期，郑州之外的各地市也开始寻找自己的接力位置。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-72.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/rrxuoBN9yHgZNIKaGtZ4kg"
    },
    {
        id: "ceo-73",
        title: "AIGC+OPC 正在重画郑州AI版图：高新区、航空港、经开区、金水区谁在吃哪波红利？",
        date: "2026-04-17",
        summary: "AIGC+OPC开始在郑州落地之后，这座城市的AI机会已不再平均分布，而是按高新区、航空港、经开区、金水区等不同区域功能重新分层和分工。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-73.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/uS2dCUhCST3Yvak-QwxXfw"
    },
    {
        id: "ceo-74",
        title: "AIGC+OPC 为什么率先在郑州高新区落地？河南首个专项政策释放了什么信号",
        date: "2026-04-17",
        summary: "郑州高新区率先打出AIGC+OPC这张牌，背后不是一条普通园区新闻，而是河南AI创业组织方式、算力供给逻辑和内容产业入口正在发生变化。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-74.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/K8yzoxQvmnf2Cp0R7WIuLA"
    },
    {
        id: "ceo-75",
        title: "炜勋观察开启专题连载+研报分享新尝试",
        date: "2026-04-17",
        summary: "从 2026 年 2 月 26 日发出第一篇文章，到现在一个多月，「炜勋观察」已经收获了超过 1000 位朋友的关注。\n\n很想认真说一句，谢谢大家。\n\n这段时间，我和我的 AI 伙伴一直围绕政企数字化、AI、储能信息化、智能制造、教育创新，以及数据标注、AIGC、OPC 等方向持续整理和输出内容。\n\n我们既关注河南，也放眼全国；\n既跟进动态，也尽量把政策、行业和案例讲清楚。\n\n接下来，「炜勋观察」会进入一个新的阶段。\n\n我们会围绕不同细分领域，陆续推出专题连载，也会同步整理一些配套的行业参考资料。\n\n希望以后带给大家的，不只是信息，\n而是更成体系的观察、更清晰的脉络，以及更有价值的判断。\n\n感谢大家一路同行，\n也欢迎继续关注、交流和给我们提建议。\n",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-75.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/MLwDgweUSNH_LYnmGE87GA"
    },
    {
        id: "ceo-76",
        title: "河南发改委明确2030年装机2300万千瓦：河南储能进入\"带时限\"阶段",
        date: "2026-04-16",
        summary: "储能政策从不缺目标，缺的是带时限的约束。河南省发改委近日发布新型储能高质量发展措施，明确 2030 年装机达",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-76.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/stWmNywMfowXmfGOcAOThA"
    },
    {
        id: "ceo-77",
        title: "从省标到落地：漯河如何啃下政务数据治理\"硬骨头\"",
        date: "2026-04-16",
        summary: "政务数据治理喊了多年，多数地方卡在“无标准可依”的困境。如今，漯河率先出手。3 月下旬，漯河市政务数据管理局",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-77.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/vvG4YlI4zsx9Y5HS1h2P4A"
    },
    {
        id: "ceo-78",
        title: "河南省文旅厅抛出六大场景：河南\"AI+文旅\"不是概念，是申报通道",
        date: "2026-04-14",
        summary: "AI 落地文旅，终于有了官方入口。河南省文旅厅近日发布“人工智能 + 文旅”试点申报通知，覆盖智能讲解、智能",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-78.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/wk2Doqyfu92SVciAQGLPmg"
    },
    {
        id: "ceo-79",
        title: "Anthropic调研500多位技术负责人后，我更确定：2026年，AI Agent 拼的不是模型，而是接流程的能力",
        date: "2026-04-12",
        summary: "Anthropic 联合 Material 对全美 500 多位技术领导者的调研显示，2026 年 AI Agent 的竞争重点，正在从模型能力转向流程接入、系统协同与组织改造能力。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-79.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/Vu8KfCDPVDItn9IyW_98tw"
    },
    {
        id: "ceo-80",
        title: "南阳发布《推进“人工智能+”行动方案》：AI进入项目化推进阶段",
        date: "2026-04-12",
        summary: "南阳市发布《推进“人工智能+”行动方案（2026—2028年）》，提出到2028年建成1个区域算力中心、30个以上高质量数据集、50个以上典型场景，释放出地方AI从概念推动转向项目化推进的明确信号。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-80.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/s3sch_rrsKo_nCLAyE4BIA"
    },
    {
        id: "ceo-81",
        title: "考察完平煤十一矿，我更看重的不是“智能化”，而是这三个更实的信号",
        date: "2026-04-12",
        summary: "参观平煤十一矿后，更值得关注的不是泛泛的“智能矿山”，而是智能化综管平台、数字孪生透明地质系统、矸石填充试点这三条更实的升级主线。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-81.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/TH1If-cvCwON_X_K9RktFA"
    },
    {
        id: "ceo-82",
        title: "教育部等五部门联合印发《“人工智能+教育”行动计划》：教育数字化，开始进入系统重构阶段",
        date: "2026-04-12",
        summary: "到2030年，要形成“人工智能与教育深度融合格局”，构建起纵向贯通、横向联通的人工智能全学段教育和全社会通识教育体系。",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-82.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/mTR0QLV2Ky-NAKL5uzYuaA"
    },
    {
        id: "ceo-83",
        title: "河南省发改委发布《推动河南省新型储能高质量发展的若干措施》：2300万千瓦、800万千瓦、400亿元，这几类机会已经不只是概念",
        date: "2026-04-08",
        summary: "河南省发改委发布《推动河南省新型储能高质量发展的若干措施》，提出到2030年新型储能装机规模力争达到2300万千瓦，其中用户侧储能达到800万千瓦，带动项目直接投资400亿元。真正值得重视的，不只是储能规模本身，而是数据（算力）中心、",
        category: 'CEO专栏',
        imageUrl: "/images/ceo-column/ceo-83.jpg",
        originalUrl: "https://mp.weixin.qq.com/s/mcg8w4HoTDaSJbvsrXpWeg"
    }
];
