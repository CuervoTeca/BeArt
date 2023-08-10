import { IonCol, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader, IonButton, IonPopover, IonIcon, IonContent } from '@ionic/react';
import { ellipsisVerticalOutline, trashOutline, gameControllerOutline } from 'ionicons/icons';
import React, { useState, useEffect } from 'react';
import ReactProSidebar from '../../components/ReactProSidebar/ReactProSidebar';
import DataTable from 'react-data-table-component';
import './Addictions.css'
import ModalAddAddictions from '../../components/Addictions/ModalAddAddictions/ModalAddAddictions';
import ModalUpdateAddictions from '../../components/Addictions/ModalUpdateAddictions/ModalUpdateAddictions';
import axios from 'axios';

const Addictions: React.FC = () => {
  const [selectedAddictionId, setSelectedAddictionId] = useState<number | null>(null);
  const openUpdateModal = (addictionId: number) => {
    setSelectedAddictionId(addictionId);
    // Abre el modal aquí si es necesario
  };

  // PARA ELIMINAR
  const handleButtonClick = async (AddictionID: string) => {
    try {
      const response = await axios.delete('http://127.0.0.1:8000/api/deleteAddiction/' + AddictionID, {
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
  const [addictions, setDishes] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    // Obtén el token de autenticación (por ejemplo, desde localStorage)
    const storedToken = localStorage.getItem('accessToken');
    console.log(storedToken)
    if (storedToken) {
      setToken(storedToken);
    }

    // Realiza la solicitud GET a la API con el token en la cabecera
    axios.get('http://127.0.0.1:8000/api/listAddictions', {
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
      id: "topAddictions",
      name: 'Id',
      selector: row => row.AddictionID,
      sortable: true,
    },
    {
      id: "topAddictions",
      name: 'Nombre de la adiccion',
      selector: row => row.AddictionName,
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
            <IonButton fill='clear' id={row.AddictionID + 'addiction'}>
              <IonIcon icon={ellipsisVerticalOutline} /></IonButton>
            <IonPopover trigger={row.AddictionID + "addiction"} triggerAction="click" className='IonPopover'>
                <IonContent className='RowModal'>
                  <ModalUpdateAddictions addictionId={selectedAddictionId} />
               <IonButton fill='clear' color="danger" onClick={() => handleButtonClick(row.AddictionID)}>
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
                    data = {addictions.data}
                    pagination
                  />
                <ModalAddAddictions/>
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
