import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonItem, IonLabel, IonInput, IonList, IonButtons, IonIcon, IonCard } from '@ionic/react';
import React, { useState, useRef } from 'react';
import axios from 'axios';
import './ModalAddDishes.css'
import { OverlayEventDetail } from '@ionic/core/components';
import { close } from 'ionicons/icons';

const ModalAddDishes: React.FC<{ dishId: number | null }> = ({ dishId }) => {

  const [showModal, setShowModal] = useState(false);
  const [dishName, setDishName] = useState('');
  const [nutritionFactsId, setNutritionFactsId] = useState('');
  const [calories, setCalories] = useState('');
  const [cholesterol, setCholesterol] = useState('');
  const [sodium, setSodium] = useState('');
  const [fiber, setFiber] = useState('');
  const [carbs, setCarbs] = useState('');
  const [protein, setProtein] = useState('');
  const [fats, setFats] = useState('');
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
      DishName: dishName,
      Calories: calories,
      Fats: fats,
      Collesterol: cholesterol,
      Sodium: sodium,
      Fiber: fiber,
      Carbs: carbs,
      Protein: protein
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

  
  return (
<>
    <IonButton color="dishes" onClick={openModal}>
      Agregar Platillo
    </IonButton>

    <IonModal isOpen={showModal} onDidDismiss={closeModal}>
      
      <IonHeader>
          <IonToolbar>
            <IonTitle size='large'>
              <div className="Close">
              Agregar platillo
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
          <IonLabel position="floating">Nombre del platillo:</IonLabel>
          <IonInput value={dishName} onIonChange={e => setDishName(e.detail.value!)} />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Datos de nutrición Id:</IonLabel>
          <IonInput value={nutritionFactsId} onIonChange={e => setNutritionFactsId(e.detail.value!)} />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Calorías:</IonLabel>
          <IonInput value={calories} onIonChange={e => setCalories(e.detail.value!)} />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Grasas:</IonLabel>
          <IonInput value={fats} onIonChange={e => setFats(e.detail.value!)} />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Colesterol:</IonLabel>
          <IonInput value={cholesterol} onIonChange={e => setCholesterol(e.detail.value!)} />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Sales:</IonLabel>
          <IonInput value={sodium} onIonChange={e => setSodium(e.detail.value!)} />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Fibras:</IonLabel>
          <IonInput value={fiber} onIonChange={e => setFiber(e.detail.value!)} />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Carbohidratos:</IonLabel>
          <IonInput value={carbs} onIonChange={e => setCarbs(e.detail.value!)} />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Proteína:</IonLabel>
          <IonInput value={protein} onIonChange={e => setProtein(e.detail.value!)} />
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

export default ModalAddDishes;
