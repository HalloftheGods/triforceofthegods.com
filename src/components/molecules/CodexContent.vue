<template>
  <BaseContainer customClass="flex-1 max-w-[1100px] text-center px-12 py-8 bg-gradient-to-t from-bg/95 to-bg/0 backdrop-blur-[4px] mx-5">
    <BaseText
      tag="div"
      customClass="text-[0.8rem] text-white tracking-[0.3em] uppercase mb-2 opacity-80"
    >
      {{ content.chapter }}
    </BaseText>
    <BaseText
      tag="h1"
      customClass="text-[1.6rem] text-gold font-normal tracking-[0.1em] mt-0 mb-4 drop-shadow-[0_0_15px_rgba(var(--gold-rgb),0.3)]"
    >
      {{ content.title }}
    </BaseText>
    <BaseText
      tag="p"
      customClass="text-[1.05rem] leading-[1.6] text-text-main mb-0"
    >
      {{ content.body }}
    </BaseText>
  </BaseContainer>
</template>

<script setup lang="ts">
import BaseContainer from '../atoms/BaseContainer.vue';
import BaseText from '../atoms/BaseText.vue';

defineProps<{
  content: { chapter: string; title: string; body: string };
}>();
</script>
