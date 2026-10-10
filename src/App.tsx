import rtcLogo from './assets/brand/rtc-consultoria.png'
import { cases, photos, services } from './content'
import './App.css'

const intro = 'RTC Consultoría acompaña a instituciones públicas, organizaciones y organismos de cooperación en procesos de desarrollo. Su experiencia integra investigación social, diagnósticos, análisis de contexto, levantamiento y sistematización de información cualitativa y cuantitativa, líneas de base, evaluaciones, planificación, monitoreo y fortalecimiento de capacidades.'

function Photo({ photo, eager = false }: { photo: typeof photos[number]; eager?: boolean }) {
  return <img className={`context-photo photo-${photo.id}`} src={photo.src} alt={photo.alt}
    width={photo.width} height={photo.height} loading={eager ? 'eager' : 'lazy'} />
}

function App() {
  return <>
    <header className="hero" id="presentacion">
      <div className="shell">
        <img className="brand" src={rtcLogo} alt="RTC Consultoría, Fortaleciendo el talento humano" width="432" height="206" />
        <div className="opening-grid">
          <div className="opening-copy">
            <p className="motto">Fortaleciendo el talento humano</p>
            <h1>Evidencia para decisiones que fortalecen el desarrollo.</h1>
            <p className="intro">{intro}</p>
            <a className="cta" href="#contacto">Ir a contacto</a>
          </div>
          <div className="opening-photo"><Photo photo={photos[1]} eager /></div>
        </div>
      </div>
    </header>
    <main>
      <section className="section services" id="servicios">
        <div className="shell">
          <h2>Servicios prioritarios</h2>
          <div className="service-grid">
            {services.map(([title, text], index) => <article className={`service-card service-${index + 1}`} key={title}>
              <div className="service-copy">
                <div className="service-marker" aria-hidden="true">
                  <span className="service-number">0{index + 1}</span>
                  <span className={`service-diagram diagram-${index + 1}`}><i /><i /><i /></span>
                </div>
                <h3 id={`servicio-${index + 1}`}>{title}</h3>
                <p>{text}</p>
              </div>
              {index === 3 && <Photo photo={photos[0]} />}
            </article>)}
          </div>
        </div>
      </section>
      <section className="section capabilities" id="capacidades">
        <div className="shell capabilities-grid">
          <div className="reading">
            <h2>Capacidades y enfoques de respaldo</h2>
            <p>RTC integra investigación social, diagnósticos, estudios cualitativos y cuantitativos, análisis sociopolítico, planificación estratégica, monitoreo y evaluación, y elaboración de materiales educativos. Su trabajo incorpora enfoques de sostenibilidad, género, pluriculturalidad e interculturalidad, gestión de riesgos y territorialidad.</p>
          </div>
          <Photo photo={photos[3]} />
        </div>
      </section>
      <section className="section experience" id="experiencia">
        <div className="shell">
          <div className="experience-intro">
            <div className="reading">
              <h2>Experiencia comprobable</h2>
              <p>La trayectoria de RTC reúne trabajos con instituciones públicas, organizaciones y cooperación internacional en líneas de base, evaluaciones, investigación y fortalecimiento de capacidades. Los casos siguientes muestran la relación entre los servicios prioritarios y contextos territoriales o institucionales documentados.</p>
            </div>
            <Photo photo={photos[2]} />
          </div>
          <div className="case-list">
            {cases.map(([title, org, text, logo, alt]) => <article className="case" key={title}>
              <div className="case-identity"><img src={logo} alt={alt} loading="lazy" /><p className="organization">{org}</p></div>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>)}
          </div>
        </div>
      </section>
      <section className="section evidence" id="evidencia">
        <div className="shell evidence-grid">
          <h2>Evidencia visual, fotografías y marcas</h2>
          <Photo photo={photos[4]} />
        </div>
      </section>
      <section className="contact" id="contacto" tabIndex={-1}>
        <div className="shell contact-grid">
          <div>
            <h2>Conversemos sobre su próximo proceso de evaluación, investigación o fortalecimiento de capacidades.</h2>
            <address>
              <a href="mailto:consultoriartc@gmail.com">consultoriartc@gmail.com</a>
              <a href="tel:+50239059217">+502 3905 9217</a>
              <span>2ª calle 4-53, zona 4, ciudad de Chimaltenango.</span>
            </address>
          </div>
          <img className="brand" src={rtcLogo} alt="RTC Consultoría" width="432" height="206" />
        </div>
      </section>
    </main>
    <footer><div className="shell">RTC Consultoría</div></footer>
  </>
}
export default App
