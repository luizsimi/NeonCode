import { Heart, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import logo from 'figma:asset/61fd4657b381fec5a540b4111eb0e20cbe5fd270.png';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 border-t border-white/10 py-12 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-16 w-16 object-contain filter drop-shadow-[0_0_15px_rgba(168,85,247,0.6)] mb-2"
            />
            <p className="text-gray-400 text-sm">Transformando ideias em código desde 2019</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Feito com</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              >
                <Heart className="h-4 w-4 text-red-500 fill-red-500" />
              </motion.div>
              <span>React, Tailwind e Motion</span>
            </div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                onClick={scrollToTop}
                size="icon"
                className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 border-0 shadow-lg shadow-purple-500/50"
              >
                <ArrowUp className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2025 Portfólio. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-purple-400 transition-colors">
                Privacidade
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Termos
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
