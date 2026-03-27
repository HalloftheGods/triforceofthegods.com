<template>
  <BaseContainer customClass="flex-1 max-w-[1100px] text-center px-4 sm:px-12 py-6 sm:py-8 bg-gradient-to-t from-bg/95 to-bg/0 backdrop-blur-[4px] mx-1 sm:mx-5">
    <BaseText
      tag="div"
      customClass="text-[0.8rem] text-white tracking-[0.3em] uppercase mb-2 opacity-80"
    >
      {{ content.chapter }}
    </BaseText>
    <BaseText
      tag="h1"
      :customClass="index % 2 === 0 
        ? 'text-[1.4rem] sm:text-[1.8rem] text-gold font-bold tracking-[0.08em] mt-0 mb-4 drop-shadow-[0_0_15px_rgba(var(--gold-rgb),0.4)] font-[\'Philosopher\']'
        : 'text-[1.4rem] sm:text-[1.8rem] text-gold font-bold tracking-[0.08em] mt-0 mb-4 drop-shadow-[0_0_15px_rgba(var(--gold-rgb),0.4)] font-[\'Jura\']'"
    >
      {{ content.title }}
    </BaseText>
    <BaseText
      tag="p"
      customClass="text-[0.95rem] sm:text-[1.05rem] leading-[1.6] text-text-main mb-0"
    >
      {{ content.body }}
    </BaseText>

    <div v-if="content.action" class="mt-8 flex justify-center pb-2">
      <a 
        :href="content.action.url" 
        target="_blank" 
        class="inline-block px-6 py-2 sm:px-10 sm:py-3 border border-gold/40 text-gold font-['Jura'] font-bold tracking-[0.1em] sm:tracking-[0.2em] text-[0.75rem] sm:text-sm uppercase transition-all duration-500 hover:bg-gold hover:text-bg hover:border-gold hover:drop-shadow-[0_0_20px_rgba(var(--gold-rgb),0.8)] hover:scale-[1.03] pointer-events-auto"
      >
        {{ content.action.label }}
      </a>
    </div>

    <div v-if="content.actions" class="mt-8 flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-10 pb-2">
      <template v-for="(action, idx) in content.actions" :key="idx">
        <a 
          :href="action.url" 
          target="_blank" 
          class="inline-flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-5 sm:py-2 border border-gold/40 text-gold font-['Jura'] font-bold tracking-[0.1em] sm:tracking-[0.15em] text-[0.65rem] sm:text-[0.75rem] uppercase transition-all duration-500 hover:bg-gold hover:text-bg hover:border-gold hover:drop-shadow-[0_0_20px_rgba(var(--gold-rgb),0.8)] hover:scale-[1.03] pointer-events-auto group"
        >
          <span 
            v-if="action.type === 'icon'" 
            class="w-5 h-5 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full transition-colors duration-500 group-hover:text-bg" 
            v-html="action.iconSvg"
          ></span>
          
          <img 
            v-if="action.type === 'gif' || action.type === 'image'" 
            :src="action.imageSrc" 
            :alt="action.label" 
            class="w-5 h-5 object-contain drop-shadow-[0_0_8px_rgba(var(--gold-rgb),0.5)] transition-all duration-500 group-hover:brightness-0" 
          />
          
          <span>{{ action.label }}</span>
        </a>
      </template>
    </div>

    <div v-if="content.image" class="mt-8 flex justify-center pb-2 pointer-events-none">
      <img :src="content.image" alt="Codex Element" class="h-16 w-16 opacity-90 drop-shadow-[0_0_15px_rgba(var(--gold-rgb),0.5)]" />
    </div>
  </BaseContainer>
</template>

<script setup lang="ts">
import BaseContainer from '../atoms/BaseContainer.vue';
import BaseText from '../atoms/BaseText.vue';

import type { CodexEntry } from '../../data/codex';

defineProps<{
  content: CodexEntry;
  index: number;
}>();
</script>
