import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonItem, IonIcon, IonInput, IonList, IonButtons, IonLabel } from '@ionic/react';
import React, { useState } from 'react';
import './ModalUpdateDishes.css';
import axios from 'axios';
import { close } from 'ionicons/icons';

const ModalUpdateDishes: React.FC<{ dishId: number | null }> = ({ dishId }) => {
  const [DishId, setIdAddicton] = useState('');
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    };
    
    const closeModal = () => {
    setShowModal(false);
    };

    const handleUpdate = () => {
      // Aquí debes implementar la lógica para manejar la actualización de adicción
      const updatedData = {
        id: DishId
      };
  axios.put(`URL_DE_TU_API/${DishId}`, updatedData)
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
    <IonButton fill="clear"  color="secondary" onClick={openModal}>
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
          <IonList>
          <IonItem>
                <IonLabel position="floating">ID:</IonLabel>
                <IonInput value={dishId}  onIonChange={e => setIdAddicton(e.detail.value!)} />
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
          <IonButton expand="full" onClick={handleUpdate}>Guardar</IonButton>
        </div>
        </IonContent>
    </IonModal>

</>
);
};

export default ModalUpdateDishes;