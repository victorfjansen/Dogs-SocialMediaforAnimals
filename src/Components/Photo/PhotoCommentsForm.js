import React from 'react'
import { COMMENT_POST } from '../../Api'
import { ReactComponent as Enviar } from '../../assets/enviar.svg'
import useFetch from '../../Hooks/useFetch'
import Erro from '../Helper/Erro'
import styles from './PhotoCommentsForm.module.css'

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const { error, request } = useFetch()
  const [comment, setComment] = React.useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    const token = window.localStorage.getItem('token')
    const { url, options } = COMMENT_POST(id, { comment }, token)
    const { response, json } = await request(url, options)
    if (response.ok) {
      setComment('')
      setComments(comments => [...comments, json])
    }
  }

  return (
    <form
      className={`${styles.form} ${single ? styles.single : ''}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Adicione seu comentário"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      {error && <Erro error={error} />}
    </form>
  )
}

export default PhotoCommentsForm
