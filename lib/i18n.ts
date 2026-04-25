export type Lang = "pt" | "en"

export const translations = {
  en: {
    // Nav
    siteName: "Enterprise Roadmaps",
    searchPlaceholder: "Search roadmaps...",
    searchShortcut: "Ctrl+K",
    langToggle: "PT",

    // Home
    homeTitle: "Enterprise Technology Ecosystems",
    homeSubtitle:
      "Structured learning paths for corporate technology adoption. Click any track to explore the full roadmap.",
    communityNote: "Community-driven paths for enterprise professionals.",

    // Card categories
    catSapKeyUser: "SAP Key User Tracks",
    catSapConsultant: "SAP Consultant Tracks",
    catMicrosoft: "Auxiliary Corporate Tools",
    catDemand: "Demand & Service Management",

    // Cards
    cardSapMM: "SAP MM Key User",
    cardSapSD: "SAP SD Key User",
    cardSapFI: "SAP FI Key User",
    cardSapConsultantMM: "SAP MM Consultant",
    cardSapConsultantSD: "SAP SD Consultant",
    cardSapConsultantFI: "SAP FI Consultant",
    cardPowerApps: "Microsoft Power Apps",
    cardPowerAutomate: "Microsoft Power Automate",
    cardPowerBI: "Microsoft Power BI",
    cardJira: "Jira",
    cardServiceNow: "ServiceNow",
    cardSharePoint: "SharePoint Workflows",

    // Card descriptions
    descSapMM: "Materials Management — procurement, inventory & valuation",
    descSapSD: "Sales & Distribution — order-to-cash process",
    descSapFI: "Financial Accounting — ledger, AP/AR & reporting",
    descSapConsultantMM: "Deep configuration & customizing for MM module",
    descSapConsultantSD: "End-to-end SD customization & pricing procedures",
    descSapConsultantFI: "Chart of accounts, asset accounting & integration",
    descPowerApps: "Low-code canvas & model-driven apps on Power Platform",
    descPowerAutomate: "Workflow automation with connectors & RPA",
    descPowerBI: "Data modeling, DAX, reports & organizational sharing",
    descJira: "Agile project tracking, sprints & backlog management",
    descServiceNow: "ITSM, incident & change management workflows",
    descSharePoint: "Intranet, document libraries & Power Automate integration",

    // Roadmap view
    backToHome: "Back to Roadmaps",
    roadmapTitle: "Roadmap:",
    nodeCompleted: "Completed",
    nodeInProgress: "In Progress",
    nodeTodo: "To Do",

    // Node panel
    panelTheory: "Theory",
    panelTechnical: "Technical Reference / SAP Tables",
    panelChecklist: "Learning Checklist",
    panelClose: "Close",

    // SAP MM nodes
    nodeMM1: "Introduction to SAP MM",
    nodeMM2: "Organizational Structure",
    nodeMM3: "Master Data",
    nodeMM4: "Procure-to-Pay",
    nodeMM5: "Inventory Management",
    nodeMM6: "Invoice Verification",
    nodeMM7: "Reporting & Analytics",

    // Power Apps nodes
    nodePA1: "Power Platform Fundamentals",
    nodePA2: "Canvas Apps",
    nodePA3: "Model-Driven Apps",
    nodePA4: "Dataverse",
    nodePA5: "Connectors & Integration",
    nodePA6: "ALM & Deployment",
    nodePA7: "Governance & Security",

    // Node details — MM Procure-to-Pay
    detailP2PTitle: "Procure-to-Pay",
    detailP2PTheory:
      "The Procure-to-Pay (P2P) process covers the end-to-end flow from identifying a purchase need through requisition, supplier selection, purchase order creation, goods receipt, and invoice verification up to payment. In SAP MM, this is the backbone of the Materials Management module.",
    detailP2PTechnical:
      "Key SAP Tables: EKKO (PO Header), EKPO (PO Items), EKES (PO Delivery Schedules), MSEG (Material Document Segment), RSEG (Invoice Document Items).",
    detailP2PChecklist: [
      "Create a Purchase Requisition (ME51N)",
      "Convert PR to Purchase Order (ME21N)",
      "Process Goods Receipt (MIGO)",
      "Post Logistics Invoice Verification (MIRO)",
      "Understand 3-way match concept",
      "Run ME2M / ME2N reports",
    ],

    // Node details — Power Apps Canvas
    detailCanvasTitle: "Canvas Apps",
    detailCanvasTheory:
      "Canvas Apps in Power Apps allow makers to design pixel-perfect applications by dragging and dropping controls onto a blank canvas, then connecting them to data sources via connectors. They follow a formula-based language called Power Fx, which resembles Excel formulas.",
    detailCanvasTechnical:
      "Key concepts: Screens, Galleries, Forms, Connectors (SharePoint, Dataverse, SQL), Power Fx formulas, delegation warnings, offline capability, and responsive layout techniques.",
    detailCanvasChecklist: [
      "Create a blank canvas app",
      "Add a SharePoint list as a data source",
      "Build a Gallery + Detail Form pattern",
      "Write Power Fx formulas for navigation",
      "Handle error states with IfError()",
      "Publish and share with users",
    ],

    // Misc node details
    detailIntroMMTitle: "Introduction to SAP MM",
    detailIntroMMTheory:
      "SAP Materials Management (MM) is a core ERP module that covers procurement and inventory functions. It integrates tightly with SD (Sales & Distribution), FI (Financial Accounting), and PP (Production Planning).",
    detailIntroMMTechnical:
      "Module integration points: MM-FI (automatic postings), MM-SD (availability check), MM-PP (planned orders). Transaction ME01 for source lists, MMBE for stock overview.",
    detailIntroMMChecklist: [
      "Understand the MM module scope",
      "Navigate SAP Easy Access menu",
      "Identify key MM transactions",
      "Understand integration with FI and SD",
    ],

    progress: "Progress",
    nodes: "nodes",
    completed: "completed",
    roadmapNotFound: "Roadmap not found",
  },

  pt: {
    // Nav
    siteName: "Enterprise Roadmaps",
    searchPlaceholder: "Buscar roadmaps...",
    searchShortcut: "Ctrl+K",
    langToggle: "EN",

    // Home
    homeTitle: "Ecossistemas de Tecnologia Corporativa",
    homeSubtitle:
      "Trilhas de aprendizado estruturadas para adoção de tecnologia corporativa. Clique em qualquer trilha para explorar o roadmap completo.",
    communityNote: "Trilhas orientadas pela comunidade para profissionais corporativos.",

    // Card categories
    catSapKeyUser: "Trilhas SAP Key User",
    catSapConsultant: "Trilhas SAP Consultor",
    catMicrosoft: "Ferramentas Corporativas Auxiliares",
    catDemand: "Ferramentas de Demanda e Serviços",

    // Cards
    cardSapMM: "SAP MM Key User",
    cardSapSD: "SAP SD Key User",
    cardSapFI: "SAP FI Key User",
    cardSapConsultantMM: "SAP MM Consultor",
    cardSapConsultantSD: "SAP SD Consultor",
    cardSapConsultantFI: "SAP FI Consultor",
    cardPowerApps: "Microsoft Power Apps",
    cardPowerAutomate: "Microsoft Power Automate",
    cardPowerBI: "Microsoft Power BI",
    cardJira: "Jira",
    cardServiceNow: "ServiceNow",
    cardSharePoint: "Fluxos SharePoint",

    // Card descriptions
    descSapMM: "Gestão de Materiais — compras, estoque e avaliação",
    descSapSD: "Vendas e Distribuição — processo order-to-cash",
    descSapFI: "Contabilidade Financeira — razão, AP/AR e relatórios",
    descSapConsultantMM: "Configuração avançada e customização do módulo MM",
    descSapConsultantSD: "Customização end-to-end e procedimentos de preço SD",
    descSapConsultantFI: "Plano de contas, ativo fixo e integração contábil",
    descPowerApps: "Apps canvas e orientados a modelo na Power Platform",
    descPowerAutomate: "Automação de fluxos com conectores e RPA",
    descPowerBI: "Modelagem de dados, DAX, relatórios e compartilhamento",
    descJira: "Rastreamento ágil de projetos, sprints e backlog",
    descServiceNow: "ITSM, incidentes e fluxos de gestão de mudanças",
    descSharePoint: "Intranet, bibliotecas de documentos e integração Power Automate",

    // Roadmap view
    backToHome: "Voltar aos Roadmaps",
    roadmapTitle: "Roadmap:",
    nodeCompleted: "Concluído",
    nodeInProgress: "Em Progresso",
    nodeTodo: "A Fazer",

    // Node panel
    panelTheory: "Teoria",
    panelTechnical: "Referência Técnica / Tabelas SAP",
    panelChecklist: "Lista de Aprendizado",
    panelClose: "Fechar",

    // SAP MM nodes
    nodeMM1: "Introdução ao SAP MM",
    nodeMM2: "Estrutura Organizacional",
    nodeMM3: "Dados Mestre",
    nodeMM4: "Procure-to-Pay",
    nodeMM5: "Gestão de Estoque",
    nodeMM6: "Verificação de Faturas",
    nodeMM7: "Relatórios e Análises",

    // Power Apps nodes
    nodePA1: "Fundamentos da Power Platform",
    nodePA2: "Canvas Apps",
    nodePA3: "Apps Orientados a Modelo",
    nodePA4: "Dataverse",
    nodePA5: "Conectores e Integração",
    nodePA6: "ALM e Implantação",
    nodePA7: "Governança e Segurança",

    // Node details — MM Procure-to-Pay
    detailP2PTitle: "Procure-to-Pay",
    detailP2PTheory:
      "O processo Procure-to-Pay (P2P) cobre o fluxo completo desde a identificação de uma necessidade de compra — passando por requisição, seleção de fornecedor, criação do Pedido de Compras, recebimento de mercadoria e verificação de fatura — até o pagamento. No SAP MM, este é o núcleo do módulo de Gestão de Materiais.",
    detailP2PTechnical:
      "Tabelas SAP Chave: EKKO (Cabeçalho do Pedido de Compras), EKPO (Itens do Pedido de Compras), EKES (Cronogramas de Entrega), MSEG (Segmento de Documento de Material), RSEG (Itens de Documento de Fatura).",
    detailP2PChecklist: [
      "Criar uma Requisição de Compra (ME51N)",
      "Converter RC em Pedido de Compras (ME21N)",
      "Processar Recebimento de Mercadoria (MIGO)",
      "Lançar Verificação de Fatura Logística (MIRO)",
      "Entender o conceito de conferência de 3 vias",
      "Executar relatórios ME2M / ME2N",
    ],

    // Node details — Power Apps Canvas
    detailCanvasTitle: "Canvas Apps",
    detailCanvasTheory:
      "Os Canvas Apps no Power Apps permitem que criadores projetem aplicações pixel-perfect arrastando e soltando controles em uma tela em branco e conectando-os a fontes de dados via conectores. Utilizam uma linguagem baseada em fórmulas chamada Power Fx, similar às fórmulas do Excel.",
    detailCanvasTechnical:
      "Conceitos-chave: Telas, Galerias, Formulários, Conectores (SharePoint, Dataverse, SQL), fórmulas Power Fx, avisos de delegação, capacidade offline e técnicas de layout responsivo.",
    detailCanvasChecklist: [
      "Criar um canvas app em branco",
      "Adicionar uma lista SharePoint como fonte de dados",
      "Construir o padrão Galeria + Formulário de Detalhe",
      "Escrever fórmulas Power Fx para navegação",
      "Tratar erros com IfError()",
      "Publicar e compartilhar com usuários",
    ],

    // Misc node details
    detailIntroMMTitle: "Introdução ao SAP MM",
    detailIntroMMTheory:
      "O SAP MM (Gestão de Materiais) é um módulo central do ERP que cobre funções de compras e estoque. Integra-se fortemente com SD (Vendas e Distribuição), FI (Contabilidade Financeira) e PP (Planejamento de Produção).",
    detailIntroMMTechnical:
      "Pontos de integração do módulo: MM-FI (lançamentos automáticos), MM-SD (verificação de disponibilidade), MM-PP (ordens planejadas). Transação ME01 para listas de fontes, MMBE para visão geral de estoque.",
    detailIntroMMChecklist: [
      "Entender o escopo do módulo MM",
      "Navegar pelo menu SAP Easy Access",
      "Identificar as principais transações MM",
      "Entender a integração com FI e SD",
    ],

    progress: "Progresso",
    nodes: "nós",
    completed: "concluídos",
    roadmapNotFound: "Roadmap não encontrado",
  },
}

export type Translations = typeof translations.en
