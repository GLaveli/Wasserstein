import imgEscritorio from '../../assets/escritorio.png'
import drasilvia from '../../assets/dra-silvia-wasserstein.png'


function Home() {

  const bgBannerImage = {
    backgroundImage: `url(${imgEscritorio})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  const bgCurriculumImage = {
    backgroundImage: `url(${drasilvia})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <>
      <div className="wrapper bgded overlay" style={bgBannerImage}>
        <div id="pageintro" className="hoc clear">
          <article>
            <h3 className="heading">Medicina Física, Reabilitação, Dor e Acupuntura</h3>
            <footer>
              <ul className="nospace inline pushright">
                <li>
                  <a className="btn" href="#">Saiba mais</a>
                </li>
                <li>
                  <a className="btn inverse" href="#">Convenios</a>
                </li>
              </ul>
            </footer>
          </article>
        </div>
      </div>

      {/* <--------------------------------------------------------------------------> */}

      <div className="wrapper row3">
        <main className="hoc container clear">
          <article className="group">
            <div className="one_half first">
              <h6 className="heading underline font-x2">Dra. Sílvia Wasserstein</h6>
              <p><strong> A especialista </strong></p>
              <p className="btmspace-30">
                Médica há 30 anos com formação em Medicina Física e Reabilitação (Fisiatria), Acupuntura e Dor, atuando nestas especialidades neste período. Possui uma grande experiência no atendimento e condução do problema do paciente.
              </p>
              <p><strong> Especialidades </strong></p>
              <p className="btmspace-30">
                Medicina Física e Reabilitação, Dor e Acupuntura.
              </p>
              <footer>
                <a className="btn" href="#">Veja o Currículo completo </a>
              </footer>
            </div>
            <div className="one_half">
              <a className="imgover" href="#">
                <img className="borderedbox inspace-10" src={drasilvia} alt="Dra. Silvia" />
              </a>
            </div>
          </article>
          <div className="clear"></div>
        </main>
      </div>

    </>
  )
}

export default Home;
