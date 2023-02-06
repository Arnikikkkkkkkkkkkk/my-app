/* eslint import/no-cycle: [2, { maxDepth: 1 }] */

import { Routes, Route } from "react-router-dom";
import { Login } from "./components/pages/login";
import { MainPage } from "./components/pages/main";
import { Register } from "./components/pages/register";
import { Playlist } from "./components/pages/playlist";
import { Indi } from "./components/pages/indi";
import  { Hits } from "./components/pages/100hits";
import { ProtectedRoute } from "./components/protected-route/protected-route";



export function AppRoutes ({ user })  {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
        
        element={
          <ProtectedRoute isAllowed={Boolean(user)} />} >
            <Route path="/" element={<MainPage />} />
            <Route path="/playlist/" element={<Playlist />} />
            <Route path="/indi/" element={<Indi />} />
            <Route path="/hits/" element={<Hits />} />
        </Route>
        
      
    </Routes>
  );
};