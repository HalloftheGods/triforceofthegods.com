<template>
  <div class="hidden" aria-hidden="true">
    Nuxt SEO Router Layer
  </div>
</template>

<script setup lang="ts">
import { useRoute, useSeoMeta, computed } from '#imports';
import { CODEX_DATA } from '~/data/codex';

const route = useRoute();
const rawSlug = route.params.slug;
const slugString = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;

const activeAxiomIndex = computed(() => {
  if (!slugString || slugString === 'index') return 0;
  const found = CODEX_DATA.findIndex(d => 
    d.chapter.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slugString
  );
  return found !== -1 ? found : 0;
});

const currentContent = computed(() => CODEX_DATA[activeAxiomIndex.value]!);

useSeoMeta({
  title: () => `Triforce of the Gods | ${currentContent.value.chapter}`,
  description: () => currentContent.value.description,
  ogTitle: () => currentContent.value.chapter,
  ogDescription: () => currentContent.value.description,
  ogImage: '/triforce.gif',
});
</script>
