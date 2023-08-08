import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonItem, IonLabel, IonInput, IonList } from '@ionic/react';
import React, { useState, useRef } from 'react';
import './ModalAddAddictions.css'
import { OverlayEventDetail } from '@ionic/core/components';


const ModalAddAddictions: React.FC = () => {

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
    <IonButton color="addictions" onClick={openModal}>
      Agregar Adiccion
    </IonButton>

    <IonModal isOpen={showModal} onDidDismiss={closeModal}>
        <IonContent>
          <IonList>
            <IonItem>
              <IonInput label="Id :" value="01" readonly={true}></IonInput>
            </IonItem>

            <IonItem>
              <IonInput label="Nombre de la adiccion :"></IonInput>
            </IonItem>

            <IonItem>
              <IonInput label="Unidad ID : "></IonInput>
            </IonItem>

            <IonItem>
              <IonInput label="Unidad Nombre : " placeholder=""></IonInput>
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

export default ModalAddAddictions;
