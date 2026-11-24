// src/data/experience.ts

export interface Experience {
  company: string;
  companyUrl?: string;
  position: string;
  duration: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: 'eSparkBiz',
    companyUrl: 'https://www.esparkbiz.com',
    position: 'Software Developer (Full Stack)',
    duration: 'Jan 2024 – Present',
    startDate: 'January 2024',
    endDate: 'Present',
    location: 'Ahmedabad, Gujarat, India',
    description:
      'Contributing as a Full Stack Developer on enterprise client projects, primarily ChainIT (verified digital identity, attestation, payments, and workflow platform). Working across ~25 distributed NestJS microservices, RabbitMQ message brokers, PostgreSQL databases, and modern React web applications.',
    responsibilities: [
      'Built the end-to-end Tokenized Consideration Asset (TCA) flow: binding signed Pactvera agreements to money movements, asset snapshots, payee allocations, reversals, and stable-coin disbursements',
      'Developed responsive React interfaces including the TCA wizard, Org Admin Portal, Payments Admin, and Mobile PWA (attestation steppers, form slots, payment obligations, and payout selectors)',
      'Engineered an interactive Make.com-style visual workflow engine: implemented React canvas nodes and backend executors for document signing, forms, and payments with execution log persistence',
      'Refactored the core VDT layer onto a unified Data VDT architecture: standardized WHEN timestamps, centralized record-ID generation, and supported multi-ledger decryption',
      'Stabilized cross-service Pactvera records by resolving device/location/identity mismatches and synchronizing data types between vault-ms and rule-engine-ms',
      'Implemented the original user and organization task module, designing an idempotent parent/ordered-subtask engine for KYB/UBO attestation with atomic status roll-ups',
      'Worked on payment processing in ChainIT Pay (QorPay card payments, US Bank FBO account onboarding) with encrypted secret keys and audit logs',
      'Designed Employee and Membership Ledgers, ledger-specific groups, and executed zero-downtime TypeORM migrations from legacy records to Data VDTs',
      'Engineered a distributed workflow recovery API reconciling transient Redis execution contexts with durable PostgreSQL state to resume stalled runs',
      'Optimized PostgreSQL queries on large record tables using array matching (= ANY(...)), eliminated unnecessary joins, and centralized user/role repository access into a shared module',
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
      'Docker',
      'REST APIs',
      'RBAC',
    ],
  },
];
