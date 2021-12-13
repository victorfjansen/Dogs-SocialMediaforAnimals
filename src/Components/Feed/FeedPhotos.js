import React from 'react'
import { PHOTOS_GET } from '../../Api'
import useFetch from '../../Hooks/useFetch'
import Erro from '../Helper/Erro'
import Loading from '../Helper/Loading'
import FeedPhotosItem from './FeedPhotosItem'
import styles from './FeedPhotos.module.css'

const FeedPhotos = ({ user, setModalPhoto, page, setInfinite }) => {
  const { data, loading, error, request } = useFetch()

  React.useEffect(() => {
    ;(async () => {
      const total = 6
      const { url, options } = PHOTOS_GET({ page, total, user })
      const { response, json } = await request(url, options)
      if (response && response.ok && json.length < total) setInfinite(false)
    })()
  }, [request, user, page, setInfinite])

  if (error) return <Erro error={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map(item => (
          <FeedPhotosItem
            key={item.id}
            photo={item}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    )
  if (data === null) return <h1>Ops, ainda não há nada por aqui!</h1>
  else return null
}

export default FeedPhotos
