import styles from '../styles/Highlight.module.css'

function Highlight() {
  return (
    <section>
      <div className='container'>
        <h2 className={styles.title}>Evento destacado</h2>
        <div className={styles.highlights}>
          <article>
            <h3>Reunión Sacramental Especial</h3>
            <p>El domingo 9 de abril se realizará una sacramental especial, la cual tendrá el propósito de conmemorar la Resurrección de Cristo.</p>
            <div className={styles.program}>
              <h4>Programa:</h4>
              <p><span>Preludio:</span> N°63, "Dime la historia de Cristo" (Por el coro)</p>
              <p><span>Preside:</span> Presidente Daniel Sierra (Primer consejero de la presidencia de estaca)</p>
              <p><span>Dirige:</span> Hno. Daniel Corrales</p>
              <p><span>Dirección musical:</span> Hna. Gloria Gómez</p>
              <p><span>Dirección coral:</span> Hna. Carla Vielma</p>
              <p><span>Pianista:</span> Hno. Anthony Macias</p>
              <p><span>Himno inicial:</span> N°73, "Yo sé que vive mi Señor" (Por la congregación)</p>
              <p><span>Oración inicial:</span> Hna. Luz Aguirre</p>
              <p><span>Himno Sacramental:</span> N°116, “Jesús, en la corte celestial” (Por la Congregación)</p>
              <p><span>Interludio:</span> "Mandó a su hijo" (Por el Coro)</p>
              <p><span>Oradores:</span> Hno. Jean Paz, Hno. Daniel Corrales, Obispo Antonio Macias</p>
              <p><span>Himno Final:</span> N°69, “¿Dónde hallo el solaz?“ (Por la Congregación)</p>
              <p><span>Oración Final:</span> Hno. Cesar Escobar</p>
            </div>
            <span className={styles.reminder}>Este día no habrá clases dominicales</span>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Highlight