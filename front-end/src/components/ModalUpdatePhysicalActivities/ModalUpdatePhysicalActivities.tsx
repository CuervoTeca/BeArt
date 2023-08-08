import { IonButton, IonModal, IonContent, IonItem, IonInput, IonList } from '@ionic/react';
import React, { useState, useRef } from 'react';
import './ModalUpdatePhysicalActivities.css'

const ModalUpdatePhysicalActivities: React.FC = () => {

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
    <IonButton fill="clear"  color="secondary" onClick={openModal}>
    Actualizar
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
          <IonButton>Guardar</IonButton>
        </div>
        </IonContent>
    </IonModal>

</>
);
};

export default ModalUpdatePhysicalActivities;
