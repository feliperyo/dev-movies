import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Logo from '../../assets/logo.png'
import { Container, Menu, Li } from './styles'

function Header() {
  const [changeBg, setChangeBg] = useState(false)
  const { pathname } = useLocation()

  window.onscroll = () => {
    if (!changeBg && window.pageYOffset > 75) {
      setChangeBg(true)
    }
    if (changeBg && window.pageYOffset <= 75) setChangeBg(false)
  }

  return (
    <Container changeBg={changeBg}>
      <img src={Logo} alt="logo-dev-movies" />
      <Menu>
        <Li isActive={pathname === '/'}>
          <Link to="/">Home</Link>
        </Li>
        <Li isActive={pathname.includes('filmes')}>
          <Link to="/filmes">Filmes</Link>
        </Li>
        <Li isActive={pathname.includes('series')}>
          <Link to="/series">Séries</Link>
        </Li>
      </Menu>
    </Container>
  )
}

export default Header
