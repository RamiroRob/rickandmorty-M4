import styles from "./SearchBar.module.css"
import {useState} from 'react'

export default function SearchBar(props) {

   const { onSearch } = props

   const [character,setCharacter] = useState('')

   const handleChange = (e) => {
      setCharacter(e.target.value)
   }

   return (
      <div>
         <input className={styles.searchBar} type='search' value={character} onChange={handleChange}/>
      <button className={styles.searchBar} onClick={()=> {onSearch(character)}}>Agregar</button>
      </div>
   );
}
