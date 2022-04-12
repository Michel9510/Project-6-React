import React, { useState, useEffect } from 'react'
import { animePics } from '../animePics.js'

export default function Anime(props) {

  let { animePic, num, index, animes } = props
  const [anime, setAnime] = useState(null)

  useEffect(() => {
    if (!animes.length) {
      const localAnimes = localStorage.getItem('animes')
      setAnime(localAnimes)
    } else {
      setAnime(animes[index])
    }
  }, [animes, index])


  return (
    <div className="contanier">
      <h1>{`Welcome to top ${num} Anime`}</h1>
      <h3>{anime && anime.text}</h3>
      <img className='img' src={animePics} alt="fun animes" />
    </div>
  )
}