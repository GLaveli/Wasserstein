import { FaMailBulk } from "react-icons/fa";

function Contacts() {

 return (
  <>
   <div className="wrapper row3">
    <section id="team" className="hoc container clear">
{/* 
     <div className="center btmspace-80">
      <h6 className="heading underline font-x2">Contatos</h6>
     </div> */}

     <ul className="nospace group">
      <li className="one_third first">

       <article>
        <figure>
         <FaMailBulk />
         <figcaption className="heading">WhatsApp</figcaption>
        </figure>
        <br />
        <p>(11) 94515 2685</p>
       </article>

      </li>
      <li className="one_third">

       <article>
        <figure>
         <FaMailBulk />
         <figcaption className="heading">Telefone</figcaption>
        </figure>
        <br />
        <p>(11) 2729-4304</p>
       </article>

      </li>
      <li className="one_third">

       <article>
        <figure>
         <FaMailBulk />
         <figcaption className="heading">Email</figcaption>
        </figure>
        <br />
        <p>clinicar509@gmail.com</p>
       </article>

      </li>

     </ul>
    </section>
    <div className="center btmspace-80">
     <h6 className="heading underline font-x2">Como chegar</h6>
    </div>
   </div>
  </>
 )
}

export default Contacts;