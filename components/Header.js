import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <div className={styles.logo}>
            <Image
              src="/images/pokeball.png"
              width="50"
              height="50"
              alt="Pokeball image"
            />
            <h1>PokeNext</h1>
          </div>
        </a>
      </Link>
      <nav className={styles.navbar}>
        <ul className={styles.linkItems}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>Sobre</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
