import imgEscritorio from '../../assets/escritorio.png';

import './styles.css';

function Banner() {

 const bgBannerImage = {
  backgroundImage: `url(${imgEscritorio})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
 }

 return (
  <>
   <div className="wrapper bgded overlay" style={bgBannerImage}>
    <div id="pageintro" className="hoc clear">
     <article>
      <h3 className="heading">Medicina Física, Reabilitação, Dor e Acupuntura</h3>
      <footer>
       <ul className="nospace inline pushright">
        {/* <li>
         <a className="btn" href="#">Saiba mais</a>
        </li> */}
        <li>
         <a className="btn inverse" href="/convenios">Convênios</a>
        </li>
       </ul>
      </footer>
     </article>
    </div>
   </div>
  </>
 )
}

export default Banner;
