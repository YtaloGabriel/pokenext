import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div>
        <Image
          src="/assets/pokeball.png"
          width="30"
          height="30"
          alt="Pokeball image"
        />
        <h1>PokeNext</h1>
      </div>
      <ul>
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
  );
};

export default Navbar;
