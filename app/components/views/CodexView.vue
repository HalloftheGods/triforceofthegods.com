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
import type { ThreeState } from '../../engine/types';
import * as THREE from 'three';
import { CODEX_DATA, CODEX_STATES } from '../../data/codex';

const activeAxiom = ref(0);
const maxAxioms = CODEX_DATA.length - 1;
const currentContent = computed(() => CODEX_DATA[activeAxiom.value]!);

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
      const found = CODEX_DATA.findIndex(d => d.chapter.toLowerCase().replace(/[^a-z0-9]+/g, '-') === initHash);
      if (found !== -1) activeAxiom.value = found;
    }
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') next();
    if (e.key === 'ArrowLeft') prev();
  });

  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1);
    const found = CODEX_DATA.findIndex(d => d.chapter.toLowerCase().replace(/[^a-z0-9]+/g, '-') === hash);
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
  const slug = CODEX_DATA[newVal]!.chapter.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  if (typeof window !== 'undefined' && window.location.hash.substring(1) !== slug) {
    window.history.replaceState(null, '', `#${slug}`);
  }

  threeState.scaleLerpSpeed = 0.05;

  const config = CODEX_STATES[newVal]!;
  
  isFlat.value = config.isFlat;
  spinX.value = config.spinX;
  spinY.value = config.spinY;
  spinZ.value = config.spinZ;

  threeState.targetFlatten = config.targetFlatten;
  threeState.targetTriforceMode = config.targetTriforceMode;
  threeState.targetQuantumSolve = config.targetQuantumSolve;
  threeState.targetPointOpacity = config.targetPointOpacity;
  threeState.targetTesseractIntensity = config.targetTesseractIntensity;
  threeState.targetFractalLevel = config.targetFractalLevel;
  threeState.targetScale = config.targetScale;
  threeState.targetOpacity = config.targetOpacity;
  
  if (config.targetDrawProgress !== undefined) threeState.targetDrawProgress = config.targetDrawProgress;
  if (config.drawProgress !== undefined) threeState.drawProgress = config.drawProgress;
  if (config.targetColor !== undefined) threeState.targetColor.setHex(config.targetColor);
}, { immediate: true });

const next = () => { if (activeAxiom.value < maxAxioms) activeAxiom.value++; };
const prev = () => { if (activeAxiom.value > 0) activeAxiom.value--; };
</script>
