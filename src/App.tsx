import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Header } from './componentes/layout/Header';
import { Footer } from './componentes/layout/Footer';
import { Hero } from './componentes/secoes/Hero';
import { Projects } from './componentes/secoes/Projects';
import { Skills } from './componentes/secoes/Skills';
import { Experience } from './componentes/secoes/Experience';
import { Contact } from './componentes/secoes/Contact';
import { AllProjects } from './componentes/secoes/AllProjects';
import { CustomCursor } from './componentes/comum/CustomCursor';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'all-projects'>('home');

  return (
    <div className="min-h-screen bg-black cursor-none md:cursor-none">
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {currentPage === 'all-projects' ? (
          <AllProjects key="all-projects" onBack={() => setCurrentPage('home')} />
        ) : (
          <div key="home">
            <Header />
            <main>
              <Hero />
              <Projects onViewAll={() => setCurrentPage('all-projects')} />
              <Skills />
              <Experience />
              <Contact />
            </main>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
