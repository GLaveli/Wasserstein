import MenuBar from '../MenuBar';
import { FaWhatsapp, FaMailBulk, FaPhone } from 'react-icons/fa';

import './styles.css';

function Header({ handleOpenNewTransactionModal }) {

 const apiMessage = 'Olá!';
 const apiNumber = '5548996257220';
 const apiWhasapp = `https://api.whatsapp.com/send?phone=${apiNumber}&text=${apiMessage}`;

 return (
  <>
   <div className="wrapper row0">
    <header id="header" className="hoc clear">

     <div id="logo" className="one_quarter first">
      <h1 className="logoname clear"><a href="/"><i className="fas fa-handshake"></i> <span>Dra. Sílvia Wasserstein</span></a></h1>
      <p>Medicina Física e Reabilitação</p>
      <br />
     </div>
     <div className="three_quarter">
      <ul className="nospace clear">

       <li className="one_third first">
        <a href={apiWhasapp} target="_blank" rel="noreferrer">
         <div className="block clear"><i className="fas fa-phone"><FaWhatsapp /></i><span><strong>Watsapp:</strong>(11) 94515-2685</span></div>
        </a>
       </li>
       <li className="one_third">
        <div className="block clear"><i className="fas fa-envelope"><FaPhone /></i><span><strong>Telefone</strong> (11) 2729-4304</span></div>
       </li>
       <li className="one_third">
        <div className="block clear"><i className="fas fa-envelope"><FaMailBulk /></i> <span><strong>E-mail:</strong> clinicar509@gmail.com</span></div>
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