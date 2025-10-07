import { ArrowRight } from 'lucide-react';
import newReferenceImage from 'figma:asset/fdfda97c8c9fe36618dc067011ed3c34c1b512e2.png';

export function EliteHeroSection() {
  const scrollToAccess = () => {
    document.getElementById('elite-access')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-black relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-400/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-amber-400/2 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Image Section - Left */}
          <div className="lg:order-1 order-2 flex justify-center lg:justify-start">
            <div className="relative">
              <picture>
                <source
                  srcSet={
                    `/imgs/fdfda97c8c9fe36618dc067011ed3c34c1b512e2-480.webp 480w, ` +
                    `/imgs/fdfda97c8c9fe36618dc067011ed3c34c1b512e2-768.webp 768w, ` +
                    `/imgs/fdfda97c8c9fe36618dc067011ed3c34c1b512e2-1200.webp 1200w, ` +
                    `/imgs/fdfda97c8c9fe36618dc067011ed3c34c1b512e2-1800.webp 1800w`
                  }
                  type="image/webp"
                  sizes="(min-width: 1024px) 40vw, 80vw"
                />
                <img
                  src={newReferenceImage}
                  alt="Especialista em Trading"
                  className="w-full max-w-[480px] lg:max-w-[520px] h-auto object-contain"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
          
          {/* Content Section - Right */}
          <div className="lg:order-2 order-1 space-y-8 text-center lg:text-left">
            
            {/* Start Experience Logo/Title */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight">
                  <span className="text-amber-400">$</span>tart
                </h1>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight">
                  Experience
                </h2>
              </div>
            </div>
            
            {/* Subtitle */}
            <div className="space-y-6">
              <p className="text-lg lg:text-xl xl:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                O seu primeiro passo para operar no mercado financeiro e fazer dinheiro com{' '}
                <span className="text-amber-400 font-bold">CONSISTÊNCIA!</span>
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <button 
                onClick={scrollToAccess}
                className="group relative overflow-hidden bg-gradient-to-r from-amber-400 to-amber-500 text-black px-8 py-4 rounded-full font-bold text-base lg:text-lg hover:from-amber-300 hover:to-amber-400 transition-all duration-300 shadow-2xl hover:shadow-amber-400/25 hover:scale-105 min-w-[300px]"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>QUERO TRANSFORMAR MEUS<br/>RESULTADOS!</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-12 border-2 border-amber-400/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-amber-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}