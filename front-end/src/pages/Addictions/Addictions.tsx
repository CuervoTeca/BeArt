import { IonCol, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader, IonButton, IonPopover, IonIcon, IonContent } from '@ionic/react';
import { ellipsisVerticalOutline, trashOutline, gameControllerOutline } from 'ionicons/icons';
import React from 'react';
import ReactProSidebar from '../../components/ReactProSidebar/ReactProSidebar';
import DataTable from 'react-data-table-component';

import './Addictions.css'
import ModalAddAddictions from '../../components/ModalAddAddictions/ModalAddAddictions';
import ModalUpdateAddictions from '../../components/ModalUpdateAddictions/ModalUpdateAddictions';

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
      id: "topAddictions",
      name: 'Id',
      selector: row => row.AddictionId,
      sortable: true,
    },
    {
      id: "topAddictions",
      name: 'Nombre de la adiccion',
      selector: row => row.AddcitionName,
      sortable: true,
    },
    {
      id: "topAddictions",
      name: 'Unidad ID',
      selector: row => row.UnitId,
      sortable: true,
    },
    {
      id: "topAddictions",
      name: 'Unidad Nombre',
      selector: row => row.UnitName,
      sortable: true,
    },
    {
      cell: row => <>
            <IonButton id={row.AddictionId + "addiction"} fill='clear'><IonIcon icon={ellipsisVerticalOutline}/></IonButton>
            <IonPopover trigger={row.AddictionId + "addiction"} triggerAction="click" className='IonPopover'>
                <IonContent className="RowModal">
                  <ModalUpdateAddictions></ModalUpdateAddictions>
                  <IonButton id={row.AddictionId + "addiction"} fill='clear' color="danger"><IonIcon icon={trashOutline}/> Borrar </IonButton>
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
          <IonRow><IonCol><h1 id='adiccionestitle'><IonIcon icon={gameControllerOutline} /> Lista de Adicciones</h1></IonCol></IonRow>
            <IonRow>

              <IonCol>
                <IonCard>
                  <IonCardHeader>
                    <h1>Lista de Adicciones</h1>
                  </IonCardHeader>
                  <IonCardContent>
                  <DataTable
                    columns = {columns}
                    data = {data}
                    pagination
                  />
                  <ModalAddAddictions></ModalAddAddictions>
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
