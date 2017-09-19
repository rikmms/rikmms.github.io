import React from 'react'
import { Header, List } from 'semantic-ui-react'

const Articles = ({ articles }) => {
  return (
    <div>
      <Header as='h3'>Published public articles</Header>
      <List bulleted>
        { articles.map(article => 
          <List.Item key={ article.title }>
            { article.date } - <a href={ article.link } target='_blank' rel='noopener noreferrer'>{ article.title }</a>
          </List.Item>
        )}
      </List>
    </div>
  )
}

export default Articles