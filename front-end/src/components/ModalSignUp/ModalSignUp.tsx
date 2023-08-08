import React, { useState } from 'react';
import { IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, 
  IonHeader, IonIcon, IonInput, IonItem, IonLabel,
   IonModal,IonText,IonTitle, IonToast, IonToolbar } from '@ionic/react';
import { close } from 'ionicons/icons';
import './ModalSignUp.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const ModalSignUp: React.FC = () => {

  //Abrir el modal
  const [showModal, setShowModal] = useState(false);
  // Data
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    birthday:'',
    password: '',
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
  const handleRegister = async (event: any) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register', formData);
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
      <IonButton expand="full" color="secondary" onClick={openModal}>
        Crear una cuenta
      </IonButton>
      <IonModal isOpen={showModal} onDidDismiss={closeModal}>
        <IonHeader>
          <IonToolbar>
            <IonTitle size='large'>
              <div className="Close">
                Crear una cuenta
                <IonButtons slot="end" onClick={closeModal}>
                  <IonIcon slot="icon-only" className='closeIconfont' icon={close} />
                </IonButtons>
              </div>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
            <IonCardContent>
              <form onSubmit={handleRegister}>
                <IonItem>
                  <IonLabel position="floating">Nombre</IonLabel>
                  <IonInput
                    type="text"
                    name="name"
                    value={formData.name}
                    onIonChange={handleInputChange}
                    required
                  />
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Apellido</IonLabel>
                  <IonInput
                    type="text"
                    name="lastname" // Nombre del campo de apellido
                    value={formData.lastname}
                    onIonChange={handleInputChange}
                    required
                  />
                </IonItem>
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
                <IonItem>
                  <IonLabel position='stacked'>Fecha de nacimiento</IonLabel>
                  <IonInput
                    type="date"
                    name="birthday"
                    value={formData.birthday}
                    onIonChange={handleInputChange}
                    required
                  />
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Contraseña</IonLabel>
                  <IonInput
                    type="password"
                    name="password"
                    value={formData.password}
                    onIonChange={handleInputChange}
                    required
                    minlength={6}
                  />
                  {formData.password.length < 8 && (
                    <IonText color="danger" >La contraseña debe tener al menos 8 caracteres.</IonText>
                  )}

                </IonItem>
              </form>
            </IonCardContent>
          </IonCard>
          <IonToast
            isOpen={true} // El Toast se mostrará automáticamente cuando se renderice
            onDidDismiss={() => { }}
            message="Registro exitoso!"
            duration={3000}
          />
        </IonContent>
        <IonToast
          isOpen={ShowSuccessToast}
          onDidDismiss={() => setShowSuccessToast(false)}
          message="Registro exitoso!"
          duration={3000}
        />
        <IonToast
          isOpen={ShowErrorToast}
          onDidDismiss={() => setShowErrorToast(false)}
          message="Nombre o correo en uso."
          duration={5000}
        />
        <IonButton expand="full" type="submit"> Registrarse </IonButton>
      </IonModal>
    </>
  );
}

export default ModalSignUp;