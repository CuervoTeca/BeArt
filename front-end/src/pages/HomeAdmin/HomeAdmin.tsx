import React from 'react';
import './HomeAdmin.css'
import ReactProSidebar from '../../components/ReactProSidebar/ReactProSidebar';
import { IonCol, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonContent } from '@ionic/react';
import { homeOutline, restaurantOutline, gameControllerOutline, heartOutline, briefcaseOutline, people, serverOutline } from 'ionicons/icons';
import red from '../../images/red.jpg'
import blue from '../../images/blue.jpg'
import purple from '../../images/purple.jpg'
import yellow from '../../images/yellow.jpg'
import black from '../../images/black.jpg'
import orange from '../../images/orange.jpg'
import { Link } from 'react-router-dom'
import  { useState, useEffect } from 'react';
import axios from 'axios';

const HomeAdmin: React.FC = () => {

const [dashboardData, setDashboardData] = useState<any>(null);

const [token, setToken] = useState('');

useEffect(() => {
  const storedToken = localStorage.getItem('accessToken');
  console.log(storedToken)
  if (storedToken) {
    setToken(storedToken);
  }

  axios.get('http://127.0.0.1:8000/api/getDashboardStats', {
    headers: {
      Authorization: `Bearer ${storedToken}`
    }
  })
    .then(response => {
      setDashboardData(response.data.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}, []);


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
                      <IonCardSubtitle>{dashboardData ? "Total: " + dashboardData.TotalDishes : 'Cargando...'}</IonCardSubtitle>
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
                      <IonCardSubtitle>{dashboardData ? "Total: " + dashboardData.TotalAddictions : 'Cargando...'}</IonCardSubtitle>
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
                      <IonCardSubtitle>{dashboardData ? "Total: " + dashboardData.TotalActivities : 'Cargando...'}</IonCardSubtitle>
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
                      <IonIcon icon={briefcaseOutline} />
                      <Link to="/users" > <img alt="yellow" src={yellow} /> </Link>
                    </div>
                    <IonCardHeader>
                      <IonCardTitle>Empleados</IonCardTitle>
                      <IonCardSubtitle>{dashboardData ? "Total: " + dashboardData.TotalEmployees : 'Cargando...'}</IonCardSubtitle>
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
                      <IonCardSubtitle>{dashboardData ? "Total: " + dashboardData.TotalUsers : 'Cargando...'}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>Total de Usuarios que se encuentran registrados en la base de datos de BeArt.</IonCardContent>
                  </IonCard>
                </IonCol>

                <IonCol>
                  <IonCard>
                    <div className="card-container-center">
                      <IonIcon icon={serverOutline} />
                      <Link to="/database" > <img alt="red" src={red} /> </Link>
                    </div>
                    <IonCardHeader>
                      <IonCardTitle>Backups</IonCardTitle>
                      <IonCardSubtitle>{dashboardData ? "Total: " + dashboardData.TotalBackups : 'Cargando...'}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>Total de Backups que han sido creados por administradores de la base de datos de BeArt.</IonCardContent>
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
