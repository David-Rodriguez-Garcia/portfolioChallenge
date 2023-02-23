import 'isomorphic-fetch'
import { ArticleRepository } from '../Article'
import { emptyImageResponse } from '../__fixtures__/Response'

const data = new Response(emptyImageResponse)

describe('ArticleRepository', () => {
  it('returns buzzfeed logo if no image is given', async () => {
    const parsedArticles = await ArticleRepository.parseArticles(data)

    expect(parsedArticles[0].image).toBe(
      'https://www.buzzfeed.com/obiwan-static/images/about/press-assets/BuzzFeed_Gradient.png'
    )
  })
})
