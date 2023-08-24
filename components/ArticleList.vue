<template>
  <div class="article-list">
    <h2 class="title">Похожие статьи</h2>
    <ArticleCards :data="data" />
  </div>
</template>

<script setup lang="ts">
  import { ArticleListDataT } from '../types/common';
  const { data } = defineProps<{ data: ArticleListDataT }>()
</script>

<style scoped lang="scss">
  .article-list {
    .title {
      margin: 0 0 50px;
      font-size: 34px;
      line-height: 46px;
      font-weight: 800;

      @include media1024 {
        margin: 0 0 35px;
      }
      @include media425 {
        margin: 0 0 30px;
        font-size: 28px;
        line-height: unset;
      }
    }
  }
</style>
