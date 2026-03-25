<template>
  <BaseContainer customClass="flex gap-[15px] pointer-events-auto">
    <BaseButton
      v-for="n in totalPages"
      :key="n"
      class="p-[5px] text-[1.1rem] font-bold"
      :customClass="activePage === (n - 1) ? '!text-gold scale-120 drop-shadow-[0_0_15px_rgba(var(--gold-rgb),0.8)]' : 'text-text-muted hover:!text-gold hover:drop-shadow-[0_0_8px_rgba(var(--gold-rgb),0.5)]'"
      @click="$emit('select', n - 1)"
    >
      {{ n }}
    </BaseButton>
  </BaseContainer>
</template>

<script setup lang="ts">
import BaseButton from '../atoms/BaseButton.vue';
import BaseContainer from '../atoms/BaseContainer.vue';

defineProps<{
  totalPages: number;
  activePage: number;
}>();

defineEmits(['select']);
</script>
