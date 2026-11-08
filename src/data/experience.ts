export type Experience = { role: string; company: string; location: string; period: string; current?: boolean; description: string; highlights: string[]; technologies: string[] };

export const experiences: Experience[] = [
  {
    role: 'Encargado de local', company: 'Distribuidora Carmen del Sur · Dolce Helados', location: 'Itauguá, Paraguay', period: 'Actualidad', current: true,
    description: 'Experiencia de tres años en entornos comerciales, evolucionando desde atención al cliente hasta la supervisión del local.',
    highlights: ['Supervisión de las operaciones del local.', 'Facturación.', 'Experiencia previa como cajero, atención al cliente y ventas durante dos años.'], technologies: [],
  },
  {
    role: 'Pasante', company: 'ONE SRL', location: 'Capiatá, Paraguay', period: 'Fecha no especificada',
    description: 'Práctica orientada a bases de datos y comprensión de entornos empresariales.',
    highlights: ['Creación y gestión de bases de datos MySQL.', 'Diseño de esquemas y consultas SQL.', 'Introducción a Oracle y a bases de datos empresariales.'], technologies: ['MySQL', 'Oracle', 'SQL'],
  },
];
