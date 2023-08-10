import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPopover, IonIcon, IonCardContent, IonCardHeader, IonButtons, IonLabel, IonCard } from '@ionic/react';
import { ellipsisVerticalOutline, trashOutline, syncOutline } from 'ionicons/icons';
import DataTable from 'react-data-table-component';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { close } from 'ionicons/icons';

const ModalRestoreBack: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [db, setDB] = useState([]);
    const [token, setToken] = useState('');

    const openModal = () => {
        setShowModal(true);
        };
        
        const closeModal = () => {
        setShowModal(false);
        };

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
                setDB(response.data);
                console.log(response.data)
              })
              .catch(error => {
                console.error('Error al obtener los datos:', error);
              });
          }, [token]);

    const columns =[
        {
          id: "topAddictions",
          name: 'Backup ID',
          selector: row => row.BackupID,
          sortable: true,
        },
        {
          id: "topAddictions",
          name: 'Fecha',
          selector: row => row.Date,
          sortable: true,
        },
        {
          id: "topAddictions",
          name: 'Nombre',
          selector: row => row.Name,
          sortable: true,
        },
        {
            id: "topAddictions",
            name: 'Usuario',
            selector: row => row.UserID,
            sortable: true,
          },
        {
          cell: row => <>
                <IonButton fill='clear' id={row.BackupID + 'addiction'} >
                  <IonIcon icon={syncOutline} /></IonButton>
                <IonPopover trigger={row.AddictionID + "addiction"} triggerAction="click" className='IonPopover'>
                    <IonContent className='RowModal'>
                   <IonButton fill='clear' color="danger">
                     <IonIcon icon={trashOutline} /> Borrar</IonButton>
                    </IonContent>
                </IonPopover>
                    </> ,
          allowOverflow: true,
          button: true,
        }
      ]

  return (
    <>
      <IonButton color="primary" onClick={openModal}>
        Recuperar
      </IonButton>

      <IonModal isOpen={showModal} onDidDismiss={closeModal}>
        <IonHeader>
          <IonToolbar>
            <IonTitle size='large'>
              <div className="Close">
                Recuperar respaldos
                <IonButtons slot="end" onClick={closeModal}>
                  <IonIcon slot="icon-only" icon={close} />
                </IonButtons>
              </div>
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="modal-content">
          <div className="modal-content">
            <IonCard>
                  <IonCardContent>
                  <DataTable
                    columns = {columns}
                    data = {db.data}
                    pagination
                  />
                  </IonCardContent>
            </IonCard>
          </div>
        </IonContent>
      </IonModal>
    </>
);
};

export default ModalRestoreBack;