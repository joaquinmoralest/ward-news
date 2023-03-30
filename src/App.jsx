import './App.css'

function App() {
  return (
    <>
      <div className='hero'>
        <h1>Barrio <br />Las avenidas</h1>
      </div>

      <section className='welcome'>
        <div className='container'>
          <h2>Bienvenidos</h2>
          <p>Las actividades que la iglesia realiza, tanto a nivel de barrio como de estaca, tienen como finalidad congregarnos como hermanos, ministrarnos, desarrollarnos como hijos de Dios y ayudarnos entre todos para alcanzar nuestro potencial divino. ¡Les invitamos a participar con nosotros!</p>
          </div>
      </section>

      <main>
        <section>
          <div className='container highlight-events'>
            <h2>Eventos destacados</h2>
            <div className='highlights'>
              <article>
                <h3>Conferencia General</h3>
                <p>La conferencia general se realizará los días 1 y 2 de abril en el siguiente horario:</p>
                <div className='program'>
                  <h4>Sábado 1</h4>
                  <div className='cronogram'>
                    <div className='sesion'>
                      <p>Sesión de la mañana</p>
                      <p>Sesión de la tarde</p>
                      <p>Sesión de la noche</p>
                    </div>
                    <div className='time'>
                      <p>13:00 hrs.</p>
                      <p>17:00 hrs.</p>
                      <p>21:00 hrs.</p>
                    </div>
                  </div>
                  <h4>Domingo 2</h4>
                  <div className='cronogram'>
                    <div className='sesion'>
                      <p>Sesión de la mañana</p>
                      <p>Sesión de la tarde</p>
                    </div>
                    <div className='time'>
                      <p>12:00 hrs.</p>
                      <p>16:00 hrs.</p>
                    </div>
                  </div>
                  <h4>¿Dónde puedo verla?</h4>
                  <p>La conferencia será transmitida a través de los siguientes canales:</p>
                  <a href="https://www.churchofjesuschrist.org/?lang=spa">La iglesia de Jesucristo de los Santos de los Ultimos Días</a>
                  <a href="https://www.youtube.com/@IglesiadeJesucristoESP">Youtube - Iglesia de Jesucristo</a>
                </div>
              </article>
              <article>
                <h3>Reunión Sacramental Especial</h3>
                <p>El domingo 9 de abril se realizará una sacramental especial, la cual tendrá el propósito de conmemorar la Resurrección de Cristo.</p>
                <div className='program'>
                  <h4>Programa:</h4>
                  <p><span>Preludio:</span> N°63, "Dime la historia de Cristo" (Por el coro)</p>
                  <p><span>Preside:</span> Obispo Antonio Macias</p>
                  <p><span>Dirige:</span> Hno. Daniel Corrales</p>
                  <p><span>Dirección musical:</span> Hna. Gloria Gómez</p>
                  <p><span>Dirección coral:</span> Hna. Carla Vielma</p>
                  <p><span>Pianista:</span> Anthony Macias</p>
                  <p><span>Himno inicial:</span> N°73, "Yo sé que vive mi Señor" (Por la congregación)</p>
                  <p><span>Oración inicial:</span> Hna. Luz Aguirre</p>
                  <p><span>Himno Sacramental:</span> N°116, “Jesús, en la corte celestial” (Por la Congregación)</p>
                  <p><span>Interludio:</span> "Mandó a su hijo" (Por el Coro)</p>
                  <p><span>Oradores:</span> Hno. Jean Paz, Hno. Daniel Corrales, Obispo Antonio Macias</p>
                  <p><span>Himno Final:</span> N°69, “¿Dónde hallo el solaz?“ (Por la Congregación)</p>
                  <p><span>Oración Final:</span> Hno. Luis Quilobran</p>
                </div>
                <span className='reminder'>Este día no habrá clases dominicales</span>
              </article>
            </div>
          </div>
        </section>

        <section>
          <div className='container'>
            <h2>Anuncios</h2>
            <h3>Proximamente...</h3>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
