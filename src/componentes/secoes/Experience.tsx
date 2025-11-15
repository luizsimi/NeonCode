import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Award, TrendingUp, Users, Zap } from 'lucide-react';
import { useState } from 'react';

const experiences = [
  {
    type: 'work',
    icon: Briefcase,
    title: 'Desenvolvedor Web Php Jr',
    company: 'Sisquali Soluções em Sistemas',
    period: 'Out 2025 - Presente',
    description:
      'Suporte e refatoração de codigo para melhorias de performace do sistema. Desenvolvimento e pratica de UX/UI para melhorias de interface do usuario.',
    achievements: [
      'Aumentou performance em 40%',
      'Melhoria de interface do usuario',
      'Trabalho em equipe de 5 devs',
      'Manipulação de dados com PHP e MySQL	',
    ],
    stats: [
      { icon: TrendingUp, value: '40%', label: 'Melhor Performance' },
      { icon: Users, value: '5+', label: 'Equipes de Desenvolvimento' },
      { icon: Zap, value: '5+', label: 'Projetos' },
    ],
  },
  {
    type: 'work',
    icon: Briefcase,
    title: 'Estagiário em Gestão de Projetos',
    company: 'BC2 Construtora S.A.',
    period: 'Mai 2025 - Out 2025',
    description:
      'Desenvolvimento de projetos para area de infraestrutura de construção civil. Gestao de projetos de forma agil e eficiente. ',
    achievements: [
      '15+ projetos entregues',
      'Satisfação cliente',
      'Desenvolvimento de projetos para area de infraestrutura',
      'gestao agil de projetos',
    ],
    stats: [
      { icon: TrendingUp, value: '98%', label: 'Satisfação' },
      { icon: Users, value: '30+', label: 'Clientes' },
      { icon: Zap, value: '15+', label: 'Apps' },
    ],
  },
  {
    type: 'education',
    icon: GraduationCap,
    title: 'Bacharelado em Desenvolvimento de Software',
    company: 'Faculdade de Tecnologia de São Paulo',
    period: '2023 - 2026',
    description:
      'Formação sólida em algoritmos, estruturas de dados, engenharia de software, desenvolvimento web e inteligência artificial.',
    achievements: [
      'Honras acadêmicas',
      'Trabalho em Equipe',
      'Projetos Interdisciplinares',
    ],
    stats: [
      { icon: Award, value: '', label: 'Fundamentos de Programação' },
      { icon: TrendingUp, value: '', label: 'Logica de Programação' },
      { icon: Users, value: '', label: 'Desenvolvimento Web' },
    ],
  },
];

export function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-sm uppercase tracking-wider text-purple-400">Trajetória</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            Minha{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Jornada
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Experiências que moldaram minha carreira e expertise em desenvolvimento.
          </p>
        </motion.div>

        {/* Modern Card Grid Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setSelectedCard(selectedCard === index ? null : index)}
                  className="relative group cursor-pointer"
                >
                  {/* Glow Effect on Hover */}
                  <motion.div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${
                      exp.type === 'work'
                        ? 'from-purple-500 to-pink-500'
                        : exp.type === 'education'
                        ? 'from-blue-500 to-cyan-500'
                        : 'from-yellow-500 to-orange-500'
                    } opacity-0 blur-xl`}
                    animate={{
                      opacity: hoveredIndex === index ? 0.3 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Card */}
                  <motion.div
                    className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 h-full overflow-hidden"
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {/* Top Section - Icon & Badge */}
                    <div className="flex items-start justify-between mb-6">
                      <motion.div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${
                          exp.type === 'work'
                            ? 'from-purple-500 to-pink-500'
                            : exp.type === 'education'
                            ? 'from-blue-500 to-cyan-500'
                            : 'from-yellow-500 to-orange-500'
                        } flex items-center justify-center shadow-lg`}
                        animate={{
                          rotate: hoveredIndex === index ? 360 : 0,
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </motion.div>

                      <div className={`px-3 py-1 rounded-full text-xs bg-gradient-to-r ${
                        exp.type === 'work'
                          ? 'from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30'
                          : exp.type === 'education'
                          ? 'from-blue-500/20 to-cyan-500/20 text-blue-300 border border-blue-500/30'
                          : 'from-yellow-500/20 to-orange-500/20 text-yellow-300 border border-yellow-500/30'
                      }`}>
                        {exp.period}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mb-6">
                      <h3 className="text-xl text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-purple-400 mb-3">{exp.company}</p>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                        {exp.description}
                      </p>
                    </div>

                    {/* Achievements Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {exp.achievements.slice(0, 4).map((achievement, i) => (
                        <motion.span
                          key={achievement}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          viewport={{ once: true }}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 hover:bg-white/10 transition-all"
                        >
                          {achievement}
                        </motion.span>
                      ))}
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10">
                      {exp.stats.map((stat, i) => {
                        const StatIcon = stat.icon;
                        return (
                          <motion.div
                            key={i}
                            className="text-center"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 + i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <StatIcon className="h-4 w-4 text-purple-400 mx-auto mb-1" />
                            <div className="text-white mb-1">{stat.value}</div>
                            <div className="text-xs text-gray-500">{stat.label}</div>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Decorative Corner */}
                    <motion.div
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${
                        exp.type === 'work'
                          ? 'from-purple-500/20 to-transparent'
                          : exp.type === 'education'
                          ? 'from-blue-500/20 to-transparent'
                          : 'from-yellow-500/20 to-transparent'
                      } rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity`}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-5xl mx-auto"
        >
          {[
            { number: '40+', label: 'Projetos Concluídos', color: 'from-purple-500 to-pink-500', icon: '🚀' },
            { number: '5+', label: 'Equipes de Desenvolvimento', color: 'from-blue-500 to-cyan-500', icon: '⭐' },
            { number: '2+', label: 'Anos de Experiência', color: 'from-green-500 to-emerald-500', icon: '⏳' },
            { number: '9+', label: 'Tecnologias', color: 'from-yellow-500 to-orange-500', icon: '💻' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-10 blur-xl group-hover:opacity-20 transition-opacity rounded-2xl`}></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className={`text-3xl md:text-4xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
