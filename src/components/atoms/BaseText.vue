<template>
  <component
    :is="tag || 'p'"
    class="m-0"
    :class="customClass"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
defineProps<{
  tag?: string;
  customClass?: string;
}>();
</script>
