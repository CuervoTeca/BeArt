import React, { useState } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonMenuButton,
  IonAvatar,
  IonLabel,
  IonItem,
  IonCheckbox,
  IonInput,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonPage,
  IonList,
  IonSegment,
  IonSegmentButton,
} from '@ionic/react';
import { menuOutline,  settingsOutline, cameraOutline, serverOutline } from 'ionicons/icons';
import './Profile.css';
import axios from 'axios';
import InfoProfile from '../../components/InfoProfile/InfoProfile';
import ReactProSidebar from '../../components/ReactProSidebar/ReactProSidebar';

const Profile: React.FC = () => {
  const [selectedSegment, setSelectedSegment] = useState("configurarPerfil");
  const [formData, setFormData] = useState({
    FirstName: 'Guillermo',
    LastName1: 'Salas',
    LastName2: 'Salas',
    BirthDate: '10/10/1998',
    EmailAddress: 'ejemplo@correo.com',
    Phone: '664749442',
    contrasena: '8datosomas',
    image:'',
  });

  const handleInputChange = (event: CustomEvent) => {
    const { name, value } = event.detail;
    setFormData({ ...formData, [name]: value });
  };

  const guardarPerfil = () => {
    // Aquí se debe implementar la lógica para guardar los cambios del perfil
    console.log("Perfil guardado:", formData);
  };

  /* SEGMENTOS */
  const handleSegmentChange = (e: CustomEvent) => {
    setSelectedSegment(e.detail.value);
  };


  /*IMAGEN*/
    const [selectedImage, setSelectedImage] = useState<File | null>(null); // Estado para almacenar la imagen seleccionada
    const handleImageInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0] || null;
      setSelectedImage(file);
    };
    const uploadImage = async () => {
      if (!selectedImage) return;
      try {
        const formData = new FormData();
        formData.append('image', selectedImage);
  
        // Reemplaza 'https://api.example.com/upload' por la URL de tu API en Laravel
        const response = await axios.post('https://api.example.com/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
  
        // Aquí puedes manejar la respuesta de la API si es necesario
        console.log('Respuesta de la API:', response.data);
        console.log(formData)
      } catch (error) {
        console.error('Error al subir la imagen:', error);
      }
    };

  return (
<div id='div-main'>
      <div id='div-menu'>
        <ReactProSidebar></ReactProSidebar>
      </div>
      <div id='div-content'>
        <IonContent>
          <IonGrid>
          <IonRow><IonCol><h1> <IonIcon className='settingsOutlineStyleIcon'  icon={settingsOutline} /> Base de datos</h1></IonCol></IonRow>
          <IonCard>
      {/* Barra de navegación */}
     

        {/* Función para cambiar de imagen  */}
      <IonItem >
          <IonGrid className="profile-container">
            <IonRow>
              <IonCol className="profile-header">
                <IonCard className="profile-background-card">
                  <img src="/src/images/logo.png" alt="Background" />
                  <label htmlFor="image-input">
                    <IonIcon icon={cameraOutline} className="camera-icon" />
                  </label>
                  <input
                    id="image-input"
                    type="file"
                    style={{ display: 'none' }}
                    accept="image/*"
                    onChange={handleImageInputChange}
                  />
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>
        <hr></hr>
      {/* Menú */}
      <IonSegment value={selectedSegment} onIonChange={handleSegmentChange} >
          <IonSegmentButton value="configurarPerfil">
            <IonLabel>Configuración</IonLabel>
          </IonSegmentButton>

        </IonSegment>
         {/* Sección de Configurar perfil */}
         {selectedSegment === "configurarPerfil" && ( 
                  <InfoProfile></InfoProfile>
                )}
 
           {/* Sección de imagenes */}
        {selectedSegment === "imagenes" && (
          <IonCard>
            {/* Aquí puedes mostrar tus imagenes */}
            <p>Mis imagenes...</p>
          </IonCard>
        )}

 
      </IonCard>
          </IonGrid>
        </IonContent>
      </div>
    </div>
  );
};

export default Profile;
