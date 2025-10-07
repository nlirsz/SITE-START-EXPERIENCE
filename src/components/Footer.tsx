import logoImage from 'figma:asset/894afadddaf280c3d8765c74994c18d4905353f6.png';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6">
          
          {/* Logo and brand */}
          <div className="space-y-3">
            <picture>
              <source srcSet={logoImage.replace('.png', '.webp')} type="image/webp" />
              <img 
                src={logoImage}
                alt="Start Experience Logo"
                className="h-10 mx-auto opacity-80"
                loading="lazy"
              />
            </picture>
            <p className="text-gray-400 max-w-xl mx-auto leading-relaxed text-sm">
              Transformando a relação entre investidores e o mercado financeiro através de 
              informações exclusivas e estratégias premium.
            </p>
          </div>
          
          {/* Divider */}
          <div className="w-16 h-px bg-gray-700 mx-auto"></div>
          
          {/* Legal and disclaimers */}
          <div className="space-y-3">
            <p className="text-gray-500 text-sm">
              &copy; 2025 Start Experience | Todos os Direitos Reservados.
            </p>
            <p className="text-gray-600 text-xs max-w-3xl mx-auto leading-relaxed">
              <strong>Aviso Legal:</strong> Investimentos envolvem riscos significativos. Rentabilidade passada não garante resultados futuros. 
              As informações fornecidas são para fins educacionais e não constituem aconselhamento financeiro personalizado. 
              Consulte sempre um consultor financeiro qualificado antes de tomar decisões de investimento.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}