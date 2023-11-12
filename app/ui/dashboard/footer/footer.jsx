import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Adrie van Leeuwen</div>
      <div className={styles.text}>© Copyright</div>
    </div>
  )
}

export default Footer