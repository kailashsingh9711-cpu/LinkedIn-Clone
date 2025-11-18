import React from 'react'
import { AuthDataContext } from './AuthContext'

const Authcontext = ({ children }) => {

  const serverUrl = "http://localhost:8000"
  const value = { serverUrl }

  return (
    <AuthDataContext.Provider value={value}>
      {children}
    </AuthDataContext.Provider>
  )
}

export default Authcontext;
