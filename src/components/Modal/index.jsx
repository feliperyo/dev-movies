import { useEffect, useState } from 'react'

import { getTrailers } from '../../services/getData'
import { Container, Background } from './styles'

function Modal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState()

  useEffect(() => {
    async function getTrailer() {
      setMovie(await getTrailers(movieId))
    }

    getTrailer()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Background onClick={() => setShowModal(false)}>
      {movie && (
        <Container>
          <button onClick={() => setShowModal(false)}>X</button>
          <iframe
            src={`https://youtube.com/embed/${movie.key}`}
            title="Youtube Video Player"
            height="500px"
            width="100%"
          ></iframe>
        </Container>
      )}
    </Background>
  )
}

export default Modal
