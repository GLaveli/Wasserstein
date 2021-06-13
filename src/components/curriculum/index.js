import appointment from '../../assets/appointment.jpg';
import office1 from '../../assets/office/01.jpg';
import office2 from '../../assets/office/02.jpg';
import office3 from '../../assets/office/03.jpg';
import office4 from '../../assets/office/04.jpg';
import blank from '../../assets/office/blank.jpg';

function Curriculum() {
 return (
  <>
  
   <p><strong> Especialização </strong></p>
   <p className="btmspace-30">
    FISIATRIA - Especialização em Medicina Física e Reabilitação pela Associação de Assistência à Criança Defeituosa - AACD - São Paulo - 1988/1989.
   </p>
   <p className="btmspace-30">
    Título de Especialista pela Sociedade Brasileira de Medicina Física e Reabilitação - 1990.
   </p>
   <p className="btmspace-30">
    MEDICINA DO TRABALHO - Especialização em Medicina do Trabalho pelo Departamento de Medicina Legal, Ética Médica e Medicina Social e do Trabalho da Faculdade de Medicina da Universidade de São Paulo - USP - 1991.
   </p>
   <p className="btmspace-30">
    MEDICINA DESPORTIVA - Especialização em Medicina Desportiva pela Escola Paulista de Medicina - UNIFESP - 1994.
   </p>
   <p className="btmspace-30">
    ACUPUNTURA - Curso de Medicina Tradicional Chinesa pelo Centro de Estudo Integrado da Medicina Chinesa - São Paulo - 1995/1997.
   </p>
   <p className="btmspace-30">
    MESTRADO - Concluiu Mestrado em Ciências pelo Departamento de Pediatria da Unifesp - Escola Paulista de Medicina em 2015.
   </p>
   <p className="btmspace-30">
    DOR - Curso Pós Graduação - Especialização em cuidados ao Paciente com Dor - Hospital Sírio Libanês - IEP - São Paulo - 2016.
   </p>
   <p className="btmspace-30">
    MEDICINA ENDOCANABINÓIDE - Certificação Internacional pela WeCann. Curso iniciado em Março de 2020
   </p>

   <article className="group">
    <div className="one_half first">
     <p><strong> Especialidades </strong></p>

     <ul>
      <li>Medicina Física</li>
      <li>Reabilitação</li>
      <li>Dor</li>
      <li>Medicina Endocanabinóide</li>
      <li>Acupuntura</li>
     </ul>

    </div>
    <div className="one_half">
     <div className="imgover" href="">
      <img className="borderedbox inspace-10" src={appointment} alt="Dra. Silvia" />
     </div>
    </div>
   </article>

   <p><strong> Experiências profissionais </strong></p>

   <p className="btmspace-30">
    MÉDICA FISIATRA do Instituto de Oncologia Pediátrica - GRAACC - UNIFESP/ EPM desde 1998.
   </p>
   <p className="btmspace-30">
    Responsável pela Reabilitação em Oncologia formada por equipe multiprofissional.
   </p>
   <p className="btmspace-30">
    Membro do Grupo de Tumores Ósseos do Departamento de Ortopedia e Traumatologia da Unifesp - EPM.
   </p>
   <p className="btmspace-30">
    MÉDICA FISIATRA da Associação de Assistência à Criança Deficiente de 2010 a 2015.
   </p>
   <p className="btmspace-30">
    Médica na Oficina Ortopédica da AACD para prescrição e verificação da necessidade do uso de órteses e/ou próteses.
   </p>
   <p className="btmspace-30">
    MÉDICA FISIATRA do Grupo de Coluna da Intermédica de 2011 a 2013.
   </p>
   <p className="btmspace-30">
    MÉDICA FISIATRA da Disciplina de Fisiatria do Departamento de Ortopedia e Traumatologia da Escola Paulista de Medicina - UNIFESP/ EPM de 1990 a 2011 - Lar Escola São Francisco - Centro de Reabilitação.
   </p>
   <p className="btmspace-30">
    MÉDICA FISIATRA / ACUPUNTURISTA da Natura Cosméticos - 1998/2000.
   </p>
   <p className="btmspace-30">
    AUDITORA DE CONTAS MÈDICAS da AMIL - 1995/1997.
   </p>
   <p className="btmspace-30">
    MÉDICA do Serviço Assistencial da FORD - 1991/1994.
   </p>
   <p className="btmspace-30">
    MÉDICA FISIATRA do Hospital do Servidor Público Estadual de São Paulo - 1990/1993.
   </p>
   <p className="btmspace-30">
    INSTRUTORA DE CURSOS SOBRE LESÕES POR ESFORÇOS REPETITIVOS (LER/DORT) -Manager, Natura, Mobitel, Makita do Brasil, Banco Cidade, Banco Santander e Amershan Pharmacia Biotech.
   </p>
   <p className="btmspace-30">
    Atividades didáticas com residentes de fisiatria e ortopedia, e com alunos de especialização em fisioterapia e terapia ocupacional da Unifesp - EPM, desde 1990.
   </p>
   <p className="btmspace-30">
    Membro da Banca Examinadora para processo seletivo para residência e especialização em Medicina Física e Reabilitação da Disciplina de Fisiatria do Departamento de Ortopedia e Traumatologia da Unifesp - EPM.
   </p>
   <p className="btmspace-30">
    Nomeada PERITA MÉDICA JUDICIAL pela Juíza da 53ª Vara Trabalhista de São Paulo de 2008 a 2012.
   </p>

   <div className="one_half">
    <div className="imgover50">
     <div className="flexAlignImages">
      <img className="borderedbox inspace-10" src={blank} alt="Dra. Silvia" />
      <img className="borderedbox inspace-10" src={office4} alt="Dra. Silvia" />
      <img className="borderedbox inspace-10" src={blank} alt="Dra. Silvia" />
     </div>
     <div className="flexAlignImages">
      <img className="borderedbox inspace-10" src={office1} alt="Dra. Silvia" />
      <img className="borderedbox inspace-10" src={office2} alt="Dra. Silvia" />
      <img className="borderedbox inspace-10 correct" src={office3} alt="Dra. Silvia" />
     </div>
    </div>
   </div>

  </>
 )
}

export default Curriculum;