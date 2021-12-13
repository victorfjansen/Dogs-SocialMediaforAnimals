import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import { ReactComponent as MinhasFotos } from '../../assets/feed.svg'
import { ReactComponent as Estatisticas } from '../../assets/estatisticas.svg'
import { ReactComponent as AdicionarFoto } from '../../assets/adicionar.svg'
import { ReactComponent as Sair } from '../../assets/sair.svg'
import styles from './UserHeaderNav.module.css'
import useMedia from '../../Hooks/useMedia'

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext)
  const mobile = useMedia('(max-width: 40rem)')
  const [mobileMenu, setMobilemenu] = React.useState(false)

  const { pathname } = useLocation()
  React.useEffect(() => {
    setMobilemenu(false)
  }, [pathname])

  return (
    <>
      {mobile && (
        <button
          aria-label="menu"
          className={`${styles.mobileButton} ${mobileMenu &&
            styles.mobileButtonActive}`}
          onClick={() => setMobilemenu(prevstate => !prevstate)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu &&
          styles.navMobileActive}`}
      >
        <NavLink to="/conta" end>
          <MinhasFotos />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Estatisticas />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/conta/postar">
          <AdicionarFoto />
          {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  )
}

export default UserHeaderNav
