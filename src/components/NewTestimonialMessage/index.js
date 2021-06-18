import { useState } from 'react';
import Modal from 'react-modal';
import { Container } from "./styles";
import api from '../../services/api';


Modal.setAppElement('#root')
function MessageModal() {
  const [modalIsOpne, setModalIsOpen] = useState(false);

  const [changeTitle, setChangeTitle] = useState('Paciente');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [sendCode, setSendCode] = useState('');
  const [isCheckedPray, setIsCheckedPray] = useState(true);
  const [isCheckedLike, setIsCheckedLike] = useState(false);

  function handleSelectors() {
    if (isCheckedPray === false) {
      setIsCheckedPray(true);
      setIsCheckedLike(false);
      setChangeTitle('Paciente');

    }

    if (isCheckedLike === false) {
      setIsCheckedPray(false);
      setIsCheckedLike(true);
      setChangeTitle('Amigo / companheiro de trabalho');
    }

  }

  async function handleCreateNewMessage(e) {
    e.preventDefault();

    if (sendCode !== '57989') {

      alert("Código invalido");
      return;
    }

    alert(`${name}, sua mensagem foi enviada!`);

    await api.post("message", {
      name,
      message,
      type: changeTitle
    });

    setChangeTitle('Paciente');
    setName('');
    setMessage('');
    setSendCode('');
    setIsCheckedPray(true);
    setIsCheckedLike(false);
    setModalIsOpen(false);
  }


  return (
    <>
      <button onClick={() => setModalIsOpen(true)}>Deixe sua mensagem</button>

      <Modal
        isOpen={modalIsOpne}
        onRequestClose={() => setModalIsOpen(false)}
        style={
          {
            overlay: {
              display: 'flex',
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, .5)'
            },
            content: {
              width: '750px',
              height: '500px',
              margin: 'auto',
              backgroundColor: '#fff',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              outline: 'none',
              padding: '20px'
            }
          }
        }>
        <Container onSubmit={handleCreateNewMessage}>

          <h2>Enviar mensagem como {changeTitle}!</h2>
          <input className="modal-imput" placeholder="Seu nome aqui" value={name} onChange={e => { setName(e.target.value) }} required />

          <h1 className="selectorTitle">Eu sou:</h1>
          <div className="order-selector">
            <label className="switch">
              <input name="pray" type="checkbox" checked={isCheckedPray} onClick={(e) => { handleSelectors() }} />
              <span className="slider" />
            </label>
            <h3>Paciente</h3>
          </div>

          <div className="order-selector">
            <label className="switch">
              <input type="checkbox" checked={isCheckedLike} onChange={(e) => { handleSelectors() }} />
              <span className="slider" />
            </label>
            <h3>Outros</h3>
          </div>

          <textarea
            placeholder={`Digite sua mensagem como ${changeTitle} aqui!`}
            value={message}
            onChange={e => { setMessage(e.target.value) }} required
            maxlength="250" />

          <p className="subText">Maximo de 250 caracteres</p>
          <input className="modal-imput-code" placeholder="Código"
            value={sendCode} onChange={e => { setSendCode(e.target.value) }} type="number"
            min="0" max="99999" required />

          <p className="subText">Código de envio</p>
          <div className="alignFlexButton">
            <button className="submitButton" type="submit">Enviar mensagem!</button>
            <button className="exitButton" onClick={() => setModalIsOpen(false)} >Fechar janela</button>
          </div>
        </Container>

      </Modal>
    </>
  );
};


export { MessageModal };