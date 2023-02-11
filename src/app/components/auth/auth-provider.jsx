import React, { createContext, useState, useMemo, useCallback } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState({
    login: 'Admin',
    password: 'qwerty123',
  });

  const [auth, setAuth] = useState(false);

  const createUser = useCallback((newUser, callback) => {
    setUser({...user, ...newUser})
    callback()
  }, [user])

  const signOut = useCallback(() =>{
    setUser(null)
  }, [])

  const value = useMemo(() => ({
    user,
    createUser,
    auth,
    setAuth,
    signOut
  }), [createUser, auth, user, signOut])

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
  
}
