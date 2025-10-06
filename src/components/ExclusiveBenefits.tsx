import { Shield, Zap, Target } from 'lucide-react';

export function ExclusiveBenefits() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-black to-gray-900 relative">
      {/* Luxury background texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(251,191,36,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(251,191,36,0.05),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Premium section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-6 py-2 mb-8">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <span className="text-amber-400 text-sm font-medium tracking-wider">POR QUE É INDISPENSÁVEL</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Acesso ao que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              99% nunca terá
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Este não é um grupo comum. É o epicentro onde decisões milionárias são compartilhadas 
            e oportunidades exclusivas nascem.
          </p>
        </div>

        {/* Premium benefits grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: "Proteção de Capital",
              description: "Estratégias defensivas utilizadas por gestores de fundos bilionários para preservar e multiplicar patrimônio.",
              gradient: "from-emerald-500 to-teal-600",
              glow: "emerald"
            },
            {
              icon: Zap,
              title: "Timing Perfeito",
              description: "Alertas instantâneos de movimentos de mercado antes que se tornem públicos. Vantagem competitiva real.",
              gradient: "from-amber-500 to-orange-600",
              glow: "amber"
            },
            {
              icon: Target,
              title: "Precisão Cirúrgica",
              description: "Análises técnicas exclusivas que identificam pontos de entrada e saída com precisão institucional.",
              gradient: "from-blue-500 to-indigo-600",
              glow: "blue"
            }
          ].map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group relative"
              >
                {/* Luxury card with premium styling */}
                <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-gray-800/50 hover:border-amber-400/30 transition-all duration-500 hover:scale-105 h-full">
                  
                  {/* Premium icon */}
                  <div className={`relative w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                    <Icon className="w-8 h-8 text-white" />
                    <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>
                  </div>
                  
                  {/* Premium content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {benefit.description}
                  </p>
                  
                  {/* Luxury hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  
                  {/* Premium corner accent */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}