import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/About.module.css';

const about = () => {
  return (
    <>
      <Head>
        <title>PokeNext - About</title>
      </Head>

      <section className={styles.about}>
        <h1 className={styles.title}>Sobre o Projeto</h1>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          consequuntur quod, temporibus quaerat asperiores veniam eligendi
          excepturi quis perspiciatis, mollitia sint. Animi tenetur et ullam
          maiores quidem illo, numquam obcaecati. Vel libero quidem ex labore,
          cupiditate provident ipsa quis tenetur ab sint architecto sequi culpa
          repellendus neque beatae ipsam eum aut ea quia animi vero velit
          dignissimos sed. Excepturi, magni.
        </p>
        <Image
          src="/images/pikachu.png"
          width="200px"
          height="180px"
          alt="Imagem do Pikachu"
        />
      </section>
    </>
  );
};

export default about;
