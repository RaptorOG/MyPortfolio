export interface ContactLink {
  id: string;
  icon: string;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

export const contactLinks: ContactLink[] = [
  {
    id: 'email',
    icon: '@',
    label: 'Email',
    value: 'YOUR_EMAIL',
    href: 'mailto:YOUR_EMAIL',
  },
  {
    id: 'linkedin',
    icon: 'in',
    label: 'LinkedIn',
    value: 'Connect professionally',
    href: 'YOUR_LINKEDIN_URL',
    external: true,
  },
  {
    id: 'github',
    icon: 'GH',
    label: 'GitHub',
    value: 'Jasai007',
    href: 'https://github.com/Jasai007',
    external: true,
  },
  {
    id: 'blog',
    icon: '✍',
    label: 'Blog',
    value: 'Demystifying Tech with Jasai',
    href: 'https://jasaiblogs.hashnode.dev',
    external: true,
  },
];
