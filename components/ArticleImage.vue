<template lang="pug">
div(class="article-image-block") 
  img(:src="src" :alt="caption")
</template>

<script setup lang="ts">
  import type { ArticleImageDataT } from 'types/common';

  const props = defineProps<{ data: ArticleImageDataT }>()
  const { src, caption } = toRefs(props.data)
</script>

<style lang="scss">
  .article-image-block {
    img {
      width: 100%;
      max-width: 1340px;
      height: 100%;
      max-height: 550px;
      border-radius: 2px 220px 2px 2px;
    }
  }
</style>
