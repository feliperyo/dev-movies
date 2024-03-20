import api from '../../services/api'

function Home() {
  async function getMovies() {
    const data = await api.get('/movie/popular')
    console.log(data)
  }

  getMovies()

  return (
    <>
      <h1>Home</h1>
      <p>Essa é a Home</p>
    </>
  )
}

export default Home
