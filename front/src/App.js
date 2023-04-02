import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Forms/Form'
import Favorites from './components/Favorites/Favorites'
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'

function App() {
  
  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false)
  const location = useLocation()
  
  const username = "ramiroroballos@gmail.com"
  const password = "ramiro123"
  const navigate = useNavigate()
  
  useEffect( () => {
    !access && navigate('/');
  },[access])
  
  const onSearch = (character) => {

    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
 
  }

  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== id))
  }

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true)
      navigate('/home')
    } else {
      alert('login incorrecto')
    }
  }


  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname !== "/" ? <div><Nav onSearch={onSearch} /> <hr /> </div> : null}
      {location.pathname === "/" ? <div><Form login={login} /> </div> : null}

      <Routes>
        <Route path="/home" element={<Cards onClose={onClose} characters={characters} />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
