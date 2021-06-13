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
        <a href="/">Pagina inicial</a>
       </li>
       <li>
        <a href="/sobre">Sobre</a>
       </li>
       <li>
        <li>
         <a href="/especialidades"> Especialidades</a>
         <ul className="border">
          <li>
           <a href="/especialidades#fisiatria">Fisiatria</a>
          </li>
          <li>
           <a href="/especialidades#acupuntura">Acupuntura</a>
          </li>
          <li>
           <a href="/especialidades#canabis">Cannabis Medicinal</a>
          </li>
          <li>
           <a href="/especialidades#dores">Dores em geral</a>
          </li>
         </ul>
        </li>
       </li>
       <li>
        <a href="/convenios">Convênios</a>
       </li>
       <li>
        <a href="/contato">Contato</a>
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



