import { IonButton, IonModal, IonContent, IonItem, IonInput, IonList, IonHeader, IonToolbar, IonTitle, IonButtons, IonIcon, IonCard, IonLabel, IonText } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import './ModalUpdateUsers.css'
import { close } from 'ionicons/icons';
import axios from 'axios';


const ModalUpdateUsers: React.FC<{ id: number | null }> = ({ id }) => {

  const [showModal, setShowModal] = useState(false);

  // abrir el modal
  const openModal = () => {
    setShowModal(true);
  }
  //
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName1: '',
    LastName2: '',
    BirthDate: "",
    City: "",
    CountryID: 1,
    PhoneNumber: "",
    EmailAddress: "",
    FacebookName: "",
    Instagram: "",
    Twitter: "",
    Weight: "",
    Height: "",
    Password: "",
    Password_confirmation: ""
  });

  const handleInputChange = (event: any) => {
    // Extraer el nombre y el valor del campo de entrada del evento
    const { name, value } = event.target;
    // Actualizar el estado del formulario (formData) con los nuevos valores
    setFormData({ ...formData, [name]: value, });
  };

  // cerrar el modal
  const closeModal = () => {
    setShowModal(false);
  }

  const [token, setToken] = useState('');


  useEffect(() => {
    // Obtén el token de autenticación (por ejemplo, desde localStorage)
    const storedToken = localStorage.getItem('accessToken');
    console.log(storedToken)
    if (storedToken) {
      setToken(storedToken);
    }
  }, [token]);

  // Realiza la solicitud GET a la API con el token en la cabecera
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    try {
      const response = await axios.put('http://127.0.0.1:8000/api/updateUser/' + id , formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.status === 200) {
        closeModal(); // Cerrar el modal después de un registro exitoso
      }
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  };

  return (
    <>
      <IonButton fill="clear" color="secondary" onClick={openModal}>
        Actualizar
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

          <IonList>
              <form onSubmit={handleSubmit}>
                <IonItem>
                  <IonLabel position="floating">Nombre:</IonLabel>
                  <IonInput type="text" name="FirstName" value={formData.FirstName} onIonChange={handleInputChange} required />
                </IonItem>

                <IonItem>
                  <IonLabel position="floating">Apellido Paterno:</IonLabel>
                  <IonInput type="text" name="LastName1" value={formData.LastName1} onIonChange={handleInputChange} required />
                </IonItem>

                <IonItem>
                  <IonLabel position="floating">Apellido Materno:</IonLabel>
                  <IonInput type="text" name="LastName2" value={formData.LastName2} onIonChange={handleInputChange} required />
                </IonItem>

                <IonItem>
                  <IonLabel position="floating">Fecha de nacimiento:</IonLabel>
                  <IonInput type="date" name="BirthDate" value={formData.BirthDate} onIonChange={handleInputChange} required />
                </IonItem>

                <IonItem>
                  <IonLabel position="floating">Ciudad :</IonLabel>
                  <IonInput type="text" name="City" value={formData.City} onIonChange={handleInputChange} required />
                </IonItem>

                <IonItem>
                  <IonLabel position="floating">Telefono:</IonLabel>
                  <IonInput type="number" name="PhoneNumber" value={formData.PhoneNumber} onIonChange={handleInputChange} required />
                </IonItem>

                <IonItem>
                  <IonLabel position="floating">Correo electrónico:</IonLabel>
                  <IonInput type="email" name="EmailAddress" value={formData.EmailAddress} onIonChange={handleInputChange} required />
                </IonItem>

                <IonItem>
                  <IonLabel position="floating">Facebook:</IonLabel>
                  <IonInput type="text" name="FacebookName" value={formData.FacebookName} onIonChange={handleInputChange} />
                </IonItem>

                <IonItem>
                  <IonLabel position="floating">Instagram:</IonLabel>
                  <IonInput type="text" name="Instagram" value={formData.Instagram} onIonChange={handleInputChange} />
                </IonItem>

                <IonItem>
                  <IonLabel position="floating">Twitter:</IonLabel>
                  <IonInput type="text" name="Twitter" value={formData.Twitter} onIonChange={handleInputChange} />
                </IonItem>

                <IonItem>
                  <IonLabel position="floating">Peso:</IonLabel>
                  <IonInput type="number" name="Weight" value={formData.Weight} onIonChange={handleInputChange} required />
                </IonItem>

                <IonItem>
                  <IonLabel position="floating">Altura:</IonLabel>
                  <IonInput type="number" name="Height" value={formData.Height} onIonChange={handleInputChange} required />
                </IonItem>

                <IonItem>
                  <IonLabel position="floating">Contraseña*:</IonLabel>
                  <IonInput type="password" name="Password" value={formData.Password} onIonChange={handleInputChange} required minlength={8} />
                  {formData.Password.length < 8 && (
                    <IonText color="danger" >La contraseña debe tener al menos 8 caracteres.</IonText>
                  )}
                </IonItem>

                <IonItem>
                  <IonLabel position="floating">Confirmar contraseña*:</IonLabel>
                  <IonInput type="password" name="Password_confirmation" value={formData.Password_confirmation} onIonChange={handleInputChange} required minlength={8} />
                  {formData.Password_confirmation !== formData.Password && (
                    <IonText color="danger">Las contraseñas no coinciden.</IonText>
                  )}
                </IonItem>

                <IonButton expand="full" type="submit" color='users'>Actualizar</IonButton>
              </form>
            </IonList>

          </IonCard>
        </IonContent>
      </IonModal>

    </>
);
};

export default ModalUpdateUsers;
