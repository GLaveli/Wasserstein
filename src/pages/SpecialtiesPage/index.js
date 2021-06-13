import Specialties from "../../components/Specialties";
import { Helmet } from 'react-helmet';

function SpecialtiesPage() {
 return (
  <>

   <Helmet >
    <title>fisiatria</title>
    <meta charSet="utf-8" />
    <meta name="fisiatria" content="Fisiatria" />
    <link rel="fisiatria" href="https://wasserstein.vercel.app/especialidades" />
    <meta name="keyords" content="fisiatria, " />
   </Helmet>


   <div class="wrapper row2 top-spacing40">
    <div class="center btmspace-40">
     <h6 class="heading underline font-x2">Especialidades</h6>
    </div>
   </div>
   <Specialties />
  </>
 )
}

export default SpecialtiesPage;
