import Image from 'next/image'
import styles from './rightbar.module.css'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>🔥 Nu beschikbaar</span>
          <h3 className={styles.title}>Hoe gebruik je het nieuwe dashboard?</h3>
          <span className={styles.subtitle}>Het duurt 4 min. om het te leren</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odit, amet at sit commodi dignissimos vel ullam perferendis eveniet alias ex sint autem rerum facere. Tempore, quo. Quia, earum nihil!
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled/>
            Kijk
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.texts}>
          <span className={styles.notification}>🚀 Komt binnenkort</span>
          <h3 className={styles.title}>Nieuwe server action zijn beschikbaar, gedeeltelijk pre-rendering komt eraan!</h3>
          <span className={styles.subtitle}>Boost je productiviteit</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odit, amet at sit commodi dignissimos vel ullam perferendis eveniet alias ex sint autem rerum facere. Tempore, quo. Quia, earum nihil!
          </p>
          <button className={styles.button}>
            <MdReadMore/>
            Leer
          </button>
        </div>
      </div>
    </div>
  )
}

export default Rightbar