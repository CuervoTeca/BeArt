import { IonCol, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonPage, IonContent } from '@ionic/react';
import React from 'react';


import './Profile.css'
import ReactProSidebar from '../../components/ReactProSidebar/ReactProSidebar';

const Profile: React.FC = () => {
  return (
<div id='div-main'>
      <div id='div-menu'>
        <ReactProSidebar></ReactProSidebar>
      </div>
      <div id='div-content'>
        <IonContent>
          <IonGrid>
            <IonRow><IonCol><h1>Perfil</h1></IonCol></IonRow>
            <IonRow>

              <IonCol>
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>Perfil</IonCardTitle>
                    <IonCardSubtitle>Perfil</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>Perfil.</IonCardContent>
                </IonCard>
              </IonCol>

            </IonRow>
          </IonGrid>
        </IonContent>
      </div>
    </div>
);
};

export default Profile;
