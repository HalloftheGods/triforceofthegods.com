# Narrative Slides & View States

This document serves as the master progression roadmap for the Triforce Codex narrative visualization. It maps each UI "Card" step to its precise geometric 3D state and the narrative context.

## Slide 1: The Genesis Triangle
**Purpose:** Establish the foundation of the geometric evolution and the core counting logic. This slide grounds the user by showing the initial root of the "growth of the numbers" before diving into complex fractal math.

**View of the Object (Three.js State):**
- **Geometry:** A flat, 2D Triangle (Level 0/1 Triforce).
- **Camera/Positioning:** Centered, facing the camera directly straight-on to emphasize the 2D nature plane.
- **Animation Goal (Ideal state):** A progressive "draw-in" effect where the lines render sequentially, as if being hand-drawn onto the screen.
- **Current Implementation (Fallback):** Instantly rendered static 2D triangle.

---

## Slide 2: The Woven Fabric of the Universe
**Purpose:** Expand the foundational triangle to reveal the recursive, fractal nature of the pattern. Narratively, this explains how this geometry serves as the structural "woven fabric" underlying the universe.

**View of the Object (Three.js State):**
- **Geometry:** Still a 2D object, but displaying its complex fractal pattern (Sierpinski levels).
- **Camera/Positioning:** Maintaining the same straight-on 2D camera lock so the user can easily observe the recursive grid and pattern repetitions without 3D depth distractions.
- **Animation Goal:** Transitioning smoothly from the Genesis triangle into the fully iterated 2D fractal grid.

---

## Slide 3: The First Word of Form
**Purpose:** Narratively, this explains the emergence of the tetrahedron as the simplest physical geometry (the "breath of volume"). It visualizes the transition from flat conceptual math into a solid, stable 3D construct.

**View of the Object (Three.js State):**
- **Geometry:** A simplified, pure 3D Tetrahedron (Fractal Level 0) allowing the user to focus strictly on the clean solid shape without branching distraction.
- **Camera/Positioning:** Morphing out of the 2D plane, the object dynamically tilts backward (~19.47 degrees) and shifts backward to center itself perfectly upright on its flat base. It then steadily spins counter-clockwise along its true Y-axis symmetry pole.
- **Animation Goal:** Resolving the flat forced-2D layout logically into an upright three-dimensional counterpart, eliminating eccentric pendulum wobbling to emphasize its structural "perfection".

---
