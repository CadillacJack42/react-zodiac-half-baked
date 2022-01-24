import React from 'react'
import backgroundImg from '../background.png'
import './Main.css'
import ZodiacCard from '../ZodiacCard/ZodiacCard.js'

export default function Main(props) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {props.zodiacList.map((zodiac, i) =>
        <ZodiacCard
          key={zodiac.name + i}
          {...zodiac}
        />)}
    </main>
  )
}
