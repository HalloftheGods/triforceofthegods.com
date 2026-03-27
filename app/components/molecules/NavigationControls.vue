<template>
  <BaseContainer customClass="flex flex-row items-center pointer-events-auto">
    <BaseButton
      @click="$emit('prev')"
      :disabled="isFirst"
      customClass="p-4 transition-transform hover:scale-110 active:scale-95 disabled:opacity-30 disabled:hover:scale-100"
    >
      <svg
        viewBox="0 0 24 24"
        class="w-10 h-10 sm:w-12 sm:h-12 drop-shadow-[0_0_8px_rgba(var(--gold-rgb),0.5)]"
      >
        <polygon
          points="16,4 16,20 6,12"
          fill="var(--gold)"
        />
      </svg>
    </BaseButton>
    <slot />
    <BaseButton
      @click="$emit('next')"
      :disabled="isLast"
      customClass="p-4 transition-transform hover:scale-110 active:scale-95 disabled:opacity-30 disabled:hover:scale-100"
    >
      <svg
        viewBox="0 0 24 24"
        class="w-10 h-10 sm:w-12 sm:h-12 drop-shadow-[0_0_8px_rgba(var(--gold-rgb),0.5)]"
      >
        <polygon
          points="8,4 8,20 18,12"
          fill="var(--gold)"
        />
      </svg>
    </BaseButton>
  </BaseContainer>
</template>

<script setup lang="ts">
import BaseButton from '../atoms/BaseButton.vue';
import BaseContainer from '../atoms/BaseContainer.vue';

defineProps<{
  isFirst: boolean;
  isLast: boolean;
}>();

defineEmits(['prev', 'next']);
</script>
