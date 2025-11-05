import { motion } from 'motion/react';
import { Code2, Palette, Database, Cloud, Smartphone, Zap } from 'lucide-react';
import { useState } from 'react';
import {
  ReactIcon,
  NextJsIcon,
  TypeScriptIcon,
  NodeJsIcon,
  TailwindIcon,
  PostgreSQLIcon,
  ReduxIcon,
  VueIcon,
  GitIcon,
  FigmaIcon,
  PHPIcon,
  FigmaMakeIcon,
} from '../comum/TechIcons';

const skillCategories = [
  {
    icon: Code2,
    title: 'Frontend',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'Vue.js', level: 85 },
    ],
  },
  {
    icon: Database,
    title: 'Backend',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Node.js', level: 92 },
      { name: 'PHP', level: 85 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'API REST', level: 90 },
    ],
  },
  {
    icon: Palette,
    title: 'Design',
    color: 'from-pink-500 to-orange-500',
    skills: [
      { name: 'UI/UX Design', level: 87 },
      { name: 'Figma', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Framer Motion', level: 85 },
    ],
  },
  {
    icon: Cloud,
    title: 'DevOps',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'GitHub', level: 90 },
      { name: 'CI/CD', level: 82 },
      { name: 'Linux', level: 75 },
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile',
    color: 'from-violet-500 to-purple-500',
    skills: [
      { name: 'React Native', level: 88 },
      { name: 'Flutter', level: 75 },
      { name: 'iOS', level: 70 },
      { name: 'Android', level: 70 },
    ],
  },
  {
    icon: Zap,
    title: 'Ferramentas',
    color: 'from-yellow-500 to-red-500',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'VS Code', level: 98 },
      { name: 'Figma Make', level: 90 },
      { name: 'Postman', level: 85 },
    ],
  },
];

const techStack = [
  { name: 'React', Icon: ReactIcon, color: 'from-cyan-500 to-blue-500' },
  { name: 'Next.js', Icon: NextJsIcon, color: 'from-gray-700 to-gray-900' },
  { name: 'TypeScript', Icon: TypeScriptIcon, color: 'from-blue-600 to-blue-700' },
  { name: 'Node.js', Icon: NodeJsIcon, color: 'from-green-600 to-green-700' },
  { name: 'Tailwind', Icon: TailwindIcon, color: 'from-cyan-400 to-blue-500' },
  { name: 'PostgreSQL', Icon: PostgreSQLIcon, color: 'from-blue-500 to-blue-600' },
  { name: 'PHP', Icon: PHPIcon, color: 'from-indigo-500 to-purple-600' },
  { name: 'Redux', Icon: ReduxIcon, color: 'from-purple-500 to-purple-600' },
  { name: 'Vue.js', Icon: VueIcon, color: 'from-green-500 to-green-600' },
  { name: 'Git', Icon: GitIcon, color: 'from-orange-600 to-red-600' },
  { name: 'Figma', Icon: FigmaIcon, color: 'from-purple-500 to-pink-500' },
  { name: 'Figma Make', Icon: FigmaMakeIcon, color: 'from-pink-500 to-cyan-500' },
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
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
            <span className="text-sm uppercase tracking-wider text-purple-400">Habilidades</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            Meu{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Arsenal Técnico
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Tecnologias e ferramentas que domino para criar soluções excepcionais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="space-y-3">
              {skillCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.button
                    key={category.title}
                    onClick={() => setActiveCategory(index)}
                    className={`w-full p-6 rounded-2xl transition-all duration-300 text-left ${
                      activeCategory === index
                        ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          activeCategory === index ? 'bg-white/20' : 'bg-white/5'
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg">{category.title}</h3>
                        <p
                          className={`text-sm ${
                            activeCategory === index ? 'text-white/80' : 'text-gray-500'
                          }`}
                        >
                          {category.skills.length} tecnologias
                        </p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Skills Display */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${skillCategories[activeCategory].color} flex items-center justify-center`}
                >
                  {(() => {
                    const Icon = skillCategories[activeCategory].icon;
                    return <Icon className="h-8 w-8 text-white" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-2xl text-white">{skillCategories[activeCategory].title}</h3>
                  <p className="text-gray-400">Nível de proficiência</p>
                </div>
              </div>

              <div className="space-y-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Icons - Infinite Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 overflow-hidden"
        >
          <h3 className="text-center text-white text-2xl mb-8">Tecnologias que uso</h3>
          
          {/* Gradient overlays for fade effect */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex gap-8 py-4">
              {/* First set of technologies */}
              <motion.div
                className="flex gap-8 flex-shrink-0"
                animate={{
                  x: [0, -1920],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 40,
                    ease: 'linear',
                  },
                }}
              >
                {techStack.map((tech) => {
                  const TechIcon = tech.Icon;
                  return (
                    <div
                      key={tech.name}
                      className={`group flex-shrink-0 px-8 py-6 bg-gradient-to-r ${tech.color} rounded-2xl shadow-lg hover:shadow-2xl transition-all`}
                    >
                      <div className="flex flex-col items-center gap-2 min-w-[120px]">
                        <div className="group-hover:scale-125 transition-transform">
                          <TechIcon className="w-12 h-12" />
                        </div>
                        <div className="text-white text-sm">{tech.name}</div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
              
              {/* Duplicate set for seamless loop */}
              <motion.div
                className="flex gap-8 flex-shrink-0"
                animate={{
                  x: [0, -1920],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 40,
                    ease: 'linear',
                  },
                }}
              >
                {techStack.map((tech) => {
                  const TechIcon = tech.Icon;
                  return (
                    <div
                      key={tech.name + '-duplicate'}
                      className={`group flex-shrink-0 px-8 py-6 bg-gradient-to-r ${tech.color} rounded-2xl shadow-lg hover:shadow-2xl transition-all`}
                    >
                      <div className="flex flex-col items-center gap-2 min-w-[120px]">
                        <div className="group-hover:scale-125 transition-transform">
                          <TechIcon className="w-12 h-12" />
                        </div>
                        <div className="text-white text-sm">{tech.name}</div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
