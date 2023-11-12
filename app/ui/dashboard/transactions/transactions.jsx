import Image from 'next/image'
import styles from './transactions.module.css'

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Laatste transacties</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Naam</td>
            <td>Status</td>
            <td>Datum</td>
            <td>Hoeveelheid</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Loopt</span>
            </td>
            <td>11-11-2023</td>
            <td>€2.500</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Gereed</span>
            </td>
            <td>11-11-2023</td>
            <td>€2.500</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>Geannuleerd</span>
            </td>
            <td>11-11-2023</td>
            <td>€2.500</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transactions