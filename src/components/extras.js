import React from 'react'
import { Header, List } from 'semantic-ui-react'

const Extras = ({ extras }) => (
  <div>
    <Header as='h3'>Others</Header>
    <List>
    { extras.map(extra => 
      <List.Item key={ extra.id }>
        <List.Icon name={ extra.icon } />
        <List.Content>
          { extra.content }
        </List.Content>
      </List.Item>
    )}
  </List>
  </div>
)

export default Extras