<template lang="pug">
div(class="article-image") 
  img(class="article-image__image", :src="src")
  span(class="article-image__caption", v-text="caption")
</template>

<script setup lang="ts">
  import type { ArticleImageDataT } from 'types/common';

  const props = defineProps<{ data: ArticleImageDataT }>()
  const { src, caption } = toRefs(props.data)
</script>

<style lang="scss">
  .article-image {
    &__image {
      width: 100%;
      max-width: 1340px;
      height: 100%;
      max-height: 550px;
      border-radius: 2px 220px 2px 2px;
    }

    &__caption {
      display: block;
      width: fit-content;
      margin-left: auto;
      font-size: 14px;
      color: $gray;
      white-space: nowrap;
    }
  }
</style>
