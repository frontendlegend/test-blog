<template>
  <NuxtLayout name="main">
    <ArticleIntro 
      v-if="articleIntroBlock"
      :data="(articleIntroBlock.data as ArticleIntroDataT)"
    />
  </NuxtLayout>
</template>

<script setup lang="ts">
  import { ArticleIntroDataT, PageBodyTypes, PageT } from '../../types/common';

  const route = useRoute()
  const article = route.params.article

  const { data: pageContent } = 
    await useFetch<PageT>(`https://devtwit8.ru/api/v1/page/?path=/${article}`)

  const articleIntroBlock = pageContent.value?.body.find((block, idx) => {
    return block.type === PageBodyTypes.article_intro_block
  })

  useSeoMeta({ 
    title: pageContent.value?.meta.title,
    description: pageContent.value?.meta.description
  })
</script>
