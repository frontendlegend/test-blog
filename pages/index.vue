<template>
  <NuxtLayout name="main">
    <ArticleList 
      v-if="articleListBlock" 
      :data="(articleListBlock.data as ArticleListDataT)" 
    />
  </NuxtLayout>
</template>

<script setup lang="ts">
  import { PageT, PageBodyTypes, ArticleListDataT } from '../types/common';

  const { data: pageContent } = 
    await useFetch<PageT>('https://devtwit8.ru/api/v1/page/?path=/')

  const articleListBlock = pageContent.value?.body.find((block, idx) => {
    return block.type === PageBodyTypes.article_list_block
  })

  useSeoMeta({ 
    title: pageContent.value?.meta.title,
    description: pageContent.value?.meta.description
  })
</script>
