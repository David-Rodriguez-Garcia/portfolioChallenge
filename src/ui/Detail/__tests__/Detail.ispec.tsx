import { render as baseRender } from '@testing-library/react-native'

import { Detail } from '..'
import { DetailProps } from '../../_navigation/NavigationTypes'

describe('Detail', () => {
  it('displays title', () => {
    const title = 'Title of the screen'
    const { getByText } = render({ title })

    expect(getByText(title)).toBeDefined()
  })

  it('displays full description', () => {
    const description =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tenetur explicabo itaque id quam facilis provident, distinctio laborum beatae! Corrupti laborum, explicabo ullam temporibus accusamus totam rem praesentium quas libero?'
    const { getByText } = render({ description })

    expect(getByText(description)).toBeDefined()
  })

  it('displays image', () => {
    const imageUri = 'path/to/image/'
    const { getByTestId } = render({ image: imageUri })

    const image = getByTestId('articleImage')
    const renderedUri = image._fiber.stateNode.props.source.uri

    expect(renderedUri).toContain(imageUri)
  })
})

const render = (params: { title?: string; description?: string; image?: string }) => {
  const detailProps = {
    navigation: () => null,
    route: { params },
  } as unknown as DetailProps
  return baseRender(<Detail {...detailProps} />)
}
