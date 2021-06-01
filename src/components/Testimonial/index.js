import { useEffect, useState } from 'react';
import api from '../../services/api';

function Testimonial() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function loadMessages() {
      const response = await api.get('messages');


      setMessages(response.data);

      console.log(response.data);
    }
    loadMessages();
  }, []);


  return (
    <>
      <div className="wrapper row3">
        <section id="testimonials" className="hoc container clear">
          <div className="center btmspace-80">
            <h6 className="heading underline font-x2">O que meus pacientes dizem sobre mim</h6>
          </div>
          <ul className="nospace group btmspace-80">

            {messages.map((message, i) => (

              <>
                {i === 0 ?
                  <li className='one_third first'>
                    <blockquote>{message.message}</blockquote>
                    <figure className="clear"><img className="circle" src="images/demo/60x60.png" alt="" />
                      <figcaption>
                        <h6 className="heading">{message.name}</h6>
                        <em>Paciente</em></figcaption>
                    </figure>
                  </li>
                  :
                  <li className='one_third'>
                    <blockquote>{message.message}</blockquote>
                    <figure className="clear"><img className="circle" src="images/demo/60x60.png" alt="" />
                      <figcaption>
                        <h6 className="heading">{message.name}</h6>
                        <em>Paciente</em></figcaption>
                    </figure>
                  </li>
                }

              </>
            ))}
          </ul>
          {messages.length < 3 ?
            null
            :
            <footer><a className="btn" href="#">Ver mais comantários &raquo;</a></footer>
          }
        </section>
      </div>
    </>
  )
};

export default Testimonial;