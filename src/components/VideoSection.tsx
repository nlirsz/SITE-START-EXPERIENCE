import { useEffect, useRef, useState } from 'react';

export function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setIsVisible(true);
          setHasStarted(true);
        }
      },
      {
        threshold: 0.3, // Inicia quando 30% da seção está visível
        rootMargin: '0px 0px -100px 0px' // Margem para iniciar um pouco antes
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasStarted]);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-black relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Porque você deveria{' '}
            <span className="text-[#F2FF00]">participar?</span>
          </h2>
        </div>

        {/* Video container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-black/80 p-2 lg:p-4 rounded-2xl shadow-xl border border-gray-800">
            <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
              <iframe 
                src={isVisible 
                  ? "https://www.youtube.com/embed/eN4PFr6k8G4?autoplay=1&mute=1" 
                  : "https://www.youtube.com/embed/eN4PFr6k8G4"
                } 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}