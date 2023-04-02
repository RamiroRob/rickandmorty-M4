import Card from "../Card/Card";
import styles from "./Cards.module.css"

export default function Cards(props) {
  const { characters, onClose } = props;
  let tarjetas = characters.map(elemento => 
  <Card key={elemento.name}
        id={elemento.id}
        name={elemento.name}
        species={elemento.species}
        gender={elemento.gender}
        image={elemento.image}
        onClose={() => onClose(elemento.id)}
        />)

  return <div className={styles.tarjeta}>
            {tarjetas}
         </div>;
}
