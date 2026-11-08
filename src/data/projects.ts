export type Project = { name: string; description: string; technologies: string[]; features: string[]; github?: string; demo?: string; status: 'Demostración' | 'Real' };

export const projects: Project[] = [
  {
    name: 'Espacio para próximo proyecto', status: 'Demostración',
    description: 'Estructura de demostración preparada para documentar un proyecto real cuando esté disponible. No representa un trabajo realizado.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL'],
    features: ['Descripción del problema resuelto.', 'Funcionalidades principales.', 'Enlaces a repositorio y demostración.'],
  },
  {
    name: 'Proyecto web por incorporar', status: 'Demostración',
    description: 'Tarjeta de ejemplo para incorporar futuros proyectos de HTML, JavaScript o PHP manteniendo la misma estructura.',
    technologies: ['HTML5', 'JavaScript', 'PHP'],
    features: ['Objetivo del proyecto.', 'Tecnologías verificadas.', 'Resultados y enlaces públicos.'],
  },
];
