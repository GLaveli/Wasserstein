import BusinessCardComplete from "../../components/BusinessCardComplete";
import { Helmet } from 'react-helmet';

function About() {
 return (
  <>
   <Helmet >
    <title>Sobre</title>
    <meta charSet="utf-8" />
    <meta name="curriculo" content="curriculo completo" />
    <link rel="curriculo" href="https://wasserstein.vercel.app/sobre" />
    <meta name="keyords" content="curriculo, " />
   </Helmet>

   <div className="wrapper row2 top-spacing40">
    <div className="center btmspace-40">
     <h6 className="heading underline font-x2">Currículo completo</h6>
    </div>
   </div>
   <BusinessCardComplete />
  </>
 )
}

export default About;
