import fisiatria from '../../assets/SpecialtiesImg/fisiatria.jpg';


function Fisiatria() {

      return (
            <>
                  <div className="wrapper row3">
                        <main className="hoc container clear">
                              <article className="group">
                                    <div className="one_half first">
                                          <h6 className="heading underline font-x2">Fisiatria</h6>
                                          <p className="btmspace-30">
                                                A Fisiatria é a área da medicina responsável pelo tratamento de uma ampla variedade de doenças que podem resultar
                                                em qualquer grau de incapacidade, como lombalgias até lesões mais graves como sequelas de uma lesão medular ou
                                                acidente vascular cerebral.</p>

                                          <p className="btmspace-30">
                                                O médico fisiatria é especializado em oferecer qualidade de vida, pois
                                                seu objetivo é restaurar a funcionalidade física do paciente trazendo
                                                benefícios físicos, emocionais e sociais. O médico fisiatra atende qualquer
                                                faixa etária.
                                          </p>

                                    </div>

                                    <div className="one_half">
                                          <div className="imgover" href="">
                                                <img className="borderedbox inspace-10" src={fisiatria} alt="Dra. Silvia" />
                                          </div>
                                    </div>

                              </article>

                              <h1><strong>Doenças tratadas pelo fisiatra: </strong></h1>

                              <div className="clear">
                                    <p><strong> Dores agudas e crônicas </strong></p>
                                    <p>Lombalgias, cervicalgias, tendinopatias, bursites, osteoartrite, fibromialgia, síndromes dolorosas miofasciais, lesões ocupacionais, dor neuropática;
                                    </p>

                                    <p><strong> Reabilitação oncológica </strong></p>

                                    <p>Dor crônica relacionada com o próprio tumor, metástases ou de seu tratamento, linfedema, amputações e fadiga.
                                    </p>

                                    <p><strong> Doenças neurológicas </strong></p>

                                    <p>Sequelas de AVC (AVE- acidente vascular encefálico), PC (paralisia cerebral), LM (lesão medular), neuropatias periféricas, Parkinson, entre outras.
                                    </p>

                                    <p><strong> Lesões esportivas </strong></p>

                                    <p>DTendinites, bursites, fasciíte plantar, avaliação de calçados
                                    </p>

                                    <p><strong> Reabilitação em doenças ocupacionais </strong></p>

                                    <p>A reabilitação é essencial para restaurar a atividade do paciente, ganho de força muscular, melhora de equilíbrio e coordenação, além da melhora da qualidade de sono e alterações psicológicas.
                                    </p>

                                    <p><strong> Atuação do Fisiatra</strong></p>

                                    <ul>
                                          <li>rescrição de medicações;</li>
                                          <li>Prescrição de órteses próteses e auxiliares de locomoção;</li>
                                          <li>Prescrição de tratamentos fisioterápicos, de terapia ocupacional, fonoaudiologia, psicologia e nutrição;</li>
                                          <li>Realização de procedimentos como infiltrações e bloqueios anestésicos, agulhamentos, mesoterapia;</li>
                                          <li>Aplicação de toxina botulínica para espasticidade, distonia, dor, etc.</li>
                                    </ul>



                                    <p><strong> Histórico </strong></p>
                                    <p className="btmspace-30">
                                          O médico fisiatria é especializado em oferecer qualidade de vida, pois
                                          seu objetivo é restaurar a funcionalidade física do paciente trazendo
                                          benefícios físicos, emocionais e sociais. O médico fisiatra atende qualquer
                                          faixa etária.
                                          </p>
                                    <p className="btmspace-30">
                                          Em 1947 a especialidade Medicina Física e Reabilitação foi reconhecida pelo Conselho Nacional de Especialidades Médicas Americano.
                                          </p>
                                    <p className="btmspace-30">
                                          No Brasil, somente em 1954 a Fisiatria foi estabelecida como uma especialidade médica.
                                          </p>
                              </div>
                        </main>
                  </div>
            </>
      )
}

export default Fisiatria;