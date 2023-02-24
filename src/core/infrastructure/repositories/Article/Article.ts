import parser from 'fast-xml-parser'

import { Article } from '../../../domain/model/Article/Article'

export const ArticleRepository = {
  getArticles: async () => {
    const data = await ArticleRepository.fetchArticles()
    const parsedArticles = await ArticleRepository.parseArticles(data)

    return parsedArticles
  },
  fetchArticles: () => fetch('https://www.buzzfeed.com/tech.xml'),
  parseArticles: (response: Response): Promise<Article[]> =>
    response
      .text()
      .then((text) => new parser.XMLParser({ ignoreAttributes: false }).parse(text))
      .then((json) => json.rss.channel.item)
      .then((items) =>
        items.map((article: FetchedArticle) => ({
          title: article.title,
          description: article.description,
          id: article.guid['#text'],
          date: new Date(article.pubDate),
          url: article.link,
          image:
            article['media:thumbnail']['@_url'] ||
            'https://www.buzzfeed.com/obiwan-static/images/about/press-assets/BuzzFeed_Gradient.png',
        }))
      ),
}

type FetchedArticle = {
  title: string
  description: string
  link: string
  pubDate: string
  guid: { '#text': string; '@_isPermaLink': boolean }
  category: string
  'media:thumbnail': {
    '@_xmlns:media': string
    '@_url': string
  }
  'dc:creator': {
    '#text': string
    '@_xmlns:dc': string
  }
}
