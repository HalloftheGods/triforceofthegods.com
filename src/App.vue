<template>
  <div
    id="canvas-container"
    class="absolute top-0 left-0 w-full h-full z-1 cursor-grab active:cursor-grabbing"
  ></div>
  <div
    id="ui-layer"
    class="relative z-10 w-full h-full pointer-events-none"
  >
    <CodexView />
  </div>
</template>

<script setup lang="ts">
import CodexView from './components/views/CodexView.vue';
</script>

<style>
  #ui-layer>* {
    pointer-events: none;
  }

  #ui-layer button,
  #ui-layer .pointer-events-auto {
    pointer-events: auto;
  }
</style>
