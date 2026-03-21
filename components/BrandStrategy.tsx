import React, { useState } from 'react';
import { 
  Target, 
  Eye, 
  Zap,
  Sparkles,
  Palette,
  Heart,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface StrategyContent {
  title: string;
  subtitle: string;
  sections: Array<{
    title: string;
    content: string | string[];
  }>;
  highlight?: string;
}

const BrandStrategy: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>('culture'); // 默认展示企业文化体系

  const strategyCards = [
    {
      id: 'culture',
      title: '企业文化体系',
      icon: <Heart className="w-6 h-6" />,
      color: 'gray',
      content: {
        title: '企业文化核心理念',
        subtitle: '围绕“寰曜数智”品牌定位形成的文化表达体系',
        sections: [
          {
            title: '企业使命',
            content: '"以数筑基，以智赋新，服务产业高质量发展。"'
          },
          {
            title: '使命解析',
            content: '基于“寰曜数智”的品牌定位，企业使命不仅在于建设数字基础设施，更在于以数据、算力、平台与智能化能力为支撑，帮助政企客户完成从基础建设到业务升级的系统推进，提升组织效率与产业运行质量。'
          },
          {
            title: '企业愿景',
            content: '"成为最值得信赖的政企数智化升级伙伴。"'
          },
          {
            title: '愿景解析',
            content: '“寰曜”体现格局与引领，“数智”强调能力与价值。愿景聚焦于成为客户长期可信赖的升级伙伴，不止于项目交付，更持续提供判断力、解决方案能力与长期服务价值。'
          },
          {
            title: '核心价值观',
            content: [
              '智见（Insight）：坚持行业理解与系统思考，识别关键问题，形成有依据的判断与方案。',
              '致实（Execution）：坚持结果导向，将复杂任务转化为可交付、可落地、可持续的实施成果。',
              '协同（Synergy）：打通咨询、集成、产品与投融资能力，形成多角色、多环节协同服务。',
              '共进（Growth）：坚持长期主义，与客户共同提升组织效率、经营质量与发展韧性。'
            ]
          }
        ],
        highlight: '以数为基，以智为擎。'
      }
    },
    {
      id: 'name',
      title: '品牌名称解析',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'red',
      content: {
        title: '寰曜数智',
        subtitle: 'HUANYAO SHUZHI - 品牌名称的内涵表达',
        sections: [
          {
            title: '寰 (Huán) - 格局与广度',
            content: '意指“寰宇”“天下”。代表企业不局限于单点项目和短期交付，而是以更广阔的产业视角理解区域发展、行业升级与客户转型，体现立足中原、面向更广阔市场的战略格局。'
          },
          {
            title: '曜 (Yào) - 愿景与引领',
            content: '意为“照耀”“光明”“光芒”。象征企业在复杂转型过程中提供方向感与确定性，以清晰的方法论、可靠的技术能力和持续的执行力，为客户明确数智化升级路径。'
          },
          {
            title: '数 (Shù) - 核心技术',
            content: '直指“数据”“数字化”“算力”。这是企业构建解决方案的基础底座，涵盖数据中心、信创、人工智能、平台建设与数字基础设施等核心能力，是推动客户转型的重要支撑。'
          },
          {
            title: '智 (Zhì) - 智慧能力与升级价值',
            content: '指向“智慧”“智能”与“智治”。它不仅代表 AI、算法与智能应用等技术能力，更代表企业帮助客户形成更高质量的决策能力、运营能力与治理能力，使数字化进一步转化为管理提升与业务增效。'
          }
        ],
        highlight: '“寰曜数智”寓意为——以开阔视野理解产业趋势，以数字底座承载转型需求，以智能能力支撑组织升级。'
      }
    },
    {
      id: 'logo',
      title: 'Logo图形与用色',
      icon: <Palette className="w-6 h-6" />,
      color: 'dark',
      content: {
        title: '四象限矩阵设计',
        subtitle: '以秩序感、协同性与科技气质构建品牌视觉识别体系',
        sections: [
          {
            title: '图形形态分析',
            content: [
               '矩阵结构：四个方块对应企业“咨询规划、系统集成、产品服务、投融资协同”的综合服务能力，体现体系化交付能力。',
               '圆角方块：兼具科技模块与数字窗口的双重意象，既象征算力与平台底座，也象征连接客户业务场景的接口。',
               '聚合之势：模块彼此独立又协同成型，传达企业将多源资源、多类技术与多方角色整合为统一解决方案的能力。'
            ]
          },
          {
            title: '左上·浅灰',
            content: '象征理性、秩序与前瞻。对应企业在战略咨询、顶层设计与架构规划上的判断能力，代表从源头明确方向的专业性。'
          },
          {
            title: '右上·红色',
            content: '象征行动力、责任感与战略响应。对应企业在信创国产化、重点项目推进与关键场景突破中的执行能力。'
          },
          {
            title: '左下·深灰',
            content: '象征稳健、承载与底座。对应数据中心、算力设施、硬件集成等基础能力，体现项目交付的可靠性与支撑能力。'
          },
          {
            title: '右下·黑色',
            content: '象征深科技、复杂场景与升级潜能。对应人工智能、行业智能化与综合解决方案，代表企业面向未来持续拓展的技术能力。'
          }
        ]
      }
    }
  ];

  const activeContent = activeCard ? strategyCards.find(card => card.id === activeCard)?.content : null;

  const getColorClasses = (color: string, variant: 'bg' | 'text' | 'border') => {
    const colorMap = {
      red: {
        bg: 'bg-red-500 hover:bg-red-600',
        text: 'text-red-500',
        border: 'border-red-500'
      },
      dark: {
        bg: 'bg-gray-900 hover:bg-gray-800',
        text: 'text-gray-900',
        border: 'border-gray-900'
      },
      gray: {
        bg: 'bg-gray-600 hover:bg-gray-700',
        text: 'text-gray-600',
        border: 'border-gray-600'
      }
    };
    return colorMap[color as keyof typeof colorMap]?.[variant] || '';
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 板块标题 */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            品牌战略
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            从品牌命名、文化理念到视觉表达，系统呈现寰曜数智的定位逻辑与价值主张
          </p>
        </div>

        {/* 策略亮点卡片 - 置顶 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-3 sm:mb-4 lg:mb-6">
              <Target className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">战略定位</h3>
            <p className="text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base">立足中原，服务政企，以数智能力支撑组织升级与产业发展</p>
          </div>
          
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mb-3 sm:mb-4 lg:mb-6">
              <Eye className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">品牌愿景</h3>
            <p className="text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base">成为最值得信赖的政企数智化升级伙伴</p>
          </div>
          
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gray-600 text-white rounded-full flex items-center justify-center mb-3 sm:mb-4 lg:mb-6">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">核心能力</h3>
            <p className="text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base">以数为基，以智为擎，打通规划、建设与运营的升级链路</p>
          </div>
        </div>

        {/* 品牌详情标签区域 */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          {/* 标签导航栏 */}
          <div className="border-b border-gray-200">
            {/* 桌面端显示 */}
            <div className="hidden md:flex">
              {strategyCards.map((card) => (
                <button
                  key={card.id}
                  onClick={() => setActiveCard(activeCard === card.id ? null : card.id)}
                  className={`flex-1 flex items-center justify-center space-x-3 px-6 py-4 transition-all duration-300 border-b-2 ${
                    activeCard === card.id
                      ? `${getColorClasses(card.color, 'bg')} text-white border-transparent`
                      : 'bg-gray-50 text-gray-600 border-transparent hover:bg-gray-100'
                  }`}
                >
                  {card.icon}
                  <span className="font-medium">{card.title}</span>
                  {activeCard === card.id ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              ))}
            </div>
            
            {/* 移动端显示 - 垂直布局 */}
            <div className="md:hidden">
              {strategyCards.map((card) => (
                <button
                  key={card.id}
                  onClick={() => setActiveCard(activeCard === card.id ? null : card.id)}
                  className={`w-full flex items-center justify-between px-4 py-4 transition-all duration-300 ${
                    activeCard === card.id
                      ? `${getColorClasses(card.color, 'bg')} text-white`
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  } ${card.id !== 'culture' ? 'border-b border-gray-200' : ''}`}
                >
                  <div className="flex items-center space-x-3">
                    {card.icon}
                    <span className="font-medium text-sm">{card.title}</span>
                  </div>
                  {activeCard === card.id ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* 标签内容区域 */}
          <div className="p-4 sm:p-6 lg:p-8">
            {activeCard && (
              <div className="space-y-4 sm:space-y-6 lg:space-y-6">
                {/* 标题区域 */}
                <div>
                  <h4 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {strategyCards.find(card => card.id === activeCard)?.content.title}
                  </h4>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                    {strategyCards.find(card => card.id === activeCard)?.content.subtitle}
                  </p>
                </div>

                {/* 内容区域 */}
                <div className="space-y-6 lg:space-y-8">
                  {strategyCards.find(card => card.id === activeCard)?.content.sections.map((section, index) => (
                    <div key={index} className="space-y-3 sm:space-y-4">
                      <h5 className="text-lg sm:text-xl lg:text-xl font-semibold text-gray-900 flex items-center space-x-2 sm:space-x-3">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full flex-shrink-0" />
                        <span className="text-sm sm:text-base lg:text-base">{section.title}</span>
                      </h5>
                      
                      {Array.isArray(section.content) ? (
                        <div className="space-y-2 sm:space-y-3 pl-4 sm:pl-6">
                          {section.content.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start space-x-3 sm:space-x-4">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-600 rounded-full mt-2.5 flex-shrink-0" />
                              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{item}</p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-700 leading-relaxed pl-4 sm:pl-6 text-sm sm:text-base">
                          {section.content}
                        </p>
                      )}
                    </div>
                  ))}

                  {/* 重点强调内容 */}
                  {strategyCards.find(card => card.id === activeCard)?.content.highlight && (
                    <div className={`${getColorClasses(strategyCards.find(card => card.id === activeCard)?.color || 'red', 'bg')} text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mt-6 sm:mt-8`}>
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                        <div>
                          <p className="text-base sm:text-lg lg:text-xl font-semibold mb-2">核心理念</p>
                          <p className="text-sm sm:text-base lg:text-lg text-gray-100 leading-relaxed">
                            {strategyCards.find(card => card.id === activeCard)?.content.highlight}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* 默认状态提示 */}
            {!activeCard && (
              <div className="text-center py-12 sm:py-16">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">选择品牌详情</h4>
                <p className="text-gray-600 text-sm sm:text-base">点击上方标签查看寰曜数智的详细品牌战略内容</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { BrandStrategy };
