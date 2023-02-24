import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { fireEvent, render, waitForElementToBeRemoved } from '@testing-library/react-native'
import { asValue } from 'awilix'

import { container } from '../../../core/_di/'
import { anArticle } from '../../../core/domain/model/Article/Article.model'
import AppNavigator from '../AppNavigator'

jest.useFakeTimers()

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

describe('App', () => {
  it('navigates to the Detail screen on article press', async () => {
    const articleSet = [anArticle()]
    container.register({
      getArticles: asValue(() => Promise.resolve(articleSet)),
    })
    const { getByTestId, getByText } = renderApp()

    await waitForElementToBeRemoved(() => getByTestId('loaderScreen'))

    const articleEntry = getByText(articleSet[0].title)

    fireEvent.press(articleEntry)

    expect(getByTestId('detailScreen')).toBeDefined()
  })
})

const renderApp = () => {
  const queryClient = new QueryClient()

  return render(
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  )
}
