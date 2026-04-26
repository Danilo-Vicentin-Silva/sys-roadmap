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
    communityNote: "website develop by Danilo Vicentin S",

    // Card categories
    catSapKeyUser: "SAP Key User Tracks",
    catSapConsultant: "SAP Consultant Tracks",
    catMicrosoft: "Auxiliary Corporate Tools",
    catDemand: "Demand & Service Management",
    catFoundations: "Cross-Journey Foundations",

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
    cardDemand: "Demand & Service Mgmt", // Added for the Demand roadmap
    cardJourneyFoundations: "Journey Foundations",

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
    descDemand: "Custom workflows, SharePoint lists, and service architecture.", // Added for Demand roadmap
    descJourneyFoundations:
      "Core knowledge baseline required across SAP, Microsoft, and service journeys",

    // Roadmap view
    backToHome: "Back to Roadmaps",
    roadmapTitle: "Roadmap:",
    nodeCompleted: "Completed",
    nodeInProgress: "In Progress",
    nodeTodo: "To Do",
    nodeMarkComplete: "Mark Complete",
    nodeMarkIncomplete: "Mark Incomplete",

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
    nodeMM8: "Governance, KPIs & Continuous Improvement",

    // Power Apps nodes
    nodePA1: "Power Platform Fundamentals",
    nodePA2: "Canvas Apps",
    nodePA3: "Model-Driven Apps",
    nodePA4: "Dataverse",
    nodePA5: "Connectors & Integration",
    nodePA6: "ALM & Deployment",
    nodePA7: "Governance & Security",
    nodePA8: "Solution Architecture & CoE Practices",

    // Demand Mgmt nodes (Added)
    nodeDM1: "Requirement Gathering",
    nodeDM2: "Database & Schema Modeling",
    nodeDM3: "Workflow Automation",
    nodeDM4: "SLA Tracking",
    nodeDM5: "Service Governance & Improvement Cycle",

    // SAP SD Key User nodes
    nodeSD1: "Introduction to SAP SD",
    nodeSD2: "Organizational Structure",
    nodeSD3: "Sales Document Processing",
    nodeSD4: "Pricing & Conditions",
    nodeSD5: "Shipping & Transportation",
    nodeSD6: "Billing & Invoicing",
    nodeSD7: "Reporting & Analytics",
    nodeSD8: "Returns, Credits & Exceptions",
    nodeSD9: "OTC KPI Management",

    // SAP FI Key User nodes
    nodeFI1: "Introduction to SAP FI",
    nodeFI2: "Organizational Structure",
    nodeFI3: "General Ledger",
    nodeFI4: "Accounts Payable",
    nodeFI5: "Accounts Receivable",
    nodeFI6: "Asset Accounting",
    nodeFI7: "Reporting & Analytics",
    nodeFI8: "Closing Cycle & Internal Controls",

    // SAP MM Consultant nodes
    nodeCMM1: "MM Configuration Fundamentals",
    nodeCMM2: "Enterprise Structure",
    nodeCMM3: "Purchasing Configuration",
    nodeCMM4: "Inventory Configuration",
    nodeCMM5: "Invoice Verification Config",
    nodeCMM6: "MM Reporting",
    nodeCMM7: "Integration Points",
    nodeCMM8: "Advanced Customizing",
    nodeCMM9: "Testing, Cutover & Hypercare",

    // SAP SD Consultant nodes
    nodeCSD1: "SD Configuration Fundamentals",
    nodeCSD2: "Enterprise Structure SD",
    nodeCSD3: "Sales Document Configuration",
    nodeCSD4: "Pricing Configuration",
    nodeCSD5: "Shipping Configuration",
    nodeCSD6: "Billing Configuration",
    nodeCSD7: "SD Integration",
    nodeCSD8: "Advanced SD Customizing",
    nodeCSD9: "Testing, Cutover & Hypercare",

    // SAP FI Consultant nodes
    nodeCFI1: "FI Configuration Fundamentals",
    nodeCFI2: "Chart of Accounts",
    nodeCFI3: "GL Configuration",
    nodeCFI4: "AR Configuration",
    nodeCFI5: "AP Configuration",
    nodeCFI6: "Asset Accounting Config",
    nodeCFI7: "Bank Configuration",
    nodeCFI8: "Advanced FI Customizing",
    nodeCFI9: "Testing, Cutover & Hypercare",

    // Power Automate nodes
    nodePAU1: "Power Automate Fundamentals",
    nodePAU2: "Flow Types & Triggers",
    nodePAU3: "Automated Flows",
    nodePAU4: "Instant Flows",
    nodePAU5: "Scheduled Flows",
    nodePAU6: "RPA & UI Flows",
    nodePAU7: "Connectors & Integration",
    nodePAU8: "Monitoring, Resilience & ALM",

    // Power BI nodes
    nodePBI1: "Power BI Introduction",
    nodePBI2: "Data Sources & Connectivity",
    nodePBI3: "Data Modeling",
    nodePBI4: "DAX & Calculations",
    nodePBI5: "Visualizations",
    nodePBI6: "Power BI Service",
    nodePBI7: "Security & Sharing",
    nodePBI8: "DataOps, Governance & Adoption",

    // Jira nodes
    nodeJira1: "Jira Fundamentals",
    nodeJira2: "Projects & Boards",
    nodeJira3: "Agile Methodologies",
    nodeJira4: "Workflow Configuration",
    nodeJira5: "Scrum Framework",
    nodeJira6: "Kanban Framework",
    nodeJira7: "Reports & Dashboards",
    nodeJira8: "Portfolio Metrics & Continuous Improvement",

    // ServiceNow nodes
    nodeSN1: "ServiceNow Introduction",
    nodeSN2: "ITSM Fundamentals",
    nodeSN3: "Incident Management",
    nodeSN4: "Problem Management",
    nodeSN5: "Change Management",
    nodeSN6: "Asset Management",
    nodeSN7: "Service Catalog",
    nodeSN8: "Operational Excellence & Governance",

    // SharePoint nodes
    nodeSP1: "SharePoint Introduction",
    nodeSP2: "Lists & Libraries",
    nodeSP3: "Power Automate Integration",
    nodeSP4: "Approval Workflows",
    nodeSP5: "Integration & APIs",
    nodeSP6: "Automation & Bots",
    nodeSP7: "Governance & Security",
    nodeSP8: "Adoption, Change Management & Compliance",

    // Journey Foundations nodes
    nodeJF1: "Enterprise Process Mindset",
    nodeJF2: "Data Quality & Master Data Discipline",
    nodeJF3: "Finance and Business Impact Basics",
    nodeJF4: "Low-Code Platform Fundamentals",
    nodeJF5: "Automation and Integration Patterns",
    nodeJF6: "Analytics and KPI Storytelling",
    nodeJF7: "Service Management and Prioritization",
    nodeJF8: "Governance, Security and Continuous Learning",

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

    // Node details — Demand Mgmt (Added)
    detailSchemaTitle: "Advanced Schema Modeling",
    detailSchemaTheory:
      "Designing the backend for service requests. Avoid generic 'status' columns; favor specific temporal controls for recurring demands to ensure accurate reporting and tracking.",
    detailSchemaTechnical:
      "SharePoint Lists / Dataverse. Use 'Periodicity' columns (Daily, Weekly, Monthly) instead of flat statuses for recurring tasks.",
    detailSchemaChecklist: [
      "Map data types effectively",
      "Create a Periodicity column",
      "Configure indexing for large lists",
    ],

    // ===== SAP SD KEY USER =====
    detailIntroSDTitle: "Introduction to SAP SD",
    detailIntroSDTheory:
      "SAP Sales and Distribution (SD) is a core module of SAP ERP that handles all processes from order to cash. It encompasses pre-sales activities, order processing, shipping, billing, and invoicing. SD integrates closely with MM (Materials Management) for availability checks and FI (Financial Accounting) for revenue recognition.",
    detailIntroSDTechnical:
      "Key SD Tables: VBAK (Sales Document Header), VBAP (Sales Document Items), LIKP (Delivery Document Header), LIPS (Delivery Document Items), VBRK (Billing Document Header), VBRP (Billing Document Items).",
    detailIntroSDChecklist: [
      "Understand SD module scope and integration",
      "Navigate SAP Easy Access menu for SD",
      "Identify key SD transactions (VA01, VA02, VL01N, VF01)",
      "Understand integration with MM and FI",
    ],

    detailSalesTitle: "Sales Document Processing",
    detailSalesTheory:
      "Sales documents in SAP represent the customer order and follow a hierarchy: Sales Order (VA01) → Delivery (VL01N) → Billing (VF01). Each document type has specific item categories that determine the flow and behavior through the sales process.",
    detailSalesTechnical:
      "Document flow: VBAK → VBAP → Lips → VBRP. Transaction codes: VA01 (Create Order), VA02 (Change), VA03 (Display), VL01N (Create Delivery), VLO2 (Change Delivery).",
    detailSalesChecklist: [
      "Create a sales order (VA01)",
      "Understand document types (OR, CR, DR)",
      "Configure item categories (TAN, TAB)",
      "Process delivery from sales order",
      "Understand copying control (VOV8)",
    ],

    detailPricingTitle: "Pricing & Conditions",
    detailPricingTheory:
      "Pricing in SAP SD uses a condition technique where prices are determined by condition records stored in the system. Pricing procedure (V/08) controls which condition types are accessed and in what sequence, allowing for complex pricing scenarios including discounts, surcharges, and taxes.",
    detailPricingTechnical:
      "Key tables: KONV (Condition Records), A304 (Material Pricing), A005 (Customer-Material Pricing). Transaction: VK11 (Create Condition), VK12 (Change), M/06 (Define Condition Types).",
    detailPricingChecklist: [
      "Understand pricing procedure determination",
      "Create condition records (VK11)",
      "Configure pricing condition types",
      "Set up access sequences",
      "Handle manual pricing adjustments",
    ],

    detailShippingTitle: "Shipping & Transportation",
    detailShippingTheory:
      "Shipping processing in SAP SD covers the creation of delivery documents based on sales orders, picking confirmation, and goods issue. It integrates with MM for inventory management and with transportation planning for outbound logistics.",
    detailShippingTechnical:
      "Tables: LIKP (Delivery Header), LIPS (Delivery Items), VTTK (Shipment Header). Transactions: VL01N (Create Delivery), VL02 (Change Delivery), VL03 (Display).",
    detailShippingChecklist: [
      "Create delivery from sales order",
      "Process picking confirmation",
      "Post goods issue (VL02)",
      "Understand shipping point determination",
      "Configure delivery types",
    ],

    detailBillingTitle: "Billing & Invoicing",
    detailBillingTheory:
      "Billing in SAP SD creates invoice documents that trigger financial posting to FI. Billing can be triggered from delivery (post goods issue) or directly from sales order depending on billing type and configuration. Supports various billing scenarios including proforma, final, and credit/debit memos.",
    detailBillingTechnical:
      "Tables: VBRK (Billing Header), VBRP (Billing Items), FKKVKP (Billing Document Index). Transactions: VF01 (Create Billing), VF02 (Change), VF03 (Display).",
    detailBillingChecklist: [
      "Create billing document from delivery",
      "Understand billing types (F2, F4, F5)",
      "Process credit memo requests",
      "Understand invoice output determination",
      "Integrate with FI for revenue posting",
    ],

    // ===== SAP FI KEY USER =====
    detailIntroFITitle: "Introduction to SAP FI",
    detailIntroFITheory:
      "SAP Financial Accounting (FI) is the core module for financial processes in SAP. It handles General Ledger (GL), Accounts Payable (AP), Accounts Receivable (AR), and Asset Accounting. FI is the central component that records all financial transactions and provides the foundation for financial reporting.",
    detailIntroFITechnical:
      "Key FI Tables: BKPF (Accounting Document Header), BSEG (Accounting Document Segment), SKA1 (G/L Account Master), KNA1 (Customer Master), LFA1 (Vendor Master), ANLA (Asset Master).",
    detailIntroFIChecklist: [
      "Understand FI module scope",
      "Navigate SAP Easy Access menu for FI",
      "Identify key FI transactions (FB01, FBL1N, FBL3N)",
      "Understand integration with other modules",
    ],

    detailGLTitle: "General Ledger",
    detailGLTheory:
      "The General Ledger is the heart of SAP Financial Accounting. It records all business transactions and provides the foundation for financial statements. GL accounts are organized in a chart of accounts, and posting is done through document types that control the flow and numbering.",
    detailGLTechnical:
      "Tables: SKB1 (G/L Account Master - Company Code), SKAT (G/L Account Texts). Transactions: FSP0 (Display G/L Account), FS10N (Display Balance), FB03 (Display Document).",
    detailGLChecklist: [
      "Understand chart of accounts structure",
      "Post journal entries (FB01)",
      "Configure document types",
      "Understand posting keys",
      "Run GL reports (F.10, S_ALR_87011084)",
    ],

    detailAPTitle: "Accounts Payable",
    detailAPTheory:
      "Accounts Payable manages all vendor invoices and payments. It tracks outstanding vendor balances and integrates with MM for invoice verification. The system supports automatic payment programs and provides tools for vendor analysis and aging.",
    detailAPTechnical:
      "Tables: LFB1 (Vendor Master - Company Code), BSEG (with KOART = 'K'). Transactions: FK01 (Create Vendor), FB60 (Enter Invoice), F-44 (Clear Vendor).",
    detailAPChecklist: [
      "Create vendor master records (FK01)",
      "Post vendor invoices (FB60)",
      "Process vendor payments",
      "Run payment run (F110)",
      "Analyze vendor balances (FAGL_F110_V)",
    ],

    detailARTitle: "Accounts Receivable",
    detailARTheory:
      "Accounts Receivable manages customer invoices and collections. It tracks outstanding customer balances and supports dunning procedures for overdue payments. AR integrates with SD for billing documents and provides customer credit management.",
    detailARTechnical:
      "Tables: KNB1 (Customer Master - Company Code), BSEG (with KOART = 'D'). Transactions: FD01 (Create Customer), FB70 (Enter Invoice), F-32 (Clear Customer).",
    detailARChecklist: [
      "Create customer master records (FD01)",
      "Post customer invoices (FB70)",
      "Process incoming payments (F-26)",
      "Configure dunning procedures",
      "Run customer reports (F.10, Dunning)",
    ],

    detailAssetTitle: "Asset Accounting",
    detailAssetTheory:
      "Asset Accounting (FI-AA) manages fixed assets throughout their lifecycle, from acquisition to retirement. It handles depreciation calculation, asset valuations, and integration with GL for asset postings. Supports multiple depreciation methods and parallel asset valuations.",
    detailAssetTechnical:
      "Tables: ANLA (Asset Master), ANLC (Asset Values), ANLH (Asset History). Transactions: AS01 (Create Asset), AB01 (Post Capitalization), AB02 (Post Retirement).",
    detailAssetChecklist: [
      "Create asset master (AS01)",
      "Post asset acquisition (AB01)",
      "Configure depreciation keys",
      "Run periodic depreciation",
      "Post asset retirement (AB02)",
    ],

    detailReportingTitle: "Financial Reporting",
    detailReportingTheory:
      "Financial reporting in SAP FI provides comprehensive reporting capabilities including balance sheets, profit & loss statements, and trial balances. Reports can be generated in multiple formats and integrated with SAP Business Warehouse for advanced analysis.",
    detailReportingTechnical:
      "Key Reports: F.01 (Balance Carried Forward), F.10 (G/L Account List), S_ALR_87012311 (Balance Sheet), S_ALR_87012312 (P&L Statement).",
    detailReportingChecklist: [
      "Generate trial balance (F.01)",
      "Run balance sheet reports",
      "Run profit & loss statements",
      "Use financial statement versions",
      "Export reports to Excel",
    ],

    // ===== SAP MM CONSULTANT =====
    detailConfigMMTitle: "MM Configuration Fundamentals",
    detailConfigMMTheory:
      "SAP MM Consultant configuration involves setting up the enterprise structure, defining organizational levels, and configuring master data, purchasing, inventory, and invoice verification processes. This requires deep understanding of business processes and SAP customization.",
    detailConfigMMTechnical:
      "Key SPRO nodes: Enterprise Structure, Purchasing, Inventory Management, Invoice Verification. Transaction: SPRO (SAP Reference IMG).",
    detailConfigMMChecklist: [
      "Configure purchasing organization",
      "Set up purchasing group",
      "Define plant and storage location",
      "Configure number ranges",
    ],

    detailPurchasingTitle: "Purchasing Configuration",
    detailPurchasingTheory:
      "Purchasing configuration includes vendor evaluation, source lists, contract types, and purchasing info records. It defines how procurement processes behave and integrates with MM master data.",
    detailPurchasingTechnical:
      "Tables: EINE (Purchasing Info Record), LFA1 (Vendor Master), T024 (Purchasing Groups). Transactions: ME11 (Create Source List), ME31K (Create Contract).",
    detailPurchasingChecklist: [
      "Configure vendor evaluation",
      "Set up source lists",
      "Define contract types",
      "Configure purchasing info records",
    ],

    detailInventoryTitle: "Inventory Configuration",
    detailInventoryTheory:
      "Inventory management configuration covers stock types, movement types, inventory control, and physical inventory processes. It defines how inventory is managed and tracked in the system.",
    detailInventoryTechnical:
      "Tables: MARC (Plant Data), MARD (Storage Location Data), QALS (Inspection Lot). Transactions: MI01 (Create Physical Inventory), MI04 (Enter Count).",
    detailInventoryChecklist: [
      "Configure stock types",
      "Define movement types",
      "Set up physical inventory",
      "Configure inventory valuation",
    ],

    detailInvoiceTitle: "Invoice Verification Configuration",
    detailInvoiceTheory:
      "Invoice verification configuration defines how incoming invoices are processed, including three-way matching, tolerance keys, and automatic payment blocks. It ensures accurate and compliant invoice processing.",
    detailInvoiceTechnical:
      "Tables: TMWRT (Tolerance Keys), RBKP (Invoice Header), RSEG (Invoice Items). Transactions: MR8M (Change Invoice Status), OMR6 (Configure IV).",
    detailInvoiceChecklist: [
      "Configure tolerance keys",
      "Set up three-way matching",
      "Define automatic payment blocks",
      "Configure invoice verification",
    ],

    // ===== SAP SD CONSULTANT =====
    detailConfigSDTitle: "SD Configuration Fundamentals",
    detailConfigSDTheory:
      "SAP SD Consultant configuration involves setting up sales organization, distribution channels, division structures, and defining the complete sales and distribution process flow. This requires deep understanding of sales processes and SAP customization.",
    detailConfigSDTechnical:
      "Key SPRO nodes: Enterprise Structure SD, Sales, Shipping, Billing. Transaction: SPRO (SAP Reference IMG).",
    detailConfigSDChecklist: [
      "Configure sales organization",
      "Set up distribution channel",
      "Define division",
      "Configure sales area",
    ],

    detailSalesDocTitle: "Sales Document Configuration",
    detailSalesDocTheory:
      "Sales document configuration defines document types, item categories, schedule line categories, and copying control. It determines how sales documents are created and processed.",
    detailSalesDocTechnical:
      "Tables: TVAK (Sales Document Types), TVAP (Item Categories), T160 (Schedule Line Categories). Transactions: VOV8 (Copying Control), OVGH (Sales Document Type).",
    detailSalesDocChecklist: [
      "Define sales document types",
      "Configure item categories",
      "Set up schedule line categories",
      "Configure copying control",
    ],

    detailPricingSDTitle: "SD Pricing Configuration",
    detailPricingSDTheory:
      "Pricing configuration in SD includes condition tables, access sequences, condition types, and pricing procedures. It defines how prices are determined and allows for complex pricing scenarios.",
    detailPricingSDTechnical:
      "Tables: KONV (Condition Records), A304 (Material Pricing). Transactions: V/06 (Condition Tables), V/07 (Access Sequences), V/08 (Pricing Procedures).",
    detailPricingSDChecklist: [
      "Create condition tables",
      "Configure access sequences",
      "Define condition types",
      "Set up pricing procedures",
    ],

    detailShippingSDTitle: "SD Shipping Configuration",
    detailShippingSDTheory:
      "Shipping configuration includes shipping point determination, route determination, delivery types, and picking location determination. It defines the complete shipping process flow.",
    detailShippingSDTechnical:
      "Tables: TVST (Shipping Point), TVRO (Route), TVLP (Delivery Type). Transactions: OVL1 (Shipping Point), OVLC (Delivery Type).",
    detailShippingSDChecklist: [
      "Configure shipping point determination",
      "Set up route determination",
      "Define delivery types",
      "Configure picking location",
    ],

    detailBillingSDTitle: "SD Billing Configuration",
    detailBillingSDTheory:
      "Billing configuration defines billing types, invoice routines, output determination, and integration with FI. It controls how billing documents are created and processed.",
    detailBillingSDTechnical:
      "Tables: TVFKT (Billing Type), TVKO (Sales Organization), FKKVKP (Billing Index). Transactions: OV3N (Billing Type), V/32 (Output Determination).",
    detailBillingSDChecklist: [
      "Define billing types",
      "Configure invoice routines",
      "Set up output determination",
      "Configure billing integration",
    ],

    // ===== SAP FI CONSULTANT =====
    detailConfigFITitle: "FI Configuration Fundamentals",
    detailConfigFITheory:
      "SAP FI Consultant configuration involves setting up chart of accounts, fiscal year variants, posting periods, and document types. This requires deep understanding of financial processes and SAP customization.",
    detailConfigFITechnical:
      "Key SPRO nodes: General Ledger, Accounts Receivable, Accounts Payable, Asset Accounting. Transaction: SPRO (SAP Reference IMG).",
    detailConfigFIChecklist: [
      "Configure chart of accounts",
      "Set up fiscal year variant",
      "Define posting period variant",
      "Configure document types",
    ],

    detailGLConfigTitle: "General Ledger Configuration",
    detailGLConfigTheory:
      "GL configuration includes field status variants, document types, posting keys, and tolerance groups. It defines how financial transactions are posted and controlled.",
    detailGLConfigTechnical:
      "Tables: SKAT (G/L Account Texts), T001 (Company Codes). Transactions: OBA7 (Field Status Variant), FB00 (Document Types).",
    detailGLConfigChecklist: [
      "Configure field status variants",
      "Define document types",
      "Set up posting keys",
      "Configure tolerance groups",
    ],

    detailARConfigTitle: "Accounts Receivable Configuration",
    detailARConfigTheory:
      "AR configuration includes customer account groups, field attributes, dunning procedures, and payment terms. It defines how customer accounts are managed.",
    detailARConfigTechnical:
      "Tables: KNA1 (Customer Master), KNVP (Customer Partner Functions). Transactions: FD02 (Customer Master), OVA2 (Dunning Procedure).",
    detailARConfigChecklist: [
      "Configure customer account groups",
      "Set up dunning procedures",
      "Define payment terms",
      "Configure customer master fields",
    ],

    detailAPConfigTitle: "Accounts Payable Configuration",
    detailAPConfigTheory:
      "AP configuration includes vendor account groups, field attributes, payment terms, and automatic payment programs. It defines how vendor accounts are managed.",
    detailAPConfigTechnical:
      "Tables: LFA1 (Vendor Master), LFVK (Vendor Master Purchasing). Transactions: FK02 (Vendor Master), OVA6 (Payment Terms).",
    detailAPConfigChecklist: [
      "Configure vendor account groups",
      "Set up payment terms",
      "Define automatic payment program",
      "Configure vendor master fields",
    ],

    detailAssetConfigTitle: "Asset Accounting Configuration",
    detailAssetConfigTheory:
      "Asset accounting configuration includes depreciation keys, asset classes, screen layouts, and integration with GL. It defines how assets are managed and depreciated.",
    detailAssetConfigTechnical:
      "Tables: ANLA (Asset Master), ANLH (Asset History), T093 (Asset Classes). Transactions: OAAW (Depreciation Keys), OA1A (Asset Classes).",
    detailAssetConfigChecklist: [
      "Configure depreciation keys",
      "Set up asset classes",
      "Define screen layouts",
      "Configure asset integration",
    ],

    detailBankConfigTitle: "Bank Configuration",
    detailBankConfigTheory:
      "Bank configuration includes bank master data, house banks, payment methods, and check lot management. It defines how banking transactions are processed.",
    detailBankConfigTechnical:
      "Tables: BNKA (Bank Master), T012 (House Bank), T012K (Bank Keys). Transactions: FI01 (Create Bank), FBWP (House Bank).",
    detailBankConfigChecklist: [
      "Create bank master records",
      "Configure house banks",
      "Set up payment methods",
      "Configure check lot management",
    ],

    // ===== POWER AUTOMATE =====
    detailFlowBasicsTitle: "Power Automate Fundamentals",
    detailFlowBasicsTheory:
      "Power Automate is Microsoft's workflow automation tool that allows users to create automated workflows between applications and services. It integrates with over 1,000 connectors and supports various flow types for different automation scenarios.",
    detailFlowBasicsTechnical:
      "Key concepts: Connectors, Triggers, Actions, Expressions, Variables, Approvals. Power Platform Admin Center for environment management.",
    detailFlowBasicsChecklist: [
      "Understand Power Automate interface",
      "Create a simple flow",
      "Understand connectors and triggers",
      "Use expressions in flow actions",
    ],

    detailAutomatedTitle: "Automated Flows",
    detailAutomatedTheory:
      "Automated flows are triggered by events from connected services, such as receiving an email, a new SharePoint item, or a form submission. They run automatically when the trigger event occurs.",
    detailAutomatedTechnical:
      "Triggers: When a new email arrives, When a file is created, When an item is created. Actions: Send email, Create item, Post message.",
    detailAutomatedChecklist: [
      "Create an automated flow",
      "Configure trigger conditions",
      "Add multiple actions",
      "Handle parallel branches",
    ],

    detailInstantTitle: "Instant Flows",
    detailInstantTheory:
      "Instant flows are triggered manually by users through buttons in apps like Teams, Power Apps, or the flow mobile app. They provide on-demand automation for common tasks.",
    detailInstantTechnical:
      "Triggers: Power Apps button, Button in Teams. Actions: Any standard connector action. Mobile app triggers for on-the-go automation.",
    detailInstantChecklist: [
      "Create an instant flow",
      "Add input parameters",
      "Share flows with users",
      "Trigger from Power Apps",
    ],

    detailScheduledTitle: "Scheduled Flows",
    detailScheduledTheory:
      "Scheduled flows run on a defined schedule (daily, hourly, etc.) and are useful for batch operations, data synchronization, and periodic reporting tasks.",
    detailScheduledTechnical:
      "Recurrence trigger: Schedule configuration. Common uses: Daily reports, Data cleanup, Periodic sync.",
    detailScheduledChecklist: [
      "Create a scheduled flow",
      "Configure recurrence schedule",
      "Handle timezone issues",
      "Optimize for long-running flows",
    ],

    detailRPATitle: "RPA and UI Flows",
    detailRPATheory:
      "UI flows (Power Automate for desktop) enables automation of legacy applications and processes that don't have APIs. It uses robotic process automation to record and playback user actions.",
    detailRPATechnical:
      "Desktop flows: Windows application automation, Web automation, Selenium IDE. AI Builder for document processing.",
    detailRPAChecklist: [
      "Install Power Automate for desktop",
      "Create a desktop flow",
      "Record UI actions",
      "Handle application errors",
    ],

    detailConnectorsTitle: "Connectors and Integration",
    detailConnectorsTheory:
      "Connectors provide pre-built integrations to various services. Premium connectors require licensing. Custom connectors can be created for internal APIs.",
    detailConnectorsTechnical:
      "Standard connectors: SharePoint, Teams, SQL Server, Outlook. Premium: Dataverse, Salesforce. Custom: OpenAPI, SOAP, REST.",
    detailConnectorsChecklist: [
      "Use standard connectors",
      "Configure premium connectors",
      "Create custom connectors",
      "Manage connector permissions",
    ],

    // ===== POWER BI =====
    detailPBIIntroTitle: "Power BI Introduction",
    detailPBIIntroTheory:
      "Power BI is Microsoft's business analytics tool that enables data visualization and business intelligence. It allows users to connect to various data sources, create reports, and share insights across the organization.",
    detailPBIIntroTechnical:
      "Components: Power BI Desktop, Power BI Service, Power BI Mobile. Key concepts: Workspaces, Dashboards, Reports, Datasets.",
    detailPBIIntroChecklist: [
      "Install Power BI Desktop",
      "Understand Power BI interface",
      "Create your first report",
      "Publish to Power BI Service",
    ],

    detailPBIDataTitle: "Data Sources and Connectivity",
    detailPBIDataTheory:
      "Power BI can connect to hundreds of data sources including databases, cloud services, files, and web APIs. The import vs. DirectQuery modes determine how data is retrieved.",
    detailPBIDataTechnical:
      "Connectors: SQL Server, Azure, SharePoint, Excel, Web APIs. Modes: Import, DirectQuery, Live Connection, Push Dataset.",
    detailPBIDataChecklist: [
      "Connect to Excel file",
      "Connect to SQL Server",
      "Use Web API connector",
      "Configure data refresh",
    ],

    detailPBIModelTitle: "Data Modeling",
    detailPBIModelTheory:
      "Data modeling in Power BI involves creating relationships between tables, defining hierarchies, and setting up calculation groups. A well-designed data model is crucial for performance and usability.",
    detailPBIModelTechnical:
      "Tables: Fact and Dimension tables. Relationships: One-to-many, Many-to-many. DAX functions for calculated columns.",
    detailPBIModelChecklist: [
      "Create relationships between tables",
      "Set up dimension tables",
      "Create hierarchies",
      "Optimize data model",
    ],

    detailPBIDaxTitle: "DAX and Calculations",
    detailPBIDaxTheory:
      "DAX (Data Analysis Expressions) is a formula language used in Power BI for creating custom calculations. It includes functions for aggregation, time intelligence, and filtering.",
    detailPBIDaxTechnical:
      "Key functions: CALCULATE, FILTER, ALL, SUMX, COUNTX. Time intelligence: TOTALYTD, SAMEPERIODLASTYEAR.",
    detailPBIDaxChecklist: [
      "Write basic DAX measures",
      "Create calculated columns",
      "Use CALCULATE function",
      "Implement time intelligence",
    ],

    detailPBIVizTitle: "Visualizations",
    detailPBIVizTitle: "Visualizations",
    detailPBIVizTheory:
      "Power BI offers a wide variety of visualizations including charts, maps, tables, and custom visuals. Choosing the right visualization is key to effective data communication.",
    detailPBIVizTechnical:
      "Visual types: Bar charts, Line charts, Maps, Tables, KPIs. Custom visuals: AppSource, Custom SDK.",
    detailPBIVizChecklist: [
      "Create bar and column charts",
      "Add map visualizations",
      "Use slicers and filters",
      "Apply conditional formatting",
    ],

    detailPBIServiceTitle: "Power BI Service",
    detailPBIServiceTitle: "Power BI Service",
    detailPBIServiceTheory:
      "Power BI Service is the cloud-based platform for sharing and collaborating on reports. It provides workspaces, dashboards, and scheduled data refresh capabilities.",
    detailPBIServiceTechnical:
      "Workspaces: Pro and Premium capacities. Sharing: Share reports, Publish to web. Apps: Create and distribute apps.",
    detailPBIServiceChecklist: [
      "Create workspaces",
      "Publish reports to service",
      "Create dashboards",
      "Configure scheduled refresh",
    ],

    detailPBISecurityTitle: "Security & Sharing",
    detailPBISecurityTitle: "Security and Sharing",
    detailPBISecurityTheory:
      "Row-level security (RLS) in Power BI allows you to restrict data access based on user roles. Sharing can be done through workspaces, direct sharing, or publishing apps.",
    detailPBISecurityTechnical:
      "RLS: Role-based security in DAX. Sharing: Direct share, Workspace share, Publish app. Microsoft 365 integration.",
    detailPBISecurityChecklist: [
      "Configure row-level security",
      "Share reports with users",
      "Create Power BI apps",
      "Manage workspace permissions",
    ],

    // ===== JIRA =====
    detailJiraIntroTitle: "Jira Fundamentals",
    detailJiraIntroTheory:
      "Jira is Atlassian's project management and issue tracking tool. It supports agile methodologies, workflow customization, and comprehensive reporting for software development and business projects.",
    detailJiraIntroTechnical:
      "Key concepts: Issues, Projects, Workflows, Boards. Cloud vs. Data Center deployment options.",
    detailJiraIntroChecklist: [
      "Understand Jira interface",
      "Create issues and sub-tasks",
      "Navigate projects",
      "Use search and filters (JQL)",
    ],

    detailJiraProjectsTitle: "Projects & Boards",
    detailJiraProjectsTitle: "Projects and Boards",
    detailJiraProjectsTheory:
      "Jira projects organize work into distinct areas, each with its own workflow and issue types. Boards (Scrum and Kanban) provide visual task management for agile teams.",
    detailJiraProjectsTechnical:
      "Project types: Team-managed, Company-managed. Board types: Scrum Board, Kanban Board. Issue types: Story, Bug, Task, Epic.",
    detailJiraProjectsChecklist: [
      "Create a new project",
      "Configure project settings",
      "Create and customize boards",
      "Set up issue types",
    ],

    detailJiraAgileTitle: "Agile Methodologies",
    detailJiraAgileTitle: "Agile Methodologies",
    detailJiraAgileTheory:
      "Jira supports both Scrum and Kanban methodologies. Scrum uses sprints for time-boxed iterations, while Kanban focuses on continuous flow and WIP limits.",
    detailJiraAgileTechnical:
      "Scrum: Sprints, Velocity, Burndown charts. Kanban: WIP limits, Cumulative flow diagram. Roadmaps for portfolio management.",
    detailJiraAgileChecklist: [
      "Run Scrum ceremonies in Jira",
      "Use Kanban board effectively",
      "Track velocity and burndown",
      "Manage epics and features",
    ],

    detailJiraWorkflowTitle: "Workflow Configuration",
    detailJiraWorkflowTitle: "Workflow Configuration",
    detailJiraWorkflowTheory:
      "Jira workflows define the progression of issues through statuses and transitions. They can be customized with conditions, validators, and post-functions to enforce business rules.",
    detailJiraWorkflowTechnical:
      "Workflow elements: Statuses, Transitions, Actions. Automation rules: Triggers, Conditions, Actions.",
    detailJiraWorkflowChecklist: [
      "Create custom workflows",
      "Configure workflow transitions",
      "Add automation rules",
      "Set up issue security levels",
    ],

    detailJiraScrumTitle: "Scrum Framework",
    detailJiraScrumTitle: "Scrum Framework",
    detailJiraScrumTheory:
      "Scrum in Jira uses sprints to organize work into time-boxed iterations. It includes backlog management, sprint planning, daily standups, and retrospectives.",
    detailJiraScrumTechnical:
      "Sprint planning: Velocity estimation, Commitment. Daily: Updates, Blockers. Review: Demo, Feedback. Retrospective: Improvements.",
    detailJiraScrumChecklist: [
      "Create and manage sprints",
      "Plan sprint backlog",
      "Run sprint review",
      "Conduct retrospectives",
    ],

    detailJiraKanbanTitle: "Kanban Framework",
    detailJiraKanbanTitle: "Kanban Framework",
    detailJiraKanbanTheory:
      "Kanban in Jira focuses on visualizing work, limiting WIP, and maximizing flow. It uses columns to represent workflow stages and provides cumulative flow diagrams.",
    detailJiraKanbanTechnical:
      "WIP limits: Control work in progress. Lead time: Time from creation to completion. Cycle time: Time in progress. Flow efficiency metrics.",
    detailJiraKanbanChecklist: [
      "Set up Kanban board",
      "Configure WIP limits",
      "Track lead and cycle time",
      "Optimize flow efficiency",
    ],

    detailJiraReportsTitle: "Reports & Dashboards",
    detailJiraReportsTitle: "Reports and Dashboards",
    detailJiraReportsTheory:
      "Jira provides built-in reports for team velocity, burndown, and issue statistics. Dashboards can be customized with gadgets to display relevant metrics.",
    detailJiraReportsTechnical:
      "Reports: Sprint report, Velocity chart, Burndown, Cumulative flow. Gadgets: Assigned to me, Activity stream, Pie chart.",
    detailJiraReportsChecklist: [
      "Use built-in reports",
      "Create custom dashboards",
      "Add gadgets to dashboard",
      "Export reports for stakeholders",
    ],

    // ===== SERVICENOW =====
    detailSNIntroTitle: "ServiceNow Introduction",
    detailSNIntroTheory:
      "ServiceNow is a cloud-based platform for enterprise service management. It provides IT Service Management (ITSM) and other enterprise service functions including HR, security, and customer service.",
    detailSNIntroTechnical:
      "Key modules: ITSM, ITOM, HR, Security, Customer Service. Instance types: Personal, Development, Production.",
    detailSNIntroChecklist: [
      "Navigate ServiceNow interface",
      "Understand module structure",
      "Use lists and forms",
      "Configure user preferences",
    ],

    detailSNITSMTitle: "ITSM Fundamentals",
    detailSNITSMTitle: "ITSM Fundamentals",
    detailSNITSMTitle: "ITSM Fundamentals",
    detailSNITSMTitle: "ITSM Fundamentals",
    detailSNITSMTheory:
      "IT Service Management (ITSM) in ServiceNow covers incident, problem, change, and service request management. It follows ITIL best practices for service delivery.",
    detailSNITSMTechnical:
      "Tables: incident, problem, change_request, sc_request. Process flows: Incident → Problem → Change.",
    detailSNITSMChecklist: [
      "Understand ITSM processes",
      "Navigate ITSM modules",
      "Configure service catalog",
      "Set up SLAs",
    ],

    detailSNIncidentTitle: "Incident Management",
    detailSNIncidentTitle: "Incident Management",
    detailSNIncidentTitle: "Incident Management",
    detailSNIncidentTitle: "Incident Management",
    detailSNIncidentTheory:
      "Incident Management focuses on restoring normal service operation as quickly as possible. Incidents are logged, assigned, and resolved following defined workflows and SLAs.",
    detailSNIncidentTechnical:
      "Tables: incident (Incident table). Fields: Short description, Category, Impact, Urgency, State. Assignment groups and escalation.",
    detailSNIncidentChecklist: [
      "Create incident records",
      "Assign incidents to groups",
      "Use incident workflows",
      "Manage incident SLA breaches",
    ],

    detailSNProblemTitle: "Problem Management",
    detailSNProblemTitle: "Problem Management",
    detailSNProblemTitle: "Problem Management",
    detailSNProblemTitle: "Problem Management",
    detailSNProblemTheory:
      "Problem Management identifies the root cause of incidents and implements permanent solutions. It works closely with Change Management to prevent incident recurrence.",
    detailSNProblemTechnical:
      "Tables: problem (Problem table). Fields: Problem state, Root cause, Known error, Related incidents.",
    detailSNProblemChecklist: [
      "Create problem records",
      "Analyze root cause",
      "Create known error database",
      "Link problems to changes",
    ],

    detailSNChangeTitle: "Change Management",
    detailSNChangeTitle: "Change Management",
    detailSNChangeTitle: "Change Management",
    detailSNChangeTitle: "Change Management",
    detailSNChangeTheory:
      "Change Management controls the lifecycle of changes to the production environment. It uses CAB (Change Advisory Board) workflows and risk assessment for approval.",
    detailSNChangeTechnical:
      "Tables: change_request. Change types: Normal, Standard, Emergency. States: Draft, Submit, Assess, Authorize, Implement, Review.",
    detailSNChangeChecklist: [
      "Create change requests",
      "Configure change models",
      "Use CAB workflow",
      "Assess change risk",
    ],

    detailSNAssetTitle: "Asset Management",
    detailSNAssetTitle: "Asset Management",
    detailSNAssetTitle: "Asset Management",
    detailSNAssetTitle: "Asset Management",
    detailSNAssetTheory:
      "Asset Management tracks IT assets throughout their lifecycle from procurement to retirement. It integrates with procurement and configuration management databases.",
    detailSNAssetTechnical:
      "Tables: alm_asset, cmdb_ci. Asset classes: Hardware, Software, License. States: In storage, In use, Retired.",
    detailSNAssetChecklist: [
      "Create asset records",
      "Track asset lifecycle",
      "Configure asset classes",
      "Integrate with CMDB",
    ],

    detailSNCatalogTitle: "Service Catalog",
    detailSNCatalogTitle: "Service Catalog",
    detailSNCatalogTitle: "Service Catalog",
    detailSNCatalogTitle: "Service Catalog",
    detailSNCatalogTheory:
      "Service Catalog provides a self-service portal for users to request IT services. It includes catalog items, record producers, and workflow-driven request fulfillment.",
    detailSNCatalogTechnical:
      "Tables: sc_cat_item, sc_request, sc_request_item. Catalog designer: Item builder, Variable sets, Workflows.",
    detailSNCatalogChecklist: [
      "Create catalog items",
      "Build service catalog",
      "Configure request workflows",
      "Set up catalog categories",
    ],

    // ===== SHAREPOINT =====
    detailSPIntroTitle: "SharePoint Introduction",
    detailSPIntroTheory:
      "SharePoint is Microsoft's collaboration platform for document management, intranet sites, and business process automation. It integrates deeply with Microsoft 365.",
    detailSPIntroTechnical:
      "Components: Sites, Lists, Libraries, Pages. SharePoint Online vs. On-premises. Modern vs. Classic experience.",
    detailSPIntroChecklist: [
      "Understand SharePoint structure",
      "Create team sites",
      "Navigate modern interfaces",
      "Configure site settings",
    ],

    detailSPListsTitle: "Lists & Libraries",
    detailSPListsTitle: "Lists and Libraries",
    detailSPListsTheory:
      "SharePoint lists and libraries store and organize data. Lists are similar to spreadsheets while libraries are designed for document storage with version control.",
    detailSPListsTechnical:
      "List types: Custom lists, Issue tracking, Calendar. Library types: Document, Media, Pages. Columns: Text, Choice, Lookup, Managed Metadata.",
    detailSPListsChecklist: [
      "Create custom lists",
      "Configure library settings",
      "Set up column validation",
      "Manage versions",
    ],

    detailSPPowerAutomateTitle: "Power Automate Integration",
    detailSPPowerAutomateTitle: "Power Automate Integration",
    detailSPPowerAutomateTheory:
      "SharePoint integrates with Power Automate to create automated workflows for document approval, data collection, and process automation. Flow buttons can be added to list items.",
    detailSPPowerAutomateTechnical:
      "Triggers: When item created, When item modified. Actions: Create item, Update item, Send email. SharePoint connectors.",
    detailSPPowerAutomateChecklist: [
      "Create flow from template",
      "Build custom SharePoint flows",
      "Use flow buttons in SharePoint",
      "Handle flow errors",
    ],

    detailSPApprovalTitle: "Approval Workflows",
    detailSPApprovalTitle: "Approval Workflows",
    detailSPApprovalTheory:
      "Approval workflows in SharePoint automate document and item approval processes. They can be configured with sequential or parallel approvers and integrate with Outlook.",
    detailSPApprovalTechnical:
      "Approval actions: Start an approval, Wait for approval. Integration: Outlook, Teams. History: Approval comments, timestamps.",
    detailSPApprovalChecklist: [
      "Create approval workflow",
      "Configure approvers",
      "Set approval stages",
      "Track approval status",
    ],

    detailSPIntegrationTitle: "Integration & APIs",
    detailSPIntegrationTitle: "Integration and APIs",
    detailSPIntegrationTheory:
      "SharePoint provides multiple integration options including Power Automate, Power Apps, Microsoft Graph API, and REST APIs for custom development.",
    detailSPIntegrationTechnical:
      "APIs: Microsoft Graph, SharePoint REST, PnP JS. Connectors: Power Automate, Power Apps, Azure Logic Apps.",
    detailSPIntegrationChecklist: [
      "Use Microsoft Graph API",
      "Create Power Apps with SharePoint",
      "Build custom integrations",
      "Manage API permissions",
    ],

    detailSPAutomationTitle: "Automation & Bots",
    detailSPAutomationTitle: "Automation and Bots",
    detailSPAutomationTheory:
      "SharePoint can be integrated with Power Virtual Agents to create chatbots for common questions and process automation. Teams integration extends reach.",
    detailSPAutomationTechnical:
      "Power Virtual Agents: Bot creation, Topic design, Integration. Teams: Tabs, Bots, Messaging extensions.",
    detailSPAutomationChecklist: [
      "Create Power Virtual Agent",
      "Integrate bot with SharePoint",
      "Build Teams integrations",
      "Automate common tasks",
    ],

    detailSPGovernanceTitle: "Governance & Security",
    detailSPGovernanceTitle: "Governance and Security",
    detailSPGovernanceTheory:
      "SharePoint governance includes permission management, data loss prevention, retention policies, and compliance features for enterprise deployments.",
    detailSPGovernanceTechnical:
      "Permissions: SharePoint groups, Azure AD groups, Sensitivity labels. Compliance: DLP, Retention, eDiscovery.",
    detailSPGovernanceChecklist: [
      "Configure permission levels",
      "Set up sensitivity labels",
      "Configure retention policies",
      "Implement DLP policies",
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
    communityNote:
      "Site desenvolvido por Danilo Vicentin S.",

    // Card categories
    catSapKeyUser: "Trilhas SAP Key User",
    catSapConsultant: "Trilhas SAP Consultor",
    catMicrosoft: "Ferramentas Corporativas Auxiliares",
    catDemand: "Ferramentas de Demanda e Serviços",
    catFoundations: "Fundamentos Transversais",

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
    cardDemand: "Gestão de Demandas", // Added
    cardJourneyFoundations: "Fundamentos da Jornada",

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
    descSharePoint:
      "Intranet, bibliotecas de documentos e integração Power Automate",
    descDemand:
      "Fluxos de trabalho customizados, listas SharePoint e arquitetura de serviços.", // Added
    descJourneyFoundations:
      "Base de conhecimentos essenciais para evoluir em trilhas SAP, Microsoft e gestão de serviços",

    // Roadmap view
    backToHome: "Voltar aos Roadmaps",
    roadmapTitle: "Roadmap:",
    nodeCompleted: "Concluído",
    nodeInProgress: "Em Progresso",
    nodeTodo: "A Fazer",
    nodeMarkComplete: "Marcar Concluído",
    nodeMarkIncomplete: "Desmarcar Concluído",

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
    nodeMM8: "Governança, KPIs e Melhoria Contínua",

    // Power Apps nodes
    nodePA1: "Fundamentos da Power Platform",
    nodePA2: "Canvas Apps",
    nodePA3: "Apps Orientados a Modelo",
    nodePA4: "Dataverse",
    nodePA5: "Conectores e Integração",
    nodePA6: "ALM e Implantação",
    nodePA7: "Governança e Segurança",
    nodePA8: "Arquitetura da Solução e Práticas de CoE",

    // Demand Mgmt nodes (Added)
    nodeDM1: "Levantamento de Requisitos",
    nodeDM2: "Modelagem de Dados e Schemas",
    nodeDM3: "Automação de Workflows",
    nodeDM4: "Rastreamento de SLAs",
    nodeDM5: "Governança de Serviços e Ciclo de Melhoria",

    // SAP SD Key User nodes
    nodeSD1: "Introdução ao SAP SD",
    nodeSD2: "Estrutura Organizacional",
    nodeSD3: "Processamento de Documentos de Vendas",
    nodeSD4: "Precificação e Condições",
    nodeSD5: "Entrega e Transporte",
    nodeSD6: "Faturamento e Faturas",
    nodeSD7: "Relatórios e Análises",
    nodeSD8: "Devoluções, Créditos e Exceções",
    nodeSD9: "Gestão de KPIs do OTC",

    // SAP FI Key User nodes
    nodeFI1: "Introdução ao SAP FI",
    nodeFI2: "Estrutura Organizacional",
    nodeFI3: "Livro Razão",
    nodeFI4: "Contas a Pagar",
    nodeFI5: "Contas a Receber",
    nodeFI6: "Contabilidade de Ativos",
    nodeFI7: "Relatórios e Análises",
    nodeFI8: "Fechamento e Controles Internos",

    // SAP MM Consultant nodes
    nodeCMM1: "Fundamentos de Configuração MM",
    nodeCMM2: "Estrutura Empresarial",
    nodeCMM3: "Configuração de Compras",
    nodeCMM4: "Configuração de Estoque",
    nodeCMM5: "Configuração de Verificação de Faturas",
    nodeCMM6: "Relatórios MM",
    nodeCMM7: "Pontos de Integração",
    nodeCMM8: "Customização Avançada",
    nodeCMM9: "Testes, Cutover e Hypercare",

    // SAP SD Consultant nodes
    nodeCSD1: "Fundamentos de Configuração SD",
    nodeCSD2: "Estrutura Empresarial SD",
    nodeCSD3: "Configuração de Documentos de Vendas",
    nodeCSD4: "Configuração de Precificação",
    nodeCSD5: "Configuração de Entrega",
    nodeCSD6: "Configuração de Faturamento",
    nodeCSD7: "Integração SD",
    nodeCSD8: "Customização Avançada SD",
    nodeCSD9: "Testes, Cutover e Hypercare",

    // SAP FI Consultant nodes
    nodeCFI1: "Fundamentos de Configuração FI",
    nodeCFI2: "Plano de Contas",
    nodeCFI3: "Configuração do Razão",
    nodeCFI4: "Configuração de AR",
    nodeCFI5: "Configuração de AP",
    nodeCFI6: "Configuração de Contabilidade de Ativos",
    nodeCFI7: "Configuração Bancária",
    nodeCFI8: "Customização Avançada FI",
    nodeCFI9: "Testes, Cutover e Hypercare",

    // Power Automate nodes
    nodePAU1: "Fundamentos do Power Automate",
    nodePAU2: "Tipos de Fluxo e Gatilhos",
    nodePAU3: "Fluxos Automatizados",
    nodePAU4: "Fluxos Instantâneos",
    nodePAU5: "Fluxos Agendados",
    nodePAU6: "RPA e Fluxos de UI",
    nodePAU7: "Conectores e Integração",
    nodePAU8: "Monitoramento, Resiliência e ALM",

    // Power BI nodes
    nodePBI1: "Introdução ao Power BI",
    nodePBI2: "Fontes de Dados e Conectividade",
    nodePBI3: "Modelagem de Dados",
    nodePBI4: "DAX e Cálculos",
    nodePBI5: "Visualizações",
    nodePBI6: "Power BI Service",
    nodePBI7: "Segurança e Compartilhamento",
    nodePBI8: "DataOps, Governança e Adoção",

    // Jira nodes
    nodeJira1: "Fundamentos do Jira",
    nodeJira2: "Projetos e Quadros",
    nodeJira3: "Metodologias Ágeis",
    nodeJira4: "Configuração de Workflow",
    nodeJira5: "Framework Scrum",
    nodeJira6: "Framework Kanban",
    nodeJira7: "Relatórios e Dashboards",
    nodeJira8: "Métricas de Portfólio e Melhoria Contínua",

    // ServiceNow nodes
    nodeSN1: "Introdução ao ServiceNow",
    nodeSN2: "Fundamentos ITSM",
    nodeSN3: "Gestão de Incidentes",
    nodeSN4: "Gestão de Problemas",
    nodeSN5: "Gestão de Mudanças",
    nodeSN6: "Gestão de Ativos",
    nodeSN7: "Catálogo de Serviços",
    nodeSN8: "Excelência Operacional e Governança",

    // SharePoint nodes
    nodeSP1: "Introdução ao SharePoint",
    nodeSP2: "Listas e Bibliotecas",
    nodeSP3: "Integração Power Automate",
    nodeSP4: "Workflows de Aprovação",
    nodeSP5: "Integração e APIs",
    nodeSP6: "Automação e Bots",
    nodeSP7: "Governança e Segurança",
    nodeSP8: "Adoção, Gestão da Mudança e Compliance",

    // Journey Foundations nodes
    nodeJF1: "Mentalidade de Processos Empresariais",
    nodeJF2: "Qualidade de Dados e Disciplina de Cadastro Mestre",
    nodeJF3: "Fundamentos Financeiros e Impacto no Negócio",
    nodeJF4: "Fundamentos de Plataformas Low-Code",
    nodeJF5: "Padrões de Automação e Integração",
    nodeJF6: "Analytics e Storytelling com KPIs",
    nodeJF7: "Gestão de Serviços e Priorização",
    nodeJF8: "Governança, Segurança e Aprendizado Contínuo",

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

    // Node details — Demand Mgmt (Added)
    detailSchemaTitle: "Modelagem Avançada de Schemas",
    detailSchemaTheory:
      "Desenhando o backend para solicitações de serviço. Evite colunas genéricas de 'status'; prefira controles temporais específicos para demandas recorrentes para garantir relatórios precisos.",
    detailSchemaTechnical:
      "Listas SharePoint / Dataverse. Utilize colunas de 'Periodicidade' (Diário, Semanal, Mensal) em vez de status planos para tarefas recorrentes.",
    detailSchemaChecklist: [
      "Mapear tipos de dados de forma eficaz",
      "Criar coluna de Periodicidade",
      "Configurar indexação para listas grandes",
    ],

    // ===== SAP SD KEY USER =====
    detailIntroSDTitle: "Introdução ao SAP SD",
    detailIntroSDTheory:
      "SAP Sales and Distribution (SD) é um módulo central do SAP ERP que processa todos os processos do pedido ao pagamento. Abrange atividades pré-vendas, processamento de pedidos, entrega, faturamento e emissão de faturas. SD integra-se com MM para verificação de disponibilidade e FI para reconhecimento de receita.",
    detailIntroSDTechnical:
      "Tabelas SD Principais: VBAK (Cabeçalho Documento de Vendas), VBAP (Itens Documento de Vendas), LIKP (Cabeçalho Documento de Entrega), LIPS (Itens Documento de Entrega), VBRK (Cabeçalho Documento de Fatura), VBRP (Itens Documento de Fatura).",
    detailIntroSDChecklist: [
      "Entender escopo do módulo SD e integração",
      "Navegar pelo menu SAP Easy Access para SD",
      "Identificar principais transações SD (VA01, VA02, VL01N, VF01)",
      "Entender integração com MM e FI",
    ],

    detailSalesTitle: "Processamento de Documentos de Vendas",
    detailSalesTheory:
      "Documentos de vendas no SAP representam o pedido do cliente e seguem uma hierarquia: Pedido de Venda (VA01) → Entrega (VL01N) → Faturamento (VF01). Cada tipo de documento tem categorias de item específicas que determinam o fluxo e comportamento pelo processo de vendas.",
    detailSalesTechnical:
      "Fluxo de documentos: VBAK → VBAP → LIPS → VBRP. Códigos de transação: VA01 (Criar Pedido), VA02 (Alterar), VA03 (Exibir), VL01N (Criar Entrega), VL02 (Alterar Entrega).",
    detailSalesChecklist: [
      "Criar um pedido de vendas (VA01)",
      "Entender tipos de documento (OR, CR, DR)",
      "Configurar categorias de item (TAN, TAB)",
      "Processar entrega a partir do pedido",
      "Entender controle de cópia (VOV8)",
    ],

    detailPricingTitle: "Precificação e Condições",
    detailPricingTheory:
      "Precificação no SAP SD usa uma técnica de condições onde preços são determinados por registros de condição armazenados no sistema. Procedimento de precificação (V/08) controla quais tipos de condição são acessados e em qual sequência, permitindo cenários complexos incluindo descontos, adicionais e impostos.",
    detailPricingTechnical:
      "Tabelas principais: KONV (Registros de Condição), A304 (Precificação de Material), A005 (Precificação Cliente-Material). Transação: VK11 (Criar Condição), VK12 (Alterar), M/06 (Definir Tipos de Condição).",
    detailPricingChecklist: [
      "Entender determinação do procedimento de precificação",
      "Criar registros de condição (VK11)",
      "Configurar tipos de condição de precificação",
      "Configurar sequências de acesso",
      "Tratar ajustes manuais de precificação",
    ],

    detailShippingTitle: "Entrega e Transporte",
    detailShippingTheory:
      "Processamento de entrega no SAP SD abrange a criação de documentos de entrega baseados em pedidos de vendas, confirmação de separação e emissão de mercadorias. Integra-se com MM para gestão de estoque e com planejamento de transporte para logística de saída.",
    detailShippingTechnical:
      "Tabelas: LIKP (Cabeçalho Entrega), LIPS (Itens Entrega), VTTK (Cabeçalho Remessa). Transações: VL01N (Criar Entrega), VL02 (Alterar Entrega), VL03 (Exibir).",
    detailShippingChecklist: [
      "Criar entrega a partir do pedido de vendas",
      "Processar confirmação de separação",
      "Lançar emissão de mercadoria (VL02)",
      "Entender determinação de ponto de entrega",
      "Configurar tipos de entrega",
    ],

    detailBillingTitle: "Faturamento e Faturas",
    detailBillingTheory:
      "Faturamento no SAP SD cria documentos de fatura que desencadeiam lançamento financeiro para FI. O faturamento pode ser acionado a partir da entrega (após emissão de mercadoria) ou diretamente do pedido de vendas dependendo do tipo de faturamento e configuração. Suporta vários cenários incluindo proforma, final e notas de crédito/débito.",
    detailBillingTechnical:
      "Tabelas: VBRK (Cabeçalho Fatura), VBRP (Itens Fatura), FKKVKP (Índice Documento de Fatura). Transações: VF01 (Criar Fatura), VF02 (Alterar), VF03 (Exibir).",
    detailBillingChecklist: [
      "Criar documento de fatura a partir da entrega",
      "Entender tipos de faturamento (F2, F4, F5)",
      "Processar solicitações de crédito",
      "Entender determinação de saída de fatura",
      "Integrar com FI para lançamento de receita",
    ],

    // ===== SAP FI KEY USER =====
    detailIntroFITitle: "Introdução ao SAP FI",
    detailIntroFITheory:
      "SAP Financial Accounting (FI) é o módulo central do SAP para processos financeiros. Ele gerencia Livro Razão (GL), Contas a Pagar (AP), Contas a Receber (AR) e Contabilidade de Ativos. FI é o componente central que registra todas as transações financeiras e fornece a base para relatórios financeiros.",
    detailIntroFITechnical:
      "Tabelas FI Principais: BKPF (Cabeçalho Documento Contábil), BSEG (Segmento Documento Contábil), SKA1 (Mestre Conta Contábil), KNA1 (Mestre Cliente), LFA1 (Mestre Fornecedor), ANLA (Mestre Ativo).",
    detailIntroFIChecklist: [
      "Entender escopo do módulo FI",
      "Navegar pelo menu SAP Easy Access para FI",
      "Identificar principais transações FI (FB01, FBL1N, FBL3N)",
      "Entender integração com outros módulos",
    ],

    detailGLTitle: "Livro Razão",
    detailGLTheory:
      "O Livro Razão é o coração da Contabilidade Financeira do SAP. Ele registra todas as transações de negócios e fornece a base para demonstrações financeiras. Contas contábeis são organizadas em um plano de contas, e os lançamentos são feitos através de tipos de documento que controlam o fluxo e numeração.",
    detailGLTechnical:
      "Tabelas: SKB1 (Mestre Conta Contábil - Código Empresa), SKAT (Textos Conta Contábil). Transações: FSP0 (Exibir Conta Contábil), FS10N (Exibir Saldo), FB03 (Exibir Documento).",
    detailGLChecklist: [
      "Entender estrutura do plano de contas",
      "Lançar lançamentos contábeis (FB01)",
      "Configurar tipos de documento",
      "Entender chaves de lançamento",
      "Executar relatórios GL (F.10, S_ALR_87011084)",
    ],

    detailAPTitle: "Contas a Pagar",
    detailAPTheory:
      "Contas a Pagar gerencia todas as faturas e pagamentos de fornecedores. Ele rastreia saldos pendentes de fornecedores e integra-se com MM para verificação de faturas. O sistema suporta programas automáticos de pagamento e fornece ferramentas para análise e aging de fornecedores.",
    detailAPTechnical:
      "Tabelas: LFB1 (Mestre Fornecedor - Código Empresa), BSEG (com KOART = 'K'). Transações: FK01 (Criar Fornecedor), FB60 (Lançar Fatura), F-44 (Liquidar Fornecedor).",
    detailAPChecklist: [
      "Criar registros de mestre de fornecedores (FK01)",
      "Lançar faturas de fornecedores (FB60)",
      "Processar pagamentos de fornecedores",
      "Executar programa de pagamento (F110)",
      "Analisar saldos de fornecedores (FAGL_F110_V)",
    ],

    detailARTitle: "Contas a Receber",
    detailARTheory:
      "Contas a Receber gerencia faturas e cobranças de clientes. Ele rastreia saldos pendentes de clientes e suporta procedimentos de cobrança para pagamentos atrasados. AR integra-se com SD para documentos de faturamento e fornece gestão de crédito de clientes.",
    detailARTechnical:
      "Tabelas: KNB1 (Mestre Cliente - Código Empresa), BSEG (com KOART = 'D'). Transações: FD01 (Criar Cliente), FB70 (Lançar Fatura), F-32 (Liquidar Cliente).",
    detailARChecklist: [
      "Criar registros de mestre de clientes (FD01)",
      "Lançar faturas de clientes (FB70)",
      "Processar recebimentos (F-26)",
      "Configurar procedimentos de cobrança",
      "Executar relatórios de clientes (F.10, Cobrança)",
    ],

    detailAssetTitle: "Contabilidade de Ativos",
    detailAssetTheory:
      "Contabilidade de Ativos (FI-AA) gerencia ativos fixos ao longo de seu ciclo de vida, desde a aquisição até a baixa. Ele lida com cálculo de depreciation, avaliações de ativos e integração com GL para lançamentos de ativos. Suporta múltiplos métodos de depreciação e avaliações paralelas de ativos.",
    detailAssetTechnical:
      "Tabelas: ANLA (Mestre Ativo), ANLC (Valores Ativo), ANLH (Histórico Ativo). Transações: AS01 (Criar Ativo), AB01 (Lançar Capitalização), AB02 (Lançar Baixa).",
    detailAssetChecklist: [
      "Criar mestre de ativo (AS01)",
      "Lançar aquisição de ativo (AB01)",
      "Configurar chaves de depreciação",
      "Executar depreciação periódica",
      "Lançar baixa de ativo (AB02)",
    ],

    detailReportingTitle: "Relatórios Financeiros",
    detailReportingTheory:
      "Relatórios financeiros no SAP FI fornecem capacidades abrangentes incluindo balanços, demonstrações de resultados e saldos trial. Relatórios podem ser gerados em múltiplos formatos e integrados com SAP Business Warehouse para análise avançada.",
    detailReportingTechnical:
      "Relatórios principais: F.01 (Saldo Transportado), F.10 (Lista Contas Contábeis), S_ALR_87012311 (Balanço), S_ALR_87012312 (Demonstração Resultados).",
    detailReportingChecklist: [
      "Gerar saldo trial (F.01)",
      "Executar relatórios de balanço",
      "Executar demonstrações de resultados",
      "Usar versões de demonstrações financeiras",
      "Exportar relatórios para Excel",
    ],

    // ===== SAP MM CONSULTANT =====
    detailConfigMMTitle: "Fundamentos de Configuração MM",
    detailConfigMMTheory:
      "Configuração de SAP MM Consultant envolve configurar a estrutura empresarial, definir níveis organizacionais e configurar dados mestre, compras, estoque e processos de verificação de faturas. Isso requer profundo entendimento de processos de negócio e customização SAP.",
    detailConfigMMTechnical:
      "Nós SPRO principais: Estrutura Empresarial, Compras, Gestão de Estoque, Verificação de Faturas. Transação: SPRO (SAP Reference IMG).",
    detailConfigMMChecklist: [
      "Configurar organização de compras",
      "Configurar grupo de compras",
      "Definir planta e localização de estoque",
      "Configurar intervalos de números",
    ],

    detailPurchasingTitle: "Configuração de Compras",
    detailPurchasingTheory:
      "Configuração de compras inclui avaliação de fornecedores, listas de origem, tipos de contrato e registros de info de compras. Ele define como processos de procurement se comportam e integra-se com dados mestre MM.",
    detailPurchasingTechnical:
      "Tabelas: EINE (Registro Info Compras), LFA1 (Mestre Fornecedor), T024 (Grupos Compras). Transações: ME11 (Criar Lista Origem), ME31K (Criar Contrato).",
    detailPurchasingChecklist: [
      "Configurar avaliação de fornecedores",
      "Configurar listas de origem",
      "Definir tipos de contrato",
      "Configurar registros de info de compras",
    ],

    detailInventoryTitle: "Configuração de Estoque",
    detailInventoryTheory:
      "Configuração de gestão de estoque abrange tipos de estoque, tipos de movimento, controle de estoque e processos de inventário físico. Ele define como o estoque é gerenciado e rastreado no sistema.",
    detailInventoryTechnical:
      "Tabelas: MARC (Dados Planta), MARD (Dados Localização Estoque), QALS (Lote Inspeção). Transações: MI01 (Criar Inventário Físico), MI04 (Lançar Contagem).",
    detailInventoryChecklist: [
      "Configurar tipos de estoque",
      "Definir tipos de movimento",
      "Configurar inventário físico",
      "Configurar avaliação de estoque",
    ],

    detailInvoiceTitle: "Configuração de Verificação de Faturas",
    detailInvoiceTheory:
      "Configuração de verificação de faturas define como faturas recebidas são processadas, incluindo correspondência de três vias, chaves de tolerância e bloqueios automáticos de pagamento. Ele garante processamento de faturas preciso e em conformidade.",
    detailInvoiceTechnical:
      "Tabelas: TMWRT (Chaves Tolerância), RBKP (Cabeçalho Fatura), RSEG (Itens Fatura). Transações: MR8M (Alterar Status Fatura), OMR6 (Configurar IV).",
    detailInvoiceChecklist: [
      "Configurar chaves de tolerância",
      "Configurar correspondência de três vias",
      "Definir bloqueios automáticos de pagamento",
      "Configurar verificação de faturas",
    ],

    // ===== SAP SD CONSULTANT =====
    detailConfigSDTitle: "Fundamentos de Configuração SD",
    detailConfigSDTheory:
      "Configuração de SAP SD Consultant envolve configurar organização de vendas, canais de distribuição, estruturas de divisão e definir o fluxo completo do processo de vendas e distribuição. Isso requer profundo entendimento de processos de vendas e customização SAP.",
    detailConfigSDTechnical:
      "Nós SPRO principais: Estrutura Empresarial SD, Vendas, Entrega, Faturamento. Transação: SPRO (SAP Reference IMG).",
    detailConfigSDChecklist: [
      "Configurar organização de vendas",
      "Configurar canal de distribuição",
      "Definir divisão",
      "Configurar área de vendas",
    ],

    detailSalesDocTitle: "Configuração de Documentos de Vendas",
    detailSalesDocTheory:
      "Configuração de documentos de vendas define tipos de documento, categorias de item, categorias de linha de cronograma e controle de cópia. Ele determina como documentos de vendas são criados e processados.",
    detailSalesDocTechnical:
      "Tabelas: TVAK (Tipos Documento Vendas), TVAP (Categorias Item), T160 (Categorias Linha Cronograma). Transações: VOV8 (Controle Cópia), OVGH (Tipo Documento Vendas).",
    detailSalesDocChecklist: [
      "Definir tipos de documento de vendas",
      "Configurar categorias de item",
      "Configurar categorias de linha de cronograma",
      "Configurar controle de cópia",
    ],

    detailPricingSDTitle: "Configuração de Precificação SD",
    detailPricingSDTheory:
      "Configuração de precificação em SD inclui tabelas de condições, sequências de acesso, tipos de condições e procedimentos de precificação. Ele define como preços são determinados e permite cenários complexos de precificação.",
    detailPricingSDTechnical:
      "Tabelas: KONV (Registros Condição), A304 (Precificação Material). Transações: V/06 (Tabelas Condição), V/07 (Sequências Acesso), V/08 (Procedimentos Precificação).",
    detailPricingSDChecklist: [
      "Criar tabelas de condição",
      "Configurar sequências de acesso",
      "Definir tipos de condição",
      "Configurar procedimentos de precificação",
    ],

    detailShippingSDTitle: "Configuração de Entrega SD",
    detailShippingSDTheory:
      "Configuração de entrega inclui determinação de ponto de entrega, determinação de rota, tipos de entrega e determinação de localização de separação. Ele define o fluxo completo do processo de entrega.",
    detailShippingSDTechnical:
      "Tabelas: TVST (Ponto Entrega), TVRO (Rota), TVLP (Tipo Entrega). Transações: OVL1 (Ponto Entrega), OVLC (Tipo Entrega).",
    detailShippingSDChecklist: [
      "Configurar determinação de ponto de entrega",
      "Configurar determinação de rota",
      "Definir tipos de entrega",
      "Configurar localização de separação",
    ],

    detailBillingSDTitle: "Configuração de Faturamento SD",
    detailBillingSDTheory:
      "Configuração de faturamento define tipos de faturamento, rotinas de fatura, determinação de saída e integração com FI. Ele controla como documentos de faturamento são criados e processados.",
    detailBillingSDTechnical:
      "Tabelas: TVFKT (Tipo Fatura), TVKO (Organização Vendas), FKKVKP (Índice Fatura). Transações: OV3N (Tipo Fatura), V/32 (Determinação Saída).",
    detailBillingSDChecklist: [
      "Definir tipos de faturamento",
      "Configurar rotinas de fatura",
      "Configurar determinação de saída",
      "Configurar integração de faturamento",
    ],

    // ===== SAP FI CONSULTANT =====
    detailConfigFITitle: "Fundamentos de Configuração FI",
    detailConfigFITheory:
      "Configuração de SAP FI Consultant envolve configurar plano de contas, variantes de ano fiscal, períodos de lançamento e tipos de documento. Isso requer profundo entendimento de processos financeiros e customização SAP.",
    detailConfigFITechnical:
      "Nós SPRO principais: Livro Razão, Contas a Receber, Contas a Pagar, Contabilidade de Ativos. Transação: SPRO (SAP Reference IMG).",
    detailConfigFIChecklist: [
      "Configurar plano de contas",
      "Configurar variante de ano fiscal",
      "Definir variante de período de lançamento",
      "Configurar tipos de documento",
    ],

    detailGLConfigTitle: "Configuração do Razão",
    detailGLConfigTheory:
      "Configuração de GL inclui variantes de status de campo, tipos de documento, chaves de lançamento e grupos de tolerância. Ele define como transações financeiras são lançadas e controladas.",
    detailGLConfigTechnical:
      "Tabelas: SKAT (Textos Conta Contábil), T001 (Códigos Empresa). Transações: OBA7 (Variante Status Campo), FB00 (Tipos Documento).",
    detailGLConfigChecklist: [
      "Configurar variantes de status de campo",
      "Definir tipos de documento",
      "Configurar chaves de lançamento",
      "Configurar grupos de tolerância",
    ],

    detailARConfigTitle: "Configuração de AR",
    detailARConfigTheory:
      "Configuração de AR inclui grupos de contas de clientes, atributos de campo, procedimentos de cobrança e termos de pagamento. Ele define como contas de clientes são gerenciadas.",
    detailARConfigTechnical:
      "Tabelas: KNA1 (Mestre Cliente), KNVP (Funções Parceiro Cliente). Transações: FD02 (Mestre Cliente), OVA2 (Procedimento Cobrança).",
    detailARConfigChecklist: [
      "Configurar grupos de contas de clientes",
      "Configurar procedimentos de cobrança",
      "Definir termos de pagamento",
      "Configurar campos do mestre de clientes",
    ],

    detailAPConfigTitle: "Configuração de AP",
    detailAPConfigTheory:
      "Configuração de AP inclui grupos de contas de fornecedores, atributos de campo, termos de pagamento e programas automáticos de pagamento. Ele define como contas de fornecedores são gerenciadas.",
    detailAPConfigTechnical:
      "Tabelas: LFA1 (Mestre Fornecedor), LFVK (Compras Mestre Fornecedor). Transações: FK02 (Mestre Fornecedor), OVA6 (Termos Pagamento).",
    detailAPConfigChecklist: [
      "Configurar grupos de contas de fornecedores",
      "Configurar termos de pagamento",
      "Definir programa automático de pagamento",
      "Configurar campos do mestre de fornecedores",
    ],

    detailAssetConfigTitle: "Configuração de Contabilidade de Ativos",
    detailAssetConfigTheory:
      "Configuração de contabilidade de ativos inclui chaves de depreciação, classes de ativos, layouts de tela e integração com GL. Ele define como ativos são gerenciados e depreciados.",
    detailAssetConfigTechnical:
      "Tabelas: ANLA (Mestre Ativo), ANLH (Histórico Ativo), T093 (Classes Ativos). Transações: OAAW (Chaves Depreciação), OA1A (Classes Ativos).",
    detailAssetConfigChecklist: [
      "Configurar chaves de depreciação",
      "Configurar classes de ativos",
      "Definir layouts de tela",
      "Configurar integração de ativos",
    ],

    detailBankConfigTitle: "Configuração Bancária",
    detailBankConfigTheory:
      "Configuração bancária inclui dados mestre de bancos, bancos internos, métodos de pagamento e gestão de lotes de cheques. Ele define como transações bancárias são processadas.",
    detailBankConfigTechnical:
      "Tabelas: BNKA (Mestre Banco), T012 (Banco Interno), T012K (Chaves Banco). Transações: FI01 (Criar Banco), FBWP (Banco Interno).",
    detailBankConfigChecklist: [
      "Criar registros de mestre de bancos",
      "Configurar bancos internos",
      "Configurar métodos de pagamento",
      "Configurar gestão de lotes de cheques",
    ],

    // ===== POWER AUTOMATE =====
    detailFlowBasicsTitle: "Fundamentos do Power Automate",
    detailFlowBasicsTheory:
      "Power Automate é a ferramenta de automação de fluxos de trabalho da Microsoft que permite criar fluxos automatizados entre aplicativos e serviços. Ele integra-se com mais de 1.000 conectores e suporta vários tipos de fluxo para diferentes cenários de automação.",
    detailFlowBasicsTechnical:
      "Conceitos principais: Conectores, Gatilhos, Ações, Expressões, Variáveis, Aprovações. Power Platform Admin Center para gestão de ambiente.",
    detailFlowBasicsChecklist: [
      "Entender interface do Power Automate",
      "Criar um fluxo simples",
      "Entender conectores e gatilhos",
      "Usar expressões em ações de fluxo",
    ],

    detailAutomatedTitle: "Fluxos Automatizados",
    detailAutomatedTheory:
      "Fluxos automatizados são acionados por eventos de serviços conectados, como receber um e-mail, um novo item do SharePoint ou envio de formulário. Eles executam automaticamente quando o evento de gatilho ocorre.",
    detailAutomatedTechnical:
      "Gatilhos: Quando um novo e-mail chega, Quando um arquivo é criado, Quando um item é criado. Ações: Enviar e-mail, Criar item, Postar mensagem.",
    detailAutomatedChecklist: [
      "Criar um fluxo automatizado",
      "Configurar condições de gatilho",
      "Adicionar múltiplas ações",
      "Lidar com ramificações paralelas",
    ],

    detailInstantTitle: "Fluxos Instantâneos",
    detailInstantTheory:
      "Fluxos instantâneos são acionados manualmente por usuários através de botões em aplicativos como Teams, Power Apps ou o aplicativo móvel do fluxo. Eles fornecem automação sob demanda para tarefas comuns.",
    detailInstantTechnical:
      "Gatilhos: Botão Power Apps, Botão no Teams. Ações: Qualquer ação de conector padrão. Gatilhos de aplicativo móvel para automação em movimento.",
    detailInstantChecklist: [
      "Criar um fluxo instantâneo",
      "Adicionar parâmetros de entrada",
      "Compartilhar fluxos com usuários",
      "Acionar a partir do Power Apps",
    ],

    detailScheduledTitle: "Fluxos Agendados",
    detailScheduledTheory:
      "Fluxos agendados executam em um cronograma definido (diário, horário, etc.) e são úteis para operações em lote, sincronização de dados e tarefas periódicas de relatórios.",
    detailScheduledTechnical:
      "Gatilho de recorrência: Configuração de cronograma. Usos comuns: Relatórios diários, Limpeza de dados, Sincronização periódica.",
    detailScheduledChecklist: [
      "Criar um fluxo agendado",
      "Configurar cronograma de recorrência",
      "Lidar com problemas de fuso horário",
      "Otimizar para fluxos de longa duração",
    ],

    detailRPATitle: "RPA e Fluxos de UI",
    detailRPATitle: "RPA e Fluxos de UI",
    detailRPATheory:
      "Fluxos de UI (Power Automate para desktop) permitem automação de aplicativos e processos legados que não possuem APIs. Ele usa automação de processos robóticos para gravar e reproduzir ações do usuário.",
    detailRPATechnical:
      "Fluxos de desktop: Automação de aplicativos Windows, Automação Web, Selenium IDE. AI Builder para processamento de documentos.",
    detailRPAChecklist: [
      "Instalar Power Automate para desktop",
      "Criar um fluxo de desktop",
      "Gravar ações de UI",
      "Lidar com erros de aplicativo",
    ],

    detailConnectorsTitle: "Conectores e Integração",
    detailConnectorsTheory:
      "Conectores fornecem integrações pré-construídas para vários serviços. Conectores premium requerem licenciamento. Conectores personalizados podem ser criados para APIs internas.",
    detailConnectorsTechnical:
      "Conectores padrão: SharePoint, Teams, SQL Server, Outlook. Premium: Dataverse, Salesforce. Personalizados: OpenAPI, SOAP, REST.",
    detailConnectorsChecklist: [
      "Usar conectores padrão",
      "Configurar conectores premium",
      "Criar conectores personalizados",
      "Gerenciar permissões de conectores",
    ],

    // ===== POWER BI =====
    detailPBIIntroTitle: "Introdução ao Power BI",
    detailPBIIntroTheory:
      "Power BI é a ferramenta de análise de negócios da Microsoft que permite visualização de dados e business intelligence. Ele permite que usuários conectem a várias fontes de dados, criem relatórios e compartilhem insights em toda a organização.",
    detailPBIIntroTechnical:
      "Componentes: Power BI Desktop, Power BI Service, Power BI Mobile. Conceitos principais: Workspaces, Dashboards, Relatórios, Conjuntos de Dados.",
    detailPBIIntroChecklist: [
      "Instalar Power BI Desktop",
      "Entender interface do Power BI",
      "Criar seu primeiro relatório",
      "Publicar no Power BI Service",
    ],

    detailPBIDataTitle: "Fontes de Dados e Conectividade",
    detailPBIDataTheory:
      "Power BI pode conectar a centenas de fontes de dados incluindo bancos de dados, serviços de nuvem, arquivos e APIs web. Os modos import vs. DirectQuery determinam como os dados são recuperados.",
    detailPBIDataTechnical:
      "Conectores: SQL Server, Azure, SharePoint, Excel, APIs Web. Modos: Import, DirectQuery, Live Connection, Push Dataset.",
    detailPBIDataChecklist: [
      "Conectar a arquivo Excel",
      "Conectar ao SQL Server",
      "Usar conector de API Web",
      "Configurar atualização de dados",
    ],

    detailPBIModelTitle: "Modelagem de Dados",
    detailPBIModelTheory:
      "Modelagem de dados no Power BI envolve criar relacionamentos entre tabelas, definir hierarquias e configurar grupos de cálculo. Um modelo de dados bem projetado é crucial para performance e usabilidade.",
    detailPBIModelTechnical:
      "Tabelas: Tabelas Fato e Dimensão. Relacionamentos: Um-para-muitos, Muitos-para-muitos. Funções DAX para colunas calculadas.",
    detailPBIModelChecklist: [
      "Criar relacionamentos entre tabelas",
      "Configurar tabelas de dimensão",
      "Criar hierarquias",
      "Otimizar modelo de dados",
    ],

    detailPBIDaxTitle: "DAX e Cálculos",
    detailPBIDaxTheory:
      "DAX (Data Analysis Expressions) é uma linguagem de fórmula usada no Power BI para criar cálculos personalizados. Ela inclui funções para agregação, inteligência de tempo e filtragem.",
    detailPBIDaxTechnical:
      "Funções principais: CALCULATE, FILTER, ALL, SUMX, COUNTX. Inteligência de tempo: TOTALYTD, SAMEPERIODLASTYEAR.",
    detailPBIDaxChecklist: [
      "Escrever medidas básicas DAX",
      "Criar colunas calculadas",
      "Usar função CALCULATE",
      "Implementar inteligência de tempo",
    ],

    detailPBIVizTitle: "Visualizações",
    detailPBIVizTheory:
      "Power BI oferece uma ampla variedade de visualizações incluindo gráficos, mapas, tabelas e visuais personalizados. Escolher a visualização correta é fundamental para comunicação eficaz de dados.",
    detailPBIVizTechnical:
      "Tipos visuais: Gráficos de barras, Gráficos de linhas, Mapas, Tabelas, KPIs. Visuais personalizados: AppSource, Custom SDK.",
    detailPBIVizChecklist: [
      "Criar gráficos de barras e colunas",
      "Adicionar visualizações de mapa",
      "Usar segmentações e filtros",
      "Aplicar formatação condicional",
    ],

    detailPBIServiceTitle: "Power BI Service",
    detailPBIServiceTheory:
      "Power BI Service é a plataforma baseada em nuvem para compartilhar e colaborar em relatórios. Ele fornece workspaces, dashboards e capacidades de atualização de dados agendada.",
    detailPBIServiceTechnical:
      "Workspaces: Capacidades Pro e Premium. Compartilhamento: Compartilhar relatórios, Publicar na web. Apps: Criar e distribuir apps.",
    detailPBIServiceChecklist: [
      "Criar workspaces",
      "Publicar relatórios no service",
      "Criar dashboards",
      "Configurar atualização agendada",
    ],

    detailPBISecurityTitle: "Segurança e Compartilhamento",
    detailPBISecurityTheory:
      "Segurança em nível de linha (RLS) no Power BI permite restringir acesso a dados baseado em funções de usuário. O compartilhamento pode ser feito através de workspaces, compartilhamento direto ou publicação de apps.",
    detailPBISecurityTechnical:
      "RLS: Segurança baseada em função em DAX. Compartilhamento: Compartilhamento direto, Compartilhamento de workspace, Publicar app. Integração Microsoft 365.",
    detailPBISecurityChecklist: [
      "Configurar segurança em nível de linha",
      "Compartilhar relatórios com usuários",
      "Criar Power BI apps",
      "Gerenciar permissões de workspace",
    ],

    // ===== JIRA =====
    detailJiraIntroTitle: "Fundamentos do Jira",
    detailJiraIntroTheory:
      "Jira é a ferramenta de gestão de projetos e rastreamento de problemas da Atlassian. Ele suporta metodologias ágeis, customização de fluxos de trabalho e relatórios abrangentes para projetos de desenvolvimento de software e negócios.",
    detailJiraIntroTechnical:
      "Conceitos principais: Problemas, Projetos, Fluxos de trabalho, Quadros. Opções de implantação Cloud vs. Data Center.",
    detailJiraIntroChecklist: [
      "Entender interface do Jira",
      "Criar problemas e subtarefas",
      "Navegar por projetos",
      "Usar pesquisa e filtros (JQL)",
    ],

    detailJiraProjectsTitle: "Projetos e Quadros",
    detailJiraProjectsTheory:
      "Projetos Jira organizam o trabalho em áreas distintas, cada uma com seu próprio fluxo de trabalho e tipos de problema. Quadros (Scrum e Kanban) fornecem gestão visual de tarefas para equipes ágeis.",
    detailJiraProjectsTechnical:
      "Tipos de projeto: Gerenciado por equipe, Gerenciado por empresa. Tipos de quadro: Quadro Scrum, Quadro Kanban. Tipos de problema: História, Bug, Tarefa, Épico.",
    detailJiraProjectsChecklist: [
      "Criar um novo projeto",
      "Configurar configurações do projeto",
      "Criar e customizar quadros",
      "Configurar tipos de problema",
    ],

    detailJiraAgileTitle: "Metodologias Ágeis",
    detailJiraAgileTheory:
      "Jira suporta metodologias Scrum e Kanban. Scrum usa sprints para organizar trabalho em iterações com tempo definido, enquanto Kanban foca em fluxo contínuo e limites de WIP.",
    detailJiraAgileTechnical:
      "Scrum: Sprints, Velocidade, Gráficos de burndown. Kanban: Limites WIP, Diagrama de fluxo cumulativo. Roadmaps para gestão de portfólio.",
    detailJiraAgileChecklist: [
      "Executar cerimônias Scrum no Jira",
      "Usar quadro Kanban efetivamente",
      "Rastrear velocidade e burndown",
      "Gerenciar épicos e funcionalidades",
    ],

    detailJiraWorkflowTitle: "Configuração de Workflow",
    detailJiraWorkflowTheory:
      "Fluxos de trabalho Jira definem a progressão de problemas através de statuses e transições. Eles podem ser customizados com condições, validadores e pós-funções para impor regras de negócio.",
    detailJiraWorkflowTechnical:
      "Elementos de workflow: Statuses, Transições, Ações. Regras de automação: Gatilhos, Condições, Ações.",
    detailJiraWorkflowChecklist: [
      "Criar fluxos de trabalho customizados",
      "Configurar transições de workflow",
      "Adicionar regras de automação",
      "Configurar níveis de segurança de problema",
    ],

    detailJiraScrumTitle: "Framework Scrum",
    detailJiraScrumTheory:
      "Scrum no Jira usa sprints para organizar trabalho em iterações com tempo definido. Inclui gestão de backlog, planejamento de sprint, daily standups e retrospectivas.",
    detailJiraScrumTechnical:
      "Planejamento de sprint: Estimativa de velocidade, Comprometimento. Diário: Atualizações, Bloqueios. Revisão: Demo, Feedback. Retrospectiva: Melhorias.",
    detailJiraScrumChecklist: [
      "Criar e gerenciar sprints",
      "Planejar backlog do sprint",
      "Executar revisão de sprint",
      "Conduzir retrospectivas",
    ],

    detailJiraKanbanTitle: "Framework Kanban",
    detailJiraKanbanTheory:
      "Kanban no Jira foca em visualizar trabalho, limitar WIP e maximizar fluxo. Ele usa colunas para representar estágios do fluxo de trabalho e fornece diagramas de fluxo cumulativo.",
    detailJiraKanbanTechnical:
      "Limites WIP: Controlar trabalho em progresso. Lead time: Tempo da criação até conclusão. Cycle time: Tempo em progresso. Métricas de eficiência de fluxo.",
    detailJiraKanbanChecklist: [
      "Configurar quadro Kanban",
      "Configurar limites WIP",
      "Rastrear lead e cycle time",
      "Otimizar eficiência de fluxo",
    ],

    detailJiraReportsTitle: "Relatórios e Dashboards",
    detailJiraReportsTheory:
      "Jira fornece relatórios integrados para velocidade de equipe, burndown e estatísticas de problemas. Dashboards podem ser customizados com gadgets para exibir métricas relevantes.",
    detailJiraReportsTechnical:
      "Relatórios: Relatório de sprint, Gráfico de velocidade, Burndown, Fluxo cumulativo. Gadgets: Atribuído a mim, Fluxo de atividade, Gráfico de pizza.",
    detailJiraReportsChecklist: [
      "Usar relatórios integrados",
      "Criar dashboards customizados",
      "Adicionar gadgets ao dashboard",
      "Exportar relatórios para stakeholders",
    ],

    // ===== SERVICENOW =====
    detailSNIntroTitle: "Introdução ao ServiceNow",
    detailSNIntroTheory:
      "ServiceNow é uma plataforma baseada em nuvem para gestão de serviços empresariais. Ela fornece IT Service Management (ITSM) e outras funções de serviço empresarial incluindo RH, segurança e atendimento ao cliente.",
    detailSNIntroTechnical:
      "Módulos principais: ITSM, ITOM, RH, Segurança, Atendimento ao Cliente. Tipos de instância: Pessoal, Desenvolvimento, Produção.",
    detailSNIntroChecklist: [
      "Navegar pela interface ServiceNow",
      "Entender estrutura dos módulos",
      "Usar listas e formulários",
      "Configurar preferências do usuário",
    ],

    detailSNITSMTitle: "Fundamentos ITSM",
    detailSNITSMTitle: "Fundamentos ITSM",
    detailSNITSMTheory:
      "IT Service Management (ITSM) no ServiceNow abrange gestão de incidentes, problemas, mudanças e solicitações de serviço. Ele segue práticas ITIL para entrega de serviço.",
    detailSNITSMTechnical:
      "Tabelas: incident, problem, change_request, sc_request. Processos: Incident → Problem → Change.",
    detailSNITSMChecklist: [
      "Entender processos ITSM",
      "Navegar pelos módulos ITSM",
      "Configurar catálogo de serviços",
      "Configurar SLAs",
    ],

    detailSNIncidentTitle: "Gestão de Incidentes",
    detailSNIncidentTitle: "Gestão de Incidentes",
    detailSNIncidentTheory:
      "Gestão de Incidentes foca em restaurar operação normal de serviço o mais rápido possível. Incidentes são registrados, atribuídos e resolvidos seguindo fluxos de trabalho definidos e SLAs.",
    detailSNIncidentTechnical:
      "Tabelas: incident (Tabela de Incidentes). Campos: Descrição curta, Categoria, Impacto, Urgência, Estado. Grupos de atribuição e escalação.",
    detailSNIncidentChecklist: [
      "Criar registros de incidentes",
      "Atribuir incidentes a grupos",
      "Usar fluxos de trabalho de incidentes",
      "Gerenciar violações de SLA de incidentes",
    ],

    detailSNProblemTitle: "Gestão de Problemas",
    detailSNProblemTitle: "Gestão de Problemas",
    detailSNProblemTheory:
      "Gestão de Problemas identifica a causa raiz de incidentes e implementa soluções permanentes. Ela trabalha em conjunto com Gestão de Mudanças para prevenir recorrência de incidentes.",
    detailSNProblemTechnical:
      "Tabelas: problem (Tabela de Problemas). Campos: Estado do problema, Causa raiz, Erro conhecido, Incidentes relacionados.",
    detailSNProblemChecklist: [
      "Criar registros de problemas",
      "Analisar causa raiz",
      "Criar base de erros conhecidos",
      "Vincular problemas a mudanças",
    ],

    detailSNChangeTitle: "Gestão de Mudanças",
    detailSNChangeTitle: "Gestão de Mudanças",
    detailSNChangeTheory:
      "Gestão de Mudanças controla o ciclo de vida das mudanças no ambiente de produção. Ela usa fluxos de trabalho do CAB (Change Advisory Board) e avaliação de risco para aprovação.",
    detailSNChangeTechnical:
      "Tabelas: change_request. Tipos de mudança: Normal, Padrão, Emergência. Estados: Rascunho, Submeter, Avaliar, Autorizar, Implementar, Revisar.",
    detailSNChangeChecklist: [
      "Criar solicitações de mudança",
      "Configurar modelos de mudança",
      "Usar fluxo de trabalho CAB",
      "Avaliar risco de mudança",
    ],

    detailSNAssetTitle: "Gestão de Ativos",
    detailSNAssetTitle: "Gestão de Ativos",
    detailSNAssetTheory:
      "Gestão de Ativos rastreia ativos de TI ao longo de seu ciclo de vida desde a aquisição até a baixa. Ele integra-se com procurement e bancos de dados de gestão de configuração.",
    detailSNAssetTechnical:
      "Tabelas: alm_asset, cmdb_ci. Classes de ativos: Hardware, Software, Licença. Estados: Em armazenamento, Em uso, Baixado.",
    detailSNAssetChecklist: [
      "Criar registros de ativos",
      "Rastrear ciclo de vida de ativos",
      "Configurar classes de ativos",
      "Integrar com CMDB",
    ],

    detailSNCatalogTitle: "Catálogo de Serviços",
    detailSNCatalogTitle: "Catálogo de Serviços",
    detailSNCatalogTheory:
      "Catálogo de Serviços fornece um portal de autoatendimento para usuários solicitarem serviços de TI. Ele inclui itens de catálogo, produtores de registro e cumprimento de solicitações orientado por fluxos de trabalho.",
    detailSNCatalogTechnical:
      "Tabelas: sc_cat_item, sc_request, sc_request_item. Designer de catálogo: Construtor de itens, Conjuntos de variáveis, Fluxos de trabalho.",
    detailSNCatalogChecklist: [
      "Criar itens de catálogo",
      "Construir catálogo de serviços",
      "Configurar fluxos de trabalho de solicitação",
      "Configurar categorias de catálogo",
    ],

    // ===== SHAREPOINT =====
    detailSPIntroTitle: "Introdução ao SharePoint",
    detailSPIntroTheory:
      "SharePoint é a plataforma de colaboração da Microsoft para gestão de documentos, sites de intranet e automação de processos de negócio. Ele integra-se profundamente com o Microsoft 365.",
    detailSPIntroTechnical:
      "Componentes: Sites, Listas, Bibliotecas, Páginas. SharePoint Online vs. On-premises. Experiência Moderna vs. Clássica.",
    detailSPIntroChecklist: [
      "Entender estrutura do SharePoint",
      "Criar sites de equipe",
      "Navegar em interfaces modernas",
      "Configurar configurações do site",
    ],

    detailSPListsTitle: "Listas e Bibliotecas",
    detailSPListsTheory:
      "Listas e bibliotecas do SharePoint armazenam e organizam dados. Listas são semelhantes a planilhas enquanto bibliotecas são projetadas para armazenamento de documentos com controle de versão.",
    detailSPListsTechnical:
      "Tipos de lista: Listas personalizadas, Rastreamento de problemas, Calendário. Tipos de biblioteca: Documento, Mídia, Páginas. Colunas: Texto, Escolha, Pesquisa, Metadados Gerenciados.",
    detailSPListsChecklist: [
      "Criar listas personalizadas",
      "Configurar configurações de biblioteca",
      "Configurar validação de colunas",
      "Gerenciar versões",
    ],

    detailSPPowerAutomateTitle: "Integração Power Automate",
    detailSPPowerAutomateTheory:
      "SharePoint integra-se com Power Automate para criar fluxos de trabalho automatizados para aprovação de documentos, coleta de dados e automação de processos. Botões de fluxo podem ser adicionados a itens de lista.",
    detailSPPowerAutomateTechnical:
      "Gatilhos: Quando item criado, Quando item modificado. Ações: Criar item, Atualizar item, Enviar e-mail. Conectores SharePoint.",
    detailSPPowerAutomateChecklist: [
      "Criar fluxo a partir de modelo",
      "Construir fluxos SharePoint personalizados",
      "Usar botões de fluxo no SharePoint",
      "Lidar com erros de fluxo",
    ],

    detailSPApprovalTitle: "Workflows de Aprovação",
    detailSPApprovalTheory:
      "Workflows de aprovação no SharePoint automatizam processos de aprovação de documentos e itens. Eles podem ser configurados com aprovadores sequenciais ou paralelos e integram-se com o Outlook.",
    detailSPApprovalTechnical:
      "Ações de aprovação: Iniciar uma aprovação, Aguardar aprovação. Integração: Outlook, Teams. Histórico: Comentários de aprovação, timestamps.",
    detailSPApprovalChecklist: [
      "Criar workflow de aprovação",
      "Configurar aprovadores",
      "Configurar estágios de aprovação",
      "Rastrear status de aprovação",
    ],

    detailSPIntegrationTitle: "Integração e APIs",
    detailSPIntegrationTheory:
      "SharePoint fornece múltiplas opções de integração incluindo Power Automate, Power Apps, Microsoft Graph API e APIs REST para desenvolvimento personalizado.",
    detailSPIntegrationTechnical:
      "APIs: Microsoft Graph, SharePoint REST, PnP JS. Conectores: Power Automate, Power Apps, Azure Logic Apps.",
    detailSPIntegrationChecklist: [
      "Usar Microsoft Graph API",
      "Criar Power Apps com SharePoint",
      "Construir integrações personalizadas",
      "Gerenciar permissões de API",
    ],

    detailSPAutomationTitle: "Automação e Bots",
    detailSPAutomationTheory:
      "SharePoint pode ser integrado com Power Virtual Agents para criar chatbots para perguntas comuns e automação de processos. Integração com Teams estende o alcance.",
    detailSPAutomationTechnical:
      "Power Virtual Agents: Criação de bot, Design de tópico, Integração. Teams: Abas, Bots, Extensões de mensagens.",
    detailSPAutomationChecklist: [
      "Criar Power Virtual Agent",
      "Integrar bot com SharePoint",
      "Construir integrações com Teams",
      "Automatizar tarefas comuns",
    ],

    detailSPGovernanceTitle: "Governança e Segurança",
    detailSPGovernanceTheory:
      "Governança do SharePoint inclui gestão de permissões, prevenção de perda de dados, políticas de retenção e recursos de conformidade para implantações empresariais.",
    detailSPGovernanceTechnical:
      "Permissões: Grupos do SharePoint, Grupos Azure AD, Rótulos de sensibilidade. Conformidade: DLP, Retenção, eDiscovery.",
    detailSPGovernanceChecklist: [
      "Configurar níveis de permissão",
      "Configurar rótulos de sensibilidade",
      "Configurar políticas de retenção",
      "Implementar políticas de DLP",
    ],

    progress: "Progresso",
    nodes: "nós",
    completed: "concluídos",
    roadmapNotFound: "Roadmap não encontrado",
  },
}

export type Translations = typeof translations.en
