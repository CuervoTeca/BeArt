import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonItem, IonLabel, IonInput, IonList, IonButtons, IonIcon, IonCard } from '@ionic/react';
import React, { useState, useRef } from 'react';
import './ModalAddAddictions.css'
import { OverlayEventDetail } from '@ionic/core/components';
import { close } from 'ionicons/icons';
import axios from 'axios';

const ModalAddAddictions:  React.FC<{ addictionId: number | null }> = ({ addictionId }) => {

    const [showModal, setShowModal] = useState(false);
    const [IdAddicton, setIdAddicton] = useState('');
    const [NameAddiction, setNameAddiction] = useState('');
    const [UnityId, setUnityId] = useState('');
    const [UnityName, setUnityName] = useState('');

    const handleSubmit = async () => {
    try {
      const formData = {
        IdAddicton: IdAddicton,
        NameAddiction: NameAddiction,
        UnityId: UnityId,
        UnityName: UnityName
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
    }
  };
    // abrir el modal
  const openModal = () => {
    setShowModal(true);
  }
  // cerrar el modal
  const closeModal = () => {
    setShowModal(false);
  }

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
          <IonItem>
          <IonLabel position="floating">ID:</IonLabel>
          <IonInput  value={addictionId}  onIonChange={e => setIdAddicton(e.detail.value!)} />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Nombre de la addición</IonLabel>
          <IonInput value={NameAddiction} onIonChange={e => setNameAddiction(e.detail.value!)} />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Unidad ID:</IonLabel>
          <IonInput value={UnityId} onIonChange={e => setUnityId(e.detail.value!)} />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Unidad Nombre:</IonLabel>
          <IonInput value={UnityName} onIonChange={e => setUnityName(e.detail.value!)} />
        </IonItem>
          </IonList>
          <div className='guardarButton'>
            <IonButton expand="full" onClick={handleSubmit}>Agregar</IonButton>
          </div>
          
          </IonCard></div>
           </IonContent>
           
    </IonModal>
</>
);
};

export default ModalAddAddictions;