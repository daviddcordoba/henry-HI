import { useState } from "react";

export default function SearchBar({onSearch}) {

   const [id, setId] = useState('');

   const handleChange = (e) => {
      setId(e.target.value);
      
      
   }
   return (
      <div>
         <input type='search' onChange={handleChange} value={id}></input>
         <button onClick={()=>onSearch(id)}>Agregar</button>
      </div>
   );
}
