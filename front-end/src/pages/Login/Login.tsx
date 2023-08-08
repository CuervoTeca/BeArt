import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonInput, IonButton, IonCol, IonRow, IonGrid, IonLoading, IonCard, IonCardContent} from '@ionic/react';
import axios from 'axios';
import './Login.css';
import ModalSignUp from '../../components/ModalSignUp/ModalSignUp';
import { useHistory } from 'react-router-dom';
import ToastsComponent from '../../components/ToastsComponentProps/ToastComponent';
import ModalPassword from '../../components/ModalPassword/ModalPassword';
import logo from '../../images/BeArtLogo.svg'

const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar la pantalla de carga

  const [EmailAddress, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        EmailAddress: EmailAddress,
        Password: Password
      });

      const accessToken = response.data.accessToken;
      // Guardar el token en el almacenamiento local para mantenerlo durante la sesión
      localStorage.setItem('accessToken', accessToken);

      // Aquí puedes redirigir a otra página o realizar otras operaciones después del inicio de sesión exitoso
      history.push('/homeAdmin');

    } catch (error) {
      console.error('Error during login:', error);
    }
  };

    const [showSuccessAccesoToast, setShowSuccessAccesoToast] = useState(false);
    const [showInvalidDataToast, setShowInvalidDataToast] = useState(false);

  return (
    <IonPage>
      <IonContent>
        <div className="center-container"> 
        <IonCard>
          <IonCardContent>
            <IonRow>
              <IonCol>
                <div className="form-container">
                <IonInput
                  type="email"
                  placeholder="Correo electrónico"
                  value={EmailAddress}
                  onIonChange={(e) => setEmail(e.detail.value!)}
                  className="button-margin"
                />
                <IonInput
                  type="password"
                  placeholder="Contraseña"
                  value={Password}
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
              <IonCol>
                <img src={logo} alt="Logo" className="logo" />
              </IonCol>
            </IonRow>
          </IonCardContent>
        </IonCard>
        </div>
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