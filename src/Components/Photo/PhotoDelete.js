import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PHOTO_DELETE } from '../../Api'
import useFetch from '../../Hooks/useFetch'
import styles from './PhotoDelete.module.css'

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch()
  const token = window.localStorage.getItem('token')
  const navigate = useNavigate()

  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar?')
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id, token)
      const { response } = await request(url, options)
      if (response.ok) {
        navigate('/')
        navigate('/conta')
      }
    }
  }
  return (
    <>
      {loading ? (
        <button disabled onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  )
}

export default PhotoDelete
