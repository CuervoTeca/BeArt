import { IonCol, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader, IonContent, IonButton, IonIcon, IonPopover, IonList, IonItem } from '@ionic/react';
import { ellipsisVerticalOutline, trashOutline, restaurantOutline } from 'ionicons/icons';
import React, { useState, useEffect } from 'react';
import ReactProSidebar from '../../components/ReactProSidebar/ReactProSidebar';
import DataTable from 'react-data-table-component';
import ModalUpdateDishes from '../../components/ModalUpdateDishes/ModalUpdateDishes';
import ModalAddDishes from '../../components/ModalAddDishes/ModalAddDishes';
import axios from 'axios';

import './Dishes.css'

const Dishes: React.FC = () => {
  const [selectedDishId, setSelectedDishId] = useState<number | null>(null);
  const openUpdateModal = (dishId: number) => {
    setSelectedDishId(dishId);
    // Abre el modal aquí si es necesario
  };

  // PARA ELIMINAR
  const handleDelete = async (dishId: number) => {
    try {
      // Envía la solicitud DELETE a la API para borrar el platillo por su ID
      const response = await axios.delete(`URL_DE_TU_API/${dishId}`);
      console.log('Respuesta de la API:', response.data);
  
      // Actualiza los datos en la vista (puedes recargar los datos desde la API o simplemente eliminar el elemento del estado)
      // Por ejemplo, si estás usando estado para almacenar los datos:
      const updatedData = data.filter(item => item.DishId !== dishId);
      setData(updatedData);
    } catch (error) {
      console.error('Error al borrar el platillo:', error);
      console.log(dishId)
    }
  };

  const [dishes, setDishes] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    // Obtén el token de autenticación (por ejemplo, desde localStorage)
    const storedToken = localStorage.getItem('accessToken');
    console.log(storedToken)
    if (storedToken) {
      setToken(storedToken);
    }

    // Realiza la solicitud GET a la API con el token en la cabecera
    axios.get('http://127.0.0.1:8000/api/listDishes', {
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
      id: "topDishes",
      name: 'Id',
      selector: row => row.DishID,
      sortable: true,
    },
    {
      id: "topDishes",
      name: 'Nombre del platillo',
      selector: row => row.DishName,
      sortable: true,

    },
    {
      id: "topDishes",
      name: 'Datos de nutricion Id',
      selector: row => row.NutritionFactsId,
      sortable: true,

    },
    {
      id: "topDishes",
      name: 'Calorias',
      selector: row => row.Calories,
      sortable: true,

    },
    {
      id: "topDishes",
      name: 'Grasas',
      selector: row => row.Fats,
      sortable: true,

    },
    {
      id: "topDishes",
      name: 'Colesterol',
      selector: row => row.Collesterol,
      sortable: true,

    },
    {
      id: "topDishes",
      name: 'Sales',
      selector: row => row.Sodium,
      sortable: true,

    },
    {       
      id: "topDishes",
      name: 'Fibras',
      selector: row => row.Fiber,
      sortable: true,

    },
    {
      id: "topDishes",
      name: 'Carbohidratos',
      selector: row => row.Carbs,
      sortable: true,
    },
    {
      id: "topDishes",
      name: 'Proteina',
      selector: row => row.Protein,
      sortable: true,
    },
    {
      cell: row => <>
            <IonButton fill='clear' id={row.DishID + 'dish'} onClick={() => openUpdateModal(row.DishID)}>
              <IonIcon icon={ellipsisVerticalOutline} /></IonButton>
              <IonPopover trigger={row.DishID + "dish"} triggerAction="click" className='IonPopover'>
                <IonContent className='RowModal'>
                  <ModalUpdateDishes dishId={selectedDishId} />
                  {/* Resto de los elementos en el popover */}
                  {/* Botón para borrar */}
               <IonButton fill='clear' color="danger" onClick={() => handleDelete(row.DishID)}>
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
      <div className='div-content'>
        <IonContent>
          <IonGrid id='IonGrid'>
          <IonRow><IonCol><h1 id='PlatillosTitle'><IonIcon icon={restaurantOutline}/> Platillos</h1></IonCol></IonRow>
            <IonRow id='IonRow'>

              <IonCol id='IonCol'>
                <IonCard id='IonCard'>
                  <IonCardHeader>
                    <h1>Lista de Platillos</h1>
                  </IonCardHeader>
                  <IonCardContent>
                    <DataTable
                      columns = {columns}
                      data = {dishes.data}
                      pagination
                    />
                    <ModalAddDishes  dishId={selectedDishId}></ModalAddDishes>
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

export default Dishes;
