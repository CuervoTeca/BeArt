import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonItem, IonIcon, IonInput, IonList } from '@ionic/react';
import React, { useState, useRef } from 'react';
import './ModalUpdateDishes.css'

const ModalUpdateDishes: React.FC = () => {

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
              <IonInput label="Nombre del platillo :"></IonInput>
            </IonItem>

            <IonItem>
              <IonInput label="Datos de nutricion Id : " value="01" readonly={true}></IonInput>
            </IonItem>

            <IonItem>
              <IonInput label="Calorias : " placeholder=""></IonInput>
            </IonItem>

            <IonItem>
              <IonInput label="Grasas : " placeholder=""></IonInput>
            </IonItem>

            <IonItem>
              <IonInput label="Colesterol : " placeholder=""></IonInput>
            </IonItem>

            <IonItem>
              <IonInput label="Sales : " placeholder=""></IonInput>
            </IonItem>

            <IonItem>
              <IonInput label="Fibras : " placeholder=""></IonInput>
            </IonItem>

            <IonItem>
              <IonInput label="Carbohidratos : " placeholder=""></IonInput>
            </IonItem>

            <IonItem>
              <IonInput label="Proteina : " placeholder=""></IonInput>
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

export default ModalUpdateDishes;