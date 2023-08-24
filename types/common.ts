type PageTypeT = "home" | "article"

export interface PageT {
  page_type: PageTypeT,
  meta: {
    title: string
    description: string
    slug: string
  },
  body: {
    type: string | keyof typeof PageBodyTypes
    id: string
    data: unknown | ArticleListDataT
  }[]
}
export type PagesT = PageT[]

export enum PageBodyTypes {
  "article_list_block" = "article_list_block",
  "article_intro_block" = "article_intro_block"
}

export interface ArticleListDataT {
  title: string
  articles: ArticleListDataItemT[]
}
export interface ArticleListDataItemT {
  title: string
  link: string
  image: string
}

export interface ArticleIntroDataT {
  title: string
  image: string
  reading_time: number
  views_count: number
  short_description: string
}
