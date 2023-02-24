import { ReactNode } from 'react'
import { View } from 'react-native'

import { JustifyKeys, toJustify, AlignKeys, toAlign } from '../../_styles/Position'

type Props = {
  children: ReactNode
  horizontal?: AlignKeys
  vertical?: JustifyKeys
  testID?: string
}

export const Box = ({ children, horizontal = 'start', vertical = 'start', testID }: Props) => (
  <View
    style={{ flex: 1, justifyContent: toJustify(vertical), alignItems: toAlign(horizontal) }}
    testID={testID}>
    {children}
  </View>
)
