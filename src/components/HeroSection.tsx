import heroImage from 'figma:asset/2cb7bc41bd3f74a208745df70e5bb0f89794147c.png';
import startLogoImage from 'figma:asset/b59dfb3641a9d1362ac5bf5fbc56a9e87f8383fc.png';

export function HeroSection() {
  const scrollToForm = () => {
    document.getElementById('acesso')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-20 pb-16 lg:pt-32 lg:pb-24 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#F2FF00]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#F2FF00]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Mobile Layout - Vertical: Image Top, Content Bottom */}
        <div className="lg:hidden flex flex-col space-y-8">
          
          {/* Image Section - Top (Mobile Only) */}
          <div className="relative flex justify-center">
            <div className="relative max-w-2xl mx-auto">
              <picture>
                <source
                  srcSet={
                    `/imgs/2cb7bc41bd3f74a208745df70e5bb0f89794147c-480.webp 480w, ` +
                    `/imgs/2cb7bc41bd3f74a208745df70e5bb0f89794147c-768.webp 768w, ` +
                    `/imgs/2cb7bc41bd3f74a208745df70e5bb0f89794147c-1200.webp 1200w, ` +
                    `/imgs/2cb7bc41bd3f74a208745df70e5bb0f89794147c-1800.webp 1800w`
                  }
                  type="image/webp"
                  sizes="100vw"
                />
                <img
                  src={heroImage}
                  alt="Especialistas em Trading"
                  className="w-full h-auto object-contain"
                  loading="eager"
                />
              </picture>
              
              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#F2FF00]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-[#F2FF00]/10 rounded-full blur-xl"></div>
            </div>
          </div>
          
          {/* Content Section - Bottom (Mobile Only) */}
          <div className="space-y-8 text-center">
            
            {/* Logo/Brand */}
            <div className="space-y-6">
              <h1 className="text-4xl font-black text-white leading-tight flex flex-col items-center">
                <img 
                  src="https://i.ibb.co/1CNPbY8/LOGO-START-1.png"
                  alt="Start Logo"
                  className="h-16 w-auto mb-2"
                  loading="lazy"
                />
                <span className="text-[64px]">Experience</span>
              </h1>
              
              <div className="w-24 h-1 bg-[#F2FF00] mx-auto"></div>
            </div>
            
            {/* Subtitle */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-xl mx-auto">
              O seu primeiro passo para operar no mercado financeiro e fazer dinheiro com{' '}
              <span className="font-bold text-[#F2FF00]">CONSISTÊNCIA!</span>
            </p>
            
            {/* CTA Button */}
            <div className="pt-4">
              <button 
                onClick={scrollToForm}
                className="bg-[#F2FF00] hover:bg-[#E8F500] text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl transform-gpu mx-auto block text-center"
              >
                QUERO TRANSFORMAR MEUS RESULTADOS!
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Horizontal: Side by Side (Original) */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content Side - Left */}
          <div className="space-y-8 text-center lg:text-left">
            
            {/* Logo/Brand */}
            <div className="space-y-6">
              <h1 className="text-6xl xl:text-7xl font-black text-white leading-tight flex flex-col items-center lg:items-start">
                <img 
                  src="https://i.ibb.co/1CNPbY8/LOGO-START-1.png"
                  alt="Start Logo"
                  className="h-12 xl:h-16 w-auto mb-2"
                  loading="lazy"
                />
                <span>Experience</span>
              </h1>
              
              <div className="w-24 h-1 bg-[#F2FF00] mx-auto lg:mx-0"></div>
            </div>
            
            {/* Subtitle */}
            <p className="text-2xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              O seu primeiro passo para operar no mercado financeiro e fazer dinheiro com{' '}
              <span className="font-bold text-[#F2FF00]">CONSISTÊNCIA!</span>
            </p>
            
            {/* CTA Button */}
            <div className="pt-4">
              <button 
                onClick={scrollToForm}
                className="bg-[#F2FF00] hover:bg-[#E8F500] text-black px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl transform-gpu"
              >
                QUERO TRANSFORMAR MEUS RESULTADOS!
              </button>
            </div>
          </div>
          
          {/* Image Side - Right */}
          <div className="relative">
            <div className="relative max-w-3xl lg:max-w-4xl mx-auto">
              <picture>
                <source
                  srcSet={
                    `/imgs/2cb7bc41bd3f74a208745df70e5bb0f89794147c-480.webp 480w, ` +
                    `/imgs/2cb7bc41bd3f74a208745df70e5bb0f89794147c-768.webp 768w, ` +
                    `/imgs/2cb7bc41bd3f74a208745df70e5bb0f89794147c-1200.webp 1200w, ` +
                    `/imgs/2cb7bc41bd3f74a208745df70e5bb0f89794147c-1800.webp 1800w`
                  }
                  type="image/webp"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <img
                  src={heroImage}
                  alt="Especialistas em Trading"
                  className="w-full h-auto object-contain scale-125 lg:scale-150 xl:scale-[1.75]"
                  loading="eager"
                />
              </picture>
              
              {/* Floating elements */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#F2FF00]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-[#F2FF00]/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}