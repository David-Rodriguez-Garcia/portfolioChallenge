import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  fireEvent,
  render,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react-native'
import { asValue } from 'awilix'

import { container } from '../../../core/_di'
import { aSetOfArticles } from '../../../core/domain/model/Article/Article.model'
import { NavigationProp, RouteProp } from '../../_navigation/NavigationTypes'
import { Feed } from '../Feed'
import { FeedController } from '../Feed.controller'

jest.useFakeTimers()

const articleSet = aSetOfArticles()

describe('Feed', () => {
  it('displays the articles title', () => {
    const { title } = articleSet[0]

    const { getByText } = renderView()

    expect(getByText(title)).toBeDefined()
  })

  it('displays the articles description', () => {
    const { description } = articleSet[1]

    const { getByText } = renderView()

    expect(getByText(description)).toBeDefined()
  })

  it('displays the articles date', () => {
    const { date } = articleSet[1]

    const { getByText } = renderView()

    expect(getByText(date.toLocaleDateString())).toBeDefined()
  })

  it('displays the mini article image', () => {
    const { getAllByTestId } = renderView()

    expect(getAllByTestId('smallArticleImage')).toBeDefined()
  })

  it('displays loading screen when isLoading is true', () => {
    const { getByTestId } = renderView(true)

    expect(getByTestId('loaderScreen')).toBeDefined()
  })

  it('handles press', () => {
    const { title } = articleSet[0]

    const { getByText, onArticlePress } = renderView()

    const button = getByText(title)

    fireEvent.press(button)

    expect(onArticlePress).toHaveBeenCalled()
  })

  describe('onArticlePress', () => {
    it('is called with the title, description, image and URL params', () => {
      const { title, description, image, url } = articleSet[0]

      const { getByText, onArticlePress } = renderView()

      const button = getByText(title)

      fireEvent.press(button)

      expect(onArticlePress).toHaveBeenCalledWith({ title, description, image, url })
    })
  })
})

describe('FeedController', () => {
  it('displays loading screen while fetching data', async () => {
    const sleepFourSeconds = () =>
      waitFor(() => new Promise<void>((res) => setTimeout(() => res(), 4000)), {
        timeout: 7000,
      })

    container.register({
      getArticles: asValue(() => new Promise((res) => setTimeout(() => res([]), 7000))),
    })

    const { getByTestId, queryByTestId } = renderController()

    await sleepFourSeconds()
    expect(getByTestId('loaderScreen')).toBeDefined()

    await sleepFourSeconds()
    expect(queryByTestId('loaderScreen')).toBeNull()
  })

  it('calls the navigation prop with the title, description, image and url params', async () => {
    const { title, description, image, url } = articleSet[0]

    container.register({ getArticles: asValue(() => Promise.resolve(articleSet)) })

    const { getByText, getByTestId, navigation } = renderController()

    await waitForElementToBeRemoved(() => getByTestId('loaderScreen'))

    const button = getByText(title)
    fireEvent.press(button)

    expect(navigation.navigate).toHaveBeenCalledWith('Detail', { title, description, image, url })
  })
})

const renderView = (isLoading = false) => {
  const onArticlePress = jest.fn()

  return {
    ...render(<Feed articles={articleSet} isLoading={isLoading} onArticlePress={onArticlePress} />),
    onArticlePress,
  }
}

const renderController = () => {
  const navigation = { navigate: jest.fn() } as unknown as NavigationProp<'Feed'>
  const route = jest.fn() as unknown as RouteProp<'Feed'>
  const queryClient = new QueryClient()

  return {
    navigation,
    route,
    ...render(
      <QueryClientProvider client={queryClient}>
        <FeedController navigation={navigation} route={route} />
      </QueryClientProvider>
    ),
  }
}
