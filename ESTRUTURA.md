# Estrutura do Projeto NeonCode

## 📁 Organização de Pastas

```
NeonCode/
├── src/
│   ├── componentes/          # Componentes React organizados por tipo
│   │   ├── layout/           # Componentes de layout (Header, Footer)
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── secoes/           # Seções da página (Hero, Projects, etc)
│   │   │   ├── Hero.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── AllProjects.tsx
│   │   ├── comum/            # Componentes reutilizáveis
│   │   │   ├── CustomCursor.tsx
│   │   │   ├── TechIcons.tsx
│   │   │   └── ImageWithFallback.tsx
│   │   └── ui/               # Componentes UI (shadcn/ui)
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       └── ... (48 componentes UI)
│   ├── estilos/              # Arquivos de estilo
│   │   └── globals.css
│   ├── recursos/             # Recursos estáticos (imagens, fontes)
│   │   └── 61fd4657b381fec5a540b4111eb0e20cbe5fd270.png
│   ├── App.tsx               # Componente principal da aplicação
│   ├── main.tsx              # Ponto de entrada da aplicação
│   ├── index.css             # Estilos globais Tailwind
│   └── Attributions.md       # Atribuições e licenças
├── guidelines/               # Diretrizes do projeto
│   └── Guidelines.md
├── index.html                # HTML principal
├── package.json              # Dependências e scripts
├── vite.config.ts            # Configuração do Vite
├── README.md                 # Documentação principal
├── ESTRUTURA.md              # Este arquivo
└── LICENSE                   # Licença do projeto
```

## 🎯 Organização dos Componentes

### Layout (`componentes/layout/`)
Componentes estruturais que aparecem em todas as páginas:
- **Header.tsx**: Cabeçalho com navegação e menu mobile
- **Footer.tsx**: Rodapé com informações e botão scroll-to-top

### Seções (`componentes/secoes/`)
Seções principais do portfolio:
- **Hero.tsx**: Seção hero com animações e apresentação
- **Projects.tsx**: Galeria de projetos em destaque
- **Skills.tsx**: Habilidades técnicas com animações
- **Experience.tsx**: Experiências profissionais e formação
- **Contact.tsx**: Formulário de contato e informações
- **AllProjects.tsx**: Página com todos os projetos detalhados

### Comum (`componentes/comum/`)
Componentes reutilizáveis:
- **CustomCursor.tsx**: Cursor personalizado animado
- **TechIcons.tsx**: Ícones de tecnologias
- **ImageWithFallback.tsx**: Componente de imagem com fallback

### UI (`componentes/ui/`)
Componentes de interface baseados em shadcn/ui (48 componentes)

## 📝 Convenções de Código

### Nomenclatura
- **Pastas**: em português, lowercase (ex: `componentes`, `secoes`)
- **Arquivos**: PascalCase para componentes (ex: `Header.tsx`)
- **Funções/Componentes**: PascalCase (ex: `function Hero()`)
- **Variáveis**: camelCase (ex: `isScrolled`)

### Organização de Imports
```typescript
// 1. Bibliotecas externas
import { useState } from 'react';
import { motion } from 'motion/react';

// 2. Componentes UI
import { Button } from '../ui/button';

// 3. Componentes locais
import { CustomCursor } from '../comum/CustomCursor';

// 4. Assets
import logo from 'figma:asset/...';
```

## 🚀 Scripts Disponíveis

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 🛠️ Tecnologias

- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool
- **Tailwind CSS** - Framework CSS
- **Motion (Framer Motion)** - Animações
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones

## 📐 Princípios de Organização

1. **Separação por Responsabilidade**: Cada pasta tem um propósito claro
2. **Nomes em Português**: Facilita compreensão por equipes brasileiras
3. **Componentes Pequenos**: Máximo 200-300 linhas por arquivo
4. **Reutilização**: Componentes comuns separados dos específicos
5. **Type Safety**: TypeScript em todos os componentes

## 🎨 Estrutura Visual

O portfolio é uma Single Page Application (SPA) com:
- Header fixo com navegação suave
- Seções empilhadas verticalmente
- Animações e transições suaves
- Cursor personalizado
- Tema escuro moderno com gradientes neon

## 📄 Licença

MIT License - Ver arquivo LICENSE para detalhes

