import { IonCol, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader, IonButton, IonPopover, IonIcon, IonContent } from '@ionic/react';
import { ellipsisVerticalOutline, trashOutline, gameControllerOutline } from 'ionicons/icons';
import React, { useState, useEffect } from 'react';
import ReactProSidebar from '../../components/ReactProSidebar/ReactProSidebar';
import DataTable from 'react-data-table-component';
import './Addictions.css'
import ModalAddAddictions from '../../components/ModalAddAddictions/ModalAddAddictions';
import ModalUpdateAddictions from '../../components/ModalUpdateAddictions/ModalUpdateAddictions';
import axios from 'axios';

const Addictions: React.FC = () => {
  const [selectedAddictionId, setSelectedAddictionId] = useState<number | null>(null);
  const openUpdateModal = (addictionId: number) => {
    setSelectedAddictionId(addictionId);
    // Abre el modal aquí si es necesario
  };

  // PARA ELIMINAR
  const handleDelete = async (addictionId: number) => {
    try {
      // Envía la solicitud DELETE a la API para borrar el platillo por su ID
      const response = await axios.delete(`URL_DE_TU_API/${addictionId}`);
      console.log('Respuesta de la API:', response.data);
  
      // Actualiza los datos en la vista (puedes recargar los datos desde la API o simplemente eliminar el elemento del estado)
      // Por ejemplo, si estás usando estado para almacenar los datos:
      const updatedData = data.filter(item => item.AddictionId !== addictionId);
      setData(updatedData);
    } catch (error) {
      console.error('Error al borrar la addición:', error);
      console.log(addictionId)
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
            <IonButton fill='clear' id={row.AddictionID + 'addiction'} onClick={() => openUpdateModal(row.AddictionID)}>
              <IonIcon icon={ellipsisVerticalOutline} /></IonButton>
            <IonPopover trigger={row.AddictionID + "addiction"} triggerAction="click" className='IonPopover'>
                <IonContent className='RowModal'>
                  <ModalUpdateAddictions addictionId={selectedAddictionId} />
                  {/* Resto de los elementos en el popover */}
                  {/* Botón para borrar */}
               <IonButton fill='clear' color="danger" onClick={() => handleDelete(row.AddictionID)}>
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
                <ModalAddAddictions addictionId={selectedAddictionId}/>
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
