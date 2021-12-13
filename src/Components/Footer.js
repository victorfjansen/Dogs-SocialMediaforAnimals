import React from 'react'
import styles from './Footer.module.css'
import { ReactComponent as Dog } from '../assets/dogs-footer.svg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dog />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  )
}

export default Footer
