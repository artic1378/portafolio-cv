import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = ['dist/index.html', 'dist/robots.txt', 'dist/sitemap-index.xml'];
for (const file of requiredFiles) {
  if (!existsSync(file)) throw new Error(`Falta el archivo generado: ${file}`);
}

const html = readFileSync('dist/index.html', 'utf8');
const requiredFragments = [
  '<title>',
  'name="description"',
  'rel="canonical"',
  'application/ld+json',
  'id="inicio"',
  'id="proyectos"',
  'aria-label="Navegación principal"',
];
for (const fragment of requiredFragments) {
  if (!html.includes(fragment)) throw new Error(`No se encontró ${fragment} en el HTML generado`);
}
if (/href="(?!https?:|mailto:|#|\/)[^"]+"/.test(html)) throw new Error('Se detectó un enlace relativo potencialmente roto');
console.log('Verificación estática superada: build, SEO y navegación base presentes.');
