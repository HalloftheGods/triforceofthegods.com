<template>
  <BaseContainer customClass="flex flex-row items-center pointer-events-auto">
    <BaseButton
      @click="$emit('prev')"
      :disabled="isFirst"
      customClass="p-4"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <polygon
          points="16,6 16,18 8,12"
          fill="var(--gold)"
        />
      </svg>
    </BaseButton>
    <slot />
    <BaseButton
      @click="$emit('next')"
      :disabled="isLast"
      customClass="p-4"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <polygon
          points="8,6 8,18 16,12"
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
