import { IonCol, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader, IonContent, IonButton, IonIcon, IonPopover, IonList, IonItem } from '@ionic/react';
import { ellipsisVerticalOutline, trashOutline, restaurantOutline } from 'ionicons/icons';
import React from 'react';
import ReactProSidebar from '../../components/ReactProSidebar/ReactProSidebar';
import DataTable from 'react-data-table-component';
import ModalUpdateDishes from '../../components/ModalUpdateDishes/ModalUpdateDishes';
import ModalAddDishes from '../../components/ModalAddDishes/ModalAddDishes';

import './Dishes.css'

const Dishes: React.FC = () => {

  const data =[
    {
      DishId: 1,
      DishName: "Paella",
      NutritionFactsId: 10,
      Calories: 1000000,
      Fats: 1,
      Collesterol: 10,
      Sodium: 10,
      Fiber: 0,
      Carbs: 0,
      Protein: 15
    },
    {
      DishId: 2,
      DishName: "Paella",
      NutritionFactsId: 10,
      Calories: 1000000,
      Fats: 1,
      Collesterol: 10,
      Sodium: 10,
      Fiber: 0,
      Carbs: 0,
      Protein: 15
    },
    {
      DishId: 3,
      DishName: "Paella",
      NutritionFactsId: 10,
      Calories: 1000000,
      Fats: 1,
      Collesterol: 10,
      Sodium: 10,
      Fiber: 0,
      Carbs: 0,
      Protein: 15
    },
    {
      DishId: 4,
      DishName: "Paella",
      NutritionFactsId: 10,
      Calories: 1000000,
      Fats: 1,
      Collesterol: 10,
      Sodium: 10,
      Fiber: 0,
      Carbs: 0,
      Protein: 15
    },
    {
      DishId: 5,
      DishName: "Paella",
      NutritionFactsId: 10,
      Calories: 1000000,
      Fats: 1,
      Collesterol: 10,
      Sodium: 10,
      Fiber: 0,
      Carbs: 0,
      Protein: 15
    }
  ]

  const columns =[
    {
      id: "topDishes",
      name: 'Id',
      selector: DishId => DishId.DishId,
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
            <IonButton id={row.DishId + "dish"} fill='clear'><IonIcon icon={ellipsisVerticalOutline}/></IonButton>
            <IonPopover trigger={row.DishId + "dish"} triggerAction="click" className='IonPopover'>
                <IonContent className="RowModal"> 
                      <ModalUpdateDishes></ModalUpdateDishes>
                      <IonButton id={row.DishId + "dish"} fill='clear' color="danger"><IonIcon icon={trashOutline}/> Borrar </IonButton>
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
                      data = {data}
                      pagination
                    />
                    <ModalAddDishes></ModalAddDishes>
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
