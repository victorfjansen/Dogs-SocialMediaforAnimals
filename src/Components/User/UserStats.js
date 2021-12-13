import React from 'react'
import Head from '../Helper/Head'
import useFetch from '../../Hooks/useFetch'
import { GET_STATS } from '../../Api'
import Loading from '../Helper/Loading'
import Erro from '../Helper/Erro'
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'))

const UserStats = () => {
  const { data, error, loading, request } = useFetch()

  React.useEffect(() => {
    ;(async () => {
      const token = window.localStorage.getItem('token')

      const { url, options } = GET_STATS(token)
      const { response, json } = await request(url, options)
      console.log(response, json)
    })()
  }, [request])

  if (loading) return <Loading />
  if (error) <Erro error={error} />
  if (data)
    return (
      <React.Suspense fallback={<Loading />}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    )
  else return null
}

export default UserStats
