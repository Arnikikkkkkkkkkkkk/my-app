import React from 'react';
import { Route, Routes} from 'react-router-dom';

import { AuthProvider } from './components/auth/auth-provider';
import Layout from './components/layout/layout';
import ProtectedRouted from './components/protected-routed/protected-routed';
import { ThemeProvider } from './components/theme/theme-provider';
import Main from './pages/main/main';
import NotFound from './pages/not-found/not-found';
import Playlist from './pages/playlist/playlist';
import LogIn from './pages/registration/login';
import Registration from './pages/registration/registration';
import SignUp from './pages/registration/signup';
import Selection from './pages/selection/selection';

const AppRoutes = () => (
  <AuthProvider>
    <ThemeProvider>
      <Routes>
        <Route path='/mini-spotyfi/' element={<Registration/>}>
          <Route index  element={<LogIn/>}/>
          <Route path='signup' element={<SignUp/>}/>
        </Route>
        <Route element={<ProtectedRouted redirectPath='/mini-spotyfi/'/>}>
          <Route path='/mini-spotyfi/:user/' element={<Layout/>}>
            <Route path='player' element={<Main/>} />
            <Route path='playlist' element={<Playlist/>}/>
            <Route path='selection/:id' element={<Selection/>}/>
          </Route>
        </Route>
        <Route path='/mini-spotyfi/:user/*' element={<NotFound/>}/>
      </Routes>
    </ThemeProvider>
  </AuthProvider>
)

export default AppRoutes;
