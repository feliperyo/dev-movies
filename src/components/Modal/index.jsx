import { useEffect, useState } from 'react'
import { Container, Background } from './styles'
import api from '../../services/api'

function Modal({ movieId, setShowModal }) {
    const [movie, setMovie] = useState()

    useEffect(() => {
        async function getTrailer() {
            const { data: { results } } = await api.get(`movie/${movieId}/videos`)
            setMovie(results[0])
        }

        getTrailer()
    }, [])


    return (
        <Background onClick={() => setShowModal(false)}>
            {movie && (
                <Container>
                    <button onClick={() => setShowModal(false)}>X</button>
                    <iframe
                        src={`https://youtube.com/embed/${movie.key}`}
                        title='Youtube Video Player'
                        height='500px'
                        width='100%'
                    ></iframe>
                </Container>
            )}
        </Background>
    )
}

export default Modal