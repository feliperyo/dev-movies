import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Credits from '../../components/Credits'
import Slider from '../../components/Slider'
import SpanGenres from '../../components/SpanGenres'
import {
  getDetail,
  getMovieCredits,
  getMovieSimilar,
  getTrailer
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import {
  Body,
  Container,
  Background,
  Cover,
  Info,
  ContainerMovies
} from './styles'

function Detail() {
  const { id } = useParams()
  const [movieDetail, setMovieDetail] = useState()
  const [movieTrailer, setMovieTrailer] = useState()
  const [movieCredit, setMovieCredit] = useState()
  const [movieSimilar, setMovieSimilar] = useState()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getDetail(id),
        getTrailer(id),
        getMovieCredits(id),
        getMovieSimilar(id)
      ])
        .then(([detail, trailers, credits, similar]) => {
          setMovieDetail(detail)
          setMovieTrailer(trailers)
          setMovieCredit(credits)
          setMovieSimilar(similar)
        })
        .catch((error) => console.error(error))
    }
    getAllData()
  }, [id])
  return (
    <Body>
      {movieDetail && (
        <>
          <Background image={getImages(movieDetail.backdrop_path)} />
          <Container>
            <Cover>
              <img src={getImages(movieDetail.poster_path)} />
            </Cover>
            <Info>
              <h2>{movieDetail.title}</h2>
              <SpanGenres genres={movieDetail.genres} />
              <p>{movieDetail.overview}</p>
              <div>
                <Credits credits={movieCredit} />
              </div>
            </Info>
          </Container>

          <ContainerMovies>
            {movieTrailer &&
              movieTrailer.map((video) => (
                <div key={video.id}>
                  <h4>{video.name}</h4>
                  <iframe
                    src={`https://youtube.com/embed/${video.key}`}
                    title="Youtube Video Player"
                    height="500px"
                    width="100%"
                  ></iframe>
                </div>
              ))}
          </ContainerMovies>
          {movieSimilar && <Slider info={movieSimilar} title={'Similares'} />}
        </>
      )}
    </Body>
  )
}

export default Detail
