import * as THREE from 'three';

export interface ThreeState {
  scale: number;
  targetScale: number;
  rotationSpeed: number;
  targetRotationSpeed: number;
  tesseractIntensity: number;
  targetTesseractIntensity: number;
  opacity: number;
  targetOpacity: number;
  pointOpacity: number;
  targetPointOpacity: number;
  flatten: number;
  targetFlatten: number;
  triforceMode: number;
  targetTriforceMode: number;
  quantumSolve: number;
  targetQuantumSolve: number;
  targetFractalLevel: number;
  scaleLerpSpeed: number;
  drawProgress: number;
  targetDrawProgress: number;
  drawSpeed: number;
  color: THREE.Color;
  targetColor: THREE.Color;
  spinX: boolean;
  spinY: boolean;
  spinZ: boolean;
}
