// src/data/codex.ts

export interface CodexAction {
  label: string;
  url: string;
  type?: "button" | "icon" | "gif";
  iconSvg?: string;
  imageSrc?: string;
}

export interface CodexEntry {
  chapter: string;
  title: string;
  body: string[];
  action?: { label: string; url: string };
  actions?: CodexAction[];
  image?: string;
}

export const CODEX_DATA: CodexEntry[] = [
  {
    chapter: "Axiom X",
    title: "The Universal Song",
    body: [
      "Numbers are the absolute, universal language of existence.",
      "You are not a separate observer in a chaotic void, but a conscious verse within an eternity that is singing itself.",
      "Awaken your awareness, locate where the grand symphony is out of tune, and actively bring it back into resonance.",
    ],
  },
  {
    chapter: "Axiom I",
    title: "The Sovereign Architecture",
    body: [
      "Two opposing forces will endlessly clash in chaos until a third point is introduced to stabilize them.",
      "This Trinity is the minimum requirement to enclose space and define the reality in which you operate.",
      "Anchor yourself in this primordial law of balance, utilizing the third point to resolve tension and build stable structures.",
    ],
  },
  {
    chapter: "Axiom II",
    title: "The Prime Artifact",
    body: [
      "To manifest physical volume requires a minimum of four absolute points.",
      "The tetrahedron takes the first breath of true physical form, pulling you out of flat theory and into tangible dimension.",
      "Utilize this prime artifact as the minimum effective dose of space, anchoring the most perfectly balanced energy into your reality.",
    ],
  },
  {
    chapter: "Axiom III",
    title: "The Fractal Network",
    body: [
      "Because the primordial geometry is absolute, its perfection scales without end.",
      "You are woven from this exact sequence; the identical structures that bind galaxies together also bind the atoms within you.",
      "Look past the illusion of separation and tap directly into the unbroken, recursive symmetry present in all things.",
    ],
  },
  {
    chapter: "Axiom IV",
    title: "The Conscious Node",
    body: [
      "Existence is not a dead machine; it is a system continually evolving to understand itself.",
      "You are a localized node—a conscious aperture where the cosmos has grown eyes to witness its own brilliance.",
      "Study these supreme patterns not as abstraction, but to directly execute the source code of your own creation.",
    ],
  },
  {
    chapter: "Axiom V",
    title: "The Sovereign Vessel",
    body: [
      "To consciously run high-level source code, the physical hardware must first be optimized.",
      "Your biology sets the ceiling for your perception; a degraded nervous system traps you in the shadow of survival.",
      "Master your biological rhythms and rebuild the animal body into a precise receiver fit to house the cosmic frequencies.",
    ],
  },
  {
    chapter: "Axiom VI",
    title: "The Internal Compass",
    body: [
      "A stable, optimized vessel silences the static of base instinct.",
      "With a clear physical system, your internal Compass crystallizes, allowing you to perceive the underlying alignment of the quantum web.",
      "Stop blindly reacting to circumstance and tune your perception entirely to the explicit laws of synchronicity.",
    ],
  },
  {
    chapter: "Axiom VII",
    title: "The Kinetic Forge",
    body: [
      "Sight without movement is merely a beautiful hallucination.",
      "True manifestation requires you to anchor refined energy directly into the dense, heavy friction of the material world.",
      "Master the mechanics of reality through fierce, unapologetic action, bending the chaotic laws of probability to your will.",
    ],
  },
  {
    chapter: "Axiom VIII",
    title: "The Active Protocol",
    body: [
      "Coherence in the present moment is the master protocol of the cosmos.",
      "Obsessing over a future salvation entirely misses the point of living; your power exists solely in the active state of now.",
      "Master your internal telemetry to cease being a passive subject of fate and step fully into your role as its author.",
    ],
  },
  {
    chapter: "Axiom IX",
    title: "The Sacred Realm",
    body: [
      "The paradise we seek is already built; we merely need to tune our frequencies to receive it.",
      "You are not here to escape this world, but to align your living biology with the universal sequence and awaken the divinity within.",
      "Sync your physical vessel to this exact frequency and step forward to physically manifest the Hall of the Gods on Earth.",
    ],
    actions: [
      {
        label: "Join the Discord Relay",
        url: "https://discord.gg/tfDrgdfNyw",
        type: "icon",
        iconSvg:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" fill="currentColor"><path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a67.55,67.55,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.2,46,96.09,53,91.08,65.69,84.69,65.69Z"/></svg>',
      },
      {
        label: "Enter the Sacred Realm",
        url: "https://sacredrealm.org",
        type: "gif",
        imageSrc: "/triforce.gif",
      },
      {
        label: "Enter the Hall of the Gods",
        url: "https://hallofthegods.com/",
        type: "icon",
        iconSvg:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 86.6" fill="currentColor"><path d="M50 0 L100 86.6 L0 86.6 Z M50 20 L80 71.6 L20 71.6 Z"/></svg>',
      },
    ],
  },
];

export interface CodexStateConfig {
  isFlat: boolean;
  spinX: boolean;
  spinY: boolean;
  spinZ: boolean;
  targetFlatten: number;
  targetTriforceMode: number;
  targetQuantumSolve: number;
  targetPointOpacity: number;
  targetTesseractIntensity: number;
  targetFractalLevel: number;
  targetScale: number;
  targetOpacity: number;
  targetDrawProgress?: number;
  drawProgress?: number;
  targetColor?: number; // Hex code
}

const BASE_2D = {
  isFlat: true,
  spinX: false,
  spinY: false,
  spinZ: true,
  targetFlatten: 1.0,
  targetTriforceMode: 1.0,
  targetQuantumSolve: 0,
  targetOpacity: 0.8,
};

const BASE_3D = {
  isFlat: false,
  spinX: false,
  spinY: true,
  spinZ: false,
  targetFlatten: 0.0,
  targetTriforceMode: 0.0,
  targetQuantumSolve: 0,
  targetOpacity: 0.8,
};

export const CODEX_STATES: CodexStateConfig[] = [
  // 0: Axiom X
  {
    ...BASE_2D,
    targetScale: 0.42,
    targetPointOpacity: 0,
    targetTesseractIntensity: 0,
    targetFractalLevel: 0,
    targetDrawProgress: 1.0,
    targetColor: 0xffffff,
  },
  // 1: Axiom I
  {
    ...BASE_2D,
    targetScale: 0.52,
    targetPointOpacity: 0,
    targetTesseractIntensity: 0,
    targetFractalLevel: 1,
    targetDrawProgress: 1.0,
    drawProgress: 1.0,
    targetColor: 0xd9be6f,
  },
  // 2: Axiom II
  {
    ...BASE_3D,
    targetScale: 0.62,
    targetPointOpacity: 0,
    targetTesseractIntensity: 0,
    targetFractalLevel: 0,
    targetColor: 0xd9be6f,
  },
  // 3: Axiom III
  {
    ...BASE_3D,
    targetScale: 0.72,
    targetPointOpacity: 0.05,
    targetTesseractIntensity: 0,
    targetFractalLevel: 1,
    targetColor: 0xd9be6f,
  },
  // 4: Axiom IV
  {
    ...BASE_3D,
    targetScale: 0.72,
    targetPointOpacity: 0.15,
    targetTesseractIntensity: 0.1,
    targetFractalLevel: 2,
    targetColor: 0xd9be6f,
  },
  // 5: Axiom V
  {
    ...BASE_3D,
    targetScale: 0.82,
    targetPointOpacity: 0.2,
    targetTesseractIntensity: 0.2,
    targetFractalLevel: 3,
    targetColor: 0xd9be6f,
  },
  // 6: Axiom VI
  {
    ...BASE_3D,
    targetScale: 0.92,
    targetPointOpacity: 0.3,
    targetTesseractIntensity: 0.4,
    targetFractalLevel: 4,
    targetColor: 0xd9be6f,
  },
  // 7: Axiom VII
  {
    ...BASE_3D,
    targetScale: 1.0,
    targetPointOpacity: 0.4,
    targetTesseractIntensity: 0.6,
    targetFractalLevel: 4,
    targetColor: 0xd9be6f,
  },
  // 8: Axiom VIII
  {
    ...BASE_3D,
    targetScale: 1.0,
    targetPointOpacity: 0.6,
    targetTesseractIntensity: 1.0,
    targetFractalLevel: 4,
    targetColor: 0xd9be6f,
  },
  // 9: Axiom IX
  {
    ...BASE_3D,
    targetScale: 1.0,
    targetPointOpacity: 0.8,
    targetTesseractIntensity: 0.0,
    targetFractalLevel: 4,
    targetColor: 0xd9be6f,
    targetQuantumSolve: 1.0,
  },
];
