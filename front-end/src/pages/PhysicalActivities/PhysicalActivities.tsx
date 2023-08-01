import { IonCol, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonPage, IonContent } from '@ionic/react';
import React from 'react';
import ReactProSidebar from '../../components/ReactProSidebar/ReactProSidebar';
import DataTable from 'react-data-table-component';

import './PhysicalActivities.css'

const PhysicalActivities: React.FC = () => {

  const data =[
    {
      ActivityId: 1,
      ActivityName: "Lagartijas",
      CaloriesBuredPerHour: 150,
      MuscleGroupId: 5,
      MuscleName: "Pecho",
    }
  ]

  const columns =[
    {
      name: 'Id',
      selector: row => row.ActivityId,
    },
    {
      name: 'Actividad nombre',
      selector: row => row.ActivityName,
    },
    {
      name: 'Calorias quemadas por hora',
      selector: row => row.CaloriesBuredPerHour,
    },
    {
      name: 'Grupo muscular',
      selector: row => row.MuscleGroupId,
    },
    {
      name: 'Musculo nombre',
      selector: row => row.MuscleName,
    }
  ]
  return (
<div id='div-main'>
      <div id='div-menu'>
        <ReactProSidebar></ReactProSidebar>
      </div>
      <div id='div-content'>
        <IonContent>
          <IonGrid>
          <IonRow><IonCol><h1>Actividades Fisicas</h1></IonCol></IonRow>
            <IonRow>

              <IonCol>
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>Actividades Fisicas</IonCardTitle>
                    <IonCardSubtitle>Actividades Fisicas</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <DataTable
                      title="Actividades Fisicas"
                      columns = {columns}
                      data = {data}
                      pagination
                    />
                  </IonCardContent>
                  </IonCard>
              </IonCol>

            </IonRow>
          </IonGrid>
        </IonContent>
      </div>
    </div>
);
};

export default PhysicalActivities;
