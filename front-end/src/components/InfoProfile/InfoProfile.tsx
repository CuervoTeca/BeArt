import React, { useState } from 'react';
import {
  // Importación de componentes de Ionic
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
  IonCardTitle,
  IonCardContent,
} from '@ionic/react';
import './InfoProfile.css';
import axios from 'axios';

const InfoProfile: React.FC = () => {
  // Espacio
  const tab = <>&nbsp;</>;

  // Estado para controlar el segmento seleccionado (Mis datos o Mis redes sociales)
  const [selectedSegment, setSelectedSegment] = useState("configurarPerfil");

  // Estado para almacenar los datos del formulario del perfil
  const [formData, setFormData] = useState({
    FirstName: 'Guillermo',
    LastName1: 'Salas',
    LastName2: 'Salas',
    BirthDate: '10/10/1998',
    EmailAddress: 'ejemplo@correo.com',
    Phone: '664749442',
    contrasena: '8datosomas',
    image: '',
  });

  // Función para manejar el cambio en los campos del formulario
  const handleInputChange = (event: CustomEvent) => {
    const { name, value } = event.detail;
    setFormData({ ...formData, [name]: value });
  };

  // Función para guardar los cambios en el perfil (con validación)
const guardarPerfil = () => {
  // Verificar que los campos obligatorios no estén vacíos
  if (!formData.FirstName || !formData.EmailAddress || !formData.contrasena) {
    alert("Por favor, completa todos los campos obligatorios.");
    return;
  }

  // Aquí se puede agregar más lógica de validación si es necesario
  // Por ejemplo, validar que el formato del correo electrónico sea válido, etc.

  // Si todos los campos obligatorios están llenos, procedemos a guardar el perfil
  console.log("Perfil guardado:", formData);
};

  // Estado para almacenar la imagen seleccionada
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  // Función para manejar el cambio en la selección de la imagen
  const handleImageInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedImage(file);
  };

  // Función para subir la imagen seleccionada a través de una API (a implementar)
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
      console.log(formData);
    } catch (error) {
      console.error('Error al subir la imagen:', error);
    }
  };

  // Función para manejar el cambio en la selección del segmento (Mis datos o Mis redes sociales)
  const handleSegmentChange = (e: CustomEvent) => {
    setSelectedSegment(e.detail.value);
  };

  return (
    <>
      {/* Barra de navegación */}
      <IonGrid>
        <IonRow>
          <IonCol>
            {/* Menú */}
            <IonList>
              {/* Segmento para seleccionar Mis datos o Mis redes sociales */}
              <IonSegment value={selectedSegment} onIonChange={handleSegmentChange}>
                <IonCol>
                  <IonSegmentButton value="configurarPerfil">

                   Mis datos
                  </IonSegmentButton>

                </IonCol>
              </IonSegment>
            </IonList>
          </IonCol>
          <IonCol size="8" className='scroll'  >
            {/* Sección de Configurar perfil */}
            {selectedSegment === "configurarPerfil" && (
            <form>
            <IonList>
              <IonItem className="ItemProfile">
                <IonLabel position="floating">Nombre:</IonLabel>
                <IonInput
                  type="text"
                  name="nombre"
                  value={formData.FirstName}
                  onIonChange={handleInputChange}
                />
              </IonItem>
              <IonItem className="ItemProfile">
                <IonLabel position="floating">Apellido 1:</IonLabel>
                <IonInput
                  type="text"
                  name="apellido"
                  value={formData.LastName1}
                  onIonChange={handleInputChange}
                />
              </IonItem>
              <IonItem className="ItemProfile">
                <IonLabel position="floating">Apellido 2:</IonLabel>
                <IonInput
                  type="text"
                  name="apellido"
                  value={formData.LastName2}
                  onIonChange={handleInputChange}
                />
              </IonItem>
              <IonItem className="ItemProfile">
                <IonLabel position="stacked">Fecha de nacimiento:</IonLabel>
                <IonInput
                  type="date"
                  name="edad"
                  value={formData.BirthDate}
                  onIonChange={handleInputChange}
                />
              </IonItem>
              <IonItem className="ItemProfile">
                <IonLabel>Sexo:</IonLabel>
                <IonCheckbox checked={true} />
                <IonLabel>Hombre</IonLabel>
                <IonCheckbox />
                <IonLabel>Mujer</IonLabel>
                <IonCheckbox />
                <IonLabel>Otro</IonLabel>
              </IonItem>
              <IonItem className="ItemProfile">
                <IonLabel position="floating">Correo:</IonLabel>
                <IonInput
                  type="email"
                  name="correo"
                  value={formData.EmailAddress}
                  onIonChange={handleInputChange}
                  required
                />
              </IonItem>
              <IonItem className="ItemProfile">
                <IonLabel position="floating">Contraseña:</IonLabel>
                <IonInput
                  type="password"
                  name="contrasena"
                  value={formData.contrasena}
                  onIonChange={handleInputChange}
                />
              </IonItem>
              {/* Fin de los campos del formulario */}

              {/* Botón para guardar los cambios */}
              <IonButton expand="full" color="primary" onClick={guardarPerfil}>
                Guardar
              </IonButton>
            </IonList>
          </form>
            )}

            {/* Sección de próximamente */}
            {selectedSegment === "proximamente" && (
              <IonCard>
                {/* Aquí puedes mostraralgo proximo XD! */}
                <p>Próximamente...</p>
              </IonCard>
            )}
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
};

export default InfoProfile;
