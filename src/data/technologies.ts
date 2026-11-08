export type Technology = { name: string; icon: string; level?: 'Básico' | 'En aprendizaje' };
export type TechnologyGroup = { category: string; items: Technology[] };

export const technologyGroups: TechnologyGroup[] = [
  { category: 'Lenguajes', items: [
    { name: 'Java', icon: 'java' }, { name: 'PHP', icon: 'php', level: 'Básico' },
    { name: 'JavaScript', icon: 'javascript', level: 'Básico' }, { name: 'HTML5', icon: 'html5' },
  ] },
  { category: 'Frontend', items: [{ name: 'HTML5', icon: 'html5' }, { name: 'JavaScript', icon: 'javascript', level: 'Básico' }] },
  { category: 'Backend y frameworks', items: [
    { name: 'Spring Boot', icon: 'springboot', level: 'En aprendizaje' }, { name: 'PHP', icon: 'php', level: 'Básico' },
  ] },
  { category: 'Bases de datos', items: [
    { name: 'PostgreSQL', icon: 'postgresql', level: 'Básico' }, { name: 'MySQL', icon: 'mysql', level: 'En aprendizaje' },
    { name: 'MongoDB', icon: 'mongodb', level: 'Básico' }, { name: 'Oracle', icon: 'oracle', level: 'Básico' },
  ] },
  { category: 'Herramientas y control de versiones', items: [
    { name: 'Docker', icon: 'docker' }, { name: 'Docker Compose', icon: 'docker' }, { name: 'Git', icon: 'git' },
    { name: 'GitHub', icon: 'github' }, { name: 'DBeaver', icon: 'dbeaver' }, { name: 'MySQL Workbench', icon: 'mysql' },
  ] },
  { category: 'Infraestructura y productividad', items: [
    { name: 'Cloudflare', icon: 'cloudflare', level: 'Básico' }, { name: 'SEO web', icon: 'search', level: 'Básico' },
    { name: 'OpenAI Codex', icon: 'openai' }, { name: 'Gemini', icon: 'google' }, { name: 'Claude Code', icon: 'anthropic' },
  ] },
];
