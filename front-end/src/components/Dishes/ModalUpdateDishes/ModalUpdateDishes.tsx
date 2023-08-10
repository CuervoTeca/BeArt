import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonItem, IonIcon, IonInput, IonList, IonButtons, IonLabel, IonCard } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import './ModalUpdateDishes.css';
import axios from 'axios';
import { close } from 'ionicons/icons';

const ModalUpdateDishes: React.FC<{ dishId: number | null }> = ({ dishId }) => {
  const [showModal, setShowModal] = useState(false);

  var [formData, setFormData] = useState({
    DishName: '',
    Calories: '',
    Fats: '',
    Collesterol: "",
    Sodium: "",
    Fiber: "",
    Carbs: "",
    Protein: ""
  });

  const handleInputChange = (event: any) => {
    // Extraer el nombre y el valor del campo de entrada del evento
    const { name, value } = event.target;
    // Actualizar el estado del formulario (formData) con los nuevos valores
    setFormData({ ...formData, [name]: value, });
  };

  const openModal = () => {
    setShowModal(true);
    };
    
    const closeModal = () => {
    setShowModal(false);
    };

    const [token, setToken] = useState('');

    useEffect(() => {
      // Obtén el token de autenticación (por ejemplo, desde localStorage)
      const storedToken = localStorage.getItem('accessToken');

      if (storedToken) {
        setToken(storedToken);
      }  
    }, [token]);

    // Realiza la solicitud GET a la API con el token en la cabecera
    const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault(); // Evitar que el formulario se envíe automáticamente
    
      try {      
        const response = await axios.put('http://127.0.0.1:8000/api/updateDish/' + dishId, formData, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.status === 200) {
          closeModal(); // Cerrar el modal después de un registro exitoso
        }

             //Actualizar cambios
     window.location.reload()
      } catch (error) {
        console.error('Error al registrar usuario:', error);
      }
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
                <form onSubmit={handleUpdate}>

                  <IonItem>
                    <IonLabel position="floating" >Id del platillo:</IonLabel>
                    <IonInput value={dishId} readonly={true} />
                  </IonItem>


                  <IonItem>
                    <IonLabel position="floating">Nombre del platillo:</IonLabel>
                    <IonInput type="text" name="DishName" value={formData.DishName} onIonChange={handleInputChange} required />
                  </IonItem>

                  <IonItem>
                    <IonLabel position="floating">Calorías:</IonLabel>
                    <IonInput type="number" name="Calories" value={formData.Calories} onIonChange={handleInputChange} required />
                  </IonItem>

                  <IonItem>
                    <IonLabel position="floating">Grasas:</IonLabel>
                    <IonInput type="number" name="Fats" value={formData.Fats} onIonChange={handleInputChange} required />
                  </IonItem>

                  <IonItem>
                    <IonLabel position="floating">Colesterol:</IonLabel>
                    <IonInput type="number" name="Collesterol" value={formData.Collesterol} onIonChange={handleInputChange} required />
                  </IonItem>

                  <IonItem>
                    <IonLabel position="floating">Sales:</IonLabel>
                    <IonInput type="number" name="Sodium" value={formData.Sodium} onIonChange={handleInputChange} required />
                  </IonItem>

                  <IonItem>
                    <IonLabel position="floating">Fibras:</IonLabel>
                    <IonInput type="number" name="Fiber" value={formData.Fiber} onIonChange={handleInputChange} required />
                  </IonItem>

                  <IonItem>
                    <IonLabel position="floating">Carbohidratos:</IonLabel>
                    <IonInput type="number" name="Carbs" value={formData.Carbs} onIonChange={handleInputChange} required />
                  </IonItem>

                  <IonItem>
                    <IonLabel position="floating">Proteína:</IonLabel>
                    <IonInput type="number" name="Protein" value={formData.Protein} onIonChange={handleInputChange} required />
                  </IonItem>

                  <IonButton expand="full" type="submit">Actualizar</IonButton>
                </form>
              </IonList>
            </IonCard>
          </div>
        </IonContent>
      </IonModal>
    </>
);
};

export default ModalUpdateDishes;