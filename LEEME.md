# AgriMarket · Actividad 2

**Diseño visual y validación del prototipo**

- **Autores:** Antonio José Barrios Reyes y Cristian Santiago Hernández García.
- **Docente:** Tatiana Lizbeth Cabrera Vargas.
- **Curso:** Análisis y diseño de sistemas.
- **Programa:** Ingeniería de Software, Facultad de Ingeniería, Corporación Universitaria Iberoamericana.
- **Fecha:** Noviembre de 2026.

## Entregable principal

| Archivo | Descripción |
|---|---|
| `documento/Actividad 2 - Diseno visual AgriMarket.pdf` | Documento final de 82 páginas, listo para entregar. |
| `documento/Actividad 2 - Diseno visual AgriMarket.docx` | Versión editable con el mismo estilo de la Actividad 1: portada institucional, Times New Roman 12, doble espacio y numeración superior derecha. La tabla de contenido es una lista de referencia. |
| `web/index.html` | Prototipo navegable en HTML/CSS. |
| `web/entregables.html` | Índice de todas las pantallas y evidencias. |
| `figma/GUIA-FIGMA.md` | Guía paso a paso para construir el archivo de Figma, el prototipo y la prueba en Maze. |
| `pruebas/plan-pruebas.md` | Plan, guion y resultados de usabilidad. |
| `pruebas/resultados.csv` | Datos por participante para actualizar las tablas. |
| `figuras/` | Capturas y diagramas usados en el documento. |

## Qué contiene el documento

1. Resumen, introducción y marco metodológico (Design Thinking, Kanban, usabilidad y accesibilidad).
2. Trazabilidad con la Actividad 1 (mapa de empatía, POV, User Persona, RF/US y MVP).
3. Arquitectura de información y mapa de navegación.
4. UI Kit: color, tipografía, espaciado, componentes, estados y accesibilidad.
5. Wireframes de baja fidelidad de las ocho pantallas.
6. Diseño de alta fidelidad de los módulos: login, registro, inicio, catálogo, detalle, solicitud, confirmación, panel (perfil, productos, solicitudes, reportes) y publicar.
7. Prototipo interactivo navegable y correspondencia con HTML/CSS.
8. User Flow del consumidor y del productor.
9. Customer Journey Map del prototipo.
10. Pruebas de usabilidad con cinco usuarios: plan, resultados, hallazgos, iteraciones y discusión.
11. Maquetación HTML/CSS, responsive y accesibilidad.
12. Conclusiones, referencias y anexos (guion, instrumentos, matriz y enlaces).

## Cómo abrir el prototipo

1. Abre `web/index.html` en Edge, Chrome o Firefox.
2. Navega con el encabezado o con `web/entregables.html`.
3. Flujo del consumidor: Catálogo → Detalle → Agregar a la solicitud → Datos de entrega → Confirmar.
4. Flujo del productor: Login → “Como productor” → Panel → Publicar producto → Aceptar/rechazar solicitud → Reportes.
5. Reduce la ventana a 500 px para revisar la versión móvil.

No requiere instalación ni servidor. El carrito y el usuario de demostración se guardan en `localStorage`.

## Antes de entregar: lista de verificación

- [x] Enlace de Figma insertado en la sección 6.1 y en el Anexo D: https://www.figma.com/design/OuKVpZzNMY4gfrzjhDTxwI/AgriMarket-%C2%B7-Actividad-2?node-id=0-1&t=SHYAk67AYlZdsncD-1
- [x] Enlace de Maze insertado en el Anexo D: https://app.maze.co/home
- [ ] Verificar que el enlace de Figma tenga permisos de visualización para cualquier persona con el enlace.
- [ ] Confirmar que el tablero de Trello tenga las tarjetas de esta fase.
- [ ] Agregar las capturas de Maze en `pruebas/maze/`; el documento usa datos agregados y no incluye SEQ/SUS.
- [ ] Verificar que las tablas 13 a 19 y las figuras 25 a 27 coincidan con el reporte de Maze: 5 participantes, 100 % de éxito, 0 % de abandono, 33,3 % / 14,3 % / 47,1 % de misclick. La tarea de agregar 2 kg y los puntajes SEQ/SUS no se incluyeron en esta corrida.
- [ ] Confirmar nombres, docente, programa y fecha en la portada.
- [ ] Abrir el PDF y revisar que las figuras y tablas se vean completas.
- [ ] Subir el PDF al aula virtual junto con el enlace de Figma y el enlace de Trello.

## Notas

- La profesora Tatiana Cabrera aclaró en las sesiones que esta entrega corresponde a la fase de **prototipar y testear** y que la maquetación HTML/CSS se profundiza en la tercera entrega. Aquí se incluye igualmente como evidencia de coherencia entre el diseño y el código.
- El prototipo de la Actividad 4 de la otra asignatura (React + Vite) se usó como referencia de estructura y contenido. El repositorio es `https://github.com/Antonio-br14/AgriMarket_Proyecto`.
- El documento se compone en Word con el estilo académico de la Actividad 1 (portada institucional, Times New Roman 12, doble espacio, texto justificado y numeración superior derecha). La versión DOCX es totalmente editable. Las figuras 25 a 27 se generaron con los datos agregados de Maze; las capturas de pantallas provienen de la maquetación HTML/CSS y replican el diseño definido para Figma. Las capturas móviles se tomaron a 500 px por una limitación del navegador headless; el diseño responsive está definido para 390 px.
