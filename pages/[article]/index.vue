<template>
  <NuxtLayout name="main">
    <div class="article">
      <ArticleIntro 
        v-if="articleIntroBlock"
        :data="(articleIntroBlock.data as ArticleIntroDataT)"
      />

      <ArticleText 
        v-if="articleTextBlock"
        :data="(articleTextBlock.data as ArticleTextDataT)"
      />

      <ArticleImage 
        v-if="articleImageBlock"
        :data="(articleImageBlock.data as ArticleImageDataT)"
      />
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

  const articleIntroBlock = pageContent.value?.body.find(block => {
    return block.type === PageBodyTypes.article_intro_block
  })

  const articleTextBlock = pageContent.value?.body.find(block => {
    return block.type === PageBodyTypes.text_block
  })

  const articleImageBlock = pageContent.value?.body.find(block => {
    return block.type === PageBodyTypes.image_block
  })

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
