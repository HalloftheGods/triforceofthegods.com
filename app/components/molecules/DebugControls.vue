<template>
  <BaseContainer 
    noRelative
    customClass="absolute right-12 bottom-8 flex flex-row gap-[10px] pointer-events-auto"
  >
    <BaseButton
      v-for="btn in buttons"
      :key="btn.id"
      class="w-10 h-10 rounded-full border border-text-muted bg-bg/60 text-text-muted font-bold transition-all"
      :customClass="btn.active ? 'text-gold border-gold shadow-[0_0_10px_rgba(var(--gold-rgb),0.3)]' : ''"
      @click="$emit('toggle', btn.id)"
    >
      {{ btn.label }}
    </BaseButton>
  </BaseContainer>
</template>

<script setup lang="ts">
import BaseButton from '../atoms/BaseButton.vue';
import BaseContainer from '../atoms/BaseContainer.vue';

defineProps<{
  buttons: { id: string; label: string; active: boolean }[];
}>();

defineEmits(['toggle']);
</script>
