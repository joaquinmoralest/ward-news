import styles from '../styles/Welcome.module.css'

function Welcome() {
  return (
    <section className={styles.welcome}>
      <div className={styles.container}>
        <h2>Bienvenidos</h2>
        <p>Las actividades que la iglesia realiza tienen como finalidad congregarnos como hermanos, ministrarnos, desarrollarnos como hijos e hijas de Dios y ayudarnos entre todos para alcanzar nuestro potencial divino. ¡Les invitamos a participar con nosotros!</p>
      </div>
    </section>
  )
}

export default Welcome