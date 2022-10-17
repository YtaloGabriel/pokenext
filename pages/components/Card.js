import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/Card.module.css';

const Card = ({ pokemon }) => {
  return (
    <div className={styles.card}>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width="120px"
        height="120px"
        alt={`Imagem do pokemon ${pokemon.name}`}
      />
      <p className={styles.id}>{pokemon.id}</p>
      <h3 className={styles.title}>{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.id}`}>
        <a className={styles.button}>See Details</a>
      </Link>
    </div>
  );
};

export default Card;
