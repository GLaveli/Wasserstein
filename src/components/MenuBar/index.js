import { MessageModal } from '../NewTestimonialMessage/index';

import './styles.css'

function MenuBar() {
 return (
  <>
   <div className="wrapper row1">
    <div className="hoc clear">
     <nav id="mainav">
      <ul className="clear">
       <li>
        <a href="/">Pagina inicial</a>
       </li>
       <li>
        <a href="/sobre">Sobre</a>
       </li>
       <li>
        <a href="especialidades">Especialidades</a>
       </li>
       <li>
        <a href="/convenios">Convênios</a>
       </li>
       <li>
        <a href="#">Contato</a>
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



