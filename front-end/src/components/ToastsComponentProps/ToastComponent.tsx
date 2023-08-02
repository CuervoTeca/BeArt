import React from 'react';
import { IonToast } from '@ionic/react';

interface ToastsComponentProps {
  showSuccessAccesoToast: boolean;
  showInvalidDataToast: boolean;
  setShowSuccessAccesoToast: (show: boolean) => void;
  setShowInvalidDataToast: (show: boolean) => void;
}

const ToastsComponent: React.FC<ToastsComponentProps> = ({
  showSuccessAccesoToast,
  showInvalidDataToast,
  setShowSuccessAccesoToast,
  setShowInvalidDataToast,
}) => {
  return (
    <>
      <IonToast
        isOpen={showSuccessAccesoToast}
        onDidDismiss={() => setShowSuccessAccesoToast(false)}
        message="Acceso válido!"
        duration={3000}
      />
      <IonToast
        isOpen={showInvalidDataToast}
        onDidDismiss={() => setShowInvalidDataToast(false)}
        message="Datos no válidos. Por favor, verifica tus credenciales."
        duration={3000}
      />
    </>
  );
};

export default ToastsComponent;
