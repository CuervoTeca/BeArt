import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonItem, IonIcon, IonButtons, IonLabel, IonCard, IonInput, IonList } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { close } from 'ionicons/icons';


const ModalCreatetBack: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [db, setDB] = useState([]);
    const [token, setToken] = useState('');

    useEffect(() => {
      // Obtén el token de autenticación (por ejemplo, desde localStorage)
      const storedToken = localStorage.getItem('accessToken');

      if (storedToken) {
        setToken(storedToken);
      }  
    }, [token]);

    var [formData, setFormData] = useState({
      Name: ''
    });

    const openModal = () => {
        setShowModal(true);
    };
        
    const closeModal = () => {
        setShowModal(false);
    };

    const handleInputChange = (event: any) => {
      // Extraer el nombre y el valor del campo de entrada del evento
      const { name, value } = event.target;
      // Actualizar el estado del formulario (formData) con los nuevos valores
      setFormData({ ...formData, [name]: value, });
    };
  
    const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault(); // Evitar que el formulario se envíe automáticamente
    
      try {      
        const response = await axios.post('http://127.0.0.1:8000/api/createBackup', formData, {
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
        console.error('Error al agregar adiccion:', error);
      }
    };

  return (
    <>
      <IonButton color="success" onClick={openModal}>
        Crear
    </IonButton>

    <IonModal isOpen={showModal} onDidDismiss={closeModal}>
      
      <IonHeader>
          <IonToolbar>
            <IonTitle size='large'>
              <div className="Close">
              Agregar Respaldo Completo
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
                <IonLabel position="floating">Nombre del respaldo completo:</IonLabel>
                <IonInput type="text" name="Name" value={formData.Name} onIonChange={handleInputChange} required />
              </IonItem>

              <IonButton expand="full" type="submit">Agregar</IonButton>
              </form>
              
            </IonList>
          </IonCard>
          </div>
           </IonContent>
           
    </IonModal>
    </>
);
};

export default ModalCreatetBack;