# Enterprise Roadmaps

Uma aplicação web interativa para trilhas de aprendizado de tecnologia corporativa.

**Acesse o site:** https://sys-roadmap.vercel.app

## 📋 Descrição

O Enterprise Roadmaps é uma plataforma de aprendizado estruturado que oferece trilhas de conhecimento para tecnologias empresariais. Os usuários podem acompanhar seu progresso através de checklists interativos e visualizar seu avanço em diagramas visuais de roadmap.

## 🚀 Funcionalidades

- **Roadmaps Interativos**: Diagramas visuais de trilhas de aprendizado
- **Acompanhamento de Progresso**: Sistema de progresso salvo no localStorage do navegador
- **Checklists Personalizáveis**: Itens de estudo que podem ser marcados como concluídos
- **Design Neon/Cyberpunk**: Interface moderna com tema escuro e cores neon
- **Suporte Multilíngue**: Interface disponível em Português e Inglês

## 🛠️ Tecnologias

- **Framework**: Next.js 16 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Componentes**: Radix UI + shadcn/ui
- **Ícones**: Lucide React
- **Análise**: Vercel Analytics

## 📁 Estrutura do Projeto

```
sys-roadmap/
├── app/                    # Páginas Next.js (App Router)
│   ├── page.tsx           # Página inicial
│   └── roadmaps/[id]/    # Páginas dinâmicas de roadmap
├── components/           # Componentes React
│   ├── ui/               # Componentes shadcn/ui
│   ├── header.tsx       # Cabeçalho
│   ├── node-panel.tsx   # Painel de detalhes do nó
│   ├── roadmap-card.tsx # Card de roadmap
│   ├── roadmap-diagram.tsx # Diagrama SVG do roadmap
│   └── roadmap-view.tsx # Visualização detalhada
├── hooks/                # Custom React Hooks
│   └── use-progress.ts  # Gerenciamento de progresso
├── lib/                  # Utilitários e dados
│   ├── i18n.ts          # Traduções (PT/EN)
│   ├── lang-context.tsx # Contexto de idioma
│   ├── roadmap-data.ts  # Dados dos roadmaps
│   └── utils.ts         # Funções utilitárias
└── styles/               # Estilos globais
```

## 🎯 Roadmaps Disponíveis

### SAP Key User

- SAP MM (Materials Management)
- SAP SD (Sales & Distribution)
- SAP FI (Financial Accounting)

### SAP Consultant

- SAP MM Consultant
- SAP SD Consultant
- SAP FI Consultant

### Microsoft Power Platform

- Power Apps
- Power Automate
- Power BI

### Demand & Service Management

- Jira
- ServiceNow
- SharePoint

## 🎨 Sistema de Cores

O aplicativo utiliza um sistema de cores neon para indicar o progresso:

| Cor        | Significado          |
| ---------- | -------------------- |
| 🟡 Amarelo | Concluído (100%)     |
| 🟢 Verde   | Em Progresso (1-99%) |
| ⚪ Cinza   | Não Iniciado (0%)    |

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/Danilo-Vicentin-Silva/sys-roadmap.git

# Entre no diretório
cd sys-roadmap

# Instale as dependências (usando pnpm)
pnpm install

# Execute o servidor de desenvolvimento
pnpm dev
```

O aplicativo estará disponível em `http://localhost:3000`.

## 🔧 Scripts Disponíveis

```bash
pnpm dev      # Inicia o servidor de desenvolvimento
pnpm build    # Cria a build de produção
pnpm start    # Inicia o servidor de produção
pnpm lint     # Executa o linter
```

## 💾 Persistência de Dados

O progresso do usuário é salvo no `localStorage` do navegador:

- `roadmap-completed-nodes`: Nós marcados como concluídos
- `roadmap-completed-checklist`: Itens de checklist marcados

Isso permite que o usuário acompanhe seu progresso mesmo sem um banco de dados.

## 📄 Licença

Este projeto está sob a licença MIT.

---

Desenvolvido com ❤️ por Danilo Vicentin Silva
