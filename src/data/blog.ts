export interface BlogPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  href: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'docker-compose',
    category: 'Docker · DevOps',
    title: 'Docker Compose: Simplifying Multi-Container Applications',
    excerpt: 'Deploy a Flask app on EC2 using Docker Compose — practical multi-container management.',
    date: 'Aug 2024',
    href: 'https://jasaiblogs.hashnode.dev/docker-compose-simplifying-multi-container-docker-applications',
  },
  {
    id: 'dockerfile-guide',
    category: 'Docker · Tutorial',
    title: 'Create a Dockerfile: Step-by-Step Guide',
    excerpt: 'A practical walkthrough for writing your first Dockerfile from scratch.',
    date: 'Mar 2025',
    href: 'https://jasaiblogs.hashnode.dev/learn-to-create-a-dockerfile-easy-step-by-step-example',
  },
  {
    id: 'virtualization',
    category: 'Cloud · Fundamentals',
    title: 'Virtualization: The Cornerstone of Cloud Computing',
    excerpt: 'Why virtualization is the bedrock of everything cloud — broken down without jargon.',
    date: 'May 2024',
    href: 'https://jasaiblogs.hashnode.dev/virtualization-the-cornerstone-of-cloud-computing',
  },
  {
    id: 'docker-cli',
    category: 'Docker · Reference',
    title: 'Docker CLI Commands: Quick Reference Guide',
    excerpt: 'The commands you\'ll actually use — images, containers, Hub. A practical cheat sheet.',
    date: 'Jul 2024',
    href: 'https://jasaiblogs.hashnode.dev/docker-cli-cheat-sheet',
  },
  {
    id: 'flask-apps',
    category: 'Python · Flask',
    title: 'Python Flask: Building Web Applications',
    excerpt: 'Understanding Flask from the ground up — routes, templates, and deployment patterns.',
    date: 'Aug 2024',
    href: 'https://jasaiblogs.hashnode.dev/understanding-python-flask-applications',
  },
];

export const blogUrl = 'https://jasaiblogs.hashnode.dev';
