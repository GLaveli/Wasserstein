import { FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp, FaMailBulk, FaPhone, FaMapMarked } from 'react-icons/fa';

function FooterInfo() {
  return (

    <div className="wrapper row4">
      <footer id="footer" className="hoc clear">
        <div className="one_quarter first">
          <h1 className="logoname clear"><a href="index.html"><i className="fas fa-handshake"></i> <span>Dra. Sílvia Wasserstein</span></a></h1>
          <p className="btmspace-30">
            Médica há 30 anos com formação em Medicina Física e Reabilitação (Fisiatria), Acupuntura e Dor.
          </p>
          <ul className="faico clear">
            <li>
              <a className="faicon-facebook" href="#"><FaFacebook /></a>
            </li>
            <li>
              <a className="faicon-linkedin" href="#"><FaLinkedin /></a>
            </li>
            <li>
              <a className="faicon-insta" href="#"><FaInstagram /></a>
            </li>
          </ul>
        </div>

        <div className="one_quarter">
          <h6 className="heading">Horarios de atendimento</h6>
          <ul className="nospace linklist">
            <li>
              <article>
                <p className="nospace btmspace-10">Segunda a sexta-feira</p>
                <p className="nospace btmspace-10">08:00h - 17:00h</p>
              </article>
            </li>
            <li>
              <article>
                <p className="nospace btmspace-10">Sabados, domingos e feriados</p>
                <p className="nospace btmspace-10">Não atendemos</p>
              </article>
            </li>
          </ul>
        </div>

        <div className="one_quarter">
          <h6 className="heading"></h6>
        </div>

        <div className="one_quarter">
          <h6 className="heading">Contatos</h6>
          <ul className="nospace linklist contact">
            <li>
              <address>
                <FaMapMarked /> R. Borges Lagoa, 1080 <br /> Conj. 509
                Vila Clementino, São Paulo - SP <br /> CEP: 04038-002
              </address>
            </li>
            <li>
              <FaPhone /> (11) 2729-4304</li>
            <li>
              <FaWhatsapp /> (11) 94515 2685</li>
            <li>
              <FaMailBulk /> clinicar509@gmail.com</li>
          </ul>
        </div>

      </footer>
    </div>

  )
};

export default FooterInfo;