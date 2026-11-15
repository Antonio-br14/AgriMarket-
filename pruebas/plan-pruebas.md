# Plan y resultados de pruebas de usabilidad

## 1. Identificación

- **Proyecto:** AgriMarket — plataforma de comercialización directa para pequeños productores de Purísima, Córdoba.
- **Fase:** prototipo visual de alta fidelidad (Actividad 2).
- **Perfil objetivo:** productores agrícolas de pequeña escala y consumidores locales.
- **Modalidad:** prueba no moderada, remota, con tareas goal-based en Maze.
- **Participantes:** 5 (3 productores y 2 consumidores).
- **Duración:** 10-15 minutos por sesión.

## 2. Objetivo

Evaluar si un usuario del perfil objetivo podía iniciar sesión, buscar un producto y confirmar una solicitud en el prototipo de alta fidelidad, e identificar dónde dudaba, se equivocaba o abandonaba.

## 3. Método y métricas

- **Herramienta:** Maze.
- **Tipo de tarea:** goal-based.
- **Métricas:** éxito, abandono, tiempo, misclick y número de respuestas.
- **Criterio de éxito:** llegar a la pantalla de destino configurada en Maze.
- **Evidencia:** reporte de Maze y capturas de cada misión.

## 4. Participantes

| ID | Perfil | Edad | Ubicación | Experiencia digital |
|---|---|---|---|---|
| P1 | Productor agrícola | 52 | Vereda El Naranjal, Purísima | Básica (WhatsApp y llamadas) |
| P2 | Productor agrícola | 47 | Vereda La Esperanza, Purísima | Básica |
| P3 | Productor agrícola | 61 | Vereda El Cedro, Purísima | Baja |
| P4 | Consumidora | 29 | Purísima / Montería | Media-alta |
| P5 | Consumidor | 34 | Montería | Media |

## 5. Tareas y criterios

| Tarea | Instrucción | Pantalla de éxito | Respuestas |
|---|---|---|---|
| T1 | "Inicia sesión como usuario nuevo". | 02 Login / Desktop | 5 |
| T2 | "Busca plátano hartón y abre su detalle". | 04 Catálogo o 05 Detalle | 6 |
| T3 | "Completa los datos y confirma la solicitud". | 07 Confirmación / Desktop | 5 |

## 6. Resultados

| Tarea | Respuestas | Éxito | Abandono | Tiempo prom. | Misclick |
|---|---|---|---|---|---|
| T1 - Iniciar sesión | 5 | 100 % | 0 % | 25,8 s | 33,3 % |
| T2 - Buscar y abrir detalle | 6 | 100 % | 0 % | 13,0 s | 14,3 % |
| T3 - Completar y confirmar | 5 | 100 % | 0 % | 43,1 s | 47,1 % |

## 7. Hallazgos

| ID | Hallazgo | Evidencia | Severidad | Ajuste |
|---|---|---|---|---|
| H1 | El inicio de sesión concentra misclics. | 33,3 % de misclick; 100 % de éxito y 25,8 s. | Media | Mantener acceso rápido y reforzar etiquetas del formulario. |
| H2 | La confirmación es la tarea más costosa. | 47,1 % de misclick; 43,1 s; 100 % de éxito. | Alta | Resumen desglosado, total visible y entrega explicada. |
| H3 | La búsqueda es rápida, pero el éxito no aísla el detalle. | 13,0 s; 14,3 % misclick; éxito al llegar a Catálogo o Detalle. | Media | Refinar el criterio de éxito y hacer el detalle más directo. |
| H4 | El flujo general se completó sin abandono. | 0 % de abandono en las tres misiones. | Baja | Mantener la estructura y el botón principal. |
| H5 | No se midió la tarea de agregar 2 kg. | El reporte de Maze no incluye esa misión. | Alta | Incluirla en la próxima réplica. |

## 8. Limitaciones

- No se midió la tarea de agregar 2 kg.
- El reporte exportado no incluyó los puntajes SEQ y SUS.
- El contexto es simulado y la muestra es pequeña.
- La tarea de búsqueda definió el éxito al llegar al catálogo o al detalle, no exclusivamente al detalle.

## 9. Evidencia

- Reporte de Maze: capturas por misión en `pruebas/maze/`.
- Datos agregados: `pruebas/resultados.csv`.
- Instrumentos SEQ y SUS: Anexo B del documento.
