<template>
  <div class="slider">
    <Carousel v-model="currentSlide">
      <Slide v-for="slide in data" :key="slide">
        <div class="carousel-item">
          <img :src="slide" />
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>

    <p class="slider-count">{{ currentSlide + 1 }} / {{ data.length }}</p>
  </div>

</template>

<script setup lang="ts">
  import type { ArticleSliderDataT } from 'types/common';

  const { data } = defineProps<{ data: ArticleSliderDataT }>()

  const currentSlide = ref(0)
</script>

<style lang="scss">
  .slider {
    .slider-count {
      width: fit-content;
      margin: 0 auto;
      font-size: 18px;
      line-height: 26px;
    }
  }

  .carousel-item {
    img {
      width: 100%;
      max-width: 1112px;
      height: 100%;
      max-height: 555px;
    }
  }

  .carousel__next, .carousel__prev {
    width: 60px;
    height: 60px;
    background: $text;

    @include media1024 {
      width: 40px;
      height: 40px;
    }
    @include media425 {
      width: 20px;
      height: 20px;
    }

    .carousel__icon {
      fill: $white;
    }
  }
</style>
