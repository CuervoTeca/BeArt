import React, { useState } from 'react';
import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonIcon, IonItem, IonLabel, IonInput, IonList, IonCard, IonButtons } from '@ionic/react';
import { close } from 'ionicons/icons';
import axios from 'axios';


const ModalUpdateAddictions: React.FC<{ addictionId: number | null }> = ({ addictionId }) => {
  const [showModal, setShowModal] = useState(false);
  const [IdAddicton, setIdAddicton] = useState('');
  const [NameAddiction, setNameAddiction] = useState('');
  const [UnityId, setUnityId] = useState('');
  const [UnityName, setUnityName] = useState('');

  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }


    // Función para manejar la actualización
    const handleUpdate = () => {
      // Aquí debes implementar la lógica para manejar la actualización de adicción
      const updatedData = {
        Id: IdAddicton,
        Name: NameAddiction,
        UnityId: UnityId,
        UnityName: UnityName
      };
  axios.put(`URL_DE_TU_API/${IdAddicton}`, updatedData)
  .then(response => {
    // Manejar la respuesta de la API y actualizar la vista si es necesario
    console.log('Respuesta de la API:', response.data);
    // Por ejemplo, podrías cerrar el modal después de la actualización
    closeModal();
  })
  .catch(error => {
    // Manejar los errores
    console.log(updatedData);
    console.error('Error al actualizar la adicción:', error);
  });
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
              <IonItem>
                <IonLabel position="floating">ID:</IonLabel>
                <IonInput value={addictionId}  onIonChange={e => setIdAddicton(e.detail.value!)} />
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Nombre de la adicción:</IonLabel>
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
              <IonButton expand="full" onClick={handleUpdate}>Actualizar</IonButton>
            </div>
          </IonCard>
        </div>
      </IonContent>
    </IonModal>
  </>
);
};


export default ModalUpdateAddictions;
