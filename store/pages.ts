import { defineStore } from 'pinia'
import { PageT, PagesT } from 'types/common'

export const usePagesStore = defineStore("pages-store", () => {
  const pages = ref<PagesT>([])

  async function fetchPage(slug: string): Promise<PageT | null> {
    const page = pages.value.find(page => 
      page.meta.slug === (slug === '/' ? 'home' : slug.slice(1))
    )

    if (page) return page;

    const { data } = 
      await useFetch<PageT>(`https://devtwit8.ru/api/v1/page/?path=${slug}`)

    if (data.value) {
      pages.value.push(data.value)
      return data.value
      
    } else return null
  }

  return { fetchPage }
})
