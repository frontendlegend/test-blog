<template>
  <div class="cards">
    <!-- TODO: display more than 3 articles -->
    <ArticleCard
      v-for="article in data.articles.filter((item, idx) => idx < 3)"
      :data="article"
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
    gap: 30px;

    @include media1024 {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
