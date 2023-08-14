import { IonButton, IonLoading, IonHeader, IonContent, IonToolbar, IonTitle, IonPopover, IonIcon, IonCardContent, IonCardHeader, IonButtons, IonLabel, IonCard } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';


const ModalResetBack: React.FC = () => {
    const history = useHistory(); // Obtiene la instancia de history para la navegación
    const [showModal, setShowModal] = useState(false);
    const [db, setDB] = useState([]);
    const [token, setToken] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Estado para controlar la pantalla de carga


        useEffect(() => {
          // Obtén el token de autenticación (por ejemplo, desde localStorage)
          const storedToken = localStorage.getItem('accessToken');
          console.log(storedToken)
          if (storedToken) {
            setToken(storedToken);
          }
      
          // Realiza la solicitud GET a la API con el token en la cabecera
          axios.get('http://127.0.0.1:8000/api/listBackups', {
            headers: {
              Authorization: `Bearer ${storedToken}`
            }
          })
            .then(response => {
              setDB(response.data);
              console.log(response.data)
            })
            .catch(error => {
              console.error('Error al obtener list backups:', error);
            });
        }, [token]);


          const handleButtonClickRestore = async () => {
            console.log('a')
            try {

              setIsLoading(true); // Ocultar pantalla de carga

              const response = await axios.get('http://127.0.0.1:8000/api/resetDatabase',{
                headers: {
                  Authorization: `Bearer ${token}`
                }
              });
        
              if (response.status === 200) {
                console.log('bien')
                setIsLoading(false); // Ocultar pantalla de carga 
                history.push('/login');
             }
        
                  //Actualizar cambios
             window.location.reload()
        
            } catch (error) {
              setIsLoading(false); // Ocultar pantalla de carga
              console.error('Error al eliminar respaldo:', error);
            }
          };

  return (
    <>
      <IonButton color="danger" onClick={() => handleButtonClickRestore()}>
        Reiniciar
      </IonButton>

      <IonLoading
        isOpen={isLoading}
        message={'Reiniciando la Base de datos...'}
        duration={10000}
      />
    </>
);
};

export default ModalResetBack;