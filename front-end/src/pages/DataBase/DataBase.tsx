import { IonCol, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonButton, IonIcon } from '@ionic/react';
import { serverOutline } from 'ionicons/icons';
import React from 'react';
import ReactProSidebar from '../../components/ReactProSidebar/ReactProSidebar';

import './DataBase.css'
import ModalRestoreBack from '../../components/DataBase/ModalRestoreBack/ModalRestoreBack';
import ModalResetBack from '../../components/DataBase/ModalResetBack/ModalResetBack';
import ModalCreatetBack from '../../components/DataBase/ModalCreateBack/ModalCreateBack';

const DataBase: React.FC = () => {
  return (
<div id='div-main'>
      <div id='div-menu'>
        <ReactProSidebar></ReactProSidebar>
      </div>
      <div id='div-content'>
        <IonContent>
          <IonGrid>
          <IonRow><IonCol><h1  id='DatabaseTitle'> <IonIcon icon={serverOutline} /> Base de datos</h1></IonCol></IonRow>
            <IonCard>
              <IonCardHeader>
                <h1>Respaldos</h1>
              </IonCardHeader>
              <IonRow>
                <IonCol>
                  <IonCard>
                    <IonCardHeader>
                      <IonCardTitle>Crear Respaldo Completo</IonCardTitle>
                      <IonCardSubtitle>¿Que es?</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>Crear un respaldo completo implica hacer una copia de seguridad de todos los datos y archivos relevantes de una base de datos,
                      sistema o dispositivo en un momento específico. Esto incluye todos los registros, tablas, configuraciones y otros elementos necesarios para restaurar
                      completamente el sistema a su estado original en caso de pérdida de datos, corrupción o fallo del sistema.
                      <hr></hr>
                      <ModalCreatetBack></ModalCreatetBack>
                    </IonCardContent>
                  </IonCard>
                </IonCol>

                <IonCol>
                  <IonCard>
                    <IonCardHeader>
                      <IonCardTitle>Recuperar Respaldo</IonCardTitle>
                      <IonCardSubtitle>¿Que es?</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>Recuperar un respaldo implica restaurar los datos almacenados previamente en una copia de seguridad
                      a un sistema o base de datos después de que se haya producido
                      una pérdida de datos o un problema grave. Al recuperar un respaldo, se devuelve el sistema a un estado anterior donde los
                      datos estaban intactos antes del evento problemático.
                      <hr></hr>
                      <ModalRestoreBack></ModalRestoreBack>
                    </IonCardContent>
                  </IonCard>
                </IonCol>

                </IonRow>

                <IonCardHeader>
                <h1>Reinicio</h1>
                </IonCardHeader>

                <IonRow>
                <IonCol>
                  <IonCard>
                    <IonCardHeader>
                      <IonCardTitle>Reiniciar Tablas</IonCardTitle>
                      <IonCardSubtitle>¿Que es?</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>Reiniciar tablas se refiere a borrar o eliminar todos los datos contenidos en una o varias tablas de una base de datos,
                      sin afectar la estructura de la base de datos en sí.
                      Esto es útil en situaciones en las que se necesite limpiar los datos almacenados y comenzar desde cero sin tener que borrar toda la base de datos.
                      <hr></hr>
                      <ModalResetBack></ModalResetBack>
                     </IonCardContent>
                  </IonCard>
                </IonCol>
                </IonRow>
              
            </IonCard>
          </IonGrid>
        </IonContent>
      </div>
    </div>
);
};

export default DataBase;