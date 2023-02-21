import { createContainer, asValue } from 'awilix'

import { Article } from '../domain/model/Article/Article'
import { ArticleRepository } from '../infrastructure/repositories/Article/Article'

type containerProps = {
  getArticles: () => Promise<Article[]>
}

export const container = createContainer<containerProps>()

container.register({
  getArticles: asValue(ArticleRepository.getArticles),
})
