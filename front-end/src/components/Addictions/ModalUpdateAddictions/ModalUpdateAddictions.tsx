import React, { useState, useEffect } from 'react';
import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonIcon, IonItem, IonLabel, IonInput, IonList, IonCard, IonButtons } from '@ionic/react';
import { close } from 'ionicons/icons';
import axios from 'axios';


const ModalUpdateAddictions: React.FC<{ addictionId: number | null }> = ({ addictionId }) => {
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
        const response = await axios.put('http://127.0.0.1:8000/api/updateAddiction/' + addictionId, formData, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.status === 200) {
          closeModal(); // Cerrar el modal después de un registro exitoso
        }

             //Actualizar cambios
     window.location.reload()
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
              Actualizar adicción
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
                <IonLabel position="floating" >Id de la adiccion:</IonLabel>
                <IonInput value={addictionId} readonly={true} />
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Nombre de la adiccion:</IonLabel>
                <IonInput type="text" name="AddictionName" value={formData.AddictionName} onIonChange={handleInputChange} required />
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Nombre de la unidad</IonLabel>
                <IonInput type="text" name="UnitName" value={formData.UnitID} onIonChange={handleInputChange} required />
              </IonItem>

              <IonButton expand="full" type="submit">Actualizar</IonButton>
              </form>
              
            </IonList>
          </IonCard>
        </div>
      </IonContent>
    </IonModal>
  </>
);
};


export default ModalUpdateAddictions;
