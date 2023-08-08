import React, { useState } from 'react';
import { IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, 
  IonHeader, IonIcon, IonInput, IonItem, IonLabel,
   IonModal,IonText,IonTitle, IonToast, IonToolbar } from '@ionic/react';
import { close } from 'ionicons/icons';
import './ModalPassword.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const ModalContraseña: React.FC = () => {
  //Abrir el modal
  const [showModal, setShowModal] = useState(false);
  // Data
  const [formData, setFormData] = useState({
    email: '',
  });
  // abrir el modal
  const openModal = () => {
    setShowModal(true);
  }
  // cerrar el modal
  const closeModal = () => {
    setShowModal(false);
  }

  // Función para manejar los cambios en los campos de entrada del formulario
  const handleInputChange = (event: any) => {
  // Extraer el nombre y el valor del campo de entrada del evento
  const { name, value } = event.target;
  // Actualizar el estado del formulario (formData) con los nuevos valores
  setFormData({ ...formData, [name]: value, });
};

const [ShowSuccessToast, setShowSuccessToast] = useState(false);
const [ShowErrorToast, setShowErrorToast] = useState(false);
 
  //Publica el registro en la api
  const handlePassword = async (event: any) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/Contraseña olvidada', formData);
      console.log(response.data); // La respuesta del servidor, por ejemplo, mensaje de éxito o error
     // Cerrar Modal
     setTimeout(() => {
      closeModal();
    }, 3000);

      // Mostrar el mensaje de éxito
      setShowSuccessToast(true);
      console.log('SUUUUUUUUPEEEER!');
    } catch (error) {
      console.error(error)
      setShowErrorToast(true);
      // Manejar el error en caso de que ocurra

    }
  };
  
  return (
    <>
    <IonButton className="LoginPass" fill="clear"  color="secondary" onClick={openModal}>
      Olvidaste tu contraseña?
    </IonButton>
    <IonModal isOpen={showModal} onDidDismiss={closeModal}>
      <IonHeader>
        <IonToolbar>
          <IonTitle size='large'>
            <div className="Close">
              Contraseña olvidada
              <IonButtons slot="end" onClick={closeModal}>
                <IonIcon slot="icon-only" icon={close} />
              </IonButtons>
            </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent  className='DivPassword2'>
            <div className='DivPassword'>
            <form onSubmit={handlePassword}>
              <IonItem>
                <IonLabel position="floating">Correo electrónico</IonLabel>
                <IonInput
                  type="email"
                  name="email"
                  value={formData.email}
                  onIonChange={handleInputChange}
                  required
                />
              </IonItem>
              <IonButton className="button-margin" expand="full" type="submit">
                Buscar
              </IonButton>
            </form>
            </div>
          </IonCardContent>
        </IonCard>
        <IonToast
          isOpen={true} // El Toast se mostrará automáticamente cuando se renderice
          onDidDismiss={() => {}}
          message="Contraseña enviada a tu correo"
          duration={3000}
        />
      </IonContent>
        <IonToast
          isOpen={ShowErrorToast}
          onDidDismiss={() => setShowErrorToast(false)}
          message="Cuenta inexistente.."
          duration={5000}
        />
    </IonModal>
  </>
  );
}

export default ModalContraseña;