<template>
  <div class="cards">
    <Card
      v-for="article in data.articles"
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    gap: 30px;

    @include media1024 {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>
