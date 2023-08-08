import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonInput, IonButton, IonCol, IonRow, IonGrid, IonLoading} from '@ionic/react';
import axios from 'axios';
import './Login.css';
import ModalSignUp from '../../components/ModalSignUp/ModalSignUp';
import { useHistory } from 'react-router-dom';
import ToastsComponent from '../../components/ToastsComponentProps/ToastComponent';
import ModalPassword from '../../components/ModalPassword/ModalPassword';


const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar la pantalla de carga

  // Data del formulario
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  //History, segun sive para hacer el push al Home con el metodo post.
  const history = useHistory(); // Obtén el objeto history
 
  // Ventana emergente de éxito de acceso
  const [showSuccessAccesoToast, setShowSuccessAccesoToast] = useState(false);
  // Ventana emergente de datos no válidos
  const [showInvalidDataToast, setShowInvalidDataToast] = useState(false);
  
 
  const handleLogin = async () => {
    setIsLoading(true); // Mostrar pantalla de carga
    const formData = {
      email: email,
      password: password,
    };

    //Publica el registro en la api
    try {
      // Simular una solicitud de inicio de sesión con una espera de 3 segundos
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Aquí realizarías la solicitud de inicio de sesión real con axios
       const response = await axios.post('http://127.0.0.1:8000/api/login', formData);
      
      setIsLoading(false); // Ocultar pantalla de carga
      
      // Manejar la respuesta del servidor, por ejemplo, guardar el token en el almacenamiento local o en cookies
      console.log('Inicio de sesión exitoso');

      // Redirigir al usuario a la página de inicio después de iniciar sesión
      history.push('/home');
    } catch (error) {
        // Mostrar el Toast de datos no válidos
        setShowInvalidDataToast(true);
      console.error('Error en el inicio de sesión:', error);
    }
  };


  return (
    <IonPage>
      <IonContent fullscreen className='LoginPage'>
        <IonHeader>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol size="12" size-lg="6" class="ion-show-sm ion-align-items-center">
              <img src={logo} alt="Logo" className="logo" />
            </IonCol>
            <IonCol size="12" size-lg="6" class="ion-show-sm ion-align-items-center">
            <div className="form-container">
                <IonInput
                  type="email"
                  placeholder="Correo electrónico"
                  value={email}
                  onIonChange={(e) => setEmail(e.detail.value!)}
                  className="button-margin"
                />
                <IonInput
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                  className="button-margin"
                />
                <IonButton expand='full' fill='solid' onClick={handleLogin} className="button-margin">
                    Acceso
                </IonButton>
          <ModalPassword></ModalPassword>
                <ModalSignUp />
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      
      <ToastsComponent
        showSuccessAccesoToast={showSuccessAccesoToast}
        showInvalidDataToast={showInvalidDataToast}
        setShowSuccessAccesoToast={setShowSuccessAccesoToast}
        setShowInvalidDataToast={setShowInvalidDataToast}
      />
  <IonLoading
        isOpen={isLoading}
        message={'Cargando...'}
        duration={2000} // Duración de la pantalla de carga (3 segundos en este caso)
      />
    </IonPage>
  );
};

export default Login;