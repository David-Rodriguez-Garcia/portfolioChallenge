import { render } from '@testing-library/react-native'

import { Loader } from '..'

describe('Loading', () => {
  it('displays loading screen', () => {
    const { getByTestId } = render(<Loader />)

    expect(getByTestId('loaderScreen')).toBeDefined()
  })
})
