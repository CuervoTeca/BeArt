import React from 'react';
import './HomeAdmin.css'
import ReactProSidebar from '../../components/ReactProSidebar/ReactProSidebar';
import { IonCol, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonContent } from '@ionic/react';
import { homeOutline, restaurantOutline, gameControllerOutline, heartOutline, serverOutline, people, person, logoGithub } from 'ionicons/icons';
import red from '../../images/red.jpg'
import blue from '../../images/blue.jpg'
import purple from '../../images/purple.jpg'
import yellow from '../../images/yellow.jpg'
import black from '../../images/black.jpg'
import orange from '../../images/orange.jpg'
import { Link } from 'react-router-dom'


const HomeAdmin: React.FC = () => {
  return (
    <div id='div-main'>
      <div id='div-menu'>
        <ReactProSidebar></ReactProSidebar>
      </div>
      <div id='div-content'>
        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol><h1> <IonIcon icon={homeOutline} /> Inicio</h1></IonCol>
            </IonRow>
            <IonCard>
              <IonCardHeader>
                <h1>Tablas</h1>
              </IonCardHeader>
      
              <IonRow>
                <IonCol>
                  <IonCard>
                    <div className="card-container-center">
                      <IonIcon icon={restaurantOutline} />
                      <Link to="/dishes" > <img alt="orange" src={orange} /> </Link>
                    </div>
                    <IonCardHeader>
                      <IonCardTitle>Platillos</IonCardTitle>
                      <IonCardSubtitle>53</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>Total de Platillos que se encuentran registrados en la base de datos de BeArt.</IonCardContent>
                  </IonCard>
                </IonCol>

                <IonCol>
                  <IonCard>
                    <div className="card-container-center">
                      <IonIcon icon={gameControllerOutline} />
                      <Link to="/addictions" > <img alt="black" src={black} /> </Link>
                    </div>
                    <IonCardHeader>
                      <IonCardTitle>Adicciones</IonCardTitle>
                      <IonCardSubtitle>47</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>Total de Adicciones que se encuentran registrados en la base de datos de BeArt.</IonCardContent>
                  </IonCard>
                </IonCol>

                <IonCol>
                  <IonCard>
                    <div className="card-container-center">
                      <IonIcon icon={heartOutline} />
                      <Link to="/physicalActivities" > <img alt="purple" src={purple} /> </Link>
                    </div>
                    <IonCardHeader>
                      <IonCardTitle>Actividades Fisicas</IonCardTitle>
                      <IonCardSubtitle>28</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>Total de Actividades Fisicas que se encuentran registrados en la base de datos de BeArt.</IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>

              <IonCardHeader>
                <h1>Administracion</h1>
              </IonCardHeader>
              <IonRow>

                <IonCol>
                  <IonCard>
                    <div className="card-container-center">
                      <IonIcon icon={serverOutline} />
                      <Link to="/database" > <img alt="yellow" src={yellow} /> </Link>
                    </div>
                    <IonCardHeader>
                      <IonCardTitle>Empleados</IonCardTitle>
                      <IonCardSubtitle>75</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>Total de Empleados que se encuentran registrados en la base de datos de BeArt.</IonCardContent>
                  </IonCard>
                </IonCol>

                <IonCol>
                  <IonCard>
                    <div className="card-container-center">
                      <IonIcon icon={people} />
                      <Link to="/users" > <img alt="blue" src={blue} /> </Link>
                    </div>
                    <IonCardHeader>
                      <IonCardTitle>Usuarios</IonCardTitle>
                      <IonCardSubtitle>105,620</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>Total de Usuarios que se encuentran registrados en la base de datos de BeArt.</IonCardContent>
                  </IonCard>
                </IonCol>

                <IonCol>
                  <IonCard>
                    <div className="card-container-center">
                      <IonIcon icon={person} />
                      <Link to="/profile" > <img alt="red" src={red} /> </Link>
                    </div>
                    <IonCardHeader>
                      <IonCardTitle>Solicitudes</IonCardTitle>
                      <IonCardSubtitle>205</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>Total de Solicitudes que se encuentran registrados en la base de datos de BeArt.</IonCardContent>
                  </IonCard>
                </IonCol>

              </IonRow>
            </IonCard>
          </IonGrid>
        </IonContent>
      </div>
    </div>
  );
};

export default HomeAdmin;
