<template>
  <NuxtLayout name="main">
    <Cards
      v-if="articleListBlock" 
      :data="(articleListBlock.data as ArticleListDataT)" 
    />
  </NuxtLayout>
</template>

<script setup lang="ts">
  import { usePagesStore } from '../store/pages';
  import { PageBodyTypes, ArticleListDataT } from '../types/common';

  const store = usePagesStore()
  const { fetchPage } = store
  const pageContent = await fetchPage('/')

  const articleListBlock = pageContent?.body.find((block, idx) => {
    return block.type === PageBodyTypes.article_list_block
  })

  useSeoMeta({ 
    title: pageContent?.meta.title,
    description: pageContent?.meta.description
  })
</script>
