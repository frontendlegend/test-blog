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
    width: 427px;

    .img {
      width: 100%;
      height: 320px;
    }

    .title {
      margin: 20px 0 30px;
      font-size: 22px;
      font-weight: 800;
      line-height: 30px;
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
