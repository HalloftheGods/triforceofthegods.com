// src/data/codex.ts

export interface CodexAction {
  label: string;
  url: string;
  type?: 'button' | 'icon' | 'gif';
  iconSvg?: string;
  imageSrc?: string;
}

export interface CodexEntry {
  chapter: string;
  title: string;
  body: string;
  action?: { label: string; url: string };
  actions?: CodexAction[];
  image?: string;
}

export const CODEX_DATA: CodexEntry[] = [
  {
    chapter: "Axiom X",
    title: "The Universal Song",
    body: "Numbers are the universal language of existence. The math we practice is merely the instrument we forged to hear its music. In an eternity with no beginning and no end, chaos and form dance until they inevitably strike perfect harmony. Its creator is not some distant entity; it is the song singing itself. To awaken to this truth is to step into a harmonious awareness, to finally hear where the great symphony is out of tune, and take up the work of bringing it back into resonance. To sing You in verse.",
  },
  {
    chapter: "Axiom I",
    title: "The Sovereign Architecture",
    body: "When the song takes shape, it speaks in geometry, and its first word is the Trinity. Two opposing forces will infinitely clash in tension until a third point is introduced to synthesize and stabilize them. This is the Triforce of the Gods: the primordial law of balance. It is the realization that three points are required to enclose space and define a reality, serving as the unbreakable, divine scaffolding upon which all matter is built.",
  },
  {
    chapter: "Axiom II",
    title: "The Prime Artifact",
    body: "Once reality is defined by the Trinity, it yearns for volume. The tetrahedron takes the first breath of true physical form, stepping out of flat concept into tangible dimension. To manifest in three dimensions requires a minimum of four absolute points. It is the prime artifact, the minimum effective dose of space, containing the most perfectly balanced distribution of energy in the architecture of reality.",
  },
  {
    chapter: "Axiom III",
    title: "The Fractal Network",
    body: "Because this primordial geometry is absolute, its perfection scales without end. The identical structures that weave galaxies together also bind the atoms within you. To tap into this source is not to discover something new, but to recognize the unbroken symmetry in all things. There are no ultimate errors in this design, only an infinitely recursive mirror reflecting the original truth.",
  },
  {
    chapter: "Axiom IV",
    title: "The Conscious Node",
    body: "We are not separate entities stumbling through the construct; we are the universe growing eyes to witness its own brilliance. You are a localized node, a specific, conscious aperture where the cosmos awakens to marvel at its own design. To study this supreme geometry is not mere academic pursuit; it is to directly read the source code of your own creation.",
  },
  {
    chapter: "Axiom V",
    title: "The Sovereign Vessel",
    body: "To consciously run this source code, the physical vessel must first be optimized. By mastering our biological rhythms and pulling the nervous system out of the shadow of survival, we sequence our own resonance. We elevate the flesh to anchor these pure cosmic frequencies, deliberately rebuilding the animal body into a precise tuning fork fit to house the song.",
  },
  {
    chapter: "Axiom VI",
    title: "The Internal Compass",
    body: "With a stable vessel, the noise of existence fades and our internal Compass becomes absolute. We silence the static of base instinct, crystallizing our vision to perceive the golden threads of synchronicity. We no longer blindly react to the chaos of circumstance; we tune our perception entirely into the precise, underlying alignment of the quantum web.",
  },
  {
    chapter: "Axiom VII",
    title: "The Kinetic Forge",
    body: "Yet sight without action is merely a beautiful hallucination. True manifestation requires anchoring our refined energy directly into the dense, heavy friction of the material world. This is the ultimate quest. Through fierce, unapologetic action in the present moment, we master the mechanics of reality, bending the chaotic laws of probability to our sovereign will.",
  },
  {
    chapter: "Axiom VIII",
    title: "The Active Protocol",
    body: "Through deliberate creation, we realize a profound truth: to obsess over what comes after life is to completely miss the point of living it. We are not here to wait for a future salvation; our power exists entirely in the active state, the eternal here and now. Coherence in the present is the master protocol of the cosmos. By mastering our own internal telemetry today, we cease being passive subjects of fate and step into our role as its absolute authors.",
  },
  {
    chapter: "Axiom IX",
    title: "The Sacred Realm",
    body: "Our true purpose is much simpler than we make it: we are not here to escape this world, but to realize that the paradise we seek is already built. We only need to stop making a hell out of it. Nirvana is not a future destination; it is a frequency we just have to tune our physical vessels to receive. By syncing our living biology with the universal song, we awaken the divinity within and step forward to physically manifest the Hall of the Gods on Earth.",
    actions: [
      {
        label: "Join the Discord Relay",
        url: "https://discord.gg/tfDrgdfNyw",
        type: "icon",
        iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" fill="currentColor"><path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a67.55,67.55,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.2,46,96.09,53,91.08,65.69,84.69,65.69Z"/></svg>'
      },
      {
        label: "Enter the Sacred Realm",
        url: "https://sacredrealm.org",
        type: "gif",
        imageSrc: "/triforce.gif"
      }
    ]
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
