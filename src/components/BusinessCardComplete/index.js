import drasilvia from '../../assets/dra-silvia-wasserstein.png'
import Curriculum from '../curriculum'

function BusinessCardComplete() {


  return (
    <>
      <div className="wrapper row3">
        <main className="hoc container clear">
          <article className="group">
            <div className="one_half first">
              <h6 className="heading underline font-x2">Dra. Sílvia Wasserstein</h6>
              <p><strong> A especialista </strong></p>
              <p className="btmspace-30">
                Médica há 30 anos com formação em Medicina Física e Reabilitação (Fisiatria), Acupuntura e Dor, atuando nestas especialidades neste período. Possui uma grande experiência no atendimento e condução do problema do paciente.
              </p>
              <p><strong> Formação acadêmica </strong></p>
              <p className="btmspace-30">
                MEDICINA - Graduação em Medicina pela Faculdade de Medicina da Universidade Estadual Paulista “Júlio de Mesquita Filho” - UNESP - Campus de Botucatu - 1981/1986.
              </p>
            </div>
            <div className="one_half">
              <div className="imgover" href="">
                <img className="borderedbox inspace-10" src={drasilvia} alt="Dra. Silvia" />
              </div>
            </div>
          </article>
          <div className="clear">
            <Curriculum />
          </div>
        </main>
      </div>
    </>
  )
}

export default BusinessCardComplete;