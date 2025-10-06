import { Clock, TrendingUp, BookOpen } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Morning Call',
    description: 'Participe de um Morning Call 100% técnico mapeando os principais ativos e regiões para serem operadas no dia. Diariamente as 09:15h.',
    badge: 'Diário'
  },
  {
    icon: TrendingUp,
    title: 'Fechamento de Mercado',
    description: 'Receba um vídeo ao final do dia com as principais operações e leituras realizadas durante o pregão. Este é um excelente material para quem busca aprofundar seus conhecimentos práticos no mercado.',
    badge: 'Premium'
  },
  {
    icon: BookOpen,
    title: 'Dicas Operacionais para Iniciantes',
    description: 'Vou mostrar o passo a passo sobre como fazer dinheiro no mercado além de insigths técnicos valiosos que ninguém te ensina de graça!',
    badge: 'Exclusivo'
  }
];

export function BenefitsSection() {
  return (
    <section className="py-16 lg:py-24 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F2FF00]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#F2FF00]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4 leading-tight">
            O que você recebe no{' '}
            <span className="text-[#F2FF00]">Grupo Exclusivo</span>
          </h2>
        </div>

        {/* Benefits grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group relative bg-black/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-800 hover:border-[#F2FF00]/30"
              >
                {/* Badge */}
                
                {/* Icon */}
                <div className="w-14 h-14 bg-[#F2FF00]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F2FF00]/20 transition-colors">
                  <Icon className="w-7 h-7 text-[#F2FF00]" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}