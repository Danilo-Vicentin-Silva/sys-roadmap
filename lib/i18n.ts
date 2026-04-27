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
    nodeMM1: "Navigation & Organizational Structure",
    nodeMM2: "Material and Vendor Master Data",
    nodeMM3: "Purchasing Master Data (Pricing & Sourcing)",
    nodeMM4: "Purchase Requisition Management",
    nodeMM5: "Purchase Orders & Pricing Determination",
    nodeMM6: "Release Strategy & Approvals",
    nodeMM7: "Goods Receipt & Inventory (MIGO)",
    nodeMM8: "Invoice Verification & 3-Way Match (MIRO)",
    nodeMM9: "Outline Agreements (Contracts & Schedules)",
    nodeMM10: "Subcontracting & Consignment",
    nodeMM11: "MRP and Supply Planning",
    nodeMM12: "Data Extraction & Key User Automation",

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
    nodeFI1: "Org Structure & CoA",
    nodeFI2: "G/L Master Data",
    nodeFI3: "Document Posting",
    nodeFI4: "Vendor Master Data",
    nodeFI5: "AP Invoice Processing",
    nodeFI6: "Automatic Payment Program",
    nodeFI7: "Customer Master Data",
    nodeFI8: "AR Invoices & Payments",
    nodeFI9: "Dunning Process",
    nodeFI10: "Asset Master Data",
    nodeFI11: "Asset Depreciation",
    nodeFI12: "Electronic Bank Statement",
    nodeFI13: "Financial Reporting",
    nodeFI14: "Month-End Closing",

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

    // SAP MM Key User — Complete Journey (12 phases)
    detailMMOrgStructureTitle: "Navigation and Organizational Structure",
    detailMMOrgStructureTheory:
      "SAP is hierarchical. Understanding how your company is mapped (Company Code > Plant > Storage Location > Purchasing Organization) is critical because master data and purchasing documents inherit this structure.",
    detailMMOrgStructureTechnical:
      "Transaction: EC01 (Display). Key tables: T001W (Plants), T024 (Purchasing Groups).",
    detailMMOrgStructureChecklist: [
      "Map your current company structure in SAP",
      "Differentiate centralized vs. decentralized purchasing organizations",
      "Identify purchasing groups (buyers) in your area",
    ],

    detailMMMasterDataTitle: "Material and Vendor Master Data",
    detailMMMasterDataTheory:
      "Master data quality is the root cause of most support incidents. A material missing accounting views cannot be purchased; a vendor missing purchasing views cannot receive PO documents.",
    detailMMMasterDataTechnical:
      "Transactions: BP or XK01 (Vendors), MM01/MM02/MM03 (Materials). Tables: MARA, MARC, MBEW, LFA1, LFM1.",
    detailMMMasterDataChecklist: [
      "Create and extend a material for Purchasing and MRP views",
      "Create a complete Business Partner for a vendor",
      "Differentiate material type (FERT, ROH, HAWA) vs. material group",
    ],

    detailMMPurchasingMasterTitle:
      "Purchasing Master Data (Pricing and Sourcing)",
    detailMMPurchasingMasterTheory:
      "This is where SAP learns automation. Info Records connect material and vendor with negotiated prices, while Source Lists define approved suppliers by period.",
    detailMMPurchasingMasterTechnical:
      "Transactions: ME11/ME12 (Info Record), ME01 (Source List). Tables: EINA, EINE, EORD.",
    detailMMPurchasingMasterChecklist: [
      "Create an Info Record with price and freight conditions",
      "Configure a Source List with one vendor marked as fixed",
      "Simulate a vendor block for a specific material",
    ],

    detailMMPurchaseReqTitle: "Purchase Requisition Management",
    detailMMPurchaseReqTheory:
      "Purchase Requisition is the process trigger. It can be manual (business request) or automatic (MRP-generated). A Key User must monitor backlog and prioritization.",
    detailMMPurchaseReqTechnical:
      "Transactions: ME51N/ME52N/ME53N, ME5A. Main table: EBAN.",
    detailMMPurchaseReqChecklist: [
      "Create a manual PR assigned to a Cost Center (Account Assignment K)",
      "Track open PRs through ME5A",
    ],

    detailMMPurchaseOrderTitle: "Purchase Orders and Pricing Determination",
    detailMMPurchaseOrderTheory:
      "A PO is the legal contract with suppliers. Key Users must master item categories and understand how SAP derives taxes, discounts, and gross/net values through pricing schemas.",
    detailMMPurchaseOrderTechnical:
      "Transactions: ME21N/ME22N/ME23N, ME2M. Tables: EKKO, EKPO, KONV.",
    detailMMPurchaseOrderChecklist: [
      "Convert a PR into a PO using Info Record data",
      "Create a service PO (Item Category D)",
      "Validate conditions tab for net vs. gross amounts",
    ],

    detailMMReleaseStrategyTitle: "Release Strategy and Approval Workflows",
    detailMMReleaseStrategyTheory:
      "Release strategies enforce purchasing governance. Orders above thresholds or specific account assignments require managerial approval before supplier communication.",
    detailMMReleaseStrategyTechnical:
      "Transactions: ME28, ME29N. Tables: T16FS, T16FC.",
    detailMMReleaseStrategyChecklist: [
      "Understand classes/characteristics triggering release strategy",
      "Approve a PO in ME29N",
      "Identify why a PO did not trigger release strategy",
    ],

    detailMMInventoryMigoTitle: "Goods Receipt and Inventory Management (MIGO)",
    detailMMInventoryMigoTheory:
      "At goods receipt, movement types drive stock and finance postings. Understanding 101, 102, and 122 is essential for operational and accounting integrity.",
    detailMMInventoryMigoTechnical:
      "Transactions: MIGO, MMBE. Tables: MKPF, MSEG. Movement types: 101, 102, 122.",
    detailMMInventoryMigoChecklist: [
      "Post goods receipt (101) referencing a PO",
      "Execute a return to vendor",
      "Check real-time stock in MMBE",
    ],

    detailMMInvoiceMiroTitle: "Invoice Verification and Three-Way Match (MIRO)",
    detailMMInvoiceMiroTheory:
      "This is the MM-FI boundary. SAP validates PO = GR = Invoice. Price/quantity mismatches create blocked invoices until resolved.",
    detailMMInvoiceMiroTechnical:
      "Transactions: MIRO, MIR4, MRBR. Tables: RBKP, RSEG.",
    detailMMInvoiceMiroChecklist: [
      "Post an invoice referencing goods receipt",
      "Simulate a price variance block",
      "Release blocked invoices through MRBR",
    ],

    detailMMOutlineAgreementsTitle:
      "Outline Agreements (Contracts and Scheduling Agreements)",
    detailMMOutlineAgreementsTheory:
      "Outline agreements support strategic and long-term procurement. Contracts define value/quantity, while scheduling agreements automate recurring deliveries.",
    detailMMOutlineAgreementsTechnical:
      "Transactions: ME31K, ME31L, ME38. Table family: EKKO/EKPO with document types such as WK/MK.",
    detailMMOutlineAgreementsChecklist: [
      "Create a value contract (WK)",
      "Create release orders consuming contract balance",
    ],

    detailMMSubcontractingConsignmentTitle: "Subcontracting and Consignment",
    detailMMSubcontractingConsignmentTheory:
      "Subcontracting sends components to a vendor for assembly. Consignment keeps supplier-owned stock at your site and payment happens only at consumption.",
    detailMMSubcontractingConsignmentTechnical:
      "Transactions: ME2O, MRKO. Tables: MSLB (subcontracting stock), MKOL (consignment stock). Key movements: 541 and 201 K.",
    detailMMSubcontractingConsignmentChecklist: [
      "Create a subcontracting PO (item category L) and post 541",
      "Consume consignment stock (201 K) and settle through MRKO",
    ],

    detailMMMrpTitle: "MRP and Supply Planning",
    detailMMMrpTheory:
      "MRP is the replenishment engine. It reads stock, demand, and lead times to generate purchase proposals, preventing production disruption.",
    detailMMMrpTechnical: "Transactions: MD01N, MD04. Tables: MDKP, MDTB.",
    detailMMMrpChecklist: [
      "Analyze a material profile in MD04",
      "Differentiate reorder point vs. PD planning",
    ],

    detailMMDataAutomationTitle: "Data Extraction and Key User Automation",
    detailMMDataAutomationTheory:
      "Senior Key Users generate analytical value by joining relational MM data for BI and automation. This reduces dependence on custom reports.",
    detailMMDataAutomationTechnical:
      "Transactions: SE16N, SQVI. Typical joins: EKKO -> EKPO -> MSEG -> RSEG and MARA -> MARC.",
    detailMMDataAutomationChecklist: [
      "Extract open PO items using EKKO and EKPO in SE16N",
      "Create a simple join between MARA and MARC in SQVI",
      "Model an external dataset (Dataverse/SharePoint) from SAP logic",
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

    // ===== SAP FI KEY USER - Comprehensive 14-Node Journey =====
    detailFIOrgStructureTitle: "Org Structure & Chart of Accounts",
    detailFIOrgStructureTheory:
      "SAP FI organizational structure defines the hierarchy of financial entities: Company Code (independent accounting unit), Chart of Accounts (structure of G/L accounts), and Fiscal Year variants. This foundation determines how financial transactions are recorded and reported across the enterprise.",
    detailFIOrgStructureTechnical:
      "Transactions: OBX1 (Assign CoA to Company Code), OBY6 (Fiscal Year Variant), S_ALR_87011990 (Display Org Structure). Tables: T001 (Company Codes), T004 (Chart of Accounts), T009 (Fiscal Year Variants).",
    detailFIOrgStructureChecklist: [
      "Map your company's organizational units in SAP",
      "Assign Chart of Accounts to Company Code",
      "Configure fiscal year variants",
      "Understand the relationship between CoA and Company Code",
    ],

    detailFIGLMasterDataTitle: "G/L Master Data Management",
    detailFIGLMasterDataTheory:
      "G/L Master Data includes the Chart of Accounts structure and individual G/L accounts. Each account belongs to an account group, has a specific account type (P&L or Balance Sheet), and controls posting rules. Proper G/L setup ensures accurate financial reporting and compliance.",
    detailFIGLMasterDataTechnical:
      "Transactions: FS00 (Create G/L Account), FSP0 (Display G/L Account), OB13 (Account Groups). Tables: SKA1 (Chart of Accounts), SKB1 (G/L Account - Company Code), SKAT (Account Descriptions).",
    detailFIGLMasterDataChecklist: [
      "Create and extend G/L accounts in multiple company codes",
      "Configure account groups and field status",
      "Set up reconciliation accounts for AP/AR/Assets",
      "Validate G/L account number ranges",
    ],

    detailFIDocumentPostingTitle: "Document Posting Concepts",
    detailFIDocumentPostingTheory:
      "Document posting in SAP FI follows the double-entry bookkeeping principle. Each document has a header (date, posting date, document type) and line items (account, amount, posting key). Document types control document numbering and allowed accounts. Posting keys determine debit/credit and field status.",
    detailFIDocumentPostingTechnical:
      "Transactions: FB50 (Single Posting), FB01 (Complex Posting), FB03 (Display Document). Tables: BKPF (Document Header), BSEG (Document Line Items), T003 (Document Types).",
    detailFIDocumentPostingChecklist: [
      "Post simple journal entries (FB50)",
      "Understand posting keys (40/50, 31/21, etc.)",
      "Display and analyze accounting documents (FB03)",
      "Configure document types and number ranges",
    ],

    detailFIVendorMasterTitle: "Vendor Master Data (FI View)",
    detailFIVendorMasterTheory:
      "Vendor master data in FI includes company code-specific data like payment terms, reconciliation accounts, and withholding tax information. The Business Partner (BP) concept unifies FI and MM views. Vendors are critical for AP integration and automatic payment programs.",
    detailFIVendorMasterTechnical:
      "Transactions: BP (Business Partner), FK01 (Create Vendor), XK01 (Extended Vendor). Tables: LFA1 (Vendor General), LFB1 (Vendor Company Code), LFM1 (Vendor Purchasing).",
    detailFIVendorMasterChecklist: [
      "Create Business Partner with FI and MM roles",
      "Configure payment terms and reconciliation accounts",
      "Set up withholding tax information",
      "Extend vendor to multiple company codes",
    ],

    detailFIAPInvoiceTitle: "AP Invoice Processing & MIRO Integration",
    detailFIAPInvoiceTheory:
      "AP invoice processing can be manual (FB60, F-43) or automatic via MM integration (MIRO). MIRO links logistics invoice verification with FI, ensuring 3-way match (PO, GR, Invoice). Automatic postings are made to GR/IR account and vendor reconciliation account.",
    detailFIAPInvoiceTechnical:
      "Transactions: FB60 (Enter Invoice), F-43 (Credit Memo), MIRO (Logistics Invoice Verification). Tables: BSEG (with KOART='K'), RSEG (Invoice Document Items), BKPF (Document Header).",
    detailFIAPInvoiceChecklist: [
      "Post vendor invoices manually (FB60)",
      "Process logistics invoices via MIRO",
      "Handle credit memos and corrections",
      "Verify GR/IR account reconciliation",
    ],

    detailFIPaymentProgramTitle: "Automatic Payment Program (F110)",
    detailFIPaymentProgramTheory:
      "The Automatic Payment Program (F110) processes vendor payments based due dates, payment terms, and available funds. It generates payment documents, creates payment media (electronic files/print), posts accounting entries, and updates vendor open items. Critical for cash flow management.",
    detailFIPaymentProgramTechnical:
      "Transactions: F110 (Automatic Payment Program), FBZP (Payment Configuration). Tables: REGUH (Payment Proposal Header), REGUP (Payment Items), PAYR (Payment Media).",
    detailFIPaymentProgramChecklist: [
      "Configure payment methods (check, transfer, electronic)",
      "Run payment proposal and analyze results",
      "Generate payment media and post payment documents",
      "Monitor payment status and vendor aging",
    ],

    detailFICustomerMasterTitle: "Customer Master Data (FI View)",
    detailFICustomerMasterTheory:
      "Customer master data in FI includes company code-specific data like payment terms, reconciliation accounts, dunning procedures, and credit management. The Business Partner (BP) concept unifies FI and SD views. Customers are critical for AR integration and collections.",
    detailFICustomerMasterTechnical:
      "Transactions: BP (Business Partner), FD01 (Create Customer), XD01 (Extended Customer). Tables: KNA1 (Customer General), KNB1 (Customer Company Code), KNVV (Customer Sales).",
    detailFICustomerMasterChecklist: [
      "Create Business Partner with FI and SD roles",
      "Configure payment terms and reconciliation accounts",
      "Set up dunning procedures and credit limits",
      "Extend customer to multiple company codes",
    ],

    detailFIARInvoicesTitle: "AR Invoices & Incoming Payments",
    detailFIARInvoicesTheory:
      "AR invoice processing can be manual (FB70) or automatic via SD integration (VF01 billing). Incoming payments (F-28) clear customer open items. The system supports partial payments, residual payments, and payment on account. Critical for cash collection and customer reconciliation.",
    detailFIARInvoicesTechnical:
      "Transactions: FB70 (Enter Customer Invoice), F-28 (Incoming Payment), F-32 (Clear Open Items). Tables: BSEG (with KOART='D'), BSAD (Cleared Customer Items), BSID (Open Customer Items).",
    detailFIARInvoicesChecklist: [
      "Post customer invoices manually (FB70)",
      "Process incoming payments and clear open items (F-28)",
      "Handle partial and residual payments",
      "Analyze customer aging and collection status",
    ],

    detailFIDunningTitle: "Dunning Process (Collections)",
    detailFIDunningTheory:
      "The dunning process automates collection of overdue receivables. Dunning procedures define dunning levels, dunning areas, and dunning forms. The system generates dunning letters, charges interest, and can block customers for further sales. Essential for maintaining cash flow and customer credit discipline.",
    detailFIDunningTechnical:
      "Transactions: F150 (Dunning Run), F1500 (Dunning Configuration). Tables: F150T (Dunning Procedures), FKKMA (Dunning Areas), DFKKOP (Dunned Items).",
    detailFIDunningChecklist: [
      "Configure dunning procedures and dunning areas",
      "Run dunning proposal and analyze results",
      "Generate dunning letters and post interest",
      "Monitor dunning history and customer blocks",
    ],

    detailFIAssetMasterTitle: "Asset Master Data",
    detailFIAssetMasterTheory:
      "Asset master data captures fixed asset information including asset class, useful life, depreciation area, and capitalization date. Asset classes control asset-specific parameters and default values. Assets integrate with GL for automatic depreciation postings. Critical for fixed asset management and compliance.",
    detailFIAssetMasterTechnical:
      "Transactions: AS01 (Create Asset), AS02 (Change Asset), AS03 (Display Asset). Tables: ANLA (Asset Master), ANLH (Asset Time-Dependent Data), T090 (Asset Classes).",
    detailFIAssetMasterChecklist: [
      "Create asset master records with correct asset class",
      "Configure depreciation areas and useful life",
      "Set up asset subnumbers and components",
      "Understand asset numbering and intervals",
    ],

    detailFIDepreciationTitle: "Asset Depreciation & Retirements",
    detailFIDepreciationTheory:
      "Depreciation calculations are performed periodically (monthly/annual) using depreciation keys defined in asset classes. The system supports straight-line, declining balance, and special depreciation methods. Asset retirements (sale/scrap) generate postings to gain/loss accounts and clear asset values.",
    detailFIDepreciationTechnical:
      "Transactions: AW01N (Asset Explorer), AFAB (Depreciation Run), AB01 (Capitalization), AB02 (Retirement). Tables: ANLC (Asset Values), ANEP (Depreciation Areas), T090 (Depreciation Keys).",
    detailFIDepreciationChecklist: [
      "Run periodic depreciation (AFAB)",
      "Post asset acquisitions and capitalizations (AB01)",
      "Process asset retirements and transfers (AB02)",
      "Analyze asset values in Asset Explorer (AW01N)",
    ],

    detailFIBankStatementTitle: "Electronic Bank Statement (EBS)",
    detailFIBankStatementTheory:
      "Electronic Bank Statement (EBS) automates bank account reconciliation by importing bank statement files. The system posts bank transactions, clears open items, and updates bank balances. EBS eliminates manual reconciliation and provides real-time cash position visibility. Critical for treasury management.",
    detailFIBankStatementTechnical:
      "Transactions: FF_5 (Manual Bank Statement), FF.5 (Electronic Bank Statement), FEBA (Post-Processing). Tables: FEBKO (Statement Header), FEBEP (Statement Items), BNKA (Bank Master).",
    detailFIBankStatementChecklist: [
      "Configure bank accounts and statement formats",
      "Import and process electronic bank statements (FF.5)",
      "Post-process unassigned items (FEBA)",
      "Reconcile bank accounts automatically",
    ],

    detailFIReportingTitle: "Financial Reporting & Trial Balance",
    detailFIReportingTheory:
      "Financial reporting provides comprehensive analysis of financial data including trial balances, balance sheets, profit & loss statements, and cash flow statements. Reports can be generated for any period and company code. Financial Statement Versions (FSV) define the structure for balance sheet and P&L reporting.",
    detailFIReportingTechnical:
      "Transactions: F.01 (Balance Carried Forward), F.01 (Trial Balance), S_ALR_87012284 (Balance Sheet), S_ALR_87012285 (P&L Statement), FAGLL03 (G/L Line Items). Tables: SKB1, BKPF, BSEG, FAGLFLEXT (New GL).",
    detailFIReportingChecklist: [
      "Generate trial balance (F.01)",
      "Run balance sheet and P&L reports",
      "Configure Financial Statement Versions (FSV)",
      "Analyze G/L line items and drill-down (FAGLL03)",
    ],

    detailFIClosingTitle: "Month-End Closing Activities",
    detailFIClosingTheory:
      "Month-end closing ensures all financial transactions are recorded, reconciled, and reported for the period. Activities include period locking (OB52), foreign currency valuation (FAGL_FCV), accruals and deferrals, GR/IR reconciliation, and financial reporting. Critical for accurate financial statements and compliance.",
    detailFIClosingTechnical:
      "Transactions: OB52 (Posting Periods), FAGL_FCV (Foreign Currency Valuation), OB08 (Exchange Rates), F.13 (Automatic Clearing), MB5S (GR/IR Reconciliation). Tables: T001B (Posting Periods), TCURR (Exchange Rates), BKPF, BSEG.",
    detailFIClosingChecklist: [
      "Lock posting periods (OB52)",
      "Run foreign currency valuation (FAGL_FCV)",
      "Reconcile GR/IR accounts and sub-ledgers",
      "Generate and validate financial statements",
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
    communityNote: "Site desenvolvido por Danilo Vicentin S.",

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
    nodeMM1: "Navegação e Estrutura Organizacional",
    nodeMM2: "Dados Mestres de Materiais e Fornecedores",
    nodeMM3: "Dados Mestres de Compras (Pricing e Sourcing)",
    nodeMM4: "Gestão de Requisições de Compras",
    nodeMM5: "Pedidos de Compras e Determinação de Preço",
    nodeMM6: "Estratégias de Liberação e Aprovação",
    nodeMM7: "Recebimento e Gestão de Estoque (MIGO)",
    nodeMM8: "Verificação de Faturas e Three-Way Match (MIRO)",
    nodeMM9: "Outline Agreements (Contratos e Programações)",
    nodeMM10: "Subcontratação e Consignação",
    nodeMM11: "MRP e Planejamento de Suprimentos",
    nodeMM12: "Extração de Dados e Automação Key User",

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
    nodeFI1: "Estrutura Org & Plano de Contas",
    nodeFI2: "Dados Mestre Conta Razão",
    nodeFI3: "Lançamento de Documentos",
    nodeFI4: "Dados Mestre Fornecedor",
    nodeFI5: "Processamento Faturas AP",
    nodeFI6: "Programa Pagamento Automático",
    nodeFI7: "Dados Mestre Cliente",
    nodeFI8: "Faturas AR e Recebimentos",
    nodeFI9: "Processo de Cobrança",
    nodeFI10: "Dados Mestre Ativos",
    nodeFI11: "Depreciação de Ativos",
    nodeFI12: "Extrato Bancário Eletrônico",
    nodeFI13: "Relatórios Financeiros",
    nodeFI14: "Fechamento Mensal",

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

    // SAP MM Key User — Jornada Completa (12 fases)
    detailMMOrgStructureTitle: "Navegação e Estrutura Organizacional",
    detailMMOrgStructureTheory:
      "O SAP é hierárquico. Entender como a empresa está modelada (Empresa > Centro > Depósito > Organização de Compras) é essencial, pois dados mestres e documentos de compras herdam essa estrutura.",
    detailMMOrgStructureTechnical:
      "Transação: EC01 (Visualização). Tabelas-chave: T001W (Centros), T024 (Grupos de Compras).",
    detailMMOrgStructureChecklist: [
      "Mapear a estrutura atual da empresa no SAP",
      "Diferenciar organização de compras centralizada e descentralizada",
      "Identificar os grupos de compras da sua área",
    ],

    detailMMMasterDataTitle: "Dados Mestres de Materiais e Fornecedores",
    detailMMMasterDataTheory:
      "A qualidade dos dados mestres é a causa raiz de grande parte dos chamados. Material sem visão contábil não pode ser comprado; fornecedor sem visão de compras não recebe pedidos corretamente.",
    detailMMMasterDataTechnical:
      "Transações: BP ou XK01 (Fornecedores), MM01/MM02/MM03 (Materiais). Tabelas: MARA, MARC, MBEW, LFA1, LFM1.",
    detailMMMasterDataChecklist: [
      "Criar e estender material para visões de Compras e MRP",
      "Cadastrar Business Partner completo para fornecedor",
      "Diferenciar tipo de material (FERT, ROH, HAWA) e grupo de mercadorias",
    ],

    detailMMPurchasingMasterTitle:
      "Dados Mestres de Compras (Pricing e Sourcing)",
    detailMMPurchasingMasterTheory:
      "Aqui o SAP aprende a automatizar. O Registro Info conecta material e fornecedor com preço negociado, enquanto a Source List determina fornecedor homologado por período.",
    detailMMPurchasingMasterTechnical:
      "Transações: ME11/ME12 (Registro Info), ME01 (Source List). Tabelas: EINA, EINE, EORD.",
    detailMMPurchasingMasterChecklist: [
      "Criar Registro Info com condições de preço e frete",
      "Configurar Source List com fornecedor fixo",
      "Simular bloqueio de fornecedor para material específico",
    ],

    detailMMPurchaseReqTitle: "Gestão de Requisições de Compras",
    detailMMPurchaseReqTheory:
      "A Requisição de Compras é o gatilho do processo. Pode ser manual (área requisitante) ou automática (MRP). O Key User precisa monitorar backlog e priorização.",
    detailMMPurchaseReqTechnical:
      "Transações: ME51N/ME52N/ME53N, ME5A. Tabela principal: EBAN.",
    detailMMPurchaseReqChecklist: [
      "Criar RC manual com centro de custo (Atribuição Contábil K)",
      "Rastrear RCs abertas pela ME5A",
    ],

    detailMMPurchaseOrderTitle: "Pedidos de Compras e Determinação de Preço",
    detailMMPurchaseOrderTheory:
      "O pedido de compras é o contrato legal com o mercado. O Key User deve dominar categorias de item e entender como o SAP calcula impostos, descontos e valores líquido/bruto.",
    detailMMPurchaseOrderTechnical:
      "Transações: ME21N/ME22N/ME23N, ME2M. Tabelas: EKKO, EKPO, KONV.",
    detailMMPurchaseOrderChecklist: [
      "Converter RC em PO aproveitando dados do Registro Info",
      "Criar pedido de serviço (Categoria D)",
      "Validar aba de condições para valor líquido vs. bruto",
    ],

    detailMMReleaseStrategyTitle: "Estratégias de Liberação e Aprovação",
    detailMMReleaseStrategyTheory:
      "Estratégias de liberação sustentam governança de compras. Pedidos com certos valores ou critérios ficam bloqueados até aprovação de níveis responsáveis.",
    detailMMReleaseStrategyTechnical:
      "Transações: ME28, ME29N. Tabelas: T16FS, T16FC.",
    detailMMReleaseStrategyChecklist: [
      "Entender classes e características que disparam bloqueio",
      "Aprovar pedido via ME29N",
      "Diagnosticar por que um pedido não acionou a estratégia",
    ],

    detailMMInventoryMigoTitle: "Recebimento e Gestão de Estoque (MIGO)",
    detailMMInventoryMigoTheory:
      "No recebimento físico, tipos de movimento determinam impactos de estoque e financeiros. Dominar 101, 102 e 122 é essencial para operação e auditoria.",
    detailMMInventoryMigoTechnical:
      "Transações: MIGO, MMBE. Tabelas: MKPF, MSEG. Movimentos: 101, 102, 122.",
    detailMMInventoryMigoChecklist: [
      "Fazer entrada de mercadoria (101) com referência ao PO",
      "Executar devolução ao fornecedor",
      "Conferir estoque em tempo real via MMBE",
    ],

    detailMMInvoiceMiroTitle: "Verificação de Faturas e Three-Way Match (MIRO)",
    detailMMInvoiceMiroTheory:
      "Esta é a fronteira MM-FI. O SAP compara Pedido = Recebido = Faturado. Divergências de preço/quantidade geram bloqueio até análise e liberação.",
    detailMMInvoiceMiroTechnical:
      "Transações: MIRO, MIR4, MRBR. Tabelas: RBKP, RSEG.",
    detailMMInvoiceMiroChecklist: [
      "Lançar fatura com referência ao recebimento",
      "Simular bloqueio por divergência de preço",
      "Liberar fatura bloqueada via MRBR",
    ],

    detailMMOutlineAgreementsTitle:
      "Outline Agreements (Contratos e Programações)",
    detailMMOutlineAgreementsTheory:
      "Outline agreements suportam compras estratégicas de longo prazo. Contratos fixam valor/quantidade e programações de remessa automatizam entregas recorrentes.",
    detailMMOutlineAgreementsTechnical:
      "Transações: ME31K, ME31L, ME38. Família de tabelas EKKO/EKPO com tipos como WK/MK.",
    detailMMOutlineAgreementsChecklist: [
      "Criar contrato de valor (WK)",
      "Emitir pedidos de liberação consumindo saldo contratual",
    ],

    detailMMSubcontractingConsignmentTitle: "Subcontratação e Consignação",
    detailMMSubcontractingConsignmentTheory:
      "Na subcontratação, componentes são enviados a terceiros para montagem. Na consignação, o estoque fica fisicamente na empresa, mas a propriedade é do fornecedor até o consumo.",
    detailMMSubcontractingConsignmentTechnical:
      "Transações: ME2O, MRKO. Tabelas: MSLB (subcontratação), MKOL (consignado). Movimentos-chave: 541 e 201 K.",
    detailMMSubcontractingConsignmentChecklist: [
      "Criar PO de subcontratação (Categoria L) e executar movimento 541",
      "Consumir consignado (201 K) e liquidar via MRKO",
    ],

    detailMMMrpTitle: "MRP e Planejamento de Suprimentos",
    detailMMMrpTheory:
      "O MRP é o motor de reposição. Ele lê demanda, estoque e lead time para gerar propostas de compra automaticamente e evitar ruptura de produção.",
    detailMMMrpTechnical: "Transações: MD01N, MD04. Tabelas: MDKP, MDTB.",
    detailMMMrpChecklist: [
      "Analisar perfil do material na MD04",
      "Diferenciar ponto de reposição e planejamento PD",
    ],

    detailMMDataAutomationTitle: "Extração de Dados e Automação Key User",
    detailMMDataAutomationTheory:
      "No nível sênior, o diferencial é transformar dados transacionais em inteligência. O Key User cruza tabelas MM para relatórios e automações sem depender sempre de desenvolvimento técnico.",
    detailMMDataAutomationTechnical:
      "Transações: SE16N, SQVI. Joins típicos: EKKO -> EKPO -> MSEG -> RSEG e MARA -> MARC.",
    detailMMDataAutomationChecklist: [
      "Extrair itens de pedido pendentes via EKKO e EKPO no SE16N",
      "Criar join simples entre MARA e MARC no SQVI",
      "Modelar base externa (Dataverse/SharePoint) com lógica SAP",
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

    // ===== SAP FI KEY USER - Jornada Completa de 14 Nós =====
    detailFIOrgStructureTitle: "Estrutura Organizacional & Plano de Contas",
    detailFIOrgStructureTheory:
      "A estrutura organizacional do SAP FI define a hierarquia de entidades financeiras: Código Empresa (unidade contábil independente), Plano de Contas (estrutura de contas contábeis) e variantes de exercício fiscal. Esta base determina como as transações financeiras são registradas e reportadas em toda a empresa.",
    detailFIOrgStructureTechnical:
      "Transações: OBX1 (Atribuir Plano de Contas a Código Empresa), OBY6 (Variante de Exercício Fiscal), S_ALR_87011990 (Exibir Estrutura Org). Tabelas: T001 (Códigos Empresa), T004 (Planos de Contas), T009 (Variantes de Exercício Fiscal).",
    detailFIOrgStructureChecklist: [
      "Mapear as unidades organizacionais da sua empresa no SAP",
      "Atribuir Plano de Contas ao Código Empresa",
      "Configurar variantes de exercício fiscal",
      "Entender a relação entre Plano de Contas e Código Empresa",
    ],

    detailFIGLMasterDataTitle: "Gestão de Dados Mestre de Conta Razão",
    detailFIGLMasterDataTheory:
      "Dados Mestre de Conta Razão incluem a estrutura do Plano de Contas e contas contábeis individuais. Cada conta pertence a um grupo de contas, tem um tipo específico de conta (P&L ou Balanço) e controla regras de lançamento. Configuração adequada de GL garante relatórios financeiros precisos e conformidade.",
    detailFIGLMasterDataTechnical:
      "Transações: FS00 (Criar Conta Contábil), FSP0 (Exibir Conta Contábil), OB13 (Grupos de Contas). Tabelas: SKA1 (Plano de Contas), SKB1 (Conta Contábil - Código Empresa), SKAT (Descrições de Contas).",
    detailFIGLMasterDataChecklist: [
      "Criar e estender contas contábeis em múltiplos códigos empresa",
      "Configurar grupos de contas e status de campos",
      "Configurar contas de reconciliação para AP/AR/Ativos",
      "Validar intervalos de números de contas contábeis",
    ],

    detailFIDocumentPostingTitle: "Conceitos de Lançamento de Documentos",
    detailFIDocumentPostingTheory:
      "Lançamento de documentos no SAP FI segue o princípio de contabilidade de partidas dobradas. Cada documento tem um cabeçalho (data, data de lançamento, tipo de documento) e itens (conta, valor, chave de lançamento). Tipos de documento controlam numeração e contas permitidas. Chaves de lançamento determinam débito/crédito e status de campos.",
    detailFIDocumentPostingTechnical:
      "Transações: FB50 (Lançamento Simples), FB01 (Lançamento Complexo), FB03 (Exibir Documento). Tabelas: BKPF (Cabeçalho Documento), BSEG (Itens Documento), T003 (Tipos de Documento).",
    detailFIDocumentPostingChecklist: [
      "Lançar lançamentos contábeis simples (FB50)",
      "Entender chaves de lançamento (40/50, 31/21, etc.)",
      "Exibir e analisar documentos contábeis (FB03)",
      "Configurar tipos de documento e intervalos de números",
    ],

    detailFIVendorMasterTitle: "Dados Mestre Fornecedor (Visão FI)",
    detailFIVendorMasterTheory:
      "Dados Mestre de Fornecedor no FI incluem dados específicos por código empresa como termos de pagamento, contas de reconciliação e informações de retenção na fonte. O conceito de Business Partner (BP) unifica as visões FI e MM. Fornecedores são críticos para integração AP e programas automáticos de pagamento.",
    detailFIVendorMasterTechnical:
      "Transações: BP (Business Partner), FK01 (Criar Fornecedor), XK01 (Fornecedor Estendido). Tabelas: LFA1 (Fornecedor Geral), LFB1 (Fornecedor Código Empresa), LFM1 (Fornecedor Compras).",
    detailFIVendorMasterChecklist: [
      "Criar Business Partner com papéis FI e MM",
      "Configurar termos de pagamento e contas de reconciliação",
      "Configurar informações de retenção na fonte",
      "Estender fornecedor para múltiplos códigos empresa",
    ],

    detailFIAPInvoiceTitle: "Processamento Faturas AP & Integração MIRO",
    detailFIAPInvoiceTheory:
      "Processamento de faturas AP pode ser manual (FB60, F-43) ou automático via integração MM (MIRO). MIRO vincula verificação de faturas logísticas com FI, garantindo conciliação tripla (PC, RE, Fatura). Lançamentos automáticos são feitos na conta GR/IR e conta de reconciliação de fornecedor.",
    detailFIAPInvoiceTechnical:
      "Transações: FB60 (Lançar Fatura), F-43 (Nota de Crédito), MIRO (Verificação de Faturas Logísticas). Tabelas: BSEG (com KOART='K'), RSEG (Itens Documento Fatura), BKPF (Cabeçalho Documento).",
    detailFIAPInvoiceChecklist: [
      "Lançar faturas de fornecedores manualmente (FB60)",
      "Processar faturas logísticas via MIRO",
      "Tratar notas de crédito e correções",
      "Verificar reconciliação da conta GR/IR",
    ],

    detailFIPaymentProgramTitle: "Programa Automático de Pagamento (F110)",
    detailFIPaymentProgramTheory:
      "O Programa Automático de Pagamento (F110) processa pagamentos de fornecedores baseado em datas de vencimento, termos de pagamento e fundos disponíveis. Ele gera documentos de pagamento, cria meios de pagamento (arquivos eletrônicos/impressão), lança entradas contábeis e atualiza itens abertos de fornecedores. Crítico para gestão de fluxo de caixa.",
    detailFIPaymentProgramTechnical:
      "Transações: F110 (Programa Automático de Pagamento), FBZP (Configuração de Pagamento). Tabelas: REGUH (Cabeçalho Proposta Pagamento), REGUP (Itens Pagamento), PAYR (Meio Pagamento).",
    detailFIPaymentProgramChecklist: [
      "Configurar métodos de pagamento (cheque, transferência, eletrônico)",
      "Executar proposta de pagamento e analisar resultados",
      "Gerar meios de pagamento e lançar documentos de pagamento",
      "Monitorar status de pagamento e aging de fornecedores",
    ],

    detailFICustomerMasterTitle: "Dados Mestre Cliente (Visão FI)",
    detailFICustomerMasterTheory:
      "Dados Mestre de Cliente no FI incluem dados específicos por código empresa como termos de pagamento, contas de reconciliação, procedimentos de cobrança e gestão de crédito. O conceito de Business Partner (BP) unifica as visões FI e SD. Clientes são críticos para integração AR e cobranças.",
    detailFICustomerMasterTechnical:
      "Transações: BP (Business Partner), FD01 (Criar Cliente), XD01 (Cliente Estendido). Tabelas: KNA1 (Cliente Geral), KNB1 (Cliente Código Empresa), KNVV (Cliente Vendas).",
    detailFICustomerMasterChecklist: [
      "Criar Business Partner com papéis FI e SD",
      "Configurar termos de pagamento e contas de reconciliação",
      "Configurar procedimentos de cobrança e limites de crédito",
      "Estender cliente para múltiplos códigos empresa",
    ],

    detailFIARInvoicesTitle: "Faturas AR & Recebimentos",
    detailFIARInvoicesTheory:
      "Processamento de faturas AR pode ser manual (FB70) ou automático via integração SD (VF01 faturamento). Recebimentos (F-28) liquidam itens abertos de clientes. O sistema suporta pagamentos parciais, pagamentos residuais e pagamentos a conta. Crítico para coleta de caixa e reconciliação de clientes.",
    detailFIARInvoicesTechnical:
      "Transações: FB70 (Lançar Fatura Cliente), F-28 (Recebimento), F-32 (Liquidar Itens Abertos). Tabelas: BSEG (com KOART='D'), BSAD (Itens Cliente Liquidados), BSID (Itens Cliente Abertos).",
    detailFIARInvoicesChecklist: [
      "Lançar faturas de clientes manualmente (FB70)",
      "Processar recebimentos e liquidar itens abertos (F-28)",
      "Tratar pagamentos parciais e residuais",
      "Analisar aging de clientes e status de cobrança",
    ],

    detailFIDunningTitle: "Processo de Cobrança (Collections)",
    detailFIDunningTheory:
      "O processo de cobrança automatiza coleta de recebíveis em atraso. Procedimentos de cobrança definem níveis de cobrança, áreas de cobrança e formas de cobrança. O sistema gera cartas de cobrança, cobra juros e pode bloquear clientes para vendas futuras. Essencial para manter fluxo de caixa e disciplina de crédito de clientes.",
    detailFIDunningTechnical:
      "Transações: F150 (Execução Cobrança), F1500 (Configuração Cobrança). Tabelas: F150T (Procedimentos Cobrança), FKKMA (Áreas Cobrança), DFKKOP (Itens Cobrados).",
    detailFIDunningChecklist: [
      "Configurar procedimentos de cobrança e áreas de cobrança",
      "Executar proposta de cobrança e analisar resultados",
      "Gerar cartas de cobrança e lançar juros",
      "Monitorar histórico de cobrança e bloqueios de clientes",
    ],

    detailFIAssetMasterTitle: "Dados Mestre de Ativos",
    detailFIAssetMasterTheory:
      "Dados Mestre de Ativos capturam informações de ativos fixos incluindo classe de ativo, vida útil, área de depreciação e data de capitalização. Classes de ativo controlam parâmetros específicos de ativos e valores padrão. Ativos integram com GL para lançamentos automáticos de depreciação. Crítico para gestão de ativos fixos e conformidade.",
    detailFIAssetMasterTechnical:
      "Transações: AS01 (Criar Ativo), AS02 (Alterar Ativo), AS03 (Exibir Ativo). Tabelas: ANLA (Mestre Ativo), ANLH (Dados Tempo-Dependente Ativo), T090 (Classes de Ativo).",
    detailFIAssetMasterChecklist: [
      "Criar registros de mestre de ativos com classe correta",
      "Configurar áreas de depreciação e vida útil",
      "Configurar subnúmeros e componentes de ativos",
      "Entender numeração e intervalos de ativos",
    ],

    detailFIDepreciationTitle: "Depreciação de Ativos & Baixas",
    detailFIDepreciationTheory:
      "Cálculos de depreciação são executados periodicamente (mensal/anual) usando chaves de depreciação definidas em classes de ativo. O sistema suporta depreciação linear, saldo decrescente e métodos especiais de depreciação. Baixas de ativos (venda/sucata) geram lançamentos em contas de ganho/perda e liquidam valores de ativos.",
    detailFIDepreciationTechnical:
      "Transações: AW01N (Explorer de Ativos), AFAB (Execução Depreciação), AB01 (Capitalização), AB02 (Baixa). Tabelas: ANLC (Valores Ativo), ANEP (Áreas Depreciação), T090 (Chaves Depreciação).",
    detailFIDepreciationChecklist: [
      "Executar depreciação periódica (AFAB)",
      "Lançar aquisições e capitalizações de ativos (AB01)",
      "Processar baixas e transferências de ativos (AB02)",
      "Analisar valores de ativos no Explorer (AW01N)",
    ],

    detailFIBankStatementTitle: "Extrato Bancário Eletrônico (EBS)",
    detailFIBankStatementTheory:
      "Extrato Bancário Eletrônico (EBS) automatiza reconciliação bancária importando arquivos de extrato bancário. O sistema lança transações bancárias, liquida itens abertos e atualiza saldos bancários. EBS elimina reconciliação manual e fornece visibilidade em tempo real da posição de caixa. Crítico para gestão de tesouraria.",
    detailFIBankStatementTechnical:
      "Transações: FF_5 (Extrato Bancário Manual), FF.5 (Extrato Bancário Eletrônico), FEBA (Pós-Processamento). Tabelas: FEBKO (Cabeçalho Extrato), FEBEP (Itens Extrato), BNKA (Mestre Bancário).",
    detailFIBankStatementChecklist: [
      "Configurar contas bancárias e formatos de extrato",
      "Importar e processar extratos bancários eletrônicos (FF.5)",
      "Pós-processar itens não atribuídos (FEBA)",
      "Reconciliar contas bancárias automaticamente",
    ],

    detailFIReportingTitle: "Relatórios Financeiros & Balancete",
    detailFIReportingTheory:
      "Relatórios financeiros fornecem análise abrangente de dados financeiros incluindo balancetes, balanços, demonstrações de resultados e fluxos de caixa. Relatórios podem ser gerados para qualquer período e código empresa. Versões de Demonstrações Financeiras (FSV) definem a estrutura para relatórios de balanço e P&L.",
    detailFIReportingTechnical:
      "Transações: F.01 (Saldo Transportado), F.01 (Balancete), S_ALR_87012284 (Balanço), S_ALR_87012285 (Demonstração Resultados), FAGLL03 (Itens GL). Tabelas: SKB1, BKPF, BSEG, FAGLFLEXT (Novo GL).",
    detailFIReportingChecklist: [
      "Gerar balancete (F.01)",
      "Executar relatórios de balanço e P&L",
      "Configurar Versões de Demonstrações Financeiras (FSV)",
      "Analisar itens GL e drill-down (FAGLL03)",
    ],

    detailFIClosingTitle: "Atividades de Fechamento Mensal",
    detailFIClosingTheory:
      "Fechamento mensal garante que todas as transações financeiras sejam registradas, reconciliadas e reportadas para o período. Atividades incluem bloqueio de períodos (OB52), avaliação de moeda estrangeira (FAGL_FCV), accruals e deferrals, reconciliação GR/IR e relatórios financeiros. Crítico para demonstrações financeiras precisas e conformidade.",
    detailFIClosingTechnical:
      "Transações: OB52 (Períodos de Lançamento), FAGL_FCV (Avaliação Moeda Estrangeira), OB08 (Taxas de Câmbio), F.13 (Liquidação Automática), MB5S (Reconciliação GR/IR). Tabelas: T001B (Períodos Lançamento), TCURR (Taxas Câmbio), BKPF, BSEG.",
    detailFIClosingChecklist: [
      "Bloquear períodos de lançamento (OB52)",
      "Executar avaliação de moeda estrangeira (FAGL_FCV)",
      "Reconciliar contas GR/IR e sub-ledgers",
      "Gerar e validar demonstrações financeiras",
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
