import './App.css';
import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes, useNavigate} from 'react-router-dom'
import About from './components/About';
import Detail from './components/Detail';
import Forms from './components/Forms';
import { useLocation } from 'react-router-dom';
import Favorites from './components/Favorites';

const EMAIL = 'a@b.com';
const PASSWORD = 'aaa123'

function App() {
   const location = useLocation();
   const path = location.pathname;

   const navigate = useNavigate();
   const [ access,setAccess] = useState(false)

   function login(userData){
      if(userData.password === PASSWORD && userData.email === EMAIL){
         setAccess(true);
         navigate('/home')
      }
   }

   useEffect( () => {
      !access && navigate('/');
   },[navigate,access])

   const [ characters, setCharacters] = useState([]);
   
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function onClose(_id){
      setCharacters( characters.filter( ch => ch.id !== parseInt(_id)))
   }
   
   return (
      <div className='App'>
         {path !== '/' && (<NavBar onSearch = {onSearch}/>) }
         
         <Routes>
            <Route path='/' element={<Forms login={login}/>}></Route>
            <Route path='/home' element={<Cards characters={characters} onClose ={ onClose } />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
      </div>
   );
}

export default App;
