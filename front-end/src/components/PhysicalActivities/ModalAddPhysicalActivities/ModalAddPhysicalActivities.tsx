import { IonButton, IonModal, IonContent, IonLabel, IonItem, IonInput, IonList, IonHeader, IonToolbar, IonIcon, IonTitle, IonButtons } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import './ModalAddPhysicalActivities.css'
import axios from 'axios';
import { close } from 'ionicons/icons';


const ModalAddPhysicalActivities:React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  // abrir el modal
  const openModal = () => {
    setShowModal(true);
  }
  //
  const [formData, setFormData] = useState({
    ActivityName: "",
    CaloriesBurnedPerHour: '',
    MuscleGroupID: ''
  });

  const handleInputChange = (event: any) => {
    // Extraer el nombre y el valor del campo de entrada del evento
    const { name, value } = event.target;
    // Actualizar el estado del formulario (formData) con los nuevos valores
    setFormData({ ...formData, [name]: value, });
  };

  // cerrar el modal
  const closeModal = () => {
    setShowModal(false);
  }

  const [token, setToken] = useState('');


  useEffect(() => {
    // Obtén el token de autenticación (por ejemplo, desde localStorage)
    const storedToken = localStorage.getItem('accessToken');
    console.log(storedToken)
    if (storedToken) {
      setToken(storedToken);
    }
  }, [token]);

  // Realiza la solicitud GET a la API con el token en la cabecera
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/createActivity', formData, {
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
    <IonButton color="physicalActivities" onClick={openModal}>
    Agregar Actividad fisica
    </IonButton>

    <IonModal isOpen={showModal} onDidDismiss={closeModal}>

    <IonHeader>
          <IonToolbar>
            <IonTitle size='large'>
              <div className="Close">
                Agregar Actividad fisica
                <IonButtons slot="end" onClick={closeModal}>
                  <IonIcon slot="icon-only" icon={close} />
                </IonButtons>
              </div>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
        <IonList>
                <form onSubmit={handleSubmit}>
                  <IonItem>
                    <IonLabel position="floating">Nombre de la actividad:</IonLabel>
                    <IonInput type="text" name="ActivityName" value={formData.ActivityName} onIonChange={handleInputChange} required />
                  </IonItem>

                  <IonItem>
                    <IonLabel position="floating">Calorías quemadas por hora:</IonLabel>
                    <IonInput type="number" name="CaloriesBurnedPerHour" value={formData.CaloriesBurnedPerHour} onIonChange={handleInputChange} required />
                  </IonItem>

                  <IonItem>
                    <IonLabel position="floating">Grupo muscular ID:</IonLabel>
                    <IonInput type="number" name="MuscleGroupID" value={formData.MuscleGroupID} onIonChange={handleInputChange} required />
                  </IonItem>

                  <IonButton expand="full" type="submit">Agregar</IonButton>
                </form>
              </IonList>
        </IonContent>
    </IonModal>

</>
);
};

export default ModalAddPhysicalActivities;
