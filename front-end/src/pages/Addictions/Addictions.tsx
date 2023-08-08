import { IonCol, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader, IonButton, IonPopover, IonIcon, IonContent } from '@ionic/react';
import { ellipsisVerticalOutline, trashOutline, gameControllerOutline } from 'ionicons/icons';
import React, { useState } from 'react';
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


const [data, setData] = useState([
    {
      AddictionId: 1,
      AddcitionName: "VideoJuegos",
      UnitId: 185,
      UnitName: "Horas"
    }
  ]
);

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
            <IonButton fill='clear' id={row.AddictionId + 'addiction'} onClick={() => openUpdateModal(row.AddictionId)}>
              <IonIcon icon={ellipsisVerticalOutline} /></IonButton>
            <IonPopover trigger={row.AddictionId + "addiction"} triggerAction="click" className='IonPopover'>
                <IonContent className='RowModal'>
                  <ModalUpdateAddictions addictionId={selectedAddictionId} />
                  {/* Resto de los elementos en el popover */}
                  {/* Botón para borrar */}
               <IonButton fill='clear' color="danger" onClick={() => handleDelete(row.AddictionId)}>
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
                    data = {data}
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
