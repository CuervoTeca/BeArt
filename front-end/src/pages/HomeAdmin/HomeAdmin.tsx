import React from 'react';
import './HomeAdmin.css'
import ReactProSidebar from '../../components/ReactProSidebar/ReactProSidebar';
import { IonCol, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonPage, IonContent } from '@ionic/react';
import red from '../../images/red.jpg'
import blue from '../../images/blue.jpg'
import purple from '../../images/purple.jpg'
import yellow from '../../images/yellow.jpg'
import black from '../../images/black.jpg'
import orange from '../../images/orange.jpg'

const HomeAdmin: React.FC = () => {
  return (
    <div id='div-main'>
      <div id='div-menu'>
        <ReactProSidebar></ReactProSidebar>
      </div>
      <div id='div-content'>
        <IonContent>
          <IonGrid>
            <IonRow><IonCol><h1>Inicio</h1></IonCol></IonRow>
            <IonRow>
              <IonCol>
                <IonCard>
                  <img alt="yellow" src={yellow} />
                  <IonCardHeader>
                    <IonCardTitle>Platillos</IonCardTitle>
                    <IonCardSubtitle>53</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>Total de Platillos que se encuentran registrados en la base de datos de BeArt.</IonCardContent>
                </IonCard>
              </IonCol>

              <IonCol>
                <IonCard>
                  <img alt="black" src={black} />
                  <IonCardHeader>
                    <IonCardTitle>Adicciones</IonCardTitle>
                    <IonCardSubtitle>47</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>Total de Adicciones que se encuentran registrados en la base de datos de BeArt.</IonCardContent>
                </IonCard>
              </IonCol>

              <IonCol>
                <IonCard>
                  <img alt="purple" src={purple} />
                  <IonCardHeader>
                    <IonCardTitle>Actividades Fisicas</IonCardTitle>
                    <IonCardSubtitle>28</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>Total de Actividades Fisicas que se encuentran registrados en la base de datos de BeArt.</IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>

            <IonRow><IonCol><h1>Administracion</h1></IonCol></IonRow>
            <IonRow>

              <IonCol>
                <IonCard>
                  <img alt="red" src={red} />
                  <IonCardHeader>
                    <IonCardTitle>Empleados</IonCardTitle>
                    <IonCardSubtitle>75</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>Total de Empleados que se encuentran registrados en la base de datos de BeArt.</IonCardContent>
                </IonCard>
              </IonCol>

              <IonCol>
                <IonCard>
                  <img alt="blue" src={blue} />
                  <IonCardHeader>
                    <IonCardTitle>Usuarios</IonCardTitle>
                    <IonCardSubtitle>105,620</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>Total de Usuarios que se encuentran registrados en la base de datos de BeArt.</IonCardContent>
                </IonCard>
              </IonCol>

              <IonCol>
                <IonCard>
                  <img alt="orange" src={orange} />
                  <IonCardHeader>
                    <IonCardTitle>Solicitudes</IonCardTitle>
                    <IonCardSubtitle>205</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>Total de Solicitudes que se encuentran registrados en la base de datos de BeArt.</IonCardContent>
                </IonCard>
              </IonCol>

            </IonRow>
          </IonGrid>
        </IonContent>
      </div>
    </div>
  );
};

export default HomeAdmin;
