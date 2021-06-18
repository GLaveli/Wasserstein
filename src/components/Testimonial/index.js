import { useEffect, useState } from 'react';
import api from '../../services/api';

function Testimonial({ buttonFlag }) {

  const [messages, setMessages] = useState([]);
  const [spaceClass, setSpaceClass] = useState('left-space15');

  function spaceClassCheck() {
    if (buttonFlag) {
      setSpaceClass('nospace');
    } else {
      setSpaceClass('left-space15');
    }
  }


  useEffect(() => {
    spaceClassCheck();

    async function loadMessages() {
      let response = "";

      if (buttonFlag) {
        response = await api.get('/testimunials/get3');
      } else {
        response = await api.get('/testimunials/getAll');
      }

      setMessages(response.data);
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
          <ul className={`${spaceClass} group btmspace-80`}>

            {messages.map((message, i) => (

              <>
                {i === 0 & buttonFlag ?
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
                        <em>{message.type}</em></figcaption>
                    </figure>
                  </li>
                }

              </>
            ))}
          </ul>
          {buttonFlag && messages.length >= 3 ?
            <footer><a className="btn" href="testimonial">Ver mais comentários &raquo;</a></footer>
            :
            null
          }
        </section>
      </div>
    </>
  )
};

export default Testimonial;
