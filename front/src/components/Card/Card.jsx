import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import { addChar, deleteChar } from '../../redux/actions'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'



function Card(props) {
   const {onClose, id, name, species, gender, image, addChar, deleteChar, myFavorites} = props
   
   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {

      if (isFav) {
         setIsFav(false)
         deleteChar(id)
      } else {
         setIsFav(true)
         addChar(props)
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.card}>
         {
         isFav ? (
      <button onClick={handleFavorite}>❤️</button>
         ) : (
      <button onClick={handleFavorite}>🤍</button>
         )
      }
         <button onClick={onClose}>X</button>
         <Link to={`/detail/${id}`} >
            <h2 className="card-title">{name}</h2>
         </Link>
         <img  className= {styles.picture}src={image} alt="" />
         <h2>{species}</h2>
         <h2>{gender}</h2>
      </div>
   );
}

const mapStateToProps = state => {
   return {
      myFavorites: state.myFavorites,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addChar: (char) => dispatch(addChar(char)),
      deleteChar: (id) => dispatch(deleteChar(id))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
