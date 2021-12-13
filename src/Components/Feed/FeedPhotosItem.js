import React from 'react'
import Image from '../Helper/Image'
import styles from './FeedPhotosItem.module.css'

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  return (
    <li className={styles.photo} onClick={() => setModalPhoto(photo)}>
      <Image alt={photo.title} src={photo.src} />
      <span className={styles.visualização}>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem
