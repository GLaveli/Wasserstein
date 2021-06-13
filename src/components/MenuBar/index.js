import { Link } from 'react-router-dom';
import { MessageModal } from '../NewTestimonialMessage/index';

import './styles.css'

function MenuBar() {
 return (
  <>
   <div className="wrapper row1 mn1">
    <div className="hoc clear mn2">
     <nav class="dp-menu">
      <ul>
       <li>
        <Link to="/">Pagina inicial</Link>
       </li>
       <li>
        <Link to="/sobre">Sobre</Link>
       </li>
       <li>
        <li>
         <Link to="/especialidades"> Especialidades</Link>
         <ul className="border">
          <li>
           <Link to="/especialidades#fisiatria">Fisiatria</Link>
          </li>
          <li>
           <Link to="/especialidades#acupuntura">Acupuntura</Link>
          </li>
          <li>
           <Link to="/especialidades#canabis">Cannabis Medicinal</Link>
          </li>
          <li>
           <Link to="/especialidades#dores">Dores em geral</Link>
          </li>
         </ul>
        </li>
       </li>
       <li>
        <Link to="/convenios">Convênios</Link>
       </li>
       <li>
        <Link to="/contato">Contato</Link>
       </li>
       <li>
        <MessageModal />
       </li>
      </ul>
     </nav>
    </div>
   </div>

  </>
 )
}


export default MenuBar;



