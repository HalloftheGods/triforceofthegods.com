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
    <NuxtPage />
    <div class="absolute bottom-2 left-0 w-full px-2 sm:px-4 flex flex-col sm:flex-row justify-between items-center sm:items-end text-[9px] sm:text-xs text-white/50 font-mono z-50 pointer-events-none opacity-60 sm:opacity-100 mb-1 sm:mb-0">
      <div class="hidden sm:block flex-1 text-left lowercase">
        v{{ version }}
      </div>
      <div class="flex-1 text-center mb-1 sm:mb-0">
        <span class="sm:hidden">v{{ version }} |</span> © 2006-2026 <a href="https://hallofthegods.com/" target="_blank" class="text-gold hover:text-white transition-colors pointer-events-auto">Hall of the Gods, Inc.</a>
      </div>
      <div class="hidden sm:block flex-1 text-right">
        [w⁴(YouMeOS)]<sup>G</sup> = X
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { version } from '../package.json';
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
