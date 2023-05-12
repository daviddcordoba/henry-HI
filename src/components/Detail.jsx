import axios from 'axios';
import { useParams } from 'react-router-dom';
import {useState,useEffect} from 'react';
import styles from './cards.module.css';

const Detail = () => {
   const {id} = useParams();
      
   const [character, setCharacter] = useState({});
      
   useEffect(() => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacter(data);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
      return setCharacter({});
   }, [id]);

return (
   <div className={styles.detail}>
               <h2>{character.name && character.name}</h2>
               <p>{character.status && character.status}</p>
               <h3>{character.gender && character.gender}</h3>
               <p>{character.origin?.name && character.origin.name}</p>
               <img src={character.image && character.image} alt='asd' width= '300px'></img>
   </div> 
)
}

export default Detail

