
import React, { useState } from 'react';
import { Heart, Download, Instagram, Play, Coffee, Camera, Users, Award } from 'lucide-react';
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
      <header className="relative z-10 pt-16 pb-12 bg-gradient-to-br from-coffee-50 to-rose-50">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-8 animate-fade-in">
            {/* Logo/Brand */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-16 h-16 rounded-full coffee-gradient flex items-center justify-center shadow-lg">
                <Coffee className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-coffee-800">Café de Negócios</h1>
            </div>

            {/* Main Title */}
            <h2 className="text-5xl md:text-7xl font-bold text-coffee-900 leading-tight max-w-4xl mx-auto">
              Onde conexões se encontram
              <span className="block text-transparent bg-gradient-to-r from-coffee-600 to-rose-600 bg-clip-text">
                com propósito
              </span>
            </h2>

            {/* Description */}
            <p className="text-xl md:text-2xl text-coffee-700 max-w-5xl mx-auto leading-relaxed font-light">
              O Café de Negócios é um encontro que nasce do coração de duas empreendedoras e se transforma em espaço de acolhimento, troca e ação. Aqui, cada xícara de café carrega histórias de coragem, superação e colaboração entre mulheres que estão fazendo acontecer.
            </p>
          </div>
        </div>
      </header>

      {/* Personal Photography Presentation Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white relative overflow-hidden">
        {/* Artistic Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.02\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
          <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-rose-500/10 to-transparent blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-amber-500/10 to-transparent blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Author Tag */}
            <div className="mb-8 text-center">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-rose-300 border border-white/20">
                Fotografado por Eduardo Mendes
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content - Personal Photo */}
              <div className="relative order-2 lg:order-1">
                <div className="relative">
                  {/* Main photo with artistic frame */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-400/20 to-amber-400/20 rounded-2xl blur-xl transform rotate-3 scale-105"></div>
                    <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-3 rounded-2xl shadow-2xl">
                      <img
                        src="https://duhmendes.com.br/uploaduh/20250609_aniversariofatima/DSC_7142_semlogo.jpg"
                        alt="Eduardo Mendes - Fotógrafo"
                        className="w-full h-[500px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-3 rounded-xl bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  
                  {/* Floating camera icon */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center shadow-xl animate-float">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Right Content - Personal Message */}
              <div className="space-y-8 order-1 lg:order-2">
                <div className="space-y-6">
                  <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                    Olá, eu sou o
                    <span className="block text-transparent bg-gradient-to-r from-rose-400 via-rose-300 to-amber-300 bg-clip-text">
                      Eduardo Mendes
                    </span>
                  </h2>
                  
                  <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-amber-400 rounded-full"></div>
                  
                  <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
                    Fotografo profissional há mais de uma década. Especializo-me em capturar a essência única de cada momento, transformando instantes em memórias eternas através da minha lente.
                  </p>
                </div>

                <div className="space-y-6">
                  <p className="text-lg text-slate-400 leading-relaxed">
                    Meu trabalho vai além de simplesmente tirar fotos. Acredito que cada clique deve contar uma história, revelar uma emoção e preservar a autenticidade do momento. Seja documentando eventos corporativos importantes ou criando retratos que capturam a verdadeira personalidade de cada pessoa.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-rose-500/20 to-rose-600/20 rounded-lg flex items-center justify-center">
                          <Award className="w-5 h-5 text-rose-400" />
                        </div>
                        <span className="font-semibold text-white">+10 anos</span>
                      </div>
                      <p className="text-slate-400 text-sm">De experiência capturando momentos únicos</p>
                    </div>
                    
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-lg flex items-center justify-center">
                          <Users className="w-5 h-5 text-amber-400" />
                        </div>
                        <span className="font-semibold text-white">500+ eventos</span>
                      </div>
                      <p className="text-slate-400 text-sm">Fotografados com excelência e dedicação</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white border-0 px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.open('https://duhmendes.com.br', '_blank')}
                  >
                    <Camera className="w-5 h-5 mr-2" />
                    Conheça meu portfólio
                  </Button>
                  
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold backdrop-blur-md"
                    onClick={() => window.open('https://www.instagram.com/eduardomendesfoto/', '_blank')}
                  >
                    <Instagram className="w-5 h-5 mr-2" />
                    Me siga no Instagram
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-background to-coffee-50 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-6">
            <h3 className="text-sm font-semibold text-coffee-600 uppercase tracking-wider">
              Galeria de Fotos
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-coffee-900">
              Momentos especiais do
              <span className="block text-transparent bg-gradient-to-r from-coffee-600 to-rose-600 bg-clip-text">
                Café de Negócios
              </span>
            </h2>
            <p className="text-lg text-coffee-700 max-w-3xl mx-auto">
              Cada imagem conta uma história de conexão, empoderamento e crescimento. Reviva os melhores momentos deste encontro transformador.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((photo, index) => (
              <Card key={index} className="photo-card group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={photo}
                    alt={`Café de Negócios - Foto ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Actions */}
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100 flex gap-2">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => toggleLike(index)}
                      className={`flex-1 bg-white/20 backdrop-blur-md text-white border-white/30 hover:bg-white/30 ${
                        likes[index] ? 'bg-rose-500/40' : ''
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
                      className="flex-1 bg-white/20 backdrop-blur-md text-white border-white/30 hover:bg-white/30"
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>

                  {/* Photo Number Badge */}
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center text-sm font-bold text-coffee-800 shadow-lg">
                    {index + 1}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-coffee-50 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-8 animate-fade-in">
            <h3 className="text-4xl md:text-5xl font-bold text-coffee-900">
              Compartilhe esse momento
            </h3>
            <p className="text-xl text-coffee-700 max-w-3xl mx-auto leading-relaxed">
              Faça parte dessa rede de mulheres empreendedoras que estão transformando sonhos em realidade. Juntas, somos mais fortes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="coffee-gradient text-white hover:shadow-lg transition-all duration-300 px-8 py-6 text-lg font-semibold"
                onClick={() => window.open('https://www.instagram.com/cafedenegociosmm/', '_blank')}
              >
                <Instagram className="w-5 h-5 mr-2" />
                Siga o Café de Negócios
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-coffee-300 text-coffee-700 hover:bg-coffee-50 px-8 py-6 text-lg font-semibold"
                onClick={() => window.open('https://duhmendes.com.br', '_blank')}
              >
                <Camera className="w-5 h-5 mr-2" />
                Visite nosso site
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-coffee-900 text-white relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-12">
            <h4 className="text-3xl font-bold mb-8">
              Conheça nossas empreendedoras
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Projeto */}
              <Card className="p-8 bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 text-white">
                <div className="space-y-4 text-center">
                  <div className="w-16 h-16 rounded-full coffee-gradient mx-auto flex items-center justify-center shadow-lg">
                    <Coffee className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="text-xl font-semibold">Café de Negócios</h5>
                  <p className="text-coffee-200">Projeto oficial</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open('https://www.instagram.com/cafedenegociosmm/', '_blank')}
                    className="w-full border-white/30 text-white hover:bg-white/10"
                  >
                    <Instagram className="w-4 h-4 mr-1" />
                    Seguir
                  </Button>
                </div>
              </Card>

              {/* Maria Maciel */}
              <Card className="p-8 bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 text-white">
                <div className="space-y-4 text-center">
                  <div className="w-16 h-16 rounded-full rose-gradient mx-auto flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">MM</span>
                  </div>
                  <h5 className="text-xl font-semibold">Maria Maciel</h5>
                  <p className="text-coffee-200">Consultoria e Desenvolvimento</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open('https://www.instagram.com/mr.consultoriaedesenvolvimento/', '_blank')}
                    className="w-full border-white/30 text-white hover:bg-white/10"
                  >
                    <Instagram className="w-4 h-4 mr-1" />
                    Seguir
                  </Button>
                </div>
              </Card>

              {/* Dra. Maiara */}
              <Card className="p-8 bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 text-white">
                <div className="space-y-4 text-center">
                  <div className="w-16 h-16 rounded-full rose-gradient mx-auto flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">DM</span>
                  </div>
                  <h5 className="text-xl font-semibold">Dra. Maiara Medeiros</h5>
                  <p className="text-coffee-200">Empreendedora e Mentora</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open('https://www.instagram.com/dra.maiaradumedeiros/', '_blank')}
                    className="w-full border-white/30 text-white hover:bg-white/10"
                  >
                    <Instagram className="w-4 h-4 mr-1" />
                    Seguir
                  </Button>
                </div>
              </Card>
            </div>

            <div className="pt-8 border-t border-white/20">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-coffee-200">
                  &copy; 2024 Café de Negócios. Feito com 💜 para empoderar mulheres empreendedoras.
                </p>
                <p className="text-coffee-200">
                  Fotografias por <a href="https://duhmendes.com.br" target="_blank" rel="noopener noreferrer" className="text-rose-300 hover:text-rose-200 transition-colors font-semibold">duhmendes.com.br</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CafeDeNegociosGallery;
