import { ReactNode } from 'react'
import { View } from 'react-native'

import { JustifyKeys, toJustify } from '../../_styles/Position'

type Props = {
  children: ReactNode
  horizontal?: JustifyKeys
}

export const Row = ({ children, horizontal = 'start' }: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: toJustify(horizontal),
        width: '100%',
      }}>
      {children}
    </View>
  )
}
