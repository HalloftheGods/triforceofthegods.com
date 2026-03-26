<template>
  <BaseContainer customClass="flex flex-row justify-center items-center w-full">
    <NavigationControls
      :isFirst="isFirst"
      :isLast="isLast"
      @prev="$emit('prev')"
      @next="$emit('next')"
    >
      <transition
        name="fade"
        mode="out-in"
      >
        <CodexContent
          :key="activePage"
          :content="currentContent"
        />
      </transition>
    </NavigationControls>
  </BaseContainer>
</template>

<script setup lang="ts">
import BaseContainer from '../atoms/BaseContainer.vue';
import NavigationControls from '../molecules/NavigationControls.vue';
import CodexContent from '../molecules/CodexContent.vue';

defineProps<{
  isFirst: boolean;
  isLast: boolean;
  activePage: number;
  currentContent: { chapter: string; title: string; body: string };
}>();

defineEmits(['prev', 'next']);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(15px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
</style>
