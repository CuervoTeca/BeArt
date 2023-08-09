import { IonCol, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader, IonIcon, IonPopover, IonPage, IonContent, IonButton } from '@ionic/react';
import { ellipsisVerticalOutline, trashOutline, people } from 'ionicons/icons';
import React, { useState, useEffect } from 'react';
import ReactProSidebar from '../../components/ReactProSidebar/ReactProSidebar';
import DataTable from 'react-data-table-component';
import axios from 'axios';

import './Users.css'
import ModalUpdateUsers from '../../components/ModalUpdateUsers/ModalUpdateUsers';
import ModalAddUsers from '../../components/ModalAddUsers/ModalAddUsers';

const Users: React.FC = () => {

  const [users, setDishes] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    // Obtén el token de autenticación (por ejemplo, desde localStorage)
    const storedToken = localStorage.getItem('accessToken');
    console.log(storedToken)
    if (storedToken) {
      setToken(storedToken);
    }

    // Realiza la solicitud GET a la API con el token en la cabecera
    axios.get('http://127.0.0.1:8000/api/listUsers', {
      headers: {
        Authorization: `Bearer ${storedToken}`
      }
    })
      .then(response => {
        setDishes(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, [token]);

  const columns =[
    {
      id: "topUsers",
      name: 'Id',
      selector: row => row.id,
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
      name: 'Rol',
      selector: row => row.RoleName,
      sortable: true,
    },
    {
      id: "topUsers",
      name: 'País',
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
                      data = {users.data}
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
