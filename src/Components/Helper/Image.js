import React from 'react'
import styles from './Image.module.css'

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true)
  function handleLoad({ target }) {
    target.style.opacity = 1
    setSkeleton(e => !e)
  }
  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img onLoad={handleLoad} className={styles.img} alt={alt} {...props} />
    </div>
  )
}

export default Image
