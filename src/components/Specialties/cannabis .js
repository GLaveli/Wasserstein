import acupuntura from '../../assets/SpecialtiesImg/canabis.png';

function Canabis() {

      return (
            <>
                  <div className="wrapper row3" id="canabis">
                        <main className="hoc container clear">
                              <article className="group">
                                    <div className="one_half first">
                                          <h6  className="heading underline font-x2">Tratamento com Cannabis Medicinal</h6>

                                          <p className="btmspace-30">
                                                A Cannabis Medicinal pode ser utilizada no tratamento de diversas patologias e diversas faixas etárias, como crianças com epilepsia de difícil controle, autismo, Paralisia Cerebral; adultos com esclerose múltipla, Doença de Parkinson, dores crônicas, dor neuropática.
                                          </p>
                                          <p className="btmspace-30">
                                                O fisiatra atua no tratamento de dores de difícil controle e o uso da Cannabis medicinal, pode ser mais uma ferramenta para otimizar esse tratamento complexo, com melhora da qualidade de vida do paciente.
                                          </p>


                                    </div>
                                    <div className="one_half">
                                          <div className="imgover" href="">
                                                <img className="borderedbox inspace-10" src={acupuntura} alt="Dra. Silvia" />
                                          </div>
                                    </div>
                              </article>

                              <div className="clear">
                                    <p className="btmspace-30">
                                          O uso recreacional da cannabis não se iguala de nenhuma forma ao uso medicinal da mesma. A utilização da Cannabis deve ser feita após avaliação e prescrição médica individualizada e deve ser tratada como qualquer outro medicamento alopático, utilizado com padronização, metodologia e ciência.
                                    </p>
                                    <p className="btmspace-30">
                                          O uso recreacional da cannabis não se iguala de nenhuma forma ao uso medicinal da mesma. A utilização da Cannabis deve ser feita após avaliação e prescrição médica individualizada e deve ser tratada como qualquer outro medicamento alopático, utilizado com padronização, metodologia e ciência.
                                    </p>

                              </div>
                        </main>
                  </div>
            </>
      )
}

export default Canabis;