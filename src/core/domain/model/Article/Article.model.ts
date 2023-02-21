import { getArbitraryDate, cloneDeep } from '../../utils'
import { Article } from './Article'
import { setOfArticles } from './__fixtures__/SetOfArticles'

const articleTemplate: Article = {
  id: 'id_001',
  date: new Date('Wed Jan 11 2023 16:56:13 GMT+0100 (Central European Standard Time)'),
  image: 'path/to/image',
  title:
    'Prince Harry And Meghan Markle Considered Which Dog Was Most In Need When They Adopted A Beagle, The Rescue Group’s Founder Said',
  description:
    '<h1>The couple adopted a 7-year-old beagle named Mamma Mia, who was rescued from a facility that breeds dogs for biomedical research.</h1><p><img src="https://img.buzzfeed.com/buzzfeed-static/static/2022-08/26/14/campaign_images/60087012f37e/prince-harry-and-meghan-markle-considered-which-d-2-1642-1661523756-2_dblbig.jpg" /></p><hr /><p><a href="https://www.buzzfeednews.com/article/ellievhall/prince-harry-meghan-markle-dog-beagle">View Entire Post &rsaquo;</a></p>',
  url: 'https://www.buzzfeednews.com/article/ellievhall/prince-harry-meghan-markle-dog-beagle',
}

export const anArticle = (options?: Partial<Article>): Article => ({
  ...articleTemplate,
  id: `id_${Math.random()}`,
  date: getArbitraryDate(),
  ...options,
})

export const aSetOfArticles = (size = 6) => setOfArticles.slice(0, size)

export const sortArticles = (articles: Article[]) => {
  const articlesClone = cloneDeep(articles)

  return articlesClone.sort(
    (article_1, article_2) => article_1.date.getTime() - article_2.date.getTime()
  )
}
