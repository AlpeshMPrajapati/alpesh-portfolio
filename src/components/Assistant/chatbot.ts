// src/components/Assistant/chatbot.ts
// "Ask Alpesh" - Portfolio AI Assistant
// Keyword-based response engine. No API key needed. Works offline.
// Grounded only in verified portfolio information.

export interface ChatMessage {
  id: string;
  role: 'bot' | 'user';
  content: string;
  timestamp: Date;
}

interface ResponseRule {
  patterns: string[];
  response: string;
}

const rules: ResponseRule[] = [
  {
    patterns: ['hello', 'hi', 'hey', 'greet', 'start', 'help'],
    response: `Hi there! I'm Ask Alpesh — a simple assistant that can answer questions about Alpesh's professional background.\n\nYou can ask me things like:\n• What technologies does he work with?\n• Tell me about his experience\n• What is ChainIT?\n• Does he know NestJS?\n• How can I contact him?`,
  },
  {
    patterns: ['who', 'about alpesh', 'introduce', 'tell me about'],
    response: `Alpesh Prajapati is a Full Stack Developer based in Ahmedabad, India, with nearly 3 years of professional experience.\n\nHe specializes in TypeScript, Node.js, NestJS, React.js, and PostgreSQL. On his primary project, ChainIT, he builds scalable microservices with CQRS and RabbitMQ, designs complex database schemas, and develops user-friendly React web applications and PWAs.\n\nHe has deep hands-on experience in distributed systems, asynchronous event flows, zero-downtime database migrations, and visual workflow automation engines.`,
  },
  {
    patterns: ['backend', 'server', 'node', 'nodejs', 'node.js'],
    response: `Alpesh's primary stack is Node.js with TypeScript. He uses NestJS and Express.js for building backend services and RESTful APIs.\n\nHis backend experience includes:\n• Microservices architecture\n• Message-driven workflows with RabbitMQ\n• CQRS pattern implementation\n• Role-based access control (RBAC)\n• Database schema design (PostgreSQL, MySQL, MongoDB)\n• Asynchronous and distributed processing`,
  },
  {
    patterns: ['nestjs', 'nest.js', 'nest js'],
    response: `Yes, NestJS is one of Alpesh's core frameworks. He uses it professionally at eSparkBiz for building structured, scalable backend applications.\n\nHe's used NestJS for building modular REST APIs, applying CQRS patterns, implementing dependency injection, and working with microservices setups.`,
  },
  {
    patterns: ['express', 'expressjs', 'express.js'],
    response: `Alpesh has experience with Express.js for building REST APIs and backend services. It's part of his core backend toolkit alongside NestJS and TypeScript.`,
  },
  {
    patterns: ['typescript', 'ts'],
    response: `TypeScript is Alpesh's primary language for all backend and frontend JavaScript work. He uses it daily at eSparkBiz across NestJS and React projects. He values strong typing for building more maintainable and reliable systems.`,
  },
  {
    patterns: ['react', 'reactjs', 'frontend', 'react.js'],
    response: `Alpesh works with React.js for frontend development when his projects require it. While his primary focus is backend engineering, he's comfortable building React-based interfaces and integrating them with backend APIs.\n\nHe also has experience with Next.js and Tailwind CSS.`,
  },
  {
    patterns: ['microservice', 'microservices', 'distributed', 'service'],
    response: `Yes, Alpesh has hands-on experience with microservices-based application architectures in his professional work. He's worked on distributed systems where separate services communicate through APIs and message queues.\n\nHe's also familiar with CQRS and event-driven patterns that are common in microservices environments.`,
  },
  {
    patterns: ['rabbitmq', 'rabbit mq', 'message queue', 'queue', 'message broker'],
    response: `Alpesh has used RabbitMQ professionally for implementing asynchronous message-driven workflows. He's applied it in backend systems where tasks need to be processed independently of the request cycle, such as background processing and inter-service communication.`,
  },
  {
    patterns: ['cqrs', 'command query'],
    response: `Alpesh has applied CQRS (Command Query Responsibility Segregation) patterns in his backend work. This involves separating read and write operations in backend services, often used in conjunction with event-driven architectures and message queues.`,
  },
  {
    patterns: ['database', 'db', 'sql', 'postgres', 'postgresql', 'mysql', 'mongodb', 'mongo'],
    response: `Alpesh has experience with multiple databases:\n\n• **PostgreSQL** — primary relational database\n• **MySQL** — relational database work\n• **MongoDB** — non-relational / document store\n\nHe works on database schema design, query optimization, and ORM integration (Sequelize with MySQL, Mongoose with MongoDB).`,
  },
  {
    patterns: ['chainit', 'chain it'],
    response: `ChainIT is Alpesh's primary featured project — an enterprise verified digital identity, attestation, and payments platform he has contributed to for ~1 year and 10 months as a Full Stack Developer.\n\nKey highlights of his work on ChainIT:\n• Built the end-to-end TCA (Tokenized Consideration Asset) flow, tying signed agreements (Pactvera) directly to value movements, asset snapshots, and stable-coin payouts.\n• Developed user-facing React applications, including the TCA wizard, Org Admin Portal, Payments Admin, and Mobile PWA.\n• Built custom canvas nodes and backend executors for a Make.com-style visual workflow engine, along with a Redis-context recovery API.\n• Refactored the core VDT layer onto a unified Data VDT model with centralized record ID generation and generic WHEN timestamps.\n• Stabilized Pactvera cross-service records by aligning schemas and routing updates to primary ledgers.\n• Engineered multi-party KYB/UBO attestation task trees with zero duplicate tasks.\n• Integrated payment processing in ChainIT Pay (QorPay card processing, US Bank FBO accounts) with encrypted credentials at rest.\n• Optimized PostgreSQL queries with array matching (= ANY(...)) and consolidated user/role repository access.`,
  },
  {
    patterns: ['bluemind', 'blue mind'],
    response: `BlueMind – Digital Office is a financial-services CRM and advisory platform Alpesh contributed to for ~6–8 months in 2024 as a Full Stack Developer (Frontend & API Integration Focus).\n\nKey areas he delivered:\n• Client Relationship Management (CRM): contact profiles, merging, bulk actions, and team assignments.\n• Financial Planning: asset/liability management, net worth tracking, and cash flow workflows.\n• Document & Compliance Management: document library, templates, status tracking, and e-signatures.\n• Communications: Gmail API & Microsoft Outlook integrations, rich-text email templates, and email consent.\n• Productivity: calendar event scheduling (Syncfusion), task workflows with reminders, and call logs.`,
  },
  {
    patterns: ['radefy'],
    response: `Radefy is a hospitality technology platform Alpesh contributed to for ~5 months in 2024 as a Frontend Developer (Multi-App & API Integration).\n\nHe built features across three interconnected React 18 applications within an Nx monorepo (Business Admin, Hotel Administration, and Guest Portal).\n\nKey areas he delivered:\n• Dynamic Form Builder: drag-and-drop field ordering (React Beautiful DnD) with custom Formik/Yup validation.\n• Digital Onboarding: QR-code-based guest onboarding and online check-in.\n• Real-Time Communication: live guest chat and messaging using Microsoft SignalR.\n• Digital Concierge: reservation-based digital keys, request tracking, and automated notification feeds.`,
  },
  {
    patterns: ['esparkbiz', 'espark', 'company', 'employer', 'work at'],
    response: `Alpesh has been working at eSparkBiz since January 2024 as a Software Developer. eSparkBiz is a software development company based in Ahmedabad, India.\n\nIn this role, he works on client projects across different business domains, contributing to backend development, API design, microservices, and sometimes frontend work with React.js.`,
  },
  {
    patterns: ['experience', 'years', 'tenure', 'how long'],
    response: `Alpesh has nearly 3 years of professional software development experience. His current role at eSparkBiz started in January 2024.\n\nAcross this time he's contributed to multiple client projects (ChainIT, BlueMind, Radefy), worked with backend and full-stack development, and built expertise in Node.js, TypeScript, NestJS, and related technologies.`,
  },
  {
    patterns: ['contact', 'reach', 'email', 'hire', 'available', 'opportunity'],
    response: `You can reach Alpesh at:\n\n📧 Email: alpesh@example.com (update with real email in profile.ts)\n💼 LinkedIn: linkedin.com/in/alpesh-prajapati\n🐙 GitHub: github.com/AlpeshMPrajapati\n\nHe's open to discussing new opportunities and interesting engineering challenges.`,
  },
  {
    patterns: ['resume', 'cv'],
    response: `Alpesh's resume is available for download from the portfolio — click the "Download Resume" button in the navigation or the hero section.\n\n(The resume file should be placed at /public/resume/Alpesh_Prajapati_Resume.pdf)`,
  },
  {
    patterns: ['docker', 'devops', 'ci/cd', 'deployment'],
    response: `Alpesh has familiarity with Docker for containerization and DevOps fundamentals including CI/CD concepts. He uses Docker in development workflows. He's also aware of cloud infrastructure and deployment patterns as part of his broader engineering education.`,
  },
  {
    patterns: ['java', 'spring', 'spring boot'],
    response: `Java and Spring Boot are part of Alpesh's additional knowledge base — areas he's actively exploring to broaden his backend engineering skills beyond the JavaScript/TypeScript ecosystem. He's currently deepening this knowledge alongside system design and DSA preparation.`,
  },
  {
    patterns: ['graphql'],
    response: `GraphQL is part of Alpesh's backend toolkit. He has experience with it as an alternative to REST for API design. He lists it among his backend technologies.`,
  },
  {
    patterns: ['rbac', 'role based', 'authorization', 'auth', 'authentication'],
    response: `Alpesh has implemented authentication and role-based access control (RBAC) systems as part of his backend work. This includes building auth flows, managing permissions, and securing API endpoints.`,
  },
  {
    patterns: ['location', 'based', 'india', 'ahmedabad'],
    response: `Alpesh is based in Ahmedabad, Gujarat, India. He works at eSparkBiz, which is also based in Ahmedabad.`,
  },
  {
    patterns: ['skill', 'tech stack', 'technology', 'technologies', 'tools'],
    response: `Alpesh's core technology stack:\n\n**Backend:** Node.js · TypeScript · NestJS · Express.js · REST APIs · Microservices · GraphQL · RabbitMQ · CQRS · RBAC\n\n**Frontend:** React.js · Next.js · JavaScript · TypeScript · Tailwind CSS\n\n**Databases:** PostgreSQL · MySQL · MongoDB\n\n**Tools:** Docker · Git · GitHub · Postman\n\n**Additional:** Java · Spring Boot (learning)`,
  },
];

const fallback = `I don't have specific information about that in my knowledge base. For anything not covered here, feel free to reach out to Alpesh directly at the contact links in the portfolio.\n\nYou can ask me about his skills, experience, specific projects, or how to get in touch.`;

export function getResponse(input: string): string {
  const normalized = input.toLowerCase().trim();

  for (const rule of rules) {
    for (const pattern of rule.patterns) {
      if (normalized.includes(pattern)) {
        return rule.response;
      }
    }
  }

  return fallback;
}

export const suggestions = [
  'Tell me about Alpesh',
  'What backend technologies does he use?',
  'Tell me about ChainIT',
  'Does he know NestJS?',
  'Has he worked with microservices?',
  'What is his experience with RabbitMQ?',
  'How can I contact him?',
];
