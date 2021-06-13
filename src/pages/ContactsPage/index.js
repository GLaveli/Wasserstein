import Maps from "../../components/Map";
import Contacts from "../../components/contacts";

function ContactsPage() {
 return (
  <>
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
