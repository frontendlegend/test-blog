<template>
  <div class="cards">
    <!-- TODO: responsive, carousel? -->
    <ArticleListItem 
      v-for="article in data.articles.filter((item, idx) => idx < 3)"
      :img-src="article.image"
      :title="article.title"
    />
  </div>
</template>

<script setup lang="ts">
  import { ArticleListDataT } from '../types/common';
  const { data } = defineProps<{ data: ArticleListDataT }>()
</script>

<style scoped lang="scss">
  .cards {
    display: flex;
    justify-content: space-between;
  }
</style>
