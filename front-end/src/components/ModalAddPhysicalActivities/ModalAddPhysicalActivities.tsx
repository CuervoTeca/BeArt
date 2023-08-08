import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonItem, IonIcon, IonInput, IonList } from '@ionic/react';
import React, { useState, useRef } from 'react';
import './ModalAddPhysicalActivities.css'

const ModalAddPhysicalActivities: React.FC = () => {

    const [showModal, setShowModal] = useState(false);

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
    <IonButton color="physicalActivities" onClick={openModal}>
    Agregar Actividad fisica
    </IonButton>

    <IonModal isOpen={showModal} onDidDismiss={closeModal}>
        <IonContent>
          <IonList>
            <IonItem>
              <IonInput label="Id :" value="01" readonly={true}></IonInput>
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
          <IonButton>Agregar</IonButton>
        </div>
        </IonContent>
    </IonModal>

</>
);
};

export default ModalAddPhysicalActivities;
