import styles from './pagination.module.css';

const Pagination = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button} disabled>Vorige</button>
      <button className={styles.button}>Volgende</button>

    </div>
  )
}

export default Pagination