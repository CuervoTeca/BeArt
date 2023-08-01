import { IonCol, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonPage, IonContent } from '@ionic/react';
import React from 'react';
import ReactProSidebar from '../../components/ReactProSidebar/ReactProSidebar';
import DataTable from 'react-data-table-component';

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
    }
  ]

  const columns =[
    {
      name: 'Id',
      selector: row => row.DishId,
    },
    {
      name: 'Nombre del platillo',
      selector: row => row.DishName,
    },
    {
      name: 'Datos de nutricion Id',
      selector: row => row.NutritionFactsId,
    },
    {
      name: 'Calorias',
      selector: row => row.Calories,
    },
    {
      name: 'Grasas',
      selector: row => row.Fats,
    },
    {
      name: 'Colesterol',
      selector: row => row.Collesterol,
    },
    {
      name: 'Sales',
      selector: row => row.Sodium,
    },
    {
      name: 'Fibras',
      selector: row => row.Fiber,
    },
    {
      name: 'Carbohidratos',
      selector: row => row.Carbs,
    },
    {
      name: 'Proteina',
      selector: row => row.Protein,
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
          <IonRow><IonCol><h1>Platillos</h1></IonCol></IonRow>
            <IonRow>

              <IonCol>
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>Platillos</IonCardTitle>
                    <IonCardSubtitle>Platillos</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <DataTable
                      title="Lista de Platillos"
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

export default Dishes;
