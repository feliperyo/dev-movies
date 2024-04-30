import { useState, useEffect } from 'react'

import Preloader from '../../components/Preloader'
import Slider from '../../components/Slider'
import {
  getPlayingMovies,
  getPopMovies,
  getTopMovies,
  getCommingMovies
} from '../../services/getData'
import { Body } from './styles'

function Movies() {
  const [playingMovie, setPlayingMovie] = useState()
  const [topMovie, setTopMovie] = useState()
  const [popMovie, setPopMovie] = useState()
  const [commingMovie, setCommingMovie] = useState()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getPlayingMovies(),
        getTopMovies(),
        getPopMovies(),
        getCommingMovies()
      ])
        .then(([playingMovie, topMovie, popMovie, commingMovie]) => {
          setPlayingMovie(playingMovie)
          setTopMovie(topMovie)
          setPopMovie(popMovie)
          setCommingMovie(commingMovie)
        })
        .catch((error) => console.error(error))
    }
    getAllData()
  }, [])

  return (
    <Body>
      <Preloader></Preloader>
      {playingMovie && (
        <Slider info={playingMovie} title={'Sendo Reproduzidos'} />
      )}
      {popMovie && <Slider info={popMovie} title={'Filmes Mais Vistos'} />}
      {topMovie && <Slider info={topMovie} title={'Top Filmes'} />}
      {commingMovie && <Slider info={commingMovie} title={'Em Breve'} />}
    </Body>
  )
}

export default Movies
