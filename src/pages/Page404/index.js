import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import './styles.css';

function Page404() {
 return (
  <>
   <div id="notfound">
    <div className="notfound">
     <div className="notfound-bg">
      <div></div>
      <div></div>
      <div></div>
     </div>
     <h1>oops!</h1>
     <h2>Essa pagina não existe</h2>
     <a href="/">Voltar para o inicio</a>
     <div className="notfound-social">
      <h5>Acesse minhas redes sociais</h5>
      <a href="#"><i className="fa fa-facebook"><FaFacebook /></i></a>
      <a href="#"><i className="fa fa-facebook"><FaTwitter /></i></a>
      <a href="#"><i className="fa fa-facebook"><FaInstagram /></i></a>
     </div>
    </div>
   </div>
  </>
 )
}

export default Page404;
