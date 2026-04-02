/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Instagram, 
  ChevronRight,
  X,
  Maximize2,
  Target,
  Eye,
  Award
} from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/message/7GNWPLKR6DN5F1";
const INSTAGRAM_URL = "https://www.instagram.com/davi_alberguine/";

const RESULTS_IMAGES = [
  "https://i.imgur.com/H1PlMn2.jpeg",
  "https://i.imgur.com/irGyVEN.jpeg",
  "https://i.imgur.com/OGRB2dd.jpeg",
  "https://i.imgur.com/TAkpJ6a.jpeg",
  "https://i.imgur.com/AM7S97r.jpeg",
  "https://i.imgur.com/B4Hmp4y.jpeg",
  "https://i.imgur.com/IMs9yKj.jpeg",
  "https://i.imgur.com/o2qmQvX.jpeg",
  "https://i.imgur.com/j2bFL4p.jpeg",
  "https://i.imgur.com/F7Pa7Ek.jpeg"
];

const EXPERT_PHOTOS = [
  "https://i.imgur.com/lneg7To.jpeg",
  "https://i.imgur.com/O5bi1G0.png"
];

const WhatsAppButton = ({ className = "", text = "Converse com um dos nossos Especialistas" }) => (
  <a 
    href={WHATSAPP_URL} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`btn-whatsapp group ${className}`}
  >
    <MessageCircle className="w-6 h-6 animate-pulse" />
    <span>{text}</span>
    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </a>
);

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen selection:bg-gold selection:text-premium-black overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.imgur.com/O5bi1G0.png" 
            alt="Davi Alberguine" 
            className="w-full h-full object-cover object-top opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-premium-black via-premium-black/60 to-transparent" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-2xl text-center"
        >
          <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-widest uppercase border border-white/20 rounded-full glass">
            Butantã - SP
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Eu sou Davi <br /> Técnico responsável pelo <span className="italic text-gold">Alberguine Estúdio Dental</span>.
          </h1>
          
          <div className="space-y-4 mb-16">
            <WhatsAppButton />
          </div>

          <div className="text-left space-y-10 glass p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl">
            <div className="space-y-3">
              <h3 className="text-gold font-bold tracking-[0.2em] text-sm uppercase flex items-center gap-3">
                <Target className="w-4 h-4" /> MISSÃO
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Transformar cada trabalho em uma peça de excelência absoluta, unindo arte, precisão e tecnologia, para entregar resultados previsíveis, funcionais e esteticamente impecáveis aos nossos parceiros.
              </p>
            </div>
            
            <div className="flex justify-center text-gold/30 font-light tracking-widest">⸻</div>

            <div className="space-y-3">
              <h3 className="text-gold font-bold tracking-[0.2em] text-sm uppercase flex items-center gap-3">
                <Eye className="w-4 h-4" /> VISÃO
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Ser referência no Brasil em prótese dentária de alto padrão, reconhecido não apenas pela tecnologia, mas pelo nível de detalhe, consistência e compromisso inegociável com a excelência.
              </p>
            </div>

            <div className="flex justify-center text-gold/30 font-light tracking-widest">⸻</div>

            <div className="space-y-6">
              <h3 className="text-gold font-bold tracking-[0.2em] text-sm uppercase flex items-center gap-3">
                <Award className="w-4 h-4" /> VALORES
              </h3>
              <div className="grid gap-6">
                <div className="space-y-1">
                  <h4 className="text-white font-bold flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                    Excelência como padrão
                  </h4>
                  <p className="text-gray-400 text-sm pl-3.5">Não buscamos o suficiente. Buscamos o impecável.</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-white font-bold flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                    Precisão em cada detalhe
                  </h4>
                  <p className="text-gray-400 text-sm pl-3.5">Cada ajuste, cada milímetro, cada acabamento importa.</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-white font-bold flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                    Tecnologia a favor da perfeição
                  </h4>
                  <p className="text-gray-400 text-sm pl-3.5">Utilizamos o que há de mais avançado para garantir previsibilidade — mas a entrega final é humana, técnica e artística.</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-white font-bold flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                    Compromisso com prazos e parceiros
                  </h4>
                  <p className="text-gray-400 text-sm pl-3.5">Pontualidade e responsabilidade fazem parte da nossa assinatura.</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-white font-bold flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                    Comunicação clara e profissional
                  </h4>
                  <p className="text-gray-400 text-sm pl-3.5">Relacionamentos duradouros se constroem com transparência.</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-white font-bold flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                    Evolução constante
                  </h4>
                  <p className="text-gray-400 text-sm pl-3.5">Nunca paramos. Estamos sempre elevando o nível</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section className="py-20 px-6 bg-premium-gray">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://i.imgur.com/lneg7To.jpeg" 
                alt="Davi Alberguine em atendimento" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl hidden md:block">
              <p className="text-gold font-serif italic text-xl">"Excelência em cada detalhe."</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Autoridade e Dedicação</h2>
            <p className="text-gray-300 leading-relaxed">
              Desde o início da minha jornada sempre fui obcecado por detalhes. Porque é no detalhe que mora a excelência que sempre buscamos. O Alberguine Estúdio Dental nasceu de anos de estudo, prática intensa e acima de tudo, amor pelo que faço. Cada ajuste, cada finalização carrega mais do que técnica... Carrega propósito. Com anos de experiência em em próteses tendo trabalhado com centenas de consultórios pelo Brasil inteiro sempre atras da perfeição.
            </p>
            <ul className="space-y-4">
              {[
                "ARTE",
                "PRECISÃO",
                "TECNOLOGIA",
                "PONTUALIDADE",
                "COMUNICAÇÃO"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Star className="w-6 h-6 text-gold shrink-0" />
                  <span className="text-gray-200 font-bold tracking-wider">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Resultados Reais</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {RESULTS_IMAGES.map((src, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative group aspect-square cursor-pointer overflow-hidden rounded-xl border border-white/5"
                onClick={() => setSelectedImage(src)}
              >
                <img 
                  src={src} 
                  alt={`Resultado ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-premium-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="text-white w-6 h-6" />
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-500 mt-8 italic">
            * Resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </section>

      {/* 4. POR QUE CONFIAR EM MIM? */}
      <section className="py-20 px-6 bg-premium-gray">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Diferenciais de Excelência</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MessageCircle className="w-8 h-8 text-gold" />,
                title: "Atendimento Direto",
                desc: "Atendimento direto com especialista em próteses dentárias, com agilidade, precisão e cuidado em cada detalhe."
              },
              {
                icon: <Star className="w-8 h-8 text-gold" />,
                title: "Foco no Resultado",
                desc: "Busca incessante pela perfeição estética aliada à funcionalidade biológica de suas próteses ."
              },
              {
                icon: <Clock className="w-8 h-8 text-gold" />,
                title: "Pontualidade",
                desc: "Respeito total ao seu tempo com agendamentos e prazos."
              },
              {
                icon: <CheckCircle2 className="w-8 h-8 text-gold" />,
                title: "Agilidade",
                desc: "Agilidade nos serviços, sem abrir mão da perfeição em cada detalhe."
              }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl glass hover:border-gold/30 transition-colors group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform">{card.icon}</div>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5 blur-3xl rounded-full -z-10" />
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold"> A jornada para a perfeição das próteses do seu consultório começa aqui.</h2>
          <p className="text-gray-300">
            Confira nossos valores na tabela abaixo. Qualquer duvida pode estar entrando em contato com um de nossos profissionais .
          </p>
          <WhatsAppButton className="mx-auto" />
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="py-20 px-6 bg-premium-gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">3 Passos para sua Transformação</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 -z-10" />
            
            {[
              { step: "01", title: "WhatsApp", desc: "Clique no botão e envie uma mensagem para nossa equipe." },
              { step: "02", title: "Agendamento", desc: "Escolha o melhor horário para conversarmos e apresentamos nosso protocolo de trabalho e padrão excelência de atendimento do Alberguine Estúdio." },
              { step: "03", title: "Resultado", desc: "Agora os resultados incríveis estão sendo preparados. Aguarde e surpreenda-se" }
            ].map((item, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gold text-premium-black font-bold text-2xl flex items-center justify-center mx-auto shadow-lg shadow-gold/20">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MAIS PROVAS (Expert + Bastidores) */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Bastidores e Atendimento</h2>
          <div className="flex justify-center">
            <div className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden border border-white/10">
              <img 
                src="https://i.imgur.com/lneg7To.jpeg" 
                alt="Atendimento personalizado" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <p className="text-center text-gray-400 mt-6 italic">
            Feito para quem exige o extraordinário.<br />
            A excelência não é um resultado, é a nossa essência.<br />
            Alberguine Estúdio Dental
          </p>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-24 px-6 bg-gradient-to-b from-premium-black to-premium-gray">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-10"> Confira nossos valores !</h2>
            <a 
              href="https://tabeladavialberguine.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold/80 text-premium-black font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg shadow-gold/20 flex items-center justify-center gap-2 text-center mx-auto scale-110 w-fit"
            >
              <span>Consulte os nossos preços</span>
              <ChevronRight className="w-5 h-5" />
            </a>
            <div className="mt-8 flex items-center justify-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-gold" />
                <span className="text-sm">Ambiente Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-gold" />
                <span className="text-sm">Alta Tecnologia</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="py-12 px-6 border-t border-white/5 bg-premium-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-serif font-bold text-gold">Davi Alberguine</h3>
            <p className="text-sm text-gray-500 mt-1">
              Especializado em Reabilitação Oral Estética & Laminados Cerâmicos
            </p>
            <p className="text-xs text-gray-600 mt-2 flex items-center justify-center md:justify-start gap-1">
              <MapPin className="w-3 h-3" /> Butantã - SP
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#25D366] transition-colors">
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>

          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Davi Alberguine. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-premium-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              alt="Resultado Ampliado" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
