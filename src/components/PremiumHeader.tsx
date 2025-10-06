import { useState, useEffect } from 'react';

export function PremiumHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-amber-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center">
            <img 
              src="https://i.imgur.com/lpUIgGl.png" 
              alt="XTRADERS Logo"
              className="h-6 lg:h-8 transition-all duration-300 hover:scale-105"
            />
          </div>
          
          <div className="hidden lg:flex items-center space-x-2 text-gray-400">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <span className="text-amber-400 text-xs font-medium tracking-wider">
              GRUPO EXCLUSIVO
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}