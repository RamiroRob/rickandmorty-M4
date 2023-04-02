import  React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'


export default function Detail() {

  const { detailId } = useParams()
  const navigate = useNavigate()

  console.log(detailId)
 
  const [character, setCharacter] = useState()
    console.log(character)

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [detailId]);

     const handleClick = () => {
        navigate('/home')
     }

  return (
    <div>
        <button onClick={handleClick}>Home</button>
        {character ? 
        <div>
            <h5>{character.name}</h5>
            <h5>{character.status}</h5>
            <h5>{character.species}</h5>
            <h5>{character.gender}</h5>
            <h5>{character.origin?.name}</h5>
            <img src={character.image} alt={character.name}/>
        </div> : ""
    }
    </div>
  )
}
