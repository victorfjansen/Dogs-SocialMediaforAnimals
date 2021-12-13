import React from 'react'
import { Route, Routes } from 'react-router'
import NotFound from '../../NotFound'
import { UserContext } from '../../UserContext'
import Feed from '../Feed/Feed'
import Head from '../Helper/Head'
import UserHeader from './UserHeader'
import UserPhotoPost from './UserPhotPost'
import UserStats from './UserStats'

const User = () => {
  const { data } = React.useContext(UserContext)

  return (
    <section className="container">
      <Head title="Minha conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  )
}

export default User
