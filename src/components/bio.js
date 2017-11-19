import React from 'react'
import { Image, Header, Icon } from 'semantic-ui-react'

const Bio = ({ info }) => {
  
  return (
    <div>
      <Image src={ info.photoSrc } size='small' verticalAlign='middle' shape='circular'/>
      <Header as='h2'>{ info.name }</Header>
      <div>
        {info.social.map(s =>
          <a key={ s.link } href={ s.link } target='_blank' rel='noopener noreferrer'>
            <Icon name={ s.name } size='big'/>
          </a>
        )}
      </div>
    </div>
  )
}

export default Bio