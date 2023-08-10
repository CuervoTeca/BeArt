import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonItem, IonLabel, IonInput, IonList, IonButtons, IonIcon, IonCard } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import './ModalAddAddictions.css'
import { close } from 'ionicons/icons';
import axios from 'axios';

const ModalAddAddictions:  React.FC = () => {

  const [showModal, setShowModal] = useState(false);

  var [formData, setFormData] = useState({
    AddictionName: '',
    UnitID: ''
  });

  const handleInputChange = (event: any) => {
    // Extraer el nombre y el valor del campo de entrada del evento
    const { name, value } = event.target;
    // Actualizar el estado del formulario (formData) con los nuevos valores
    setFormData({ ...formData, [name]: value, });
  };

  const openModal = () => {
    setShowModal(true);
    };
    
    const closeModal = () => {
    setShowModal(false);
    };

    const [token, setToken] = useState('');

    useEffect(() => {
      // Obtén el token de autenticación (por ejemplo, desde localStorage)
      const storedToken = localStorage.getItem('accessToken');

      if (storedToken) {
        setToken(storedToken);
      }  
    }, [token]);

    // Realiza la solicitud GET a la API con el token en la cabecera
    const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault(); // Evitar que el formulario se envíe automáticamente
    
      try {      
        const response = await axios.post('http://127.0.0.1:8000/api/createAddiction', formData, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.status === 200) {
          closeModal(); // Cerrar el modal después de un registro exitoso
        }
      } catch (error) {
        console.error('Error al agregar adiccion:', error);
      }
    };

  return (
<>
    <IonButton color="addictions" onClick={openModal}>
      Agregar adicción
    </IonButton>

    <IonModal isOpen={showModal} onDidDismiss={closeModal}>
      
      <IonHeader>
          <IonToolbar>
            <IonTitle size='large'>
              <div className="Close">
              Agregar addicción
                <IonButtons slot="end" onClick={closeModal}>
                  <IonIcon slot="icon-only" icon={close} />
                </IonButtons>
              </div>
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
        <div id="modal-content">
        <IonCard>
        <IonList>
            <form onSubmit={handleUpdate}>

              <IonItem>
                <IonLabel position="floating">Nombre de la adiccion:</IonLabel>
                <IonInput type="text" name="AddictionName" value={formData.AddictionName} onIonChange={handleInputChange} required />
              </IonItem>

              <IonItem>
                <IonLabel position="floating">ID de la unidad</IonLabel>
                <IonInput type="number" name="UnitID" value={formData.UnitID} onIonChange={handleInputChange} required />
              </IonItem>

              <IonButton expand="full" type="submit">Agregar</IonButton>
              </form>
              
            </IonList>
          </IonCard>
          </div>
           </IonContent>
           
    </IonModal>
</>
);
};

export default ModalAddAddictions;