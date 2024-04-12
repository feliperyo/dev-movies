import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import {
  getMovies,
  getTopMovies,
  getPopMovies,
  getTopSeries,
  getPopSeries,
  getPerson
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import {
  Background,
  Container,
  ContainerButtons,
  Info,
  Poster,
  Body
} from './styles'

function Home() {
  const [showModal, setShowModal] = useState(false)

  const [movie, setMovie] = useState()
  const [topMovie, setTopMovie] = useState()
  const [popMovie, setPopMovie] = useState()
  const [topSerie, setTopSerie] = useState()
  const [popSerie, setPopSerie] = useState()
  const [person, setPerson] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovies(),
        getTopMovies(),
        getPopMovies(),
        getTopSeries(),
        getPopSeries(),
        getPerson()
      ])
        .then(([movie, topMovie, popMovie, topSerie, popSerie, person]) => {
          setMovie(movie)
          setTopMovie(topMovie)
          setPopMovie(popMovie)
          setTopSerie(topSerie)
          setPopSerie(popSerie)
          setPerson(person)
        })
        .catch((error) => console.error(error))
    }
    getAllData()
  }, [])

  return (
    <Body>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button
                  onClick={() => navigate(`detalhe/${movie.id}`)}
                  red={true}
                >
                  Assista Agora
                </Button>
                <Button onClick={() => setShowModal(true)} red={false}>
                  Trailer
                </Button>
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
    </Body>
  )
}

export default Home
