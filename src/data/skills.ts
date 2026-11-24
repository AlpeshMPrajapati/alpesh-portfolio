// src/data/skills.ts

export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    label: 'Backend Engineering',
    icon: '⚙️',
    description: 'Server-side development, API design, and backend services',
    skills: ['Node.js', 'TypeScript', 'NestJS', 'Express.js', 'REST APIs', 'Microservices', 'GraphQL', 'Webhooks'],
  },
  {
    id: 'frontend',
    label: 'Frontend Development',
    icon: '🖥️',
    description: 'Client-side applications and user interface development',
    skills: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: '🗄️',
    description: 'Relational and non-relational data storage and management',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    id: 'architecture',
    label: 'System Architecture',
    icon: '🏗️',
    description: 'Architectural patterns and distributed system design',
    skills: ['RabbitMQ', 'CQRS', 'RBAC', 'API Architecture', 'Database Design', 'Distributed Processing', 'Asynchronous Processing', 'Event-Driven Systems'],
  },
  {
    id: 'tools',
    label: 'Tools & Infrastructure',
    icon: '🛠️',
    description: 'Development tooling, version control, and DevOps fundamentals',
    skills: ['Docker', 'Git', 'GitHub', 'Postman'],
  },
  {
    id: 'additional',
    label: 'Additional Knowledge',
    icon: '📚',
    description: 'Languages and frameworks explored beyond primary stack',
    skills: ['Java', 'Spring Boot'],
  },
];

export const engineeringInterests = [
  {
    id: 'scalable-backends',
    label: 'Scalable Backend Systems',
    description: 'Designing and building backends that handle growth without breaking.',
    icon: '⚡',
  },
  {
    id: 'microservices',
    label: 'Microservices Architecture',
    description: 'Decomposing systems into focused, independently deployable services.',
    icon: '🔗',
  },
  {
    id: 'distributed-processing',
    label: 'Distributed Processing',
    description: 'Coordinating work across multiple services and processes.',
    icon: '🌐',
  },
  {
    id: 'message-queues',
    label: 'Message Queues',
    description: 'Asynchronous communication patterns using brokers like RabbitMQ.',
    icon: '📨',
  },
  {
    id: 'api-design',
    label: 'API Design',
    description: 'Crafting clean, consistent, and well-documented API contracts.',
    icon: '🔌',
  },
  {
    id: 'db-optimization',
    label: 'Database Optimization',
    description: 'Schema design, query tuning, and storage efficiency strategies.',
    icon: '🗄️',
  },
  {
    id: 'system-design',
    label: 'System Design',
    description: 'High-level and low-level design thinking for production systems.',
    icon: '🏗️',
  },
  {
    id: 'ai-dev',
    label: 'AI-Assisted Development',
    description: 'Leveraging AI tools to accelerate engineering workflows.',
    icon: '🤖',
  },
];
