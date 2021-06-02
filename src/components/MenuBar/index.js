import { MessageModal } from '../NewTestimonialMessage/index';


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
        <a className="drop" href="#">Especialidades</a>
        <ul>
         <li>
          <a href="pages/gallery.html">Fisiatria</a>
         </li>
         <li>
          <a href="pages/full-width.html">Tratamento de dores</a>
         </li>
         <li>
          <a href="pages/sidebar-left.html">Acupuntura</a>
         </li>
        </ul>
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



