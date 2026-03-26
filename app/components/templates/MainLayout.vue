<template>
  <BaseContainer 
    customClass="w-full h-full flex flex-col items-center justify-end pb-8"
  >
    <BaseText
      tag="div"
      customClass="absolute top-16 left-0 w-full text-center text-[2.05rem] tracking-[1em] text-gold uppercase opacity-60 pointer-events-none drop-shadow-[0_0_20px_rgba(var(--gold-rgb),0.3)]"
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
