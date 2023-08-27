import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function WelcomeModal() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Mensaje de Bienvenida"
      shouldCloseOnOverlayClick={false}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          border: 'none',
          borderRadius: '8px',
          maxWidth: '400px',
          margin: 'auto',
          padding: '20px',
          textAlign: 'center',
        },
      }}
    >
      <h2>Bienvenido a mis proyectos iniciales de React</h2>
      <p>Espero que disfrutes explorando el código y construyendo cosas increíbles conmigo, Zachlesk. </p>
      <button onClick={closeModal}>Cerrar</button>
    </Modal>
  );
}

export default WelcomeModal;

