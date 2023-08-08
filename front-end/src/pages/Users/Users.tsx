import { IonCol, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader, IonIcon, IonPopover, IonPage, IonContent, IonButton } from '@ionic/react';
import { ellipsisVerticalOutline, trashOutline, people } from 'ionicons/icons';
import React from 'react';
import ReactProSidebar from '../../components/ReactProSidebar/ReactProSidebar';
import DataTable from 'react-data-table-component';

import './Users.css'
import ModalUpdateUsers from '../../components/ModalUpdateUsers/ModalUpdateUsers';
import ModalAddUsers from '../../components/ModalAddUsers/ModalAddUsers';

const Users: React.FC = () => {

  const data =[
    {
      Id: 1,
      FirstName: "Cris",
      LastName1: "Lopez",
      LastName2: "Baut",
      BirthDate: "2002-08-14",
      CreatedAt: "2023-08-07 23:50:34.760",
      RoleName: "Dueño",
      CountryName: "Australia",
      City: "Tijuana",
      PhoneNumber: "6641555429",
      EmailAddress: "test@test.com",
      FacebookName: "facebook name",
      Instagram: "instagram",
      Twitter: "twitter",
      Weight: "55.00",
      Height: "1.70",
      LastUpdatedAt: "2023-08-07 23:50:34.760",
      Age: "21"
    }
  ]

  const columns =[
    {
      id: "topUsers",
      name: 'Id',
      selector: row => row.Id,
      sortable: true,
    },
    {
      id: "topUsers",
      name: 'Nombre',
      selector: row => row.FirstName,
      sortable: true,
    },
    {
      id: "topUsers",
      name: 'Apellido Paterno',
      selector: row => row.LastName1,
      sortable: true,
    },
    {
      id: "topUsers",
      name: 'Apellido Materno',
      selector: row => row.LastName2,
      sortable: true,
    },
    {
      id: "topUsers",
      name: 'Cumpleaños',
      selector: row => row.BirthDate,
      sortable: true,
    },
    {
      id: "topUsers",
      name: 'CreatedAt',
      selector: row => row.CreatedAt,
      sortable: true,
    },
    {
      id: "topUsers",
      name: 'RoleName',
      selector: row => row.RoleName,
      sortable: true,
    },
    {
      id: "topUsers",
      name: 'CountryName',
      selector: row => row.CountryName,
      sortable: true,
    },
    {
      id: "topUsers",
      name: 'City',
      selector: row => row.City,
      sortable: true,
    },
    {
      id: "topUsers",
      name: 'PhoneNumber',
      selector: row => row.PhoneNumber,
      sortable: true,
    },
    {
      id: "topUsers",
      name: 'EmailAddress',
      selector: row => row.EmailAddress,
      sortable: true,
    },
    {
      id: "topUsers",
      name: 'FacebookName',
      selector: row => row.FacebookName,
      sortable: true,
    },
    {
      id: "topUsers",
      name: 'Instagram',
      selector: row => row.Instagram,
      sortable: true,
    },
    {
      id: "topUsers",
      name: 'Twitter',
      selector: row => row.Twitter,
      sortable: true,
    },
    {
      id: "topUsers",
      name: 'Weight',
      selector: row => row.Weight,
      sortable: true,
    },
    {
      id: "topUsers",
      name: 'Height',
      selector: row => row.Height,
      sortable: true,
    },
    {
      id: "topUsers",
      name: 'LastUpdatedAt',
      selector: row => row.LastUpdatedAt,
      sortable: true,
    },
    {
      id: "topUsers",
      name: 'Age',
      selector: row => row.Age,
      sortable: true,
    },
    {
      cell: row => <>
            <IonButton id={row.ActivityId + "Users"} fill='clear'><IonIcon icon={ellipsisVerticalOutline}/></IonButton>
            <IonPopover trigger={row.ActivityId + "Users"} triggerAction="click" className='IonPopover'>
                <IonContent className="RowModal">
                  <ModalUpdateUsers></ModalUpdateUsers>
                  <IonButton id={row.ActivityId + "Users"} fill='clear' color="danger"><IonIcon icon={trashOutline}/> Borrar </IonButton>
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
          <IonRow><IonCol><h1 id='Usersstitle'><IonIcon icon={people} /> Usuarios</h1></IonCol></IonRow>
            <IonRow>

              <IonCol>
                <IonCard>
                  <IonCardHeader>
                    <h1>Usuarios</h1>
                  </IonCardHeader>
                  <IonCardContent>
                    <DataTable
                      columns = {columns}
                      data = {data}
                      pagination
                    />
                    <ModalAddUsers></ModalAddUsers>
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

export default Users;
