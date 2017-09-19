import 'semantic-ui-css/semantic.min.css'
import 'animate.css'
import './App.css'
import React from 'react'
import { Container, Grid, Divider } from 'semantic-ui-react'
import Bio from './components/bio'
import Summary from './components/summary'
import Articles from './components/articles'

const userInfo = {
  name: 'Ricardo Sousa',
  description: 'Software Engineer and Full Stack Developer',
  social: [
    { name: 'twitter', link: 'https://twitter.com/rikmms', target: '_blank', rel: 'noopener noreferrer' },
    { name: 'linkedin', link: 'https://www.linkedin.com/in/rikmms/', target: '_blank', rel: 'noopener noreferrer' },
    { name: 'github', link: 'https://github.com/rikmms', target: '_blank', rel: 'noopener noreferrer' },
    { name: 'medium', link: 'https://medium.com/@rikmms', target: '_blank', rel: 'noopener noreferrer' },
    { name: 'quora', link: 'https://www.quora.com/profile/Ricardo-Sousa-49', target: '_blank', rel: 'noopener noreferrer' },
    { name: 'meetup', link: 'https://www.meetup.com/members/161048452/', target: '_blank', rel: 'noopener noreferrer' },
    { name: 'mail', link: 'mailto:sousa.ricardo10@gmail.com' }
  ]
}

const summary = <div>
  <p>Software Engineer and Full Stack Developer. A programmer who's always looking for new challenges and opportunities to evolve, with interests in large-scale distributed systems, architectural patterns, and web/mobile development.</p>
  <p>Currently working as a Software Architect at <a href='http://www.challenge.pt/' target='_blank' rel='noopener noreferrer'>Challenge.IT</a> in Lisbon (PT) since 2013, where the principal activity is to design and implement tailor-made Software projects.</p>
  <p>Also, a Trainer of Software development.</p>
</div>

const articles = [
  { date: '19/09/17', title: 'JavaScript’s default parameters and Dependency Injection', link: 'https://medium.com/@rikmms/javascripts-default-parameters-and-dependency-injection-f1fc5323473' }
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
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  )
}

export default App
