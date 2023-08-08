import { IonCol, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader, IonButton, IonContent, IonPopover, IonIcon } from '@ionic/react';
import { ellipsisVerticalOutline, trashOutline, heartOutline } from 'ionicons/icons';
import React from 'react';
import ReactProSidebar from '../../components/ReactProSidebar/ReactProSidebar';
import DataTable from 'react-data-table-component';

import './PhysicalActivities.css'
import ModalUpdatePhysicalActivities from '../../components/ModalUpdatePhysicalActivities/ModalUpdatePhysicalActivities';
import ModalAddPhysicalActivities from '../../components/ModalAddPhysicalActivities/ModalAddPhysicalActivities';

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
      id: "topPhysicalActivities",
      name: 'Id',
      selector: row => row.ActivityId,
      sortable: true,
    },
    {
      id: "topPhysicalActivities",
      name: 'Actividad nombre',
      selector: row => row.ActivityName,
      sortable: true,
    },
    {
      id: "topPhysicalActivities",
      name: 'Calorias quemadas por hora',
      selector: row => row.CaloriesBuredPerHour,
      sortable: true,
    },
    {
      id: "topPhysicalActivities",
      name: 'Grupo muscular',
      selector: row => row.MuscleGroupId,
      sortable: true,
    },
    {
      id: "topPhysicalActivities",
      name: 'Musculo nombre',
      selector: row => row.MuscleName,
      sortable: true,
    },
    {
      cell: row => <>
            <IonButton id={row.ActivityId + "PhysicalActivities"} fill='clear'><IonIcon icon={ellipsisVerticalOutline}/></IonButton>
            <IonPopover trigger={row.ActivityId + "PhysicalActivities"} triggerAction="click" className='IonPopover'>
                <IonContent className="RowModal">
                  <ModalUpdatePhysicalActivities></ModalUpdatePhysicalActivities> 
                  <IonButton id={row.ActivityId + "PhysicalActivities"} fill='clear' color="danger"><IonIcon icon={trashOutline}/> Borrar </IonButton>
                </IonContent>
            </IonPopover>
      </> ,
      allowOverflow: true,
      button: true,
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
          <IonRow><IonCol><h1 id='Actividadestitle'><IonIcon icon={heartOutline} /> Actividades Fisicas</h1></IonCol></IonRow>
            <IonRow>

              <IonCol>
                <IonCard>
                  <IonCardHeader>
                    <h1>Actividades Fisicas</h1>
                  </IonCardHeader>
                  <IonCardContent>
                    <DataTable
                      columns = {columns}
                      data = {data}
                      pagination
                    />
                  <ModalAddPhysicalActivities></ModalAddPhysicalActivities>
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
