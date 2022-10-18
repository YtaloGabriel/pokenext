import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <span>PokeNext</span> &copy; 2022 - Criado por Ytalo Gabriel, com o
        curso de Next.js do Matheus Battisti.
      </p>
    </footer>
  );
};

export default Footer;
