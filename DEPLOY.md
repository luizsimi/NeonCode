# 🚀 Guia de Deploy - Vercel

## ✅ Pré-requisitos Concluídos

- ✅ `package.json` configurado
- ✅ `vite.config.ts` otimizado
- ✅ `vercel.json` criado
- ✅ `.vercelignore` adicionado
- ✅ TypeScript configurado
- ✅ Build script pronto

---

## 📝 Método 1: Deploy via Interface Web (Recomendado)

### Passo 1: Commit e Push

```bash
git add .
git commit -m "chore: preparar projeto para deploy no Vercel"
git push origin main
```

### Passo 2: Acessar Vercel

1. Acesse: https://vercel.com
2. Clique em **"Sign Up"** ou **"Login"**
3. Escolha **"Continue with GitHub"**
4. Autorize o Vercel a acessar seus repositórios

### Passo 3: Importar Projeto

1. Clique em **"Add New..."** → **"Project"**
2. Selecione o repositório **"NeonCode"**
3. Clique em **"Import"**

### Passo 4: Configurar Projeto

Vercel detectará automaticamente as configurações:

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

✅ **Não precisa alterar nada!** O `vercel.json` já está configurado.

### Passo 5: Deploy

1. Clique em **"Deploy"**
2. Aguarde 1-3 minutos
3. ✅ **Pronto!** Seu site está no ar!

**URL gerada:** `https://neoncode-[hash].vercel.app`

---

## 🖥️ Método 2: Deploy via CLI

### Instalação

```bash
npm install -g vercel
```

### Login

```bash
vercel login
```

### Deploy de Desenvolvimento (Preview)

```bash
vercel
```

### Deploy de Produção

```bash
vercel --prod
```

---

## 🌐 Configurar Domínio Customizado

### No Vercel Dashboard:

1. Acesse seu projeto
2. Vá em **"Settings"** → **"Domains"**
3. Clique **"Add"**
4. Digite seu domínio (ex: `neoncode.com.br`)
5. Configure DNS conforme instruções
6. Aguarde propagação (até 48h)

---

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento local
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

---

## 📊 Após o Deploy

### 1. Verificar Funcionalidades

- ✅ Animações entre páginas
- ✅ Lazy loading de imagens
- ✅ SEO metadata
- ✅ Efeito hover nas imagens
- ✅ Formulário de contato
- ✅ Cursor customizado

### 2. Testar SEO

- **Google PageSpeed:** https://pagespeed.web.dev/
- **Twitter Card Validator:** https://cards-dev.twitter.com/validator
- **Facebook Debugger:** https://developers.facebook.com/tools/debug/

### 3. Analytics (Opcional)

1. No Vercel Dashboard, vá em **"Analytics"**
2. Ative **Web Analytics**
3. Gratuito no plano Hobby!

---

## 🔄 Deploy Automático

Vercel já está configurado para:

✅ **Deploy automático a cada push na branch `main`**
✅ **Preview deployments para cada Pull Request**
✅ **Rollback fácil em caso de problemas**

### Como funciona:

```bash
# Fazer alterações
git add .
git commit -m "feat: adicionar nova funcionalidade"
git push origin main

# Vercel faz deploy automático!
```

---

## 🐛 Troubleshooting

### Build falhou?

```bash
# Testar build localmente
npm run build

# Se funcionar local mas falhar no Vercel:
# - Verificar node version (18+)
# - Verificar dependências no package.json
# - Ver logs completos no Vercel Dashboard
```

### Site carregando lentamente?

```bash
# Verificar tamanho do bundle
npm run build

# Otimizar imagens na pasta public/projetos
# Considerar converter para WebP
```

### Animações não funcionam?

- Verificar se `motion` está instalado
- Verificar console do navegador
- Testar em modo incógnito

---

## 📱 Configurações do Vercel

### Variáveis de Ambiente (se necessário)

1. Dashboard → **Settings** → **Environment Variables**
2. Adicionar variáveis necessárias
3. Redeploy o projeto

### Build & Development Settings

Já configurado no `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

---

## 🎉 URLs do Projeto

Após deploy, você terá:

- **Produção:** `https://neoncode.vercel.app`
- **Preview:** `https://neoncode-git-[branch].vercel.app`
- **Cada commit:** URL única para teste

---

## 📈 Métricas de Performance Esperadas

Com as otimizações implementadas:

- ✅ **Lighthouse Performance:** 90-100
- ✅ **First Contentful Paint:** < 1.5s
- ✅ **Time to Interactive:** < 3s
- ✅ **Largest Contentful Paint:** < 2.5s
- ✅ **Cumulative Layout Shift:** < 0.1

---

## 🔐 Segurança

Vercel automaticamente fornece:

- ✅ SSL/HTTPS gratuito
- ✅ DDoS protection
- ✅ Edge network global
- ✅ Automatic headers de segurança

---

## 💡 Próximos Passos

1. ✅ Fazer commit das alterações
2. ✅ Push para GitHub
3. ✅ Deploy no Vercel
4. ✅ Testar tudo em produção
5. ✅ Configurar domínio customizado
6. ✅ Compartilhar nas redes sociais!

---

**Criado em:** 14/11/2025
**Status:** ✅ Pronto para Deploy

