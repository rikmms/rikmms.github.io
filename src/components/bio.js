import React from 'react'
import { Image, Header, Icon } from 'semantic-ui-react'

const Bio = ({ info }) => {
  
  return (
    <div>
      <Image src='/assets/rikmms_photo.png' size='small' verticalAlign='middle' shape='rounded'/>
      <Header as='h2'>{ info.name }</Header>
      <div>
        {info.social.map(s =>
          <a key={ s.link } href={ s.link } target={ s.target } rel={ s.rel }>
            <Icon name={ s.name } size='large'/>
          </a>
        )}
      </div>
    </div>
  )
}

export default Bio