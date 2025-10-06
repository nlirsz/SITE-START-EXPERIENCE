import { useState, useEffect } from 'react';
import logoImage from 'figma:asset/82e9aa4305d14a141f96cd61edb751bfffae7b27.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('acesso')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-md shadow-sm border-b border-gray-800' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img 
              src={logoImage}
              alt="Start Experience Logo"
              className="h-10 lg:h-12"
            />
          </div>
          
          <div className="hidden lg:flex items-center">
            <button 
              onClick={scrollToForm}
              className="bg-[#F2FF00] hover:bg-[#E8F500] text-black px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              QUERO MINHA VAGA
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}