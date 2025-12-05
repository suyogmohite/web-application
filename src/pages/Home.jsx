import React from 'react'
import Hero from '../components/Hero'
import StepCard from '../components/StepCard'

function Home() {
  return (
    <>
    <Hero />
      <div className="mt-16 grid md:grid-cols-3 gap-4">
        <StepCard step="1" title="Open Form" text="Fill all required fields." />
        <StepCard step="2" title="Submit" text="Validation prevents empty fields." />
        <StepCard step="3" title="View Output" text="Data shown in card format." />
      </div>
    </>
  )
}

export default Home