import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../comum/ImageWithFallback';
import { projects as baseProjects, DetailedProject } from '../../data/projectsData';

// Estender os projetos base com informações detalhadas
const allProjects: DetailedProject[] = baseProjects.map((project) => {
  // Informações detalhadas específicas para cada projeto
  const detailedInfo: { [key: number]: Partial<DetailedProject> } = {
    1: {
      longDescription: 'Desenvolvimento completo de um cardápio digital moderno e intuitivo para restaurante japonês, incluindo sistema de pedidos integrado com WhatsApp, galeria de imagens dos pratos e interface responsiva.',
      date: 'Out 2024',
      client: 'Restaurante Sakura',
      team: '2 desenvolvedores',
      duration: '2 meses',
      features: [
        'Catálogo completo de pratos com fotos',
        'Sistema de categorias (Entradas, Pratos Principais, Sobremesas)',
        'Integração direta com WhatsApp para pedidos',
        'Design responsivo para mobile e desktop',
        'Interface em português e japonês',
        'Modo escuro/claro',
      ],
      challenges: 'Criar uma interface que fosse fácil de usar tanto para clientes quanto para o restaurante atualizar o cardápio.',
      solution: 'Desenvolvemos uma solução com Figma para prototipagem rápida e validação com o cliente, seguida de implementação com HTML/CSS/JS puro para máxima compatibilidade.',
      results: [
        'Aumento de 35% em pedidos via WhatsApp',
        'Redução de 50% em ligações telefônicas',
        'Interface elogiada por 95% dos clientes',
        'Tempo de atualização do cardápio reduzido em 80%',
      ],
    },
    2: {
      longDescription: 'Plataforma completa de mentoria individual para programadores, com sistema de agendamento de videochamadas, perfis de mentores, avaliações e comunidade colaborativa. Inclui dashboard para mentores e alunos.',
      date: 'Set 2024',
      client: 'CodeMentor Platform',
    team: '4 desenvolvedores',
    duration: '4 meses',
    features: [
        'Sistema de autenticação e perfis de usuário',
        'Agendamento de sessões de mentoria',
        'Integração com plataforma de videochamadas',
        'Sistema de avaliações e feedback',
        'Dashboard com métricas e progresso',
        'Comunidade com fórum de discussão',
      ],
      challenges: 'Criar um sistema de matching entre mentores e alunos que considerasse disponibilidade, áreas de expertise e níveis de experiência.',
      solution: 'Implementamos um algoritmo de recomendação baseado em perfis e preferências, além de um sistema de agendamento flexível com sincronização de calendários.',
    results: [
        '500+ mentores cadastrados',
        '2000+ sessões realizadas',
        'Satisfação média de 4.7/5',
        'Taxa de match bem-sucedido de 85%',
      ],
    },
    3: {
      longDescription: 'Aplicativo mobile completo para gestão de serviços automotivos, permitindo controle de orçamentos, cadastro de clientes, histórico de serviços e acompanhamento de status em tempo real.',
      date: 'Ago 2024',
      client: 'AutoService Group',
    team: '3 desenvolvedores',
    duration: '5 meses',
    features: [
        'Cadastro completo de clientes e veículos',
        'Sistema de orçamentos com aprovação online',
        'Acompanhamento de status de serviços',
        'Histórico completo de manutenções',
        'Notificações push para atualizações',
        'Relatórios gerenciais e financeiros',
      ],
      challenges: 'Sincronizar dados entre múltiplas oficinas e permitir acesso offline para mecânicos em campo.',
      solution: 'Desenvolvemos uma arquitetura com sincronização incremental, cache local e resolução de conflitos automática usando Prisma e Node.js.',
    results: [
        'Adotado por 15 oficinas',
        'Redução de 40% em tempo de atendimento',
        'Aumento de 60% em aprovações de orçamento',
        'Taxa de sincronização de 99.8%',
      ],
    },
    4: {
      longDescription: 'Plataforma completa de delivery fitness com catálogo de produtos, carrinho de compras, sistema de pagamento integrado com Mercado Pago e notificações via WhatsApp API.',
      date: 'Jul 2024',
      client: 'LeveFit Nutrition',
      team: '3 desenvolvedores',
      duration: '3 meses',
    features: [
        'Catálogo de produtos com filtros avançados',
        'Carrinho de compras inteligente',
        'Integração com Mercado Pago',
        'Notificações automáticas via WhatsApp',
        'Sistema de cupons e descontos',
        'Painel administrativo completo',
      ],
      challenges: 'Integrar múltiplos sistemas de pagamento e garantir entrega segura de notificações em escala.',
      solution: 'Implementamos uma arquitetura baseada em filas com Node.js e TypeScript, garantindo processamento assíncrono e retry automático.',
    results: [
        '1000+ pedidos no primeiro mês',
        'Taxa de conversão de 12%',
        'Zero falhas em pagamentos',
        'Tempo médio de entrega de 45min',
      ],
    },
    5: {
      longDescription: 'Plataforma de e-commerce moderna para produtos variados, com design responsivo, carrinho de compras, sistema de pagamento e painel administrativo. Desenvolvido com foco em UX e performance.',
      date: 'Jun 2024',
      client: 'Loja Aki Digital',
    team: '2 desenvolvedores',
      duration: '3 meses',
    features: [
        'Catálogo de produtos com múltiplas categorias',
        'Sistema de busca e filtros',
        'Carrinho de compras persistente',
        'Checkout em múltiplas etapas',
        'Integração com gateways de pagamento',
        'Painel administrativo para gestão',
      ],
      challenges: 'Criar uma experiência de compra fluida e intuitiva que funcionasse bem em todos os dispositivos.',
      solution: 'Utilizamos Bootstrap para garantir responsividade, protótipos em Figma para validação de UX e JavaScript puro para performance otimizada.',
    results: [
        'Aumento de 50% em vendas online',
        'Taxa de abandono de carrinho reduzida em 30%',
        'Tempo de carregamento < 2s',
        'Acessível em 98% dos dispositivos',
      ],
    },
    6: {
      longDescription: 'Sistema de autoatendimento moderno para restaurantes, com interface touchscreen, integração com sistema de pedidos e dashboard gerencial em tempo real.',
      date: 'Mai 2024',
      client: 'Food Service Tech',
      team: '4 desenvolvedores',
      duration: '4 meses',
    features: [
        'Interface touchscreen otimizada',
        'Cardápio digital com fotos',
        'Sistema de pedidos em tempo real',
        'Integração com cozinha e caixa',
        'Dashboard gerencial com analytics',
        'Suporte a múltiplos idiomas',
      ],
      challenges: 'Garantir performance em tablets e dispositivos de autoatendimento com recursos limitados.',
      solution: 'Desenvolvemos com Next.js e TypeScript, otimizando assets e implementando cache estratégico. PostgreSQL para dados consistentes e confiáveis.',
    results: [
        'Implantado em 10 restaurantes',
        'Redução de 60% em filas',
        'Aumento de 25% em ticket médio',
        'Tempo médio de pedido: 2 minutos',
      ],
    },
  };

  return {
    ...project,
    ...detailedInfo[project.id],
  } as DetailedProject;
});

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
                          {project.features?.map((feature, i) => (
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
