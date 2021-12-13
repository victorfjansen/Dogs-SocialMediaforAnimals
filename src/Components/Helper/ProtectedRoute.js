import React from 'react'
import { Navigate } from 'react-router'
import { UserContext } from '../../UserContext'

const ProtectedRoute = ({ children }) => {
  const login = React.useContext(UserContext)

  return !login.login ? <Navigate to="/login" /> : children
}

export default ProtectedRoute
