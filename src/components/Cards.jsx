import Card from './Card';
import styles from './cards.module.css'
export default function Cards({characters,onClose}) {
  
   
   return (
      <div className={styles.container}>
         {characters.map( ch => <Card key={ch.id} character ={ch} onClose={onClose} />)}
         
      </div>);
}
