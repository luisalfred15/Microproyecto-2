import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { Layout } from "./components/Layout/Layout";
import {
  HOME_LINK,
  LOGIN_LINK,
  REGISTER_LINK,
  PROFILE_LINK,
} from "./constants/links";
import { CharacterDetailPage } from "./pages/CharacterDetailPage/CharacterDetailPage";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="*" element={<h1>Not found</h1>} />
          <Route path={HOME_LINK} element={<HomePage />} />
          <Route path={REGISTER_LINK} element={<RegisterPage />} />
          <Route path={LOGIN_LINK} element={<LoginPage />} />
          <Route
            path={PROFILE_LINK}
            element={
              <PrivateRoute>
                <h1>PROFILE PAGE</h1>
              </PrivateRoute>
            }
          />
          <Route
            path="/films/:filmId"
            element={<CharacterDetailPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
