import { Clock, ArrowRight, Crown, Users, Zap } from 'lucide-react';

export function UrgencySection() {
  const scrollToAccess = () => {
    document.getElementById('elite-access')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Premium urgency effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.05),transparent_70%)]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        
        {/* Urgency badge */}
        <div className="inline-flex items-center space-x-2 bg-red-500/20 border border-red-500/30 rounded-full px-6 py-2 mb-8 animate-pulse">
          <Clock className="w-4 h-4 text-red-400" />
          <span className="text-red-400 text-sm font-medium tracking-wider">VAGAS LIMITADAS</span>
        </div>

        {/* Main urgency headline */}
        <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
          Última Chance de{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-400">
            Entrar Hoje
          </span>
        </h2>
        
        <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
          Este ciclo de admissões fecha em breve. A próxima oportunidade pode não chegar tão cedo.
          <span className="text-amber-400 font-semibold block mt-2">
            Não deixe esta decisão para amanhã.
          </span>
        </p>

        {/* Scarcity indicators */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl p-6 rounded-3xl border border-gray-800">
            <Users className="w-8 h-8 text-amber-400 mx-auto mb-3" />
            <div className="text-2xl font-black text-white mb-1">47</div>
            <div className="text-gray-400 text-sm">Vagas Restantes</div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl p-6 rounded-3xl border border-gray-800">
            <Crown className="w-8 h-8 text-amber-400 mx-auto mb-3" />
            <div className="text-2xl font-black text-white mb-1">VIP</div>
            <div className="text-gray-400 text-sm">Status Garantido</div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl p-6 rounded-3xl border border-gray-800">
            <Zap className="w-8 h-8 text-amber-400 mx-auto mb-3" />
            <div className="text-2xl font-black text-white mb-1">24h</div>
            <div className="text-gray-400 text-sm">Acesso Imediato</div>
          </div>
        </div>

        {/* Premium final CTA */}
        <div className="space-y-6">
          <button 
            onClick={scrollToAccess}
            className="group relative overflow-hidden bg-gradient-to-r from-red-500 to-amber-500 text-white px-12 py-6 rounded-3xl font-bold text-xl hover:from-red-400 hover:to-amber-400 transition-all duration-300 shadow-2xl hover:shadow-red-500/25 hover:scale-105 animate-pulse hover:animate-none"
          >
            <span className="relative z-10 flex items-center justify-center space-x-3">
              <Crown className="w-6 h-6" />
              <span>GARANTIR MINHA VAGA AGORA</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
          </button>
          
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Ao clicar acima, você será direcionado para completar seu acesso ao círculo exclusivo. 
            <span className="text-amber-400">Esta oferta é limitada e pode expirar a qualquer momento.</span>
          </p>
        </div>

        {/* Exclusivity reinforcement */}
        <div className="mt-16 p-8 bg-gradient-to-r from-amber-400/10 to-amber-600/10 border border-amber-400/20 rounded-3xl">
          <h3 className="text-2xl font-bold text-white mb-4">Por que a exclusividade importa?</h3>
          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Informações valiosas perdem valor quando se tornam públicas. Mantemos nosso grupo pequeno e seleto 
            para garantir que cada membro tenha acesso a oportunidades verdadeiramente exclusivas.
          </p>
        </div>
      </div>
    </section>
  );
}