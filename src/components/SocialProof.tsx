import { Star, TrendingUp, Users, Award, CheckCircle } from 'lucide-react';

export function SocialProof() {
  const stats = [
    { number: '1.247', label: 'Membros Exclusivos', icon: Users },
    { number: '∞', label: 'Retorno Médio', icon: TrendingUp },
    { number: '24/7', label: 'Suporte Elite', icon: CheckCircle },
    { number: '5★', label: 'Satisfação Premium', icon: Star }
  ];

  const testimonials = [
    {
      text: "Em 6 meses, meus resultados multiplicaram 400%. O nível de informação é incomparável.",
      author: "Rafael M.",
      role: "Investidor Institucional",
      result: "+400% ROI"
    },
    {
      text: "Acesso a insights que não encontro em lugar nenhum. Vale cada centavo investido.",
      author: "Marina L.",
      role: "Day Trader Profissional",
      result: "+280% Lucro"
    },
    {
      text: "O networking sozinho já pagou minha entrada. Conexões que mudaram meu jogo.",
      author: "Carlos F.",
      role: "Fund Manager",
      result: "+350% Portfolio"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-900 to-black relative">
      {/* Premium background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(251,191,36,0.05),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(251,191,36,0.03),transparent_70%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Premium stats section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Números que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Impressionam
            </span>
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl p-6 lg:p-8 rounded-3xl border border-gray-800 hover:border-amber-400/30 transition-all duration-300 hover:scale-105">
                    <Icon className="w-8 h-8 text-amber-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl lg:text-4xl font-black text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm font-medium tracking-wider">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Premium testimonials */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Palavras de Quem{' '}
              <span className="text-amber-400">Está Dentro</span>
            </h3>
            <p className="text-gray-300 text-lg">Resultados reais de membros do círculo exclusivo</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-amber-400/50 transition-all duration-500 hover:scale-105 h-full">
                  
                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 text-6xl text-amber-400/20 font-serif leading-none">"</div>
                  
                  {/* Star rating */}
                  <div className="flex space-x-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Testimonial text */}
                  <p className="text-gray-300 leading-relaxed mb-6 relative z-10">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author info */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white">{testimonial.author}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    </div>
                    
                    {/* Result badge */}
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {testimonial.result}
                    </div>
                  </div>
                  
                  {/* Luxury hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-8 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-xl px-8 py-4 rounded-2xl border border-gray-700">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span className="text-gray-300 text-sm font-medium">Certificado Elite</span>
            </div>
            <div className="w-px h-6 bg-gray-600"></div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-gray-300 text-sm font-medium">100% Verificado</span>
            </div>
            <div className="w-px h-6 bg-gray-600"></div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-amber-400 fill-current" />
              <span className="text-gray-300 text-sm font-medium">Avaliação Máxima</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}