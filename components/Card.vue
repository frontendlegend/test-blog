<template>
  <div class="card">
    <img class="card__img" :src="image" />
    <h3 class="card__title">{{ title }}</h3>
    <NuxtLink :to="link">
      <button class="card__read-button">Читать</button>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
  import { ArticleListDataItemT } from 'types/common';
  const props = defineProps<{ data: ArticleListDataItemT }>()
  const { image, title, link } = toRefs(props.data)
</script>

<style scoped lang="scss">
  .card {
    width: 100%;
    max-width: 427px;

    &__img {
      width: 100%;
      height: 100%;
      max-height: 320px;
      object-fit: cover;

      @include media425 {
        max-height: 200px;
      }
    }

    &__title {
      margin: 20px 0 30px;
      font-size: 22px;
      font-weight: 800;
      line-height: 30px;

      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      @supports (-webkit-line-clamp: 2) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: initial;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }

    &__read-button {
      width: 164px;
      height: 46px;
      
      font-size: 18px;
      line-height: 24px;
      color: $white;
      
      background: $text;
      border-radius: 2px;
      border: none;

      transition: background .2s;
      cursor: pointer;

      &:hover {
        background: $blue;
      }
    }
  }
</style>
