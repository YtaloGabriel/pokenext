import Head from 'next/head';

import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/assets/pokeball.ico" />
        <title>PokeNext - Pokémon List</title>
      </Head>

      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
