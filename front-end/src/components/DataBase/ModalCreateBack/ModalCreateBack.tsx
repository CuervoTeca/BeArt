import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPopover, IonIcon, IonCardContent, IonCardHeader, IonButtons, IonLabel, IonCard } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ModalCreatetBack: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [db, setDB] = useState([]);
    const [token, setToken] = useState('');

    const openModal = () => {
        setShowModal(true);
        };
        
        const closeModal = () => {
        setShowModal(false);
        };

        useEffect(() => {
            // Obtén el token de autenticación (por ejemplo, desde localStorage)
            const storedToken = localStorage.getItem('accessToken');
            console.log(storedToken)
            if (storedToken) {
              setToken(storedToken);
            }
        
            // Realiza la solicitud GET a la API con el token en la cabecera
            axios.get('http://127.0.0.1:8000/api/listAddictions', {
              headers: {
                Authorization: `Bearer ${storedToken}`
              }
            });
              
          }, [token]);

  return (
    <>
      <IonButton color="success">
        Crear
      </IonButton>
    </>
);
};

export default ModalCreatetBack;