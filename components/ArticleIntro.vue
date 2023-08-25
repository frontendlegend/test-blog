<template>
  <div class="article-intro">
    <img class="article-intro__image" :src="data.image" />

    <article class="article-intro__text">
      <h1 class="article-intro__text__title" v-text="title" />
      <p class="article-intro__text__read-time">
        <SvgReadTime />
        <span>{{ reading_time }} мин время прочтения</span>
      </p>
      <p class="article-intro__text__view-count">
        <SvgViewsCount />
        <span>{{ views_count }} прочитали статью</span>
      </p>
      <p class="article-intro__text__description" v-text="short_description" />
    </article>
  </div>
</template>

<script setup lang="ts">
  import { ArticleIntroDataT } from '../types/common';
  const props = defineProps<{ data: ArticleIntroDataT }>()
  const { 
    image, title, reading_time, views_count, short_description 
  } = toRefs(props.data)
</script>

<style scoped lang="scss">
  .article-intro {
    display: flex;
    align-items: center;
    gap: 30px;

    @include media1024 {
      flex-direction: column;
    }

    &__image {
      width: 100%;
      max-width: 541px;
      height: 100%;
      max-height: 580px;
      border-radius: 2px 220px 2px 2px;
      object-fit: cover;

      @include media1280 {
        max-width: 450px;
      }
      @include media1024 {
        max-width: unset;
        max-height: 400px;
      }
    }

    &__text {
      &__title {
        margin: 0 0 30px;
        font-size: 56px;
        line-height: 66px;

        @include media1280 {
          margin: 0 0 25px;
          font-size: 45px;
          line-height: unset;
        }
        @include media1024 {
          margin: 0 0 15px;
          font-size: 40px;
          line-height: unset;
        }
        @include media425 {
          font-size: 30px;
        }
      }

      &__read-time, &__view-count {
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0;

        font-size: 14px;
        line-height: 20px;
        color: $gray;
      }

      &__view-count {
        margin: 4px 0 50px;

        @include media1280 {
          margin: 4px 0 35px;
        }
        @include media1024 {
          margin: 4px 0 25px;
        }
      }

      &__description {
        font-size: 18px;
        line-height: 26px;
      }
    }
  }
</style>
