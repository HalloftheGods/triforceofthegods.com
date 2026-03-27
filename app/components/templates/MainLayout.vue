<template>
  <BaseContainer 
    customClass="w-full h-full flex flex-col items-center justify-end pb-12 sm:pb-8"
  >
    <BaseText
      tag="div"
      customClass="absolute top-10 sm:top-16 left-0 w-full text-center text-3xl sm:text-4xl md:text-[3.5rem] tracking-[0.15em] sm:tracking-[0.3em] font-['Cinzel_Decorative'] font-bold uppercase opacity-85 sm:opacity-90 pointer-events-none drop-shadow-[0_0_15px_rgba(var(--gold-rgb),0.5)] sm:drop-shadow-[0_0_20px_rgba(var(--gold-rgb),0.5)] bg-gradient-to-b from-yellow-100 via-gold to-yellow-800 bg-clip-text text-transparent"
    >
      Triforce of the Gods
    </BaseText>

    <BaseContainer customClass="w-full">
      <slot name="viewer" />
    </BaseContainer>

    <BaseContainer customClass="mt-4">
      <slot name="pagination" />
    </BaseContainer>

    <slot name="debug" />
  </BaseContainer>
</template>

<script setup lang="ts">
import BaseContainer from '../atoms/BaseContainer.vue';
import BaseText from '../atoms/BaseText.vue';
</script>
