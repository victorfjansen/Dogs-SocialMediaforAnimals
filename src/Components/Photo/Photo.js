import React from 'react'
import { useParams } from 'react-router-dom'
import { PHOTO_GET } from '../../Api'
import useFetch from '../../Hooks/useFetch'
import Erro from '../Helper/Erro'
import Head from '../Helper/Head'
import Loading from '../Helper/Loading'
import PhotoContent from './PhotoContent'

const Photo = () => {
  const { id } = useParams()
  const { data, error, loading, request } = useFetch()

  React.useEffect(() => {
    ;(async () => {
      const { url, options } = PHOTO_GET(id)
      await request(url, options)
    })()
  }, [id, request])

  if (error) return <Erro error={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent data={data} single={true} />
      </section>
    )
  else return null
}

export default Photo
