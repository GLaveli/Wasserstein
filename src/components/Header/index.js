import MenuBar from '../MenuBar'

function Header() {
 return (
  <>
   <div class="wrapper row0">
    <header id="header" class="hoc clear">

     <div id="logo" class="one_quarter first">
      <h1 class="logoname clear"><a href="index.html"><i class="fas fa-handshake"></i> <span>Dra. Sílvia Wasserstein</span></a></h1>
      <p>Medicina Física e Reabilitação</p>
     </div>
     <div class="three_quarter">
      <ul class="nospace clear">
       <li class="one_third first">
        <div class="block clear"><i class="fas fa-phone"></i><span><strong>Telefone:</strong>(11) 2729-4304</span></div>
       </li>
       <li class="one_third">
        <div class="block clear"><a href="#"><i class="fas fa-envelope"></i></a> <span><strong>E-mail:</strong> clinicar509@gmail.com</span></div>
       </li>
       <li class="one_third">
        <div class="block clear"><a href="#"><i class="fas fa-clock"></i></a> <span><strong> Seg. - Sex.:</strong> 08:00 - 18:00</span></div>
       </li>

      </ul>
     </div>

    </header>
   </div>
   <MenuBar />
  </>
 )
}


export default Header;