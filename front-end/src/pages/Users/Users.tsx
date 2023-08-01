import { IonCol, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonPage, IonContent } from '@ionic/react';
import React from 'react';
import ReactProSidebar from '../../components/ReactProSidebar/ReactProSidebar';

import './Users.css'

const Users: React.FC = () => {
  return (
<div id='div-main'>
      <div id='div-menu'>
        <ReactProSidebar></ReactProSidebar>
      </div>
      <div id='div-content'>
        <IonContent>
          <IonGrid>
          <IonRow><IonCol><h1>Usuarios</h1></IonCol></IonRow>
            <IonRow>
                
              <IonCol>
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>Usuarios</IonCardTitle>
                    <IonCardSubtitle>Usuarios</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>Usuarios.</IonCardContent>
                </IonCard>
              </IonCol>

            </IonRow>
          </IonGrid>
        </IonContent>
      </div>
    </div>
);
};

export default Users;
