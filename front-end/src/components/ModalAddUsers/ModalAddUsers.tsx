import { IonButton, IonModal, IonContent, IonItem, IonInput, IonList, IonHeader, IonToolbar, IonTitle, IonButtons, IonIcon, IonCard } from '@ionic/react';
import React, { useState } from 'react';
import { close } from 'ionicons/icons';
import './ModalAddUsers.css'

const ModalAddUsers: React.FC = () => {

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
      <IonButton color="users" onClick={openModal}>
        Agregar Usuario
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

        <IonContent class="custom-modal-content">

          <IonCard>
            <IonList>
              <IonItem>
                <IonInput label="Id :" value="01" readonly={true}></IonInput>
              </IonItem>

              <IonItem>
                <IonInput label="Nombre :"></IonInput>
              </IonItem>

              <IonItem>
                <IonInput label="Apellido Paterno : " value="01" ></IonInput>
              </IonItem>

              <IonItem>
                <IonInput label="Apellido Materno : " placeholder=""></IonInput>
              </IonItem>

              <IonItem>
                <IonInput label="Cumpleaños : " placeholder=""></IonInput>
              </IonItem>

              <IonItem>
                <IonInput label="CreatedAt : " placeholder=""></IonInput>
              </IonItem>

              <IonItem>
                <IonInput label="RoleName : " placeholder=""></IonInput>
              </IonItem>

              <IonItem>
                <IonInput label="CountryName : " placeholder=""></IonInput>
              </IonItem>

              <IonItem>
                <IonInput label="City : " placeholder=""></IonInput>
              </IonItem>

              <IonItem>
                <IonInput label="PhoneNumber : " placeholder=""></IonInput>
              </IonItem>

              <IonItem>
                <IonInput label="EmailAddress : " placeholder=""></IonInput>
              </IonItem>

              <IonItem>
                <IonInput label="FacebookName : " placeholder=""></IonInput>
              </IonItem>

              <IonItem>
                <IonInput label="Instagram : " placeholder=""></IonInput>
              </IonItem>

              <IonItem>
                <IonInput label="Twitter : " placeholder=""></IonInput>
              </IonItem>

              <IonItem>
                <IonInput label="Height : " placeholder=""></IonInput>
              </IonItem>

              <IonItem>
                <IonInput label="LastUpdatedAt : " placeholder=""></IonInput>
              </IonItem>

              <IonItem>
                <IonInput label="Age : " placeholder=""></IonInput>
              </IonItem>
            </IonList>
          </IonCard>

        </IonContent>
        <IonButton color='users'>Agregar</IonButton>
      </IonModal>

    </>
);
};

export default ModalAddUsers;
