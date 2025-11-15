import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../comum/ImageWithFallback';
import { projects, categories } from '../../data/projectsData';

interface ProjectsProps {
  onViewAll?: () => void;
}

export function Projects({ onViewAll }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects =
    selectedCategory === 'Todos'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
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
            <span className="text-sm uppercase tracking-wider text-purple-400">Portfólio</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            Projetos em{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Destaque
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Uma seleção dos meus trabalhos mais recentes e projetos que tive o prazer de desenvolver.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <Card className="overflow-hidden bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
                <div className="relative overflow-hidden aspect-video">
                  <ImageWithFallback
                    src={
                      hoveredProject === project.id && project.hoverImage
                        ? project.hoverImage
                        : project.image
                    }
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredProject === project.id ? 1 : 0,
                      y: hoveredProject === project.id ? 0 : 20,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.link && (
                      <Button
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Ver
                      </Button>
                    )}
                    {project.github && (
                      <Button
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0"
                      >
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                    )}
                  </motion.div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-purple-500/90 backdrop-blur-sm text-white border-0">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl mb-3 text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-white/5 text-gray-300 hover:bg-white/10 border-0"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/20 text-white hover:bg-white/10 rounded-full"
            onClick={onViewAll}
          >
            Ver Todos os Projetos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
