import './ReactProSidebar.css';
import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { IonIcon } from '@ionic/react';
import { logOutOutline, homeOutline, restaurantOutline, gameControllerOutline, heartOutline, serverOutline } from 'ionicons/icons';

interface ContainerProps { }

const ReactProSidebar: React.FC<ContainerProps> = () => {

  return (
    <div id="custom-sidebar-div">
      <Sidebar id="custom-sidebar">
        <h2 id="sidebar-title">BEART</h2>
        <Menu>
        <hr className="sidebar-divider" />
          <MenuItem icon={<IonIcon icon={homeOutline} />}> Inicio </MenuItem>
          <h2 className="sidebar-section">Tablas</h2>
          <SubMenu label="Platillos" icon={<IonIcon icon={restaurantOutline} />}>
            <MenuItem> Añadir </MenuItem>
            <MenuItem> Borrar </MenuItem>
            <MenuItem> Modificar </MenuItem>
          </SubMenu>
          <SubMenu label="Adicciones" icon={<IonIcon icon={gameControllerOutline} />}>
            <MenuItem> Añadir </MenuItem>
            <MenuItem> Borrar </MenuItem>
            <MenuItem> Modificar </MenuItem>
          </SubMenu>
          <SubMenu label="Actividades Fisicas" icon={<IonIcon icon={heartOutline} />}>
            <MenuItem> Añadir </MenuItem>
            <MenuItem> Borrar </MenuItem>
            <MenuItem> Modificar </MenuItem>
          </SubMenu>
          <h2 className="sidebar-section">Administracion</h2>
          <SubMenu label="Base de datos" icon={<IonIcon icon={serverOutline} />}>
            <MenuItem> Back-up </MenuItem>
            <MenuItem> Cargar back-up </MenuItem>
            <MenuItem> Restablecer </MenuItem>
          </SubMenu>
          <hr className="sidebar-divider" />
          <MenuItem icon={<IonIcon icon={logOutOutline} />}> Cerrar Sesion </MenuItem>
        </Menu>
        <br/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/WoW_icon.svg/1200px-WoW_icon.svg.png" alt="Logo" id="sidebar-logo" />
      </Sidebar>
    </div>
  );
};

export default ReactProSidebar;

