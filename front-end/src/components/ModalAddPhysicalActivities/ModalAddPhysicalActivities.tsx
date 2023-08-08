import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonItem, IonIcon, IonInput, IonList } from '@ionic/react';
import React, { useState, useRef } from 'react';
import './ModalAddPhysicalActivities.css'
import axios from 'axios';

const ModalAddPhysicalActivities:React.FC<{ activityId: number | null }> = ({ activityId }) => {
  const [showModal, setShowModal] = useState(false);
  const [ActivityId, setActivityId] = useState(''); // Estado local para el campo ActivityId


      // abrir el modal
    const openModal = () => {
      setShowModal(true);
    }
    // cerrar el modal
    const closeModal = () => {
      setShowModal(false);
    }
    const handleSubmit = async () => {
    try {
      const formData = {

        ActivityId: ActivityId,
       
      };
      // Muestra los datos en la consola antes de enviar la solicitud a la API
      console.log('Datos del formulario:', formData);
      // Envía la solicitud POST a la API y maneja la respuesta
      const response = await axios.post('URL_DE_TU_API', formData);
      console.log('Respuesta de la API:', response.data);
  
      // Cierra el modal después de enviar los datos
      closeModal();
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      console.log(error)
      console.log(activityId)
    }
  };
  
  return (
<>
    <IonButton color="physicalActivities" onClick={openModal}>
    Agregar Actividad fisica
    </IonButton>

    <IonModal isOpen={showModal} onDidDismiss={closeModal}>
        <IonContent>
          <IonList>
            <IonItem>
            <IonInput value={activityId} onIonChange={e => setActivityId(e.detail.value!)} readonly/>
            </IonItem>

            <IonItem>
              <IonInput label="Actividad nombre :"></IonInput>
            </IonItem>

            <IonItem>
              <IonInput label="Calorias quemadas por hora : " ></IonInput>
            </IonItem>

            <IonItem>
              <IonInput label="Grupo muscular : " placeholder=""></IonInput>
            </IonItem>

            <IonItem>
              <IonInput label="Musculo nombre : " placeholder=""></IonInput>
            </IonItem>

          </IonList>
          <div className='guardarButton'>
          <IonButton expand="full" onClick={handleSubmit}>Agregar</IonButton>
        </div>
        </IonContent>
    </IonModal>

</>
);
};

export default ModalAddPhysicalActivities;
