import Head from 'next/head';
import Image from 'next/image';

import styles from '../../styles/Pokemon.module.css';

export const getStaticPaths = async () => {
  const maxPokemons = 99;
  const api = 'https://pokeapi.co/api/v2/pokemon/';

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  // params
  const paths = data.results?.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pokemonId;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  return {
    props: { pokemon: data },
  };
};

const Pokemon = ({ pokemon }) => {
  return (
    <>
      <Head>
        <title>PokeNext - {pokemon.name}</title>
      </Head>

      <div className={styles.pokemonContainer}>
        {/* Get pokemon name and transforms the first letter to uppercase */}
        <h1 className={styles.pokemonTitle}>
          {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
        </h1>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          width="200px"
          height="200px"
          alt={`Imagem do pokemon ${pokemon.name}`}
        />
        <span className={styles.pokemonNumber}>#{pokemon.id}</span>
        <div className={styles.pokemonTypes}>
          <p>
            {pokemon.types.map((item, index) => (
              <span key={index}>{item.type.name}</span>
            ))}
          </p>
        </div>
        <div className={styles.pokemonBody}>
          <p>{pokemon.height * 10}cm</p>
          <p>{pokemon.weight / 10}Kg</p>
        </div>
      </div>
    </>
  );
};

export default Pokemon;
