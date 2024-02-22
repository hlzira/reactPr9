import { useState } from 'react'
import Header from './components/header/header'
import Main from './pages/main/mainPage'
import Catalog from './pages/catalog/catalog'
import {Routes,Route} from 'react-router-dom'
import './assets/css/style.css'
import CardPage from './pages/CardPage/CardPage'
import AboutUs from './components/AboutUs/AboutUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element = {<Main/>} />
        <Route path="/about" element = {<AboutUs/>} />
        <Route path="/catalog" element = {<Catalog/>} />
        <Route path="/catalog/:id" element = {<CardPage />} />
      </Routes>
    </>
  )
}

export default App