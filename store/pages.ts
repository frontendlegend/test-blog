import { defineStore } from 'pinia'
import { PageT, PagesT } from 'types/common'

export const usePagesStore = defineStore("pages-store", () => {
  const pages = ref<PagesT>([])

  function addPage(page: PageT) {
    pages.value.push(page)
  }

  return { addPage, pages }
})
