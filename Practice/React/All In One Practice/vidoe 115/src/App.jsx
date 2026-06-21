import './App.css'
import {createBrowserRouter, BrowserRouter,RouterProvider, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Navbar from './components/Navbar'

function App() {
  const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/login",
      element: <Login />
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
