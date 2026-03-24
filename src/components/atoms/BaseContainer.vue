<template>
  <div
    :class="[noRelative ? '' : 'relative', customClass]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  customClass?: string;
  noRelative?: boolean;
}>();
</script>
