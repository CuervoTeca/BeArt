import { IonCol, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonPage, IonContent } from '@ionic/react';
import React from 'react';
import ReactProSidebar from '../../components/ReactProSidebar/ReactProSidebar';

import './DataBase.css'

const DataBase: React.FC = () => {
  return (
<div id='div-main'>
      <div id='div-menu'>
        <ReactProSidebar></ReactProSidebar>
      </div>
      <div id='div-content'>
        <IonContent>
          <IonGrid>
          <IonRow><IonCol><h1>Base de datos</h1></IonCol></IonRow>
            <IonRow>

              <IonCol>
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>Base de datos</IonCardTitle>
                    <IonCardSubtitle>Base de datos</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>Base de datos.</IonCardContent>
                </IonCard>
              </IonCol>

            </IonRow>
          </IonGrid>
        </IonContent>
      </div>
    </div>
);
};

export default DataBase;