import { mkdirSync } from 'node:fs';
import PDFDocument from 'pdfkit';

mkdirSync('public/cv', { recursive: true });
const doc = new PDFDocument({ size: 'A4', margin: 46, info: { Title: 'Currículum Vitae — Arturo Daniel Villasboa Vera', Author: 'Arturo Daniel Villasboa Vera', Subject: 'Perfil profesional' } });
const stream = (await import('node:fs')).createWriteStream('public/cv/arturo-villasboa-cv.pdf');
doc.pipe(stream);

const ink = '#17201f', muted = '#52605d', accent = '#0f766e', line = '#d5ddda';
const pageWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;
const heading = (text) => { doc.moveDown(.8).font('Helvetica-Bold').fontSize(10).fillColor(accent).text(text.toUpperCase(), { characterSpacing: 1.1 }); doc.moveDown(.28).moveTo(doc.x, doc.y).lineTo(doc.x + pageWidth, doc.y).strokeColor(line).lineWidth(.7).stroke(); doc.moveDown(.55); };
const paragraph = (text, options = {}) => { doc.font('Helvetica').fontSize(9.5).fillColor(ink).text(text, { width: pageWidth, lineGap: 3, ...options }); };
const bullets = (items) => { items.forEach((item) => { doc.fillColor(accent).font('Helvetica-Bold').text('•', { continued: true }); doc.fillColor(ink).font('Helvetica').text(`  ${item}`, { indent: 0, lineGap: 2 }); }); };
const role = (title, place, time, detail) => { doc.font('Helvetica-Bold').fontSize(10.5).fillColor(ink).text(title); doc.font('Helvetica').fontSize(9).fillColor(muted).text(`${place}  |  ${time}`); if (detail) { doc.moveDown(.25); paragraph(detail); } doc.moveDown(.35); };

doc.rect(0, 0, doc.page.width, 118).fill('#eff8f6');
doc.fillColor(ink).font('Helvetica-Bold').fontSize(25).text('ARTURO DANIEL', 46, 42, { characterSpacing: .3 });
doc.fontSize(25).text('VILLASBOA VERA', 46, 71, { characterSpacing: .3 });
doc.font('Helvetica').fontSize(10).fillColor(accent).text('ESTUDIANTE DE ANÁLISIS DE SISTEMAS INFORMÁTICOS', 46, 101, { characterSpacing: .55 });
doc.fillColor(muted).fontSize(9).text('Itauguá, Paraguay  ·  0985 381 901  ·  arturodanielvillasboa06@gmail.com', 46, 136);
doc.text('github.com/artic1378', 46, 150);
doc.y = 174;

heading('Perfil profesional');
paragraph('Estudiante de tercer año de Análisis de Sistemas Informáticos en UTIC, con formación técnica en informática y experiencia de tres años en entornos comerciales. Cuento con práctica en desarrollo web, bases de datos y herramientas de desarrollo. Busco una oportunidad para iniciar y crecer profesionalmente en TI, aportando responsabilidad, adaptabilidad y disposición constante para aprender.');

heading('Experiencia profesional');
role('Encargado de local', 'Distribuidora Carmen del Sur · Dolce Helados, Itauguá', 'Actualidad', 'Evolución profesional dentro de entornos comerciales, desde atención al cliente hasta funciones de supervisión.');
bullets(['Supervisión de las operaciones del local y apoyo a la organización diaria.', 'Facturación.', 'Experiencia previa como cajero, atención al cliente y ventas durante dos años.']);
doc.moveDown(.45);
role('Pasante', 'ONE SRL, Capiatá', 'Fecha no especificada', 'Práctica enfocada en fundamentos de bases de datos y comprensión de entornos empresariales.');
bullets(['Creación y gestión de bases de datos MySQL.', 'Diseño de esquemas y consultas SQL.', 'Introducción a Oracle y funcionamiento de bases de datos empresariales.']);

heading('Educación');
role('Análisis de Sistemas Informáticos', 'Universidad Tecnológica Intercontinental (UTIC), San Lorenzo', 'En curso · tercer año');
role('Bachillerato Técnico en Informática', 'Colegio Nacional de Capiatá, Capiatá', 'Finalizado');

heading('Conocimientos técnicos');
doc.font('Helvetica-Bold').fontSize(9.5).fillColor(ink).text('Desarrollo y backend'); doc.font('Helvetica').text('Java, Spring Boot, PHP, HTML y JavaScript.');
doc.moveDown(.32); doc.font('Helvetica-Bold').text('Bases de datos'); doc.font('Helvetica').text('PostgreSQL, MySQL, MongoDB y Oracle; modelado y diagramas entidad-relación.');
doc.moveDown(.32); doc.font('Helvetica-Bold').text('Herramientas'); doc.font('Helvetica').text('Docker, Docker Compose, Git, GitHub, MySQL Workbench, DBeaver, XAMPP y PowerArchitect.');
doc.moveDown(.32); doc.font('Helvetica-Bold').text('Otros'); doc.font('Helvetica').text('Fundamentos de Cloudflare y SEO web; uso de herramientas de asistencia al desarrollo: Codex, Gemini, Claude Code y OpenCode.');

doc.moveDown(1.1).font('Helvetica-Oblique').fontSize(8).fillColor(muted).text('Currículum preparado a partir de información proporcionada por Arturo Daniel Villasboa Vera.', { align: 'center' });
doc.end();
await new Promise((resolve, reject) => { stream.on('finish', resolve); stream.on('error', reject); });
