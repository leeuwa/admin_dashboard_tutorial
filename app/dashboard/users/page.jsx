import Search from "@/app/ui/dashboard/search/search";
import styles from "/app/ui/dashboard/users/users.module.css";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

const UsersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Zoek een gebruiker..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Voeg toe</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <td>Naam</td>
          <td>Email</td>
          <td>Aangemaakt</td>
          <td>Rol</td>
          <td>Status</td>
          <td>Actie</td>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />John Doe
              </div>
            </td>
            <td>john@gmail.com</td>
            <td>12-11-2023</td>
            <td>Admin</td>
            <td>actief</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>Bekijk</button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>Verwijder</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default UsersPage