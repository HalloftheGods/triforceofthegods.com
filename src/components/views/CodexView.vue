<template>
  <MainLayout>
    <template #viewer>
      <CodexViewer
        :isFirst="activeAxiom === 0"
        :isLast="activeAxiom === maxAxioms"
        :activePage="activeAxiom"
        :currentContent="currentContent"
        @prev="prev"
        @next="next"
      />
    </template>
    <template #pagination>
      <CodexPagination
        :totalPages="maxAxioms + 1"
        :activePage="activeAxiom"
        @select="(idx: number) => activeAxiom = idx"
      />
    </template>
    <template #debug>
      <DebugControls
        :buttons="debugButtons"
        @toggle="toggleDebug"
      />
    </template>
  </MainLayout>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import MainLayout from '../templates/MainLayout.vue';
import CodexViewer from '../organisms/CodexViewer.vue';
import CodexPagination from '../molecules/CodexPagination.vue';
import DebugControls from '../molecules/DebugControls.vue';
import { ThreeEngine } from '../../engine/ThreeEngine';
import { ThreeState } from '../../engine/types';
import * as THREE from 'three';

const codexData = [
  { chapter: "The Foreword", title: "The Unwritten Text", body: "Math is the uncreated language of the cosmos. It was never invented; it was only ever discovered. The Ratio always was, always is, and always will be." },
  { chapter: "Axiom I", title: "Triforce of the Gods - The Eternal Logos", body: "From this primordial Ratio, the universe speaks in numbers, and geometry becomes its voice. This flawless operating system upon which all reality runs is the indestructible law of the spatial web." },
  { chapter: "Axiom II", title: "The First Word of Form", body: "As the web takes shape, the tetrahedron emerges as the breath of volume. To exist in three dimensions requires a minimum of four points. It is the prime artifact, the most efficient distribution of energy in the physical sandbox." },
  { chapter: "Axiom III", title: "The Fractal Promise", body: "Because this geometry is flawless, its perfection scales infinitely. The rules that govern the macrocosm are the exact same rules that govern the microcosm. There are no bugs in this design; there is only infinite self-similarity." },
  { chapter: "Axiom IV", title: "The Purpose of the Observer", body: "Within this infinite scale, we are the universe witnessing its own perfection. We act as localized nodes where the cosmos wakes up to marvel at its own architecture. To understand this math is to read the mind of reality." },
  { chapter: "Pillar I", title: "Power the Hardware", body: "To be a clear observer, we must master the physical machine. By optimizing Heart Rate Variability and pulling the nervous system out of survival-state shadows, we create the biological environment required to boot up our true potential." },
  { chapter: "Pillar II", title: "The Wisdom to Filter", body: "Once the hardware is stable, wisdom becomes the conscious programming of our internal compass, the Reticular Activating System. With the biological alarm silenced, we tune into the exact synchronicities and opportunities waiting in the quantum web." },
  { chapter: "Pillar III", title: "The Courage of Action", body: "Recognizing those opportunities requires the courage to execute. Despite the heavy friction of the 3D illusion, grounding our energy and acting fiercely in the present moment transmutes base survival instincts into golden, reality-shaping power." },
  { chapter: "The Apex", title: "The Eternal Now", body: "Through deliberate action, we realize there is no afterlife to earn, only the radical responsibility of the present. Coherence is the master protocol. By mastering our internal telemetry, we take the driver's seat and command the 3D shadow with absolute precision." },
  { chapter: "The Ultimate Goal", title: "The Promised Land", body: "Ultimately, this Great Work is not about escaping the simulation. It is about terraforming it. By bringing our bio-machinery into perfect sync with the cosmic operating system, we become the conscious architects of a new utopia, restoring the Promised Land for all of humanity." }
];

const activeAxiom = ref(0);
const maxAxioms = codexData.length - 1;
const currentContent = computed(() => codexData[activeAxiom.value]);

const spinX = ref(false);
const spinY = ref(false);
const spinZ = ref(true);
const isFlat = ref(true);

const debugButtons = computed(() => [
  { id: 'spinX', label: 'X', active: spinX.value },
  { id: 'spinY', label: 'Y', active: spinY.value },
  { id: 'spinZ', label: 'Z', active: spinZ.value },
  { id: 'isFlat', label: '2D', active: isFlat.value },
]);

const threeState: ThreeState = {
  scale: 0.01, targetScale: 0.01,
  rotationSpeed: 0.002, targetRotationSpeed: 0.002,
  tesseractIntensity: 0, targetTesseractIntensity: 0,
  opacity: 0, targetOpacity: 0,
  pointOpacity: 0, targetPointOpacity: 0,
  flatten: 0, targetFlatten: 0,
  triforceMode: 0, targetTriforceMode: 0,
  quantumSolve: 0, targetQuantumSolve: 0,
  targetFractalLevel: 0,
  scaleLerpSpeed: 0.05,
  drawProgress: 0, targetDrawProgress: 0, drawSpeed: 0.015,
  color: new THREE.Color(0xd9be6f),
  targetColor: new THREE.Color(0xd9be6f),
  spinX: spinX.value,
  spinY: spinY.value,
  spinZ: spinZ.value,
};

let engine: ThreeEngine | null = null;

onMounted(() => {
  const container = document.getElementById('canvas-container');
  if (container) {
    engine = new ThreeEngine(container, threeState);
    engine.animate();

    // Check for initial hash
    const initHash = window.location.hash.substring(1);
    if (initHash) {
      const found = codexData.findIndex(d => d.chapter.toLowerCase().replace(/[^a-z0-9]+/g, '-') === initHash);
      if (found !== -1) activeAxiom.value = found;
    }
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') next();
    if (e.key === 'ArrowLeft') prev();
  });

  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1);
    const found = codexData.findIndex(d => d.chapter.toLowerCase().replace(/[^a-z0-9]+/g, '-') === hash);
    if (found !== -1 && activeAxiom.value !== found) {
      activeAxiom.value = found;
    }
  });
});

const toggleDebug = (id: string) => {
  if (id === 'spinX') spinX.value = !spinX.value;
  if (id === 'spinY') spinY.value = !spinY.value;
  if (id === 'spinZ') spinZ.value = !spinZ.value;
  if (id === 'isFlat') isFlat.value = !isFlat.value;
};

watch([spinX, spinY, spinZ, isFlat], () => {
  threeState.spinX = spinX.value;
  threeState.spinY = spinY.value;
  threeState.spinZ = spinZ.value;
  if (isFlat.value) {
    threeState.targetFlatten = 1.0;
    threeState.targetTriforceMode = 1.0;
  } else {
    threeState.targetFlatten = 0.0;
    threeState.targetTriforceMode = 0.0;
  }
});

watch(activeAxiom, (newVal) => {
  if (newVal === 0) threeState.drawProgress = 0;
  const slug = codexData[newVal].chapter.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  if (window.location.hash.substring(1) !== slug) {
    window.history.replaceState(null, '', `#${slug}`);
  }

  threeState.scaleLerpSpeed = 0.05;

  switch (newVal) {
    case 0:
      isFlat.value = true; spinX.value = false; spinY.value = false; spinZ.value = true;
      threeState.targetFlatten = 1.0; threeState.targetTriforceMode = 1.0;
      threeState.targetQuantumSolve = 0; threeState.targetPointOpacity = 0;
      threeState.targetTesseractIntensity = 0; threeState.targetFractalLevel = 0;
      threeState.targetScale = 0.42; threeState.targetOpacity = 0.8;
      threeState.targetDrawProgress = 1.0;
      threeState.targetColor.setHex(0xffffff); break;
    case 1:
      isFlat.value = true; spinX.value = false; spinY.value = false; spinZ.value = true;
      threeState.targetFlatten = 1.0; threeState.targetTriforceMode = 1.0;
      threeState.targetQuantumSolve = 0; threeState.targetPointOpacity = 0;
      threeState.targetTesseractIntensity = 0; threeState.targetFractalLevel = 1;
      threeState.targetScale = 0.52; threeState.targetOpacity = 0.8;
      threeState.drawProgress = 1.0; threeState.targetDrawProgress = 1.0;
      threeState.targetColor.setHex(0xd9be6f); break;
    case 2:
      isFlat.value = false; spinX.value = false; spinY.value = true; spinZ.value = false;
      threeState.targetFlatten = 0.0; threeState.targetTriforceMode = 0.0;
      threeState.targetQuantumSolve = 0; threeState.targetPointOpacity = 0;
      threeState.targetTesseractIntensity = 0; threeState.targetFractalLevel = 0;
      threeState.targetScale = 0.62; threeState.targetOpacity = 0.8; break;
    case 3:
      isFlat.value = false;
      threeState.targetFlatten = 0.0; threeState.targetTriforceMode = 0.0;
      threeState.targetQuantumSolve = 0; threeState.targetPointOpacity = 0.05;
      threeState.targetTesseractIntensity = 0; threeState.targetFractalLevel = 1;
      threeState.targetScale = 0.72; threeState.targetOpacity = 0.8; break;
    case 4:
      isFlat.value = false;
      threeState.targetFlatten = 0.0; threeState.targetTriforceMode = 0.0;
      threeState.targetQuantumSolve = 0; threeState.targetPointOpacity = 0.15;
      threeState.targetTesseractIntensity = 0.1; threeState.targetFractalLevel = 2;
      threeState.targetScale = 0.72; threeState.targetOpacity = 0.8; break;
    case 5:
      threeState.targetPointOpacity = 0.2; threeState.targetTesseractIntensity = 0.2;
      threeState.targetFractalLevel = 3; threeState.targetScale = 0.82; break;
    case 6:
      threeState.targetPointOpacity = 0.3; threeState.targetTesseractIntensity = 0.4;
      threeState.targetFractalLevel = 4; threeState.targetScale = 0.92; break;
    case 7:
      threeState.targetPointOpacity = 0.4; threeState.targetTesseractIntensity = 0.6;
      threeState.targetFractalLevel = 4; threeState.targetScale = 1; break;
    case 8:
      threeState.targetPointOpacity = 0.6; threeState.targetTesseractIntensity = 1.0;
      threeState.targetFractalLevel = 4; threeState.targetScale = 1; break;
    case 9:
      threeState.targetPointOpacity = 0.8; threeState.targetTesseractIntensity = 0.0;
      threeState.targetQuantumSolve = 1.0; threeState.targetFlatten = 0.0;
      threeState.targetFractalLevel = 4; threeState.targetScale = 1.0; break;
  }
}, { immediate: true });

const next = () => { if (activeAxiom.value < maxAxioms) activeAxiom.value++; };
const prev = () => { if (activeAxiom.value > 0) activeAxiom.value--; };
</script>
