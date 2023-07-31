import { IonCol, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonPage, IonContent } from '@ionic/react';
import React from 'react';
import ReactProSidebar from '../../components/ReactProSidebar/ReactProSidebar';
import DataTable from 'react-data-table-component';

import './Addictions.css'

const Addictions: React.FC = () => {


  const data =[
    {
      AddictionId: 1,
      AddcitionName: "VideoJuegos",
      UnitId: 185,
      UnitName: "Horas"
    }
  ]

  const columns =[
    {
      name: 'Id',
      selector: row => row.AddictionId,
    },
    {
      name: 'Nombre de la adiccion',
      selector: row => row.AddcitionName,
    },
    {
      name: 'Unidad ID',
      selector: row => row.UnitId,
    },
    {
      name: 'Unidad Nombre',
      selector: row => row.UnitName,
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
          <IonRow><IonCol><h1>Lista de Adicciones</h1></IonCol></IonRow>
            <IonRow>

              <IonCol>
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>Lista de Adicciones</IonCardTitle>
                    <IonCardSubtitle>Lista de Adicciones</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>
                  <DataTable
                    title="Lista de Adicciones"
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

export default Addictions;
