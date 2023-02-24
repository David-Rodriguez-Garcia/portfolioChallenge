import { Image, View } from 'react-native'

type Props = { image: string }

export const SmallArticleImage = ({ image }: Props) => {
  if (!image) {
    return <View style={{ height: 50, width: 50, backgroundColor: 'blue' }} />
  }

  return (
    <Image
      testID="smallArticleImage"
      source={{ uri: image }}
      style={{
        height: 50,
        width: 50,
      }}
    />
  )
}
