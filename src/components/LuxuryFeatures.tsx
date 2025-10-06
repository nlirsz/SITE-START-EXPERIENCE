import { Clock, TrendingUp, BookOpen } from 'lucide-react';

const premiumFeatures = [
  {
    icon: Clock,
    title: 'Morning Call',
    description: 'Participe de um Morning Call 100% técnico mapeando os principais ativos e regiões para serem operadas no dia. Diariamente as 09:15h.',
    badge: 'Diário',
    luxury: true
  },
  {
    icon: TrendingUp,
    title: 'Fechamento de Mercado',
    description: 'Receba um vídeo ao final do dia com as principais operações e leituras realizadas durante o pregão. Este é um excelente material para quem busca aprofundar seus conhecimentos práticos no mercado.',
    badge: 'Exclusivo',
    luxury: true
  },
  {
    icon: BookOpen,
    title: 'Dicas Operacionais para Iniciantes',
    description: 'Vou mostrar o passo a passo sobre como fazer dinheiro no mercado além de insigths técnicos valiosos que ninguém te ensina de graça!',
    badge: 'Premium',
    luxury: false
  }
];

export function LuxuryFeatures() {
  return (
    <section className="py-16 lg:py-24 bg-gray-900 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-400/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-400/2 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Clean section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4 leading-tight">
            O que você recebe no{' '}
            <span className="text-amber-400">Grupo Exclusivo</span>
          </h2>
        </div>

        {/* Clean features grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {premiumFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group relative"
              >
                {/* Clean card */}
                <div className="relative bg-black/50 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-gray-800 hover:border-amber-400/30 transition-all duration-300 hover:scale-105 h-full">
                  
                  {/* Clean badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium tracking-wider ${
                    feature.luxury 
                      ? 'bg-amber-400 text-black' 
                      : 'bg-gray-800 text-amber-400 border border-amber-400/30'
                  }`}>
                    {feature.badge}
                  </div>
                  
                  {/* Icon with clean styling */}
                  <div className="relative w-12 h-12 bg-amber-400/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-400/20 transition-all duration-300">
                    <Icon className="w-6 h-6 text-amber-400" />
                  </div>
                  
                  {/* Clean content */}
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}