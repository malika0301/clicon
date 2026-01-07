import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import FilterPage from './pages/filterPage';
const HomePage = React.lazy(() => import("./pages/HomePage"));
const CartPage = React.lazy(() => import("./pages/CartPage"));
const FavoritePage = React.lazy(() => import("./pages/FavoritePage"));
const RegisterPage = React.lazy(() => import("./pages/RegisterPage"));
const SinglePage = React.lazy(() => import("./pages/SinglePage"));

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
      <Route path='/' element={<HomePage/>} />
          <Route path='/' element={<HomePage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='cart/:id' element={<SinglePage/>} />
          <Route path='like' element={<FavoritePage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='filter' element={<FilterPage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App