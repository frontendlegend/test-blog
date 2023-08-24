<template>
  <div class="card">
    <img class="img" :src="imgSrc" />
    <h2 class="title">{{ title }}</h2>
    <button class="read-btn">Читать</button>
  </div>
</template>

<script setup lang="ts">
  const { imgSrc, title } = defineProps<{ imgSrc: string, title: string }>()
</script>

<style scoped lang="scss">
  .card {
    width: 100%;
    max-width: 427px;

    .img {
      width: 100%;
      height: 100%;
      max-height: 320px;
      object-fit: cover;

      @media (max-width: 425px) {
        max-height: 200px;
      }
    }

    .title {
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

    .read-btn {
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
