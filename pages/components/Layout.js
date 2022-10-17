import Head from 'next/head';

import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Head>
        <link rel="shortcut icon" href="/images/pokeball.ico" />
        <title>PokeNext - Home</title>
      </Head>

      <Header />
      <main className="mainContainer">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
