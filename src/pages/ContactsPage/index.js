import {} from '';
import { Helmet } from 'react-helmet';

import Maps from "../../components/Maps";
import Contacts from "../../components/contacts";

function ContactsPage() {
   return (
      <>
         <Helmet>
            <title>fisiatria</title>
            <meta charSet="utf-8" />
            <meta name="fisiatria" content="Fisiatria" />
            <link rel="fisiatria" href="https://wasserstein.vercel.app/especialidades" />
            <meta name="keyords" content="fisiatria, " />
         </Helmet>

         <div class="wrapper row2 top-spacing40">
            <div class="center btmspace-40">
               <h6 class="heading underline font-x2">Contatos</h6>
            </div>
         </div>
         <Contacts />
         <Maps />
      </>
   )
}

export default ContactsPage;
