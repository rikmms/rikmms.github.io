import 'semantic-ui-css/semantic.min.css'
import 'animate.css'
import './App.css'
import React from 'react'
import { Container, Grid, Divider } from 'semantic-ui-react'
import Bio from './components/bio'
import Summary from './components/summary'
import Articles from './components/articles'
import Extras from './components/extras'

const userInfo = {
  photoSrc: '/assets/rikmms_photo.png', 
  name: 'Ricardo Sousa',
  description: 'Software Engineer and Full Stack Developer',
  social: [
    { name: 'mail', link: 'mailto:sousa.ricardo10@gmail.com' },
    { name: 'linkedin', link: 'https://www.linkedin.com/in/rikmms/' },
    { name: 'twitter', link: 'https://twitter.com/rikmms' },
    { name: 'medium', link: 'https://medium.com/@rikmms' },
    { name: 'github', link: 'https://github.com/rikmms' },
    { name: 'github alternate', link: 'https://github.com/rikmms-challenge' }
  ]
}

const summary = <div>
  <p>Software Engineer and Full Stack Developer. A programmer who's always looking for new challenges and opportunities to evolve, with interests in large-scale distributed systems, architectural patterns and web/mobile development.</p>
  <p>Currently working as a Software Architect at <a href='http://www.challenge.pt/' target='_blank' rel='noopener noreferrer'>Challenge.IT</a> in Lisbon (PT) since 2013, where the principal activity is to design and implement tailor-made Software projects.</p>
  <p>Also, a Trainer of Software development.</p>
  <p></p>
</div>

const articles = [
  { date: '17/10/22', title: 'How to take advantage of JavaScript’s default parameters for Dependency Injection', link: 'https://medium.freecodecamp.org/how-to-take-advantage-of-javascripts-default-parameters-for-dependency-injection-98fc423328e1' }
]

const extras = [
  { id: 1, content: <div>Bachelor's final project <a href='https://drive.google.com/file/d/0BzxkMjk9Y1V8QWxEV3B0ZTY3SDA/view?usp=sharing' target='_blank' rel='noopener noreferrer'>Report</a> (written in pt-PT)</div>, icon: 'university' },
  { id: 2, content: <div>Bookshelf at the <a href='https://www.goodreads.com/review/list/23928978-ricardo-sousa?shelf=' target='_blank' rel='noopener noreferrer'>Goodreads</a></div>, icon: 'book' }
]

const App = () => {
  return (
    <div className="app">
      <Container>
        <Grid columns={2} divided>
          <Grid.Column width={6} textAlign='center' className="animated slideInLeft">
            <Bio info={ userInfo } />
          </Grid.Column>
          <Grid.Column width={10} className="animated slideInUp">
            <Summary summary={ summary } />
            <Divider />
            <Articles articles={ articles } />
            <Divider />
            <Extras extras={ extras } />
          </Grid.Column>
        </Grid>
      </Container>
      <div className='bottom-bar'>
          <p><b>rikmms</b> last update - <em>11/11/17</em></p>
      </div>
    </div>
  )
}

export default App
