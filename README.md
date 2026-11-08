# Portafolio CV — Arturo Villasboa

Portafolio estático desarrollado con Astro, TypeScript y Tailwind CSS. Los datos profesionales están centralizados en `src/data/`, para actualizarlos sin modificar los componentes.

## Requisitos

- Node.js 20 o superior (se recomienda la versión 24 LTS usada en el contenedor).
- Docker Desktop, solo para la prueba con contenedor.

## Desarrollo local

```bash
npm install
npm run dev
```

El sitio estará disponible en `http://localhost:4321`.

## Pruebas y compilación

```bash
npm test
```

El comando verifica tipos, compila el sitio y valida la presencia de los archivos SEO, secciones y enlaces internos principales.

## Docker Compose

```bash
docker compose up --build
```

Luego abrir `http://localhost:8080`. Para detenerlo: `docker compose down`.

## CV PDF

El PDF descargable se genera desde información verificable con `npm run generate:cv` y queda en `public/cv/arturo-villasboa-cv.pdf`. Para editar su contenido o presentación, modificar `scripts/generate-cv.mjs` y volver a ejecutar el comando.

## Actualizar contenido

- Perfil y enlaces: `src/data/personal.ts`
- Tecnologías: `src/data/technologies.ts`
- Experiencia: `src/data/experience.ts`
- Proyectos: `src/data/projects.ts`
- Educación: `src/data/education.ts`

Los proyectos actuales están marcados como **Demostración** y no se presentan como experiencia real.

## Cloudflare Pages

1. Subir este repositorio a GitHub.
2. En Cloudflare Pages, crear un proyecto y conectar el repositorio.
3. Elegir estas opciones:
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node.js version: `24` (o una versión LTS compatible)
4. Agregar `PUBLIC_SITE_URL` con la URL final, por ejemplo `https://tudominio.com`.
5. Configurar el dominio personalizado en Cloudflare Pages cuando esté disponible.

Cada push a `main` iniciará un despliegue automático. No requiere servidor ni variables secretas.
