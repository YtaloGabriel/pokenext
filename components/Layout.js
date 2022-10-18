import Head from 'next/head';

import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Head>
        <meta
          name="description"
          content="Lista de Pokémons utilizando Next.js"
        />
        <meta
          name="keywords"
          content="Ytalo Gabriel, Next.js, Next, Ytalo, Gabriel, site, projeto, github, vercel, deploy, web, desenvolvedor, programador, @ytalogabr, ytalogabr, ytalo, javascript, css, html, pokemon, pokémon, api, link, spa, react, react js, js, linkedin, maceió, alagoas, brasil"
        />
        <meta name="robots" content="index, follow" />
        <link rel="shortcut icon" href="/images/pokeball.ico" />
        <title>PokeNext</title>
      </Head>

      <Header />
      <main className="mainContainer">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
