export interface SkillGroup {
  title: string;
  tags: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    tags: ['Python', 'JavaScript', 'TypeScript', 'Bash', 'SQL'],
  },
  {
    title: 'Frameworks & Libraries',
    tags: ['React', 'Flask', 'Node.js', 'REST APIs'],
  },
  {
    title: 'DevOps & Cloud',
    tags: ['Docker', 'Docker Compose', 'Linux', 'AWS EC2', 'GitHub Actions', 'CI/CD', 'Kubernetes', 'Terraform'],
  },
  {
    title: 'Tools & Practices',
    tags: ['Git', 'SonarQube', 'Agile', 'Technical Writing', 'AI-Assisted Dev'],
  },
];
