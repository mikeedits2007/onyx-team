# ONYX CODE — Versión HTML + CSS + JavaScript

Versión simple y fácil de modificar del sitio del equipo de programación.

## Cómo usarla

1. Abre el archivo `index.html` directamente en tu navegador  
   **o**
2. Usa un servidor local (recomendado):
   ```bash
   # Con Python
   python -m http.server 8000

   # Con VS Code: extensión Live Server
   ```

## Estructura de archivos

```
onyx-html/
├── index.html          ← HTML principal
├── css/
│   └── styles.css      ← Todos los estilos
├── js/
│   └── main.js         ← Animaciones y lógica
└── README.md
```

## Qué puedes modificar fácilmente

| Qué quieres cambiar          | Archivo          | Dónde                          |
|-----------------------------|------------------|--------------------------------|
| Frase del hero              | `js/main.js`     | Variable `phrase`              |
| Nombre del equipo / logo    | `index.html`     | Busca "ONYX"                   |
| Miembros del equipo         | `index.html`     | Sección `#team`                |
| Habilidades del carrusel    | `js/main.js`     | Array `skills`                 |
| Colores                     | `css/styles.css` | Variables en `:root`           |
| Textos de secciones         | `index.html`     | Directamente en el HTML        |

## Características

- Diseño profesional en negro / gris / blanco
- Fuente **Splash** (animada letra por letra)
- Carrusel automático de habilidades
- Menú responsive
- Sin dependencias ni build
