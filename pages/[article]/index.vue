<template>
  <NuxtLayout name="main">
    <div class="article">
      <div class="article-block" v-for="block in pageContent?.body">
        <ArticleIntro 
          v-if="block.type === PageBodyTypes.article_intro_block"
          :data="(block.data as ArticleIntroDataT)"
        />

        <ArticleText 
          v-if="block.type === PageBodyTypes.text_block"
          :data="(block.data as ArticleTextDataT)"
        />

        <ArticleImage 
          v-if="block.type === PageBodyTypes.image_block"
          :data="(block.data as ArticleImageDataT)"
        />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
  import { 
    ArticleImageDataT, 
    ArticleIntroDataT, 
    ArticleTextDataT, 
    PageBodyTypes, 
    PageT 
  } from '../../types/common';

  const route = useRoute()
  const article = route.params.article

  const { data: pageContent } = 
    await useFetch<PageT>(`https://devtwit8.ru/api/v1/page/?path=/${article}`)

  useSeoMeta({ 
    title: pageContent.value?.meta.title,
    description: pageContent.value?.meta.description
  })
</script>

<style scoped lang="scss">
  .article {
    display: flex;
    flex-direction: column;
    gap: 100px;
  }
</style>
