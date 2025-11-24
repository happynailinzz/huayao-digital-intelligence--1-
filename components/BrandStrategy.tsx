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
        subtitle: '基于品牌深度分析提炼的企业文化体系',
        sections: [
          {
            title: '企业使命',
            content: '"筑基数字中原，智绘产业未来。"'
          },
          {
            title: '使命解析',
            content: '基于其"中原数字经济赋能者"的定位，使命在于通过"东数西算"和"信创"构建基础设施（筑基），并通过AI和数字化手段重塑（智绘）政企和能源行业。'
          },
          {
            title: '企业愿景',
            content: '"成为最值得信赖的政企数字化转型与能源互联领航者。"'
          },
          {
            title: '愿景解析',
            content: '呼应"寰曜"之名，目标是成为行业内的光源与领导者（领航者），并在G端和B端建立高度的信任关系（值得信赖）。'
          },
          {
            title: '核心价值观',
            content: [
              '曜新（Innovation）：源于技术基因，坚持技术创新与国产化替代',
              '致稳（Reliability）：承接政企与能源项目，强调安全、稳定、可靠',
              '协同（Synergy）：强调"源网荷储"的互动及全方位协同服务',
              '赋能（Empowerment）：提升客户数字化生存能力与降本增效'
            ]
          }
        ],
        highlight: '数聚寰宇，能动未来。'
      }
    },
    {
      id: 'name',
      title: '品牌名称解析',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'red',
      content: {
        title: '寰曜数能',
        subtitle: 'HUANYAO SHUNENG - 品牌名称的深度解析',
        sections: [
          {
            title: '寰 (Huán) - 格局与广度',
            content: '意指"寰宇"、"天下"。象征着企业宽广的视野和宏大的格局。对应企业立足郑州、辐射中原、放眼全国的战略雄心，也代表其服务覆盖面广（涵盖政企、能源、教育等多个领域）。'
          },
          {
            title: '曜 (Yào) - 愿景与引领',
            content: '意为"照耀"、"光明"、"日月星辰的光芒"。寓意企业如光芒般指引方向，利用先进技术"照亮"传统行业的盲区，引领数字化转型的未来。'
          },
          {
            title: '数 (Shù) - 核心技术',
            content: '直指"大数据"、"数字化"、"算力"。对应企业的核心业务：东数西算、数据中心、信创、人工智能及数据标注。这是企业的立身之本。'
          },
          {
            title: '能 (Néng) - 核心领域与价值',
            content: '双重含义：一是物理层面的"能源"（源网荷储）；二是价值层面的"赋能"（Empowerment）。代表企业具备为政企客户提供核心能力、解决复杂问题的实力，同时深耕能源信息化领域。'
          }
        ],
        highlight: '"寰曜数能"寓意为——"以寰宇般的宏大视野，用数字技术的光芒，赋能产业能源与经济的高质量发展。"'
      }
    },
    {
      id: 'logo',
      title: 'Logo图形与用色',
      icon: <Palette className="w-6 h-6" />,
      color: 'dark',
      content: {
        title: '四象限矩阵设计',
        subtitle: 'Logo采用经典的"四象限矩阵"设计，稳重而具有科技感',
        sections: [
          {
            title: '图形形态分析',
            content: [
              '矩阵结构：四个方块代表着企业的"四位一体"服务能力（咨询规划、系统集成、产品销售、项目投融资）',
              '圆角方块：既像科技芯片的触点，象征核心算力；又像视窗，象征数字化转型的窗口',
              '聚合之势：四个方块紧密排列，象征着"源网荷储"的协同互动，也代表多源数据的汇聚与整合'
            ]
          },
          {
            title: '左上·浅灰',
            content: '象征云计算、未来、理性。对应业务：智能化与数字化转型、顶层设计。代表冷静的咨询规划能力与前瞻性。'
          },
          {
            title: '右上·红色',
            content: '象征活力、激情、国家战略。对应业务：信创国产化。暗示企业响应国家"自主可控"号召的决心。'
          },
          {
            title: '左下·深灰',
            content: '象征坚固、硬件、基础设施、工业。对应业务：算力与数据中心。代表硬件集成、底层基建的厚重感。'
          },
          {
            title: '右下·黑色',
            content: '象征深科技、宇宙深空、无限可能、权威。对应业务：人工智能与源网荷储。代表前沿技术探索。'
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
            深度解读寰曜数能的品牌内涵与企业精神，展现数字化转型的战略智慧
          </p>
        </div>

        {/* 策略亮点卡片 - 置顶 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-3 sm:mb-4 lg:mb-6">
              <Target className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">战略定位</h3>
            <p className="text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base">中原数字经济赋能者，政企数字化转型与能源互联领航者</p>
          </div>
          
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mb-3 sm:mb-4 lg:mb-6">
              <Eye className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">品牌愿景</h3>
            <p className="text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base">成为最值得信赖的政企数字化转型与能源互联领航者</p>
          </div>
          
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gray-600 text-white rounded-full flex items-center justify-center mb-3 sm:mb-4 lg:mb-6">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">核心能力</h3>
            <p className="text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base">数聚寰宇，能动未来 - 数字技术与能源赋能</p>
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
                <p className="text-gray-600 text-sm sm:text-base">点击上方标签查看寰曜数能的详细品牌战略内容</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { BrandStrategy };