import { FaMailBulk } from "react-icons/fa";

function Contacts() {

 return (
  <>
   <div class="wrapper row3">
    <section id="team" class="hoc container clear">

     <div class="center btmspace-80">
      <h6 class="heading underline font-x2">Contatos</h6>
     </div>

     <ul class="nospace group">
      <li class="one_third first">

       <article>
        <figure>
         <FaMailBulk />
         <figcaption class="heading">WhatsApp</figcaption>
        </figure>
        <br />
        <p>(11) 94515 2685</p>
       </article>

      </li>
      <li class="one_third">

       <article>
        <figure>
         <FaMailBulk />
         <figcaption class="heading">Telefone</figcaption>
        </figure>
        <br />
        <p>(11) 2729-4304</p>
       </article>

      </li>
      <li class="one_third">

       <article>
        <figure>
         <FaMailBulk />
         <figcaption class="heading">Email</figcaption>
        </figure>
        <br />
        <p>clinicar509@gmail.com</p>
       </article>

      </li>

     </ul>
    </section>
    <div class="center btmspace-80">
     <h6 class="heading underline font-x2">Como chegar</h6>
    </div>
   </div>
  </>
 )
}

export default Contacts;