<template>
  <button
    class="bg-transparent border-none text-text-main font-inherit cursor-pointer transition-all duration-300 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:not-disabled:text-gold"
    :class="customClass"
    @click="$emit('click')"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  disabled?: boolean;
  customClass?: string;
}>();
defineEmits(['click']);
</script>
