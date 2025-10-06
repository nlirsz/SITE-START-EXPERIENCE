import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Loader2, ArrowRight, Crown, Shield, Zap } from 'lucide-react';

export function EliteAccessForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    instagram: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbwof2CXa8DX28wjQBTt4HFPFgeVF28CXfIB6EGLGIXAXlyPyniDl4aNvrfTZQ7w5pA0/exec';
      const whatsappURL = 'https://chat.whatsapp.com/ImQP6AhyldABBXk7deRCLR';
      
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      await fetch(scriptURL, { 
        method: 'POST', 
        body: formDataToSend 
      });
      
      window.location.href = whatsappURL;
    } catch (error) {
      console.error('Error:', error);
      window.location.href = 'https://chat.whatsapp.com/ImQP6AhyldABBXk7deRCLR';
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="elite-access" className="py-16 lg:py-24 bg-black relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-amber-400/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Clean section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Seu Acesso{' '}
            <span className="text-amber-400">Começa Agora</span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Faça o cadastro abaixo para ter acesso ao grupo onde serão disponibilizados os conteúdos.
          </p>
        </div>
        
        {/* Clean form container */}
        <div className="max-w-xl mx-auto">
          <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden">
            
            <div className="relative p-6 lg:p-8">
              <div className="text-center mb-6">
                <p className="text-gray-300 leading-relaxed">
                  Para garantir sua vaga, preencha os campos abaixo. Após o envio, você será direcionado automaticamente para o grupo exclusivo.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-white">Nome completo *</Label>
                  <Input
                    id="nome"
                    name="nome"
                    type="text"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-amber-400 focus:ring-amber-400/20 h-12 rounded-lg"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Seu melhor email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-amber-400 focus:ring-amber-400/20 h-12 rounded-lg"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="text-white">WhatsApp (com DDD) *</Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-amber-400 focus:ring-amber-400/20 h-12 rounded-lg"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="instagram" className="text-white">Seu @ do Instagram (opcional)</Label>
                  <Input
                    id="instagram"
                    name="instagram"
                    type="text"
                    value={formData.instagram}
                    onChange={handleInputChange}
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-amber-400 focus:ring-amber-400/20 h-12 rounded-lg"
                    placeholder="@seuinstagram"
                  />
                </div>
                
                {/* Clean CTA button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 font-bold bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black border-0 rounded-lg transition-all duration-300 hover:scale-105 group relative overflow-hidden mt-6"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>PROCESSANDO...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <span>QUERO MINHA VAGA</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </Button>
                
                {/* Clean disclaimer */}
                <div className="text-center space-y-2 pt-4">
                  <p className="text-gray-400 text-sm">
                    Você será redirecionado para o grupo de WhatsApp após o envio.
                  </p>
                  <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                    <span>✓ Dados protegidos</span>
                    <span>✓ Acesso instantâneo</span>
                    <span>✓ Grupo vitalício</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}