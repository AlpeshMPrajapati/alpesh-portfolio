// src/data/projects.ts

export interface EngineeringChallenge {
  title: string;
  problem: string;
  solution: string;
  impact?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  overview: string;
  problem: string;
  role: string;
  contributions: string[];
  technologies: string[];
  architecture?: string;
  challenges?: EngineeringChallenge[];
  duration: string;
  status: 'active' | 'completed';
  featured: boolean;
  confidential: boolean;
  // Links - leave empty string if unavailable or confidential
  liveUrl?: string;
  repoUrl?: string;
  // Screenshots - leave empty array if unavailable
  images?: string[];
}

export const projects: Project[] = [
  {
    id: 'chainit',
    title: 'ChainIT',
    tagline: 'Enterprise Verified Identity, Digital Attestation & Payments Platform',
    overview:
      'ChainIT is an enterprise platform for verified digital identity and digital attestations. It enables individuals and organizations to verify their credentials once and share encrypted, ledger-backed records—Verified Data Tokens (VDTs)—with relying businesses across ~25 NestJS microservices and React web applications.',
    problem:
      'Eliminates repetitive KYC/KYB identity re-verification, bridges the disconnect between signed legal agreements and money movements, and streamlines multi-party corporate verifications without duplicate tasks.',
    role: 'Full Stack Developer',
    contributions: [
      'Built the end-to-end Tokenized Consideration Asset (TCA) flow, linking signed Pactvera agreements directly with value movements, asset snapshots, and stable-coin payouts.',
      'Developed responsive React frontends in the Org Admin Portal, Payments Admin, and Mobile PWA (TCA wizard, attestation steppers, and payment-obligation displays).',
      'Engineered interactive visual canvas nodes and backend executors for a node-by-node workflow automation engine (Pactvera documents, forms, and payments).',
      'Architected an idempotent parent/subtask engine for KYB/UBO multi-party attestation, preventing duplicate tasks and ensuring atomic status roll-ups across officers.',
      'Refactored the core VDT layer onto a unified Data VDT architecture, performed zero-downtime live migrations, and optimized PostgreSQL queries using array matching (= ANY(...)).',
      'Integrated payment processing in ChainIT Pay (QorPay card payments & US Bank FBO onboarding) with encrypted credentials at rest and structured audit logs.',
    ],
    technologies: [
      'TypeScript',
      'Node.js',
      'NestJS',
      'React.js',
      'PostgreSQL',
      'TypeORM',
      'RabbitMQ',
      'Redis',
      'CQRS',
      'Nx Monorepo',
      'PWA',
      'Docker',
    ],
    architecture:
      'Nx monorepo with ~25 NestJS microservices (CQRS, RabbitMQ RPC & Pub/Sub, PostgreSQL per service, Redis context) backing append-only ledgers and React frontends (Admin, Payments, Mobile PWA).',
    challenges: [
      {
        title: 'Agreement-to-Payment Engine (TCA Flow)',
        problem:
          'Payment movements were disconnected from signed legal agreements, with no single place to bind payers/payees, split allocations, or maintain an audit trail.',
        solution:
          'Built the TCA flow end-to-end: modeled value as asset snapshots bound to payers, implemented payee allocations, workflow versioning (draft/publish/clone), and disbursement audit logging.',
        impact: 'Delivered a versioned, auditable agreement-to-payout pipeline.',
      },
      {
        title: 'Multi-Party Attestation & Task Deduplication',
        problem:
          'Corporate verification (UBO) fanned out to multiple officers asynchronously, producing duplicate tasks and premature organization status roll-ups.',
        solution:
          'Engineered an idempotent parent/ordered-subtask engine that reuses open parent tasks and updates organization status only when all required officer roles finish.',
        impact: 'Eliminated duplicate task trees and ensured atomic status roll-up.',
      },
      {
        title: 'Distributed Workflow Recovery (Redis + PostgreSQL)',
        problem:
          'The node-by-node workflow engine stalled on multi-day runs whenever short-lived Redis execution graphs expired.',
        solution:
          'Built a continue-execution API that inspects durable PostgreSQL state and reconstructs the Redis execution graph to resume runs from the paused node.',
        impact: 'Enabled one-click recovery of stalled business runs with zero data loss.',
      },
    ],
    duration: '~1 year 10 months (Jan 2024 – Present)',
    status: 'active',
    featured: true,
    confidential: true,
    liveUrl: '',
    repoUrl: '',
    images: [],
  },
  {
    id: 'bluemind',
    title: 'BlueMind – Digital Office',
    tagline: 'Financial-Services CRM & Digital Office Platform',
    overview:
      'BlueMind is a comprehensive financial-services CRM and digital office platform designed to help financial advisors manage client relationships, net worth tracking, compliance documentation, and daily advisory operations in one centralized application.',
    problem:
      'Financial advisors rely on fragmented tools for client tracking, financial planning, compliance document lifecycles, and client communications, creating operational friction and compliance risks.',
    role: 'Full Stack Developer (Frontend & API Integration Focus)',
    contributions: [
      'Engineered comprehensive Client Relationship Management (CRM) workflows: contact profiles, advanced tagging, filtering, bulk actions, client merging, and team-based client assignments.',
      'Developed financial planning and net worth management modules: centralizing asset/liability tracking, cash flow analysis, and financial data visualization using ApexCharts.',
      'Built document management and compliance workflows: centralized library categorization, document composition with reusable templates, status tracking, and e-signature integrations.',
      'Integrated two-way email communication with Gmail API and Microsoft Outlook, featuring rich-text composition (Draft.js/Syncfusion), reusable templates, and consent tracking.',
      'Implemented productivity and scheduling tools: calendar event management via Syncfusion Scheduler, task workflows with automated reminders, and call logging.',
    ],
    technologies: [
      'React.js',
      'Redux',
      'Material UI',
      'JavaScript',
      'REST APIs',
      'Axios',
      'Formik & Yup',
      'Syncfusion',
      'Draft.js',
      'ApexCharts',
      'Gmail API',
      'MS Outlook',
      'Socket.IO',
    ],
    architecture:
      'Component-driven React architecture with centralized Redux state management, Formik/Yup validation pipelines, and RESTful API integrations for financial, document, and third-party communication services.',
    duration: '~6–8 months (2024)',
    status: 'completed',
    featured: true,
    confidential: true,
    liveUrl: '',
    repoUrl: '',
    images: [],
  },
  {
    id: 'radefy',
    title: 'Radefy – Hospitality & Guest Experience Platform',
    tagline: 'Multi-Application Hospitality SaaS & Digital Guest Experience Platform',
    overview:
      'Radefy is a hospitality technology platform helping accommodation businesses streamline property operations and elevate the guest journey through three interconnected applications: Business Admin, Hotel Administration (Customer), and a guest-facing web portal.',
    problem:
      'Hotels rely on manual front-desk processes for guest check-in, dynamic registration forms, guest communication, and digital key distribution, causing operational bottlenecks and slower guest onboarding.',
    role: 'Frontend Developer (Multi-App & API Integration)',
    contributions: [
      'Engineered end-to-end frontend interfaces across three interconnected React 18 applications within an Nx monorepo (Business Admin, Hotel Administration, and Guest-facing portal).',
      'Developed a configurable dynamic form builder with custom field validation (Formik/Yup) and drag-and-drop ordering using React Beautiful DnD.',
      'Built frictionless guest onboarding and online check-in workflows powered by QR-code generation and digital document uploads.',
      'Implemented real-time bi-directional guest communication and live chat interfaces powered by Microsoft SignalR.',
      'Created digital concierge and room-access workflows: reservation-based digital key management, guest request tracking, and automated notification feeds.',
      'Implemented role-based UI access control, admin KPI visualization dashboards, and client-side offline storage using Dexie (IndexedDB).',
    ],
    technologies: [
      'React.js 18',
      'TypeScript',
      'Nx Monorepo',
      'Redux Toolkit',
      'Tailwind CSS',
      'Microsoft SignalR',
      'React Beautiful DnD',
      'Formik & Yup',
      'REST APIs',
      'Axios',
      'Dexie (IndexedDB)',
      'React Router',
    ],
    architecture:
      'Nx monorepo orchestrating 3 interconnected React 18 SPAs sharing reusable component libraries, Redux Toolkit state slices, and Microsoft SignalR real-time communication hubs.',
    duration: '~5 months (2024)',
    status: 'completed',
    featured: true,
    confidential: true,
    liveUrl: '',
    repoUrl: '',
    images: [],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
