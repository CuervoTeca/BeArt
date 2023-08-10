import { IonCol, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader, IonButton, IonContent, IonPopover, IonIcon } from '@ionic/react';
import { ellipsisVerticalOutline, trashOutline, heartOutline } from 'ionicons/icons';
import React, { useState, useEffect } from 'react';
import ReactProSidebar from '../../components/ReactProSidebar/ReactProSidebar';
import DataTable from 'react-data-table-component';
import './PhysicalActivities.css'
import ModalUpdatePhysicalActivities from '../../components/PhysicalActivities/ModalUpdatePhysicalActivities/ModalUpdatePhysicalActivities';
import ModalAddPhysicalActivities from '../../components/PhysicalActivities/ModalAddPhysicalActivities/ModalAddPhysicalActivities';
import axios from 'axios';

const PhysicalActivities: React.FC = () => {
  const [selectedActivityId, setSelectedActivityId] = useState<number | null>(null);
  const openUpdateModal = (activityId: number) => {
    setSelectedActivityId(activityId);
    // Abre el modal aquí si es necesario
  };

  const handleDelete = async (activityId: string) => {
    try {
      const response = await axios.delete('http://127.0.0.1:8000/api/deleteActivity/' + activityId, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.status === 200) {
        console.log('bien') 
     }

          //Actualizar cambios
          window.location.reload()

    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  };

  const [physicalActivities, setDishes] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    // Obtén el token de autenticación (por ejemplo, desde localStorage)
    const storedToken = localStorage.getItem('accessToken');
    console.log(storedToken)
    if (storedToken) {
      setToken(storedToken);
    }

    // Realiza la solicitud GET a la API con el token en la cabecera
    axios.get('http://127.0.0.1:8000/api/listActivities', {
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
      id: "topPhysicalActivities",
      name: 'Id',
      selector: row => row.ActivityID,
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
      selector: row => row.CaloriesBurnedPerHour,
      sortable: true,
    },
    {
      id: "topPhysicalActivities",
      name: 'Musculo nombre',
      selector: row => row.MuscleGroupName,
      sortable: true,
    },
    {
      cell: row => <>
            <IonButton id={row.ActivityID + "PhysicalActivities"} fill='clear' onClick={() => openUpdateModal(row.ActivityID)}><IonIcon icon={ellipsisVerticalOutline}/></IonButton>
            <IonPopover trigger={row.ActivityID + "PhysicalActivities"} triggerAction="click" className='IonPopover'>
                <IonContent className="RowModal">
                <ModalUpdatePhysicalActivities activityId={selectedActivityId}></ModalUpdatePhysicalActivities>
                <IonButton fill='clear' color="danger" onClick={() => handleDelete(row.ActivityID)}>
                 <IonIcon icon={trashOutline} /> Borrar</IonButton>
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
                      data = {physicalActivities.data}
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
