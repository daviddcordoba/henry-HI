import styles from './card.module.css'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { addFav,removeFav } from '../redux/actions';
import { useState,useEffect } from 'react';


function Card({character,onClose,addFav,removeFav,myFavorites}){
   const [isFav,setIsFav] = useState(false);

   const handleFavorite = () => {
      isFav 
         ? removeFav(character.id) 
         : addFav(character) 
      setIsFav(!isFav)
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === character.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites,character.id]);
   
   return(
      <div className={styles.card}>
         <div className={styles.header}>            
            <button onClick={handleFavorite}>{isFav ? `❤️`:`🤍`}</button>
            <Link to={`/detail/${character.id}`}><h2>{character.name}</h2></Link>
            <button onClick={() => onClose(character.id)}>X</button>
         </div>
         <img src={character.image} alt='' />
         <h2>{character.status}</h2>
         <h2>{character.species}</h2>
         <h2>{character.gender}</h2>
         <h2>{character.origin.name}</h2>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return{
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card)

