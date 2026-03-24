# Technical Architecture | Triforce of the Gods

This project has been refactored from a monolithic `index.html` into a modern, component-driven architecture using **Vue 3**, **Vite**, **Tailwind CSS v4**, and **TypeScript**.

## Component Hierarchy (Atomic Design)

- **Atoms**: Basic UI primitives (`BaseButton`, `BaseText`, `BaseContainer`, `BaseHeading`). No raw HTML is used in higher-level components.
- **Molecules**: Combinations of atoms for specific UI units (`NavigationControls`, `CodexContent`, `CodexPagination`, `DebugControls`).
- **Organisms**: Complex functional units (`CodexViewer`).
- **Templates**: Layout structures (`MainLayout`).
- **Views**: High-level pages or application states (`CodexView`).

## Engine Layer

The **Three.js** logic is encapsulated within the `ThreeEngine` class (`src/engine/ThreeEngine.ts`), which manages the renderer, scene, and animation loop. The `FractalBuilder` (`src/engine/FractalBuilder.ts`) handles the recursive geometric calculations for the Sierpinski Tetrahedron.

## State Management

The application uses a reactive `ThreeState` object to synchronize the **Vue** UI with the **Three.js** engine, ensuring smooth transitions and real-time updates of the geometric visualizations.

## Deployment

Automated deployment is handled via **GitHub Actions** (`.github/workflows/deploy.yml`), which builds the project using `pnpm` and deploys the `dist` directory to GitHub Pages.

### Configuration
- **Custom Domain**: `triforceofthegods.com`
- **Build Tool**: Vite
- **Package Manager**: pnpm
