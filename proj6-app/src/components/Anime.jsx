import React, { useState, useEffect } from 'react'

export default function Anime(props) {

  let { animePic, num, index, animes } = props
  const [anime, setCat] = useState(null)

  useEffect(() => {
    if (!anime.length) {
      const localAnimes = localStorage.getItem('animes')
      setCat(localAnimes)
    } else {
      setCat(animes[index])
    }
  }, [animes, index])


  return (
    <div className="contanier">
      <h1>{`Welcome to Animes Fact number ${num}`}</h1>
      <h3>{anime && anime.text}</h3>
      <img className='img' src={animePic} alt="fun animes" />
    </div>
  )
}