import React from 'react'
import Footer from '../components/Footer'
import Frenzy from '../components/Frenzy'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Tokenomics from '../components/Tokenomics'
import Wolf from '../components/Wolf'

export default function Home() {
  return (
    <div>
        <Header />
        <Intro />
        <Wolf />
        <Tokenomics />
        <Frenzy />
        <Footer />
    </div>
  )
}
