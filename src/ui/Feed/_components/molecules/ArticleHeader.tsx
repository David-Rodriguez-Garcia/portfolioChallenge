import { Row } from '../../../_components/_objects/Row'
import { Text } from '../../../_components/atoms/Text'

type Props = {
  title: string
  date: Date
}

export const ArticleHeader = ({ title, date }: Props) => (
  <Row horizontal="spaceBetween">
    <Text bold="strong" shrink>
      {title}
    </Text>
    <Text bold="strong">{date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()}</Text>
  </Row>
)
