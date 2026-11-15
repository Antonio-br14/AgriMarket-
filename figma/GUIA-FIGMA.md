# Guía para construir el prototipo en Figma

Esta guía traduce la maquetación HTML/CSS y las capturas de `../figuras` a un archivo de Figma con UI Kit, wireframes, alta fidelidad y prototipo navegable. El objetivo es que el archivo de Figma y la maquetación mantengan la misma estructura, tokens y componentes.

## 1. Crear el archivo y las páginas

Crea un archivo llamado **AgriMarket · Actividad 2** y organiza estas páginas:

| Página | Contenido |
|---|---|
| `00 Portada` | Título, autores, docente, fecha y enlaces. |
| `01 UI Kit` | Fundamentos, colores, tipografía, espaciado, componentes y estados. |
| `02 Wireframes` | Ocho wireframes de baja fidelidad, en escala de grises. |
| `03 Alta fidelidad` | Pantallas desktop, tablet y móvil. |
| `04 Prototipo` | Copia de las pantallas conectadas para la prueba. |
| `05 Pruebas` | Marco de prueba y notas de la sesión. |

Si la cuenta gratuita limita las páginas, usa una sola página `02 Diseño` con secciones separadas por frames y nombres claros.

## 2. Frames y tamaños

Crea estos frames base:

- **Desktop:** 1440 × 1024 px (flujo principal) y 1440 × 1600 px para el panel.
- **Tablet:** 768 × 1024 px.
- **Móvil:** 390 × 844 px.
- **UI Kit:** 1440 × 4200 px (o secciones de 1440 × 900 px).
- **Wireframes:** 1440 × 900 px por pantalla, en una cuadrícula de 2 columnas.

Nombra los frames con el mismo nombre de la pantalla y agrega el estado cuando aplique:

```
01 Inicio / Desktop
02 Login / Desktop
02 Login / Error
03 Registro / Desktop
04 Catálogo / Desktop
04 Catálogo / Sin resultados
05 Detalle / Desktop
06 Solicitud / Desktop
06 Solicitud / Error
07 Confirmación / Desktop
08 Panel / Resumen
08 Panel / Productos
08 Panel / Solicitudes
08 Panel / Reportes
09 Publicar / Desktop
10 Inicio / Mobile
...
```

## 3. Variables y estilos

Crea variables de color con los nombres y valores del UI Kit:

| Variable | Valor | Uso |
|---|---|---|
| `color/verde` | `#2E7D32` | Primario, encabezados, botones |
| `color/verde-oscuro` | `#1B5E20` | Hover y énfasis |
| `color/verde-claro` | `#E2EFDA` | Fondos, etiquetas, imágenes |
| `color/naranja` | `#C55A11` | Acento decorativo |
| `color/naranja-accion` | `#A9470A` | CTA de compra/publicación |
| `color/fondo` | `#F4F8F4` | Fondo general |
| `color/texto` | `#1D2A1D` | Texto principal |
| `color/gris` | `#5B6B5B` | Texto secundario |
| `color/borde` | `#DDE5DD` | Bordes y separadores |
| `color/error` | `#B3261E` | Errores |
| `color/exito` | `#1E7A3C` | Confirmaciones |

Crea estilos de texto:

- `Display`: Segoe UI, 34/40, Bold 800.
- `H1`: 28/34, Bold 700.
- `H2`: 20/26, Bold 700.
- `H3`: 17/22, Bold 700.
- `Body`: 16/24, Regular 400.
- `Small`: 13/20, Regular 400.
- `Caption`: 12/16, Bold 700, mayúsculas.
- `Boton`: 15/20, Bold 700.

Crea variables de espaciado (4, 8, 12, 16, 20, 24, 32, 40) y radios (6, 8, 10, 14, 18, 999). Usa **Auto layout** en tarjetas, formularios, botones y barras.

## 4. Componentes y variantes

### Botón
- Propiedades: `Tipo` = Primario, Secundario, Naranja, Fantasma, Deshabilitado; `Tamaño` = Normal, Pequeño.
- Estados: Default, Hover, Focus, Pressed.
- Altura 44 px (36 px en pequeño), radio 10 px, texto 15/700.
- El foco debe tener un contorno visible de 3 px.

### Campo de texto
- Estados: Default, Focus, Error, Deshabilitado.
- Etiqueta visible, texto de ayuda y mensaje de error.
- Altura 44 px, radio 10 px.

### Otros componentes
- `Badge` con variantes: Disponible, Pendiente, Aceptada, Rechazada, Informativa, Agotada.
- `Alert` con variantes: Info, Éxito, Atención, Error.
- `Card producto`: imagen/emoji, nombre, precio, productor, botón.
- `Card categoría`: icono, nombre, texto.
- `Stat`: número, etiqueta, nota.
- `Header`: logo, navegación, carrito, usuario.
- `Footer`: enlaces y créditos.
- `Search bar`: campo con icono y botón.
- `Chips`: filtros de categoría.
- `Tabs`: resumen, productos, solicitudes, reportes.
- `Empty state`: mensaje y acción.
- `Toast`: éxito y error.
- `Productor card`: avatar, nombre, vereda, verificación, rating.

Usa **componentes anidados** para el header y las tarjetas. Define variantes de estado para no duplicar frames.

## 5. Pantallas y contenido

Reproduce las pantallas de `../figuras` y de la maquetación `../web`:

1. **Inicio:** hero verde, dos CTA, tres beneficios, cinco categorías, cuatro productos destacados, banda para productor y pasos.
2. **Login:** panel verde con propuesta de valor, formulario, acceso rápido como consumidor/productor.
3. **Registro:** selector de rol en tarjetas, nombre, correo, teléfono, contraseña, confirmación, términos.
4. **Catálogo:** buscador, chips, contador, orden, tarjetas, estado vacío.
5. **Detalle:** imagen, categoría, nombre, productor verificado, precio, disponibilidad, cantidad, CTA naranja, relacionados.
6. **Solicitud:** lista editable, datos de entrega, tres opciones de entrega, pago contra entrega, resumen con subtotal/flete/total.
7. **Confirmación:** check, número de solicitud, estado pendiente, timeline de próximos pasos.
8. **Panel:** estadísticas, perfil, productos, solicitudes con aceptar/rechazar, reportes con gráficos y precios de referencia.
9. **Publicar:** formulario, carga de imagen, vista previa y consejos.

Mantén el texto y los datos de demostración de la maquetación para que la coherencia sea verificable (José Ramón, El Naranjal, Plátano hartón, $2.500/kg, etc.).

## 6. Prototipo navegable

En la página `04 Prototipo`, duplica las pantallas y conecta:

| Origen | Acción | Destino |
|---|---|---|
| Inicio · Ver catálogo | Clic | Catálogo |
| Inicio · Quiero vender | Clic | Registro |
| Header · Catálogo | Clic | Catálogo |
| Header · Mi panel | Clic | Panel |
| Header · Carrito | Clic | Solicitud |
| Header · Ingresar | Clic | Login |
| Login · Ingresar | Clic | Inicio |
| Login · Como productor | Clic | Panel |
| Registro · Registrarme | Clic | Inicio (consumidor) / Panel (productor) |
| Catálogo · producto | Clic | Detalle |
| Catálogo · Buscar | Clic | Catálogo (estado resultados) |
| Detalle · Agregar | Clic | Solicitud |
| Solicitud · Confirmar | Clic | Confirmación (si datos completos) |
| Solicitud · Confirmar sin datos | Clic | Solicitud (estado error) |
| Confirmación · Seguir comprando | Clic | Catálogo |
| Panel · Publicar producto | Clic | Publicar |
| Publicar · Publicar | Clic | Panel (estado producto publicado) |
| Panel · Aceptar/Rechazar | Clic | Panel (estado actualizado) |

Configura:
- Transición **Smart Animate** de 200 ms para cambios de estado.
- **Overlay** para el menú móvil, con cierre al hacer clic fuera.
- **Back** en las pantallas de detalle, solicitud y publicación.
- Punto de inicio del prototipo: `01 Inicio / Desktop`.
- Para la prueba, usa solo la versión desktop y una versión móvil del flujo principal.

## 7. Pruebas en Maze

1. Crea un estudio **Usability testing** no moderado.
2. Agrega un bloque de bienvenida con contexto y duración (20-30 min).
3. Agrega un bloque de contexto: “Eres María Fernanda y quieres comprar plátano para tu casa”.
4. Agrega tres misiones:
   - **T1:** “Busca plátano hartón y abre su detalle”.
   - **T2:** “Agrega 2 kg de plátano a tu solicitud”.
   - **T3:** “Completa los datos y confirma la solicitud”.
5. Define la ruta esperada de cada misión y marca el éxito directo, indirecto y el abandono.
6. Agrega una pregunta abierta por tarea y el cuestionario SEQ (1-7).
7. Al final, agrega el SUS de 10 preguntas.
8. Prueba con 5 participantes (3 productores y 2 consumidores).
9. Exporta el reporte y úsalo para actualizar la sección 8 del documento.

## 8. Exportar para el documento

- Exporta cada pantalla en PNG a 2x.
- Exporta el UI Kit en dos o tres imágenes: fundamentos/color, tipografía/espaciado, componentes.
- Exporta los wireframes en dos imágenes (WF-01 a WF-04 y WF-05 a WF-08).
- Exporta el tablero de Figma con las conexiones del prototipo.
- Guarda las imágenes en `../figuras` con nombres descriptivos.

## 9. Lista de verificación

- [ ] Variables de color y tipografía creadas.
- [ ] Componentes con variantes y estados.
- [ ] Auto layout en botones, campos, tarjetas y header.
- [ ] Ocho wireframes en escala de grises.
- [ ] Nueve pantallas desktop y al menos cuatro móviles.
- [ ] Prototipo con navegación completa y puntos de inicio.
- [ ] Contraste AA y objetivos táctiles de 44 px.
- [ ] Enlace de Figma agregado al documento y a `entregables.html`.
- [ ] Prueba en Maze con 5 participantes y tres tareas.
- [ ] Capturas exportadas y coherentes con la maquetación HTML/CSS.

## 10. Enlace

Enlace compartido del archivo:

```
https://www.figma.com/design/OuKVpZzNMY4gfrzjhDTxwI/AgriMarket-%C2%B7-Actividad-2?node-id=0-1&t=SHYAk67AYlZdsncD-1
```

Recuerda habilitar la visualización para cualquier persona con el enlace y pegar el enlace también en el documento PDF y en `web/entregables.html`.
