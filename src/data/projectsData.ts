// Interface base para projetos
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  hoverImage?: string;
  tags: string[];
  category: string;
  link?: string;
  github?: string;
  seo?: {
    keywords?: string[];
    ogImage?: string;
  };
}

// Interface estendida para projetos detalhados (usado em AllProjects)
export interface DetailedProject extends Project {
  longDescription?: string;
  date?: string;
  client?: string;
  team?: string;
  duration?: string;
  features?: string[];
  challenges?: string;
  solution?: string;
  results?: string[];
}

// Dados dos projetos
export const projects: Project[] = [
  {
    id: 1,
    title: 'Cardapio Digital para Restaurante Japones',
    description: 'Cardapio digital para restaurante japones com sistema de pedido pelo whatsapp.',
    image: '/projetos/cardapio_japones.png',
    tags: ['JavaScript', 'Html', 'Css', 'Figma'],
    category: 'Web App',
    link: '#',
    github: '#',
    seo: {
      keywords: ['cardápio digital', 'restaurante japonês', 'pedidos whatsapp', 'menu online', 'sushi delivery'],
      ogImage: '/projetos/cardapio_japones.png',
    },
  },
  {
    id: 2,
    title: 'Plataforma Web de Mentoria Individual para Programadores',
    description: 'Plataforma web de mentoria individual para programadores, tanto iniciantes quanto experientes, que conecta os usuários a especialistas da área por meio de videochamadas. A plataforma promove o aprendizado contínuo dentro de uma comunidade colaborativa.',
    image: '/projetos/Plataforma dashboard.png',
    hoverImage: '/projetos/Plataforma Login.png',
    tags: ['Html', 'Css', 'Django', 'MongoDB', 'Python', 'JavaScript'],
    category: 'Dashboard',
    link: '#',
    github: '#',
    seo: {
      keywords: ['mentoria programação', 'aprender programar', 'curso online', 'videochamada', 'code mentor', 'django', 'python'],
      ogImage: '/projetos/Plataforma dashboard.png',
    },
  },
  {
    id: 3,
    title: 'AutoSmart - Sistema de Gestão de Serviços Automotivos',
    description: 'Sistema completo para gestão de serviços automotivos, permitindo controle de orçamentos, clientes e status de serviços de forma intuitiva e eficiente.',
    image: '/projetos/auto.png',
    tags: ['Flutter', 'Android studio', 'Node.js', 'Nest.js', 'Prisma'],
    category: 'Mobile',
    link: '#',
    github: '#',
    seo: {
      keywords: ['sistema automotivo', 'gestão oficina', 'app mecânica', 'orçamento auto', 'flutter', 'mobile'],
      ogImage: '/projetos/auto.png',
    },
  },
  {
    id: 4,
    title: 'LeveFit Plataforma de Delivery Fitness',
    description: 'Plataforma de delivery de produtos de fitness com sistema de compra e entrega de comidas, usando sitema de pagamento do mercado pago e api do whatsapp.',
    image: '/projetos/levifit.png',
    tags: ['Node.js', 'TypeScript', 'Sqlite', 'React.js', 'Tailwind', 'API Whatsapp'],
    category: 'Web App',
    link: '#',
    github: '#',
    seo: {
      keywords: ['delivery fitness', 'comida saudável', 'ecommerce', 'mercado pago', 'whatsapp api', 'nodejs'],
      ogImage: '/projetos/levifit.png',
    },
  },
  {
    id: 5,
    title: 'Ecommerce de Produtos variados',
    description: 'Ecommerce de produtos variados com sistema de carrinho de compras, pagamento integrado e analytics.',
    image: '/projetos/aki.png',
    tags: ['Html', 'Css', 'JavaScript', 'Bootstrap', 'Figma', 'Prototype'],
    category: 'Website',
    link: '#',
    github: '#',
    seo: {
      keywords: ['ecommerce', 'loja online', 'carrinho de compras', 'bootstrap', 'web design', 'figma'],
      ogImage: '/projetos/aki.png',
    },
  },
  {
    id: 6,
    title: 'Autoatendimento para Restaurantes',
    description: 'Sistema de autoatendimento para restaurantes com sistema de pedido pelo app e sistema virtual.',
    image: '/projetos/FSW.png',
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Node.js', 'PostgreSQL'],
    category: 'Web App',
    link: '#',
    seo: {
      keywords: ['autoatendimento', 'restaurante', 'totem', 'nextjs', 'react', 'postgresql', 'pedidos online'],
      ogImage: '/projetos/FSW.png',
    },
  },
];

// Categorias disponíveis
export const categories = ['Todos', 'Web App', 'Mobile', 'Dashboard', 'Website'];

