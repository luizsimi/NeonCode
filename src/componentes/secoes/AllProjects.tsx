import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../comum/ImageWithFallback';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: string;
  date: string;
  client?: string;
  team?: string;
  duration?: string;
  features: string[];
  challenges?: string;
  solution?: string;
  results?: string[];
  link?: string;
  github?: string;
}

const allProjects: Project[] = [
  {
    id: 1,
    title: 'Plataforma de E-commerce',
    description: 'Uma solução completa de e-commerce com carrinho de compras, pagamento integrado e analytics.',
    longDescription: 'Desenvolvimento completo de uma plataforma de e-commerce moderna e escalável, incluindo sistema de gerenciamento de produtos, carrinho inteligente, checkout integrado com Stripe, painel administrativo completo e sistema de analytics em tempo real.',
    image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyMTc4NDI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    category: 'Web App',
    date: 'Jan 2024',
    client: 'Fashion Store Inc.',
    team: '4 desenvolvedores',
    duration: '4 meses',
    features: [
      'Sistema de carrinho inteligente com recomendações',
      'Checkout em uma página com múltiplos métodos de pagamento',
      'Painel administrativo com dashboard de vendas',
      'Sistema de cupons e promoções',
      'Integração com APIs de frete',
      'Notificações em tempo real',
    ],
    challenges: 'O maior desafio foi criar um sistema de checkout que fosse rápido e seguro, mantendo uma experiência fluida para o usuário mesmo em conexões lentas.',
    solution: 'Implementamos lazy loading, otimização de imagens, cache inteligente e um sistema de fallback para garantir que o usuário nunca perca seu carrinho.',
    results: [
      'Aumento de 45% na taxa de conversão',
      'Tempo de carregamento reduzido em 60%',
      'Satisfação do cliente de 98%',
      'Zero downtime desde o lançamento',
    ],
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Dashboard Analytics Pro',
    description: 'Dashboard interativo para análise de dados com gráficos em tempo real.',
    longDescription: 'Plataforma de analytics empresarial com visualizações interativas, relatórios customizados e integração com múltiplas fontes de dados. Inclui sistema de alertas, exportação de dados e compartilhamento de insights.',
    image: 'https://images.unsplash.com/photo-1653226539262-fa23ac9bc37f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZGVzaWdufGVufDF8fHx8MTc2MjI4ODc4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['TypeScript', 'Next.js', 'Tailwind', 'Chart.js', 'PostgreSQL'],
    category: 'Dashboard',
    date: 'Nov 2023',
    client: 'Data Corp',
    team: '3 desenvolvedores',
    duration: '3 meses',
    features: [
      'Visualizações interativas com 15+ tipos de gráficos',
      'Filtros avançados e drill-down de dados',
      'Exportação para PDF, Excel e CSV',
      'Sistema de alertas configuráveis',
      'Compartilhamento de dashboards',
      'API REST para integração',
    ],
    challenges: 'Processar e visualizar grandes volumes de dados (milhões de registros) mantendo performance e responsividade.',
    solution: 'Implementamos paginação server-side, agregação de dados no backend, virtualização de listas e cache estratégico.',
    results: [
      'Processamento de 5M+ registros em <2s',
      'Adotado por 50+ empresas',
      'Redução de 70% no tempo de análise',
      'Performance 4x melhor que concorrentes',
    ],
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'App Mobile de Produtividade',
    description: 'Aplicativo mobile para gerenciamento de tarefas com sincronização em nuvem.',
    longDescription: 'Aplicativo cross-platform de produtividade com recursos avançados de organização, colaboração em equipe, sincronização em tempo real e notificações inteligentes.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMjMxOTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React Native', 'Firebase', 'Redux', 'Push Notifications'],
    category: 'Mobile',
    date: 'Set 2023',
    client: 'Startup XYZ',
    team: '2 desenvolvedores',
    duration: '5 meses',
    features: [
      'Criação de tarefas com subtarefas ilimitadas',
      'Organização por projetos e etiquetas',
      'Colaboração em tempo real',
      'Notificações push inteligentes',
      'Modo offline completo',
      'Widgets para tela inicial',
    ],
    challenges: 'Garantir sincronização confiável entre dispositivos mesmo com conexão instável e resolver conflitos de edição.',
    solution: 'Implementamos CRDTs (Conflict-free Replicated Data Types) e um sistema de sincronização incremental com filas de retry.',
    results: [
      '50K+ downloads nos primeiros 3 meses',
      'Avaliação de 4.8 estrelas',
      'Taxa de retenção de 75%',
      'Sincronização 99.9% confiável',
    ],
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Sistema de Gestão Empresarial',
    description: 'Sistema web completo para gestão empresarial com múltiplos módulos.',
    longDescription: 'ERP completo desenvolvido para pequenas e médias empresas, incluindo gestão de vendas, estoque, financeiro, CRM e relatórios gerenciais integrados.',
    image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjIxNzQ5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Vue.js', 'Laravel', 'MySQL', 'Redis'],
    category: 'Web App',
    date: 'Ago 2023',
    client: 'Empresas ABC',
    team: '6 desenvolvedores',
    duration: '8 meses',
    features: [
      'Gestão completa de vendas e pedidos',
      'Controle de estoque multi-depósito',
      'Módulo financeiro com fluxo de caixa',
      'CRM com funil de vendas',
      'Emissão de notas fiscais',
      'Relatórios gerenciais customizáveis',
    ],
    challenges: 'Migrar dados de sistemas legados diversos mantendo integridade e criar uma interface unificada para diferentes módulos.',
    solution: 'Desenvolvemos scripts de migração robustos com validação em múltiplas camadas e uma arquitetura modular que permite expansão fácil.',
    results: [
      'Adotado por 30+ empresas',
      'Redução de 50% em tempo operacional',
      'ROI positivo em 6 meses',
      'Zero perda de dados na migração',
    ],
    link: '#',
  },
  {
    id: 5,
    title: 'Portfolio Criativo 3D',
    description: 'Website portfolio interativo com galeria 3D e experiências imersivas.',
    longDescription: 'Portfolio web inovador para artista digital, com galeria 3D interativa, animações WebGL, navegação imersiva e sistema de CMS para fácil atualização de conteúdo.',
    image: 'https://images.unsplash.com/photo-1529926542502-77aceca00aa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlY2h8ZW58MXx8fHwxNzYyMjg4Nzg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'Three.js', 'GSAP', 'Tailwind', 'WebGL'],
    category: 'Website',
    date: 'Jun 2023',
    client: 'Artist Studio',
    team: '2 desenvolvedores',
    duration: '2 meses',
    features: [
      'Galeria 3D interativa com navegação espacial',
      'Animações smooth scroll com GSAP',
      'Transições de página cinematográficas',
      'Sistema de filtros por categoria',
      'Lightbox customizado',
      'Performance otimizada para 3D',
    ],
    challenges: 'Criar experiências 3D complexas mantendo performance excelente em dispositivos variados.',
    solution: 'Implementamos LOD (Level of Detail), lazy loading de modelos 3D, e progressive enhancement para dispositivos menos potentes.',
    results: [
      'Tempo de permanência médio de 5min',
      '90+ no Google PageSpeed',
      'Destaque em sites de design',
      'Aumento de 200% em contatos',
    ],
    link: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'Plataforma de Aprendizado',
    description: 'Plataforma educacional com cursos online, vídeos e certificação.',
    longDescription: 'LMS (Learning Management System) completo com sistema de cursos estruturados, player de vídeo avançado, quizzes interativos, gamificação e emissão de certificados.',
    image: 'https://images.unsplash.com/photo-1504548840739-580b10ae7715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZGVzaWdufGVufDF8fHx8MTc2MjI0ODc0MHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Next.js', 'PostgreSQL', 'Tailwind', 'AWS S3', 'Socket.io'],
    category: 'Web App',
    date: 'Abr 2023',
    client: 'EduTech Learning',
    team: '5 desenvolvedores',
    duration: '6 meses',
    features: [
      'Sistema de cursos com módulos e aulas',
      'Player de vídeo com controle de velocidade',
      'Quizzes e exercícios interativos',
      'Sistema de gamificação e badges',
      'Emissão automática de certificados',
      'Fórum de discussão por curso',
    ],
    challenges: 'Streaming de vídeo eficiente, prevenção de pirataria de conteúdo e engajamento contínuo dos alunos.',
    solution: 'Implementamos HLS streaming adaptativo, DRM, watermarking e um sistema de gamificação com recompensas progressivas.',
    results: [
      '10K+ alunos ativos',
      'Taxa de conclusão de 65%',
      '95% de satisfação',
      'Zero vazamento de conteúdo',
    ],
    link: '#',
  },
];

interface AllProjectsProps {
  onBack: () => void;
}

export function AllProjects({ onBack }: AllProjectsProps) {
  return (
    <div className="min-h-screen bg-black">
      {/* Header with Back Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10"
      >
        <div className="container mx-auto px-4 py-4">
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-white hover:text-purple-400 hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Voltar
          </Button>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full"
            >
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-white">Todos os Projetos</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl mb-6 text-white">
              Meu{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Portfólio Completo
              </span>
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Explore todos os projetos que desenvolvi, desde aplicações web complexas até soluções mobile inovadoras.
              Cada projeto representa um desafio único e uma solução criativa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-4 text-sm text-gray-400"
          >
            <span>📊 {allProjects.length} Projetos</span>
            <span>•</span>
            <span>🎨 Múltiplas Categorias</span>
            <span>•</span>
            <span>⚡ Alta Performance</span>
          </motion.div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-20">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
                className="relative group"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/30 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative h-[400px] lg:h-auto overflow-hidden">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent lg:bg-gradient-to-r"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-6 left-6">
                        <Badge className="bg-purple-500/90 backdrop-blur-sm text-white border-0 px-4 py-2">
                          {project.category}
                        </Badge>
                      </div>

                      {/* Date Badge */}
                      <div className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
                        <Calendar className="h-4 w-4 text-purple-400" />
                        <span className="text-white text-sm">{project.date}</span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 lg:p-12">
                      <h2 className="text-3xl md:text-4xl text-white mb-4 group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h2>

                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {project.longDescription}
                      </p>

                      {/* Meta Info */}
                      <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-white/10">
                        {project.client && (
                          <div className="flex items-center gap-2 text-sm">
                            <Users className="h-4 w-4 text-purple-400" />
                            <div>
                              <div className="text-gray-500">Cliente</div>
                              <div className="text-white">{project.client}</div>
                            </div>
                          </div>
                        )}
                        {project.duration && (
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4 text-pink-400" />
                            <div>
                              <div className="text-gray-500">Duração</div>
                              <div className="text-white">{project.duration}</div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-white/5 text-gray-300 hover:bg-white/10 border-white/10"
                          >
                            <Code className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        {project.link && (
                          <Button
                            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Ver Projeto
                          </Button>
                        )}
                        {project.github && (
                          <Button
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/10"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            GitHub
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expandable Details */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="border-t border-white/10 bg-black/20"
                  >
                    <div className="p-8 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Features */}
                      <div>
                        <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                          <Sparkles className="h-5 w-5 text-purple-400" />
                          Principais Recursos
                        </h3>
                        <ul className="space-y-2">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                              <span className="text-purple-400 mt-1">▸</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Results */}
                      {project.results && (
                        <div>
                          <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-green-400" />
                            Resultados
                          </h3>
                          <ul className="space-y-2">
                            {project.results.map((result, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                                <span className="text-green-400 mt-1">✓</span>
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Challenge & Solution */}
                      {project.challenges && (
                        <div className="md:col-span-2 space-y-4">
                          <div>
                            <h4 className="text-white mb-2">🎯 Desafio</h4>
                            <p className="text-gray-400 text-sm">{project.challenges}</p>
                          </div>
                          {project.solution && (
                            <div>
                              <h4 className="text-white mb-2">💡 Solução</h4>
                              <p className="text-gray-400 text-sm">{project.solution}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl text-white mb-6">
              Gostou do que viu?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Vamos trabalhar juntos no seu próximo projeto incrível!
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                onClick={onBack}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 px-8 py-6 text-lg"
              >
                Entre em Contato
              </Button>
              <Button
                onClick={onBack}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                Voltar ao Início
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function TrendingUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
