import api from '../../services/api'
import { useState, useEffect } from 'react'

import { Background, Container, ContainerButtons, Info, Poster } from './styles'
import Button from '../../components/Button'
import Slider from '../../components/Slider'
import { getImages } from '../../utils/getImages'
import Modal from '../../components/Modal'

function Home() {
  const [showModal, setShowModal] = useState(false)

  const [movie, setMovie] = useState()
  const [topMovie, setTopMovie] = useState()
  const [popMovie, setPopMovie] = useState()
  const [topSerie, setTopSerie] = useState()
  const [popSerie, setPopSerie] = useState()
  const [person, setPerson] = useState()

  useEffect(() => {
    async function getMovies() {
      const { data: { results } } = await api.get('/movie/popular')
      setMovie(results[0])
    }

    async function getTopMovies() {
      const { data: { results } } = await api.get('/movie/top_rated')

      setTopMovie(results)
    }

    async function getPopMovies() {
      const { data: { results } } = await api.get('/movie/popular')
      setPopMovie(results)
    }

    async function getTopSeries() {
      const { data: { results } } = await api.get('tv/top_rated')

      setTopSerie(results)
    }

    async function getPopSeries() {
      const { data: { results } } = await api.get('tv/popular')

      setPopSerie(results)
    }

    async function getPerson() {
      const { data: { results } } = await api.get('person/popular')

      setPerson(results)
    }

    getMovies()
    getTopMovies()
    getPopMovies()
    getTopSeries()
    getPopSeries()
    getPerson()
  }, [])



  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
          {showModal && <Modal movieId={movie.id} setShowModal={setShowModal} />}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button red={true}>Assista Agora</Button>
                <Button onClick={() => setShowModal(true)} red={false}>Trailer</Button>
              </ContainerButtons>
            </Info>

            <Poster>
              <img alt="capa-do-filme" src={getImages(movie.poster_path)} />
            </Poster>
          </Container>

        </Background>
      )}
      {topMovie && <Slider info={topMovie} title={'Top Filmes'} />}
      {popMovie && <Slider info={popMovie} title={'Filmes Mais Vistos'} />}
      {topSerie && <Slider info={topSerie} title={'Top Series'} />}
      {popSerie && <Slider info={popSerie} title={'Séries Mais Vistas'} />}
      {person && <Slider info={person} title={'Artistas'} />}
    </>
  )
}

export default Home
