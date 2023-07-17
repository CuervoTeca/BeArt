import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ReactProSidebar from '../../components/ReactProSidebar/ReactProSidebar';

const LandingAdmin: React.FC = () => {
  return (
    <>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pene</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ReactProSidebar/>
      </IonContent>
    </IonPage>
  </>
  );
};

export default LandingAdmin;
