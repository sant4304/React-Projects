import React from 'react'
import Navar from './components/Navar'
import Footer from './components/Footer'
import Section from './components/Section'

const App = () => {
  return (
    <div>
      <Navar brand="holla">
        <h1>Hellooo</h1>
      </Navar>
      <Section>
        <h1>King</h1>
        <h1>kong</h1>
      </Section>
      <Footer/>
    </div>
  )
}

export default App