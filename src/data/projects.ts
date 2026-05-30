export interface Project {
  id: string;
  num: string;
  featured?: boolean;
  title: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
  badge?: string;
}

export const projects: Project[] = [
  {
    id: 'flask-docker-ec2',
    num: '01 · Featured',
    featured: true,
    title: 'Flask App Deployment with Docker Compose on EC2',
    description:
      'Containerised a Python Flask weather application using Docker Compose and deployed it on Amazon EC2. Covers multi-container orchestration, environment config, Dockerfile authoring, and a production-grade deployment workflow — fully documented as a blog walkthrough.',
    tags: ['Python', 'Flask', 'Docker Compose', 'AWS EC2', 'Linux'],
    links: [
      {
        label: 'Read Article',
        href: 'https://jasaiblogs.hashnode.dev/docker-compose-simplifying-multi-container-docker-applications',
      },
      { label: 'GitHub', href: 'https://github.com/Jasai007' },
    ],
    badge: 'Documented',
  },
  {
    id: 'cicd-pipeline',
    num: '02',
    title: 'CI/CD Pipeline · GitHub Actions + SonarQube',
    description:
      'Automated build, test and deploy pipeline. SonarQube integration for code quality gating — patterns carried over from fintech engineering practice.',
    tags: ['GitHub Actions', 'SonarQube', 'CI/CD'],
    links: [{ label: 'GitHub', href: 'https://github.com/Jasai007' }],
  },
  {
    id: 'portfolio',
    num: '03',
    title: 'This Portfolio',
    description:
      'React + TypeScript + Vite, deployed on Vercel via GitHub Actions. The portfolio itself is a DevOps project — CI/CD, IaC thinking, clean deployment pipeline.',
    tags: ['React', 'TypeScript', 'Vite', 'Vercel'],
    links: [
      { label: 'Source', href: 'https://github.com/Jasai007/Portfolio' },
      { label: 'Live', href: 'https://portfolio-pi-two-44.vercel.app' },
    ],
  },
];
