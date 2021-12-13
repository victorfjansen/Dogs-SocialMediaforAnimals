import React from 'react'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router'

const UserHeader = () => {
  const [title, setTitle] = React.useState('')
  const location = useLocation()

  React.useEffect(() => {
    const { pathname } = location

    switch (pathname) {
      case '/conta':
        setTitle('Minha Conta')
        break
      case '/conta/estatisticas':
        setTitle('Estatísticas')
        break
      case '/conta/postar':
        setTitle('Poste Sua foto')
        break
      default:
        break
    }
  }, [location])
  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  )
}

export default UserHeader
