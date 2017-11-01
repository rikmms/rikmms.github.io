import React from 'react'
import { Header, List } from 'semantic-ui-react'

const Articles = ({ articles }) => {
  return (
    <div>
      <Header as='h3'>Published articles</Header>
      <List>
        { articles.map(article => 
          <List.Item key={ article.title }>
            <List.Icon name='calendar' />
            <List.Content>
              { article.date } - <a href={ article.link } target='_blank' rel='noopener noreferrer'>{ article.title }</a>
            </List.Content>
          </List.Item>
        )}
      </List>
    </div>
  )
}

export default Articles