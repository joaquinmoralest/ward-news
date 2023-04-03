import styles from '../styles/Card.module.css'

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.tag}>Estudio</div>
      <h3>Pascua de Resurrección</h3>
      <p>El Presidente Russell M. Nelson nos ha invitado a seguir este plan de estudio durante esta semana tan especial:</p>
      <a href="https://www.churchofjesuschrist.org/study/manual/easter-plan/02-sunday?lang=spa">Plan de estudio de la Pascua de Resurrección</a>
    </div>
  )
}

export default Card