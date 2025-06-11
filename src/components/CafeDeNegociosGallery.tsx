
import React, { useState } from 'react';
import { Heart, Download, Instagram, Play, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const photos = [
  'https://duhmendes.com.br/uploaduh/cafedenegociosmm/20250610/cafedenegocios_gravacao-3012.jpg',
  'https://duhmendes.com.br/uploaduh/cafedenegociosmm/20250610/cafedenegocios_gravacao-3014.jpg',
  'https://duhmendes.com.br/uploaduh/cafedenegociosmm/20250610/cafedenegocios_gravacao-3019.jpg',
  'https://duhmendes.com.br/uploaduh/cafedenegociosmm/20250610/cafedenegocios_gravacao-3021.jpg',
  'https://duhmendes.com.br/uploaduh/cafedenegociosmm/20250610/cafedenegocios_gravacao-3001.jpg',
  'https://duhmendes.com.br/uploaduh/cafedenegociosmm/20250610/cafedenegocios_gravacao-3004.jpg',
  'https://duhmendes.com.br/uploaduh/cafedenegociosmm/20250610/cafedenegocios_gravacao-3010.jpg',
];

const CafeDeNegociosGallery = () => {
  const [likes, setLikes] = useState<Record<number, boolean>>({});

  const toggleLike = (index: number) => {
    setLikes(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const downloadImage = async (url: string, index: number) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `cafe-de-negocios-${index + 1}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error('Erro ao fazer download:', error);
    }
  };

  const FloatingCoffeeBean = ({ className = '' }: { className?: string }) => (
    <div className={`absolute w-3 h-4 bg-coffee-600 rounded-full opacity-20 animate-float ${className}`} />
  );

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating Coffee Elements */}
      <FloatingCoffeeBean className="top-20 left-[10%] animation-delay-0" />
      <FloatingCoffeeBean className="top-40 right-[15%] animation-delay-1000" />
      <FloatingCoffeeBean className="top-[60%] left-[5%] animation-delay-2000" />
      <FloatingCoffeeBean className="bottom-40 right-[8%] animation-delay-3000" />

      {/* Header */}
      <header className="relative z-10 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6 animate-fade-in">
            {/* Logo/Brand */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full coffee-gradient flex items-center justify-center">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-coffee-800">Café de Negócios</h1>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl md:text-6xl font-bold text-coffee-900 leading-tight">
              Onde conexões se encontram
              <span className="block text-transparent bg-gradient-to-r from-coffee-600 to-rose-600 bg-clip-text">
                com propósito
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-coffee-700 max-w-4xl mx-auto leading-relaxed">
              O Café de Negócios é um encontro que nasce do coração de duas empreendedoras e se transforma em espaço de acolhimento, troca e ação. Aqui, cada xícara de café carrega histórias de coragem, superação e colaboração entre mulheres que estão fazendo acontecer.
            </p>
          </div>
        </div>
      </header>

      {/* Gallery Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((photo, index) => (
              <Card key={index} className="photo-card group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={photo}
                    alt={`Café de Negócios - Foto ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Overlay Actions */}
                  <div className="photo-card-actions flex gap-2">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => toggleLike(index)}
                      className={`glass-effect text-white border-white/20 hover:bg-white/20 ${
                        likes[index] ? 'bg-rose-500/30' : ''
                      }`}
                    >
                      <Heart 
                        className={`w-4 h-4 mr-1 ${
                          likes[index] ? 'fill-current text-rose-400' : ''
                        }`} 
                      />
                      {likes[index] ? 'Curtido' : 'Curtir'}
                    </Button>
                    
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => downloadImage(photo, index)}
                      className="glass-effect text-white border-white/20 hover:bg-white/20"
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>

                  {/* Photo Number Badge */}
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-sm font-semibold text-coffee-800">
                    {index + 1}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-8 animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold text-coffee-900">
              Compartilhe esse momento
            </h3>
            <p className="text-lg text-coffee-700 max-w-2xl mx-auto">
              Faça parte dessa rede de mulheres empreendedoras que estão transformando sonhos em realidade.
            </p>
            <Button 
              size="lg"
              className="coffee-gradient text-white hover:shadow-lg transition-all duration-300 px-8 py-6 text-lg"
              onClick={() => window.open('https://www.instagram.com/cafedenegociosmm/', '_blank')}
            >
              <Instagram className="w-5 h-5 mr-2" />
              Veja mais sobre o projeto
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-coffee-200 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-8">
            <h4 className="text-2xl font-bold text-coffee-900 mb-6">
              Conheça nossas empreendedoras
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Projeto */}
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-coffee-200">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full coffee-gradient mx-auto flex items-center justify-center">
                    <Coffee className="w-6 h-6 text-white" />
                  </div>
                  <h5 className="font-semibold text-coffee-900">Café de Negócios</h5>
                  <p className="text-sm text-coffee-600">Projeto oficial</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open('https://www.instagram.com/cafedenegociosmm/', '_blank')}
                    className="w-full border-coffee-300 text-coffee-700 hover:bg-coffee-50"
                  >
                    <Instagram className="w-4 h-4 mr-1" />
                    Seguir
                  </Button>
                </div>
              </Card>

              {/* Maria Maciel */}
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-rose-200">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full rose-gradient mx-auto flex items-center justify-center">
                    <span className="text-white font-bold">MM</span>
                  </div>
                  <h5 className="font-semibold text-coffee-900">Maria Maciel</h5>
                  <p className="text-sm text-coffee-600">Consultoria e Desenvolvimento</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open('https://www.instagram.com/mr.consultoriaedesenvolvimento/', '_blank')}
                    className="w-full border-rose-300 text-rose-700 hover:bg-rose-50"
                  >
                    <Instagram className="w-4 h-4 mr-1" />
                    Seguir
                  </Button>
                </div>
              </Card>

              {/* Dra. Maiara */}
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-rose-200">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full rose-gradient mx-auto flex items-center justify-center">
                    <span className="text-white font-bold">DM</span>
                  </div>
                  <h5 className="font-semibold text-coffee-900">Dra. Maiara Medeiros</h5>
                  <p className="text-sm text-coffee-600">Empreendedora e Mentora</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open('https://www.instagram.com/dra.maiaradumedeiros/', '_blank')}
                    className="w-full border-rose-300 text-rose-700 hover:bg-rose-50"
                  >
                    <Instagram className="w-4 h-4 mr-1" />
                    Seguir
                  </Button>
                </div>
              </Card>
            </div>

            <div className="pt-8 border-t border-coffee-200">
              <p className="text-coffee-600">
                &copy; 2024 Café de Negócios. Feito com 💜 para empoderar mulheres empreendedoras.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CafeDeNegociosGallery;
