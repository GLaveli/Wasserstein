import { FaCheck } from 'react-icons/fa';

import amilImg from '../../assets/healthInsuranceImages/amil.png';
import cabesp from '../../assets/healthInsuranceImages/cabesp.png';
import careplus from '../../assets/healthInsuranceImages/careplus.png';
import cassi from '../../assets/healthInsuranceImages/cassi.png';
import dix from '../../assets/healthInsuranceImages/dix.png';
import funcesp from '../../assets/healthInsuranceImages/funcesp.png';
import gama from '../../assets/healthInsuranceImages/gama.png';
import lincx from '../../assets/healthInsuranceImages/lincx.png';
import medial from '../../assets/healthInsuranceImages/medial.png';
import omint from '../../assets/healthInsuranceImages/omint.png';
import one from '../../assets/healthInsuranceImages/one.png';
import plasac from '../../assets/healthInsuranceImages/plasac.png';

function HealthInsurance() {
 return (
  <>
   <div className="wrapper row3">
    <section id="services" className="hoc container clear">
     <div className="center btmspace-80">
      <h6 className="heading underline font-x2">Convênios</h6>
     </div>
     <ul className="nospace group">
      <li className="one_third">
       <article><a href="#"><i className="fab fa-fort-awesome"><FaCheck /></i></a>

        <img src={amilImg} />

       </article>
      </li>
      <li className="one_third">
       <article><a href="#"><i className="fab fa-deviantart"><FaCheck /></i></a>

        <img src={cabesp} />

       </article>
      </li>
      <li className="one_third">
       <article><a href="#"><i className="fab fa-sticker-mule"><FaCheck /></i></a>

        <img src={careplus} />

       </article>
      </li>
      <li className="one_third">
       <article><a href="#"><i className="fas fa-user-secret"><FaCheck /></i></a>

        <img src={cassi} />

       </article>
      </li>
      <li className="one_third">
       <article><a href="#"><i className="fas fa-quidditch"><FaCheck /></i></a>

        <img src={dix} />

       </article>
      </li>
      <li className="one_third">
       <article><a href="#"><i className="fas fa-wheelchair"><FaCheck /></i></a>

        <img src={funcesp} />

       </article>
      </li>
      <li className="one_third">
       <article><a href="#"><i className="fas fa-wheelchair"><FaCheck /></i></a>

        <img src={gama} />

       </article>
      </li>
      <li className="one_third">
       <article><a href="#"><i className="fas fa-wheelchair"><FaCheck /></i></a>

        <img src={lincx} />

       </article>
      </li>
      <li className="one_third">
       <article><a href="#"><i className="fas fa-wheelchair"><FaCheck /></i></a>

        <img src={medial} />

       </article>
      </li>
      <li className="one_third">
       <article><a href="#"><i className="fas fa-wheelchair"><FaCheck /></i></a>

        <img src={omint} />

       </article>
      </li>
      <li className="one_third">
       <article><a href="#"><i className="fas fa-wheelchair"><FaCheck /></i></a>

        <img src={one} />

       </article>
      </li>
      <li className="one_third">
       <article><a href="#"><i className="fas fa-wheelchair"><FaCheck /></i></a>

        <img src={plasac} />

       </article>
      </li>
     </ul>
    </section>
   </div>
  </>
 )
};

export default HealthInsurance;