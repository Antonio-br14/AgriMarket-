# AgriMarket · Maquetación HTML/CSS

Maquetación inicial del prototipo visual de **AgriMarket**, desarrollada como evidencia de la Actividad 2 del curso *Análisis y diseño de sistemas*.

## Cómo abrir

1. Abre `index.html` en Edge, Chrome o Firefox.
2. Navega con el encabezado o con `entregables.html`.
3. Prueba el flujo del consumidor: Catálogo → Detalle → Solicitud → Confirmación.
4. Prueba el flujo del productor: Login como productor → Panel → Publicar producto.
5. Reduce la ventana a 500 px de ancho para revisar la versión móvil.

No requiere servidor ni instalación. Es una maqueta estática: la navegación y las interacciones básicas funcionan en el navegador, pero no hay backend ni pagos reales.

## Estructura

```
web/
├── index.html                 Inicio
├── login.html                 Ingreso
├── registro.html              Creación de cuenta
├── catalogo.html              Catálogo y búsqueda
├── detalle.html               Detalle del producto
├── solicitud.html             Solicitud de compra
├── exito.html                 Confirmación
├── panel.html                 Panel del productor (resumen, productos, solicitudes, reportes)
├── publicar.html              Publicación de producto
├── ui-kit.html                Guía de estilos y componentes
├── wireframes.html            Wireframes de baja fidelidad
├── mapa-navegacion.html       Arquitectura de información
├── user-flow.html             Flujos del consumidor y del productor
├── journey.html               Customer Journey Map
├── pruebas.html               Plan y resultados de usabilidad
├── trello.html                Tablero Kanban de la fase
├── entregables.html           Índice de entregables
└── assets/
    ├── styles.css             Sistema de diseño y responsive
    └── app.js                 Navegación, filtros, carrito y validaciones de demostración
```

## Rutas y pantallas

| Pantalla | Archivo | Requisito principal |
|---|---|---|
| Inicio | `index.html` | Propuesta de valor y acceso al catálogo |
| Login | `login.html` | RF-02 / US-02 |
| Registro | `registro.html` | RF-01 / US-01 |
| Catálogo | `catalogo.html` | RF-06, RF-07 / US-06, US-07 |
| Detalle | `detalle.html` | RF-08 / US-08 |
| Solicitud | `solicitud.html` | RF-09 / US-09 |
| Confirmación | `exito.html` | RF-09, RF-10 / US-09 |
| Panel | `panel.html` | RF-03, RF-05, RF-10, RF-11, RF-13 / US-03, US-05, US-10 |
| Publicar | `publicar.html` | RF-04 / US-04 |

## Sistema de diseño

- **Colores:** verde `#2E7D32`, verde oscuro `#1B5E20`, verde claro `#E2EFDA`, naranja acción `#A9470A`, fondo `#F4F8F4`.
- **Tipografía:** Segoe UI, con respaldo en Inter, system-ui y Arial.
- **Espaciado base 4:** 4, 8, 12, 16, 20, 24, 32, 40 px.
- **Radios:** 6, 8, 10, 14, 18 y pill.
- **Botones:** altura mínima de 44 px y foco visible de 3 px.
- **Contraste:** texto normal ≥ 4,5:1; se ajustó el naranja de acción para cumplir AA con texto blanco.

La guía completa está en `ui-kit.html`.

## Interacciones incluidas

- Menú móvil accesible con `aria-expanded`.
- Búsqueda y filtros por categoría en el catálogo.
- Ordenamiento por nombre y precio.
- Selector de cantidad en el detalle.
- Carrito de demostración con `localStorage`.
- Cálculo de subtotal, flete y total según la forma de entrega.
- Validación de formularios de login, registro, solicitud y publicación.
- Pestañas del panel: resumen, productos, solicitudes y reportes.
- Aceptar/rechazar solicitudes y eliminar productos (demostración).

## Accesibilidad

- Un solo `h1` por pantalla y jerarquía de encabezados.
- Etiquetas visibles en todos los campos.
- Mensajes de error en texto, no solo color.
- Foco visible y objetivos táctiles de 44 px.
- `aria-live` en resultados de búsqueda y resumen.
- Respeto por `prefers-reduced-motion`.
- Diseño responsive con puntos de quiebre en 980, 760 y 560 px.

## Créditos

Proyecto AgriMarket · Antonio José Barrios Reyes y Cristian Santiago Hernández García.
Docente: Tatiana Lizbeth Cabrera Vargas.
Corporación Universitaria Iberoamericana · Ingeniería de Software · 2026.
