<template>
  <BaseContainer customClass="flex flex-row justify-center items-center w-full">
    <NavigationControls
      :isFirst="isFirst"
      :isLast="isLast"
      @prev="$emit('prev')"
      @next="$emit('next')"
    >
      <transition
        :name="transitionName"
        mode="out-in"
      >
        <CodexContent
          :key="activePage"
          :content="currentContent"
          :index="activePage"
        />
      </transition>
    </NavigationControls>
  </BaseContainer>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import BaseContainer from '../atoms/BaseContainer.vue';
import NavigationControls from '../molecules/NavigationControls.vue';
import CodexContent from '../molecules/CodexContent.vue';
import type { CodexEntry } from '../../data/codex';

const props = defineProps<{
  isFirst: boolean;
  isLast: boolean;
  activePage: number;
  currentContent: CodexEntry;
}>();

defineEmits(['prev', 'next']);

const transitionName = ref('slide-left');

watch(() => props.activePage, (newVal, oldVal) => {
  transitionName.value = newVal > (oldVal ?? 0) ? 'slide-left' : 'slide-right';
});
</script>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
}

/* Next Slide transitions (moves leftward) */
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(40px);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}

/* Previous Slide transitions (moves rightward) */
.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-40px);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(40px);
}
</style>
