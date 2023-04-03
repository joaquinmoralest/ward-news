import Hero from './components/Hero'
import Highlight from './components/Highlight'
import Week from './components/Week'
import Welcome from './components/Welcome'

function App() {
  return (
    <>
      <Hero />
      <Welcome />
      <main>
        <Highlight />
        <Week />
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
