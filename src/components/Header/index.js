import MenuBar from '../MenuBar';
import { FaWhatsapp, FaMailBulk, FaPhone } from 'react-icons/fa';

import './styles.css';

function Header({ handleOpenNewTransactionModal }) {
 return (
  <>
   <div className="wrapper row0">
    <header id="header" className="hoc clear">

     <div id="logo" className="one_quarter first">
      <h1 className="logoname clear"><a href="/"><i className="fas fa-handshake"></i> <span>Dra. Sílvia Wasserstein</span></a></h1>
      <p>Medicina Física e Reabilitação</p>
     </div>
     <div className="three_quarter">
      <ul className="nospace clear">
       <li className="one_third first">
        <div className="block clear"><i className="fas fa-phone"><FaWhatsapp /></i><span><strong>Telefone:</strong>(11) 2729-4304</span>
        </div>
        <div className="block clear"><i className="fas fa-phone"><FaWhatsapp /></i><span><strong>Telefone:</strong>(11) 2729-4304</span>
        </div>
       </li>
       <li className="one_third">
        <div className="block clear"><i className="fas fa-envelope"></i> <span><strong>E-mail:</strong> clinicar509@gmail.com</span></div>
       </li>
       <li className="one_third">
        <div className="block clear"><i className="fas fa-clock"></i> <span><strong> Seg. - Sex.:</strong> 08:00 - 17:00</span></div>
       </li>

      </ul>
     </div>

    </header>
   </div>

   <MenuBar handleOpenNewTransactionModal={handleOpenNewTransactionModal} />

  </>
 )
}


export default Header;