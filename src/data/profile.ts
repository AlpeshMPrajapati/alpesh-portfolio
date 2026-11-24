// src/data/profile.ts
// Central profile configuration - update this file to modify personal information

export const profile = {
  name: 'Alpesh Prajapati',
  title: 'Software Engineer',
  subtitle: 'Full Stack Developer',
  tagline: 'Building scalable distributed systems and modern full-stack web applications.',
  description:
    'Full Stack Developer with nearly 3 years of experience specializing in TypeScript, Node.js, NestJS, React, and PostgreSQL. Experienced in distributed microservices, event-driven systems (RabbitMQ/CQRS), zero-downtime data migrations, and intuitive enterprise web applications.',
  location: 'Ahmedabad, Gujarat, India',
  experience: 'Nearly 3 years',
  currentCompany: 'eSparkBiz',

  // Social links - update with your actual URLs
  github: 'https://github.com/AlpeshMPrajapati',
  linkedin: 'https://www.linkedin.com/in/alpeshmprajapati', // Update with actual LinkedIn URL
  email: 'alpeshbhaiprajapati398@gmail.com', // Update with actual email

  // Resume file path
  resume: '/resume/Alpesh_Prajapati_JS_Full_stack.pdf',
};

export type Profile = typeof profile;
