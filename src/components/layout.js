import React from 'react'
import './base.css'
import { Helmet } from 'react-helmet'
import Container from './container'
import Navigation from './navigation'
import Hero from './hero'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Container>
        <Helmet title="අනීවාරතේ" />    
        <Hero/>
        <Navigation />
        {children}
      </Container>
    )
  }
}

export default Template
