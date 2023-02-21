import { View, FlatList, StyleSheet, StatusBar } from 'react-native'

import { Article } from '../../core/domain/model/Article/Article'
import { Loader } from '../Loader'
import { DetailRouteParams } from '../_navigation/NavigationTypes'
import { Separator } from './_components/atoms/Separator'
import { ArticleEntry } from './_components/organisms/ArticleEntry'

type Props = {
  articles: Article[]
  onArticlePress: (params: DetailRouteParams) => void
  isLoading: boolean
}

export const Feed = ({ articles, onArticlePress, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <View style={styles.feedWrapper}>
      <FlatList
        data={articles}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item: { id, title, description, image, date, url } }) => (
          <ArticleEntry
            key={id}
            title={title}
            description={description}
            image={image}
            date={date}
            onPress={() => onArticlePress({ title, description, image, url })}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  feedWrapper: {
    paddingTop: StatusBar.currentHeight,
  },
})
