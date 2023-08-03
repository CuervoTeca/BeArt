import './ReactProSidebar.css';
import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { IonIcon } from '@ionic/react';
import { logOutOutline, homeOutline, restaurantOutline, gameControllerOutline, heartOutline, serverOutline, people, person } from 'ionicons/icons';
import { Link } from 'react-router-dom'
import logo from '../../images/BeArtLogo.svg'

interface ContainerProps { }

const ReactProSidebar: React.FC<ContainerProps> = () => {

  return (
    <div id="custom-sidebar-div">
      <Sidebar id="custom-sidebar">
        <h2 id="sidebar-title">BEART</h2>
        <Menu>
        <hr className="sidebar-divider" />
        <Link to="/homeAdmin"><MenuItem icon={<IonIcon icon={homeOutline} />}>Inicio</MenuItem></Link>
          <h2 className="sidebar-section">Tablas</h2>
          <Link to="/dishes"><MenuItem icon={<IonIcon icon={restaurantOutline} />}>Platillos</MenuItem></Link>
          <Link to="/addictions"><MenuItem icon={<IonIcon icon={gameControllerOutline} />}>Adicciones</MenuItem></Link>
          <Link to="/physicalActivities"><MenuItem icon={<IonIcon icon={heartOutline} />}>Actividades Fisicas</MenuItem></Link>
          <h2 className="sidebar-section">Administracion</h2>
          <Link to="/dataBase"><MenuItem icon={<IonIcon icon={serverOutline} />}>Base de datos</MenuItem></Link>
          <Link to="/users"><MenuItem icon={<IonIcon icon={people} />}>Usuarios</MenuItem></Link>
          <hr className="sidebar-divider" />
          <Link to="/profile"><MenuItem icon={<IonIcon icon={person} />}>Perfil</MenuItem></Link>
          <MenuItem icon={<IonIcon icon={logOutOutline} />}> Cerrar Sesion </MenuItem>
        </Menu>
        <br/>
        <img src={logo} alt="Logo" id="sidebar-logo" />
      </Sidebar>
    </div>
  );
};

export default ReactProSidebar;

