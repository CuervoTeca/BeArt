import './ReactProSidebar.css';
import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { IonIcon } from '@ionic/react';
import { logOutOutline, homeOutline, restaurantOutline, gameControllerOutline, heartOutline, serverOutline, people, person, logoGithub } from 'ionicons/icons';
import { IonButton } from '@ionic/react';
import { Link } from 'react-router-dom'
import logo from '../../images/BeArtLogo.svg'

interface ContainerProps { }

const ReactProSidebar: React.FC<ContainerProps> = () => {

  return (
    <div id="custom-sidebar-div">
      <Sidebar id="custom-sidebar"  backgroundColor='white'>
        <div id='title-div'>
          <img src={logo} alt="Logo" id='logo-title'/>
          <h2 id="sidebar-title">BEART</h2>
        </div>
        <Menu>
          <hr className="sidebar-divider" />
          <Link to="/homeAdmin" className='link'><MenuItem icon={<IonIcon icon={homeOutline} className='MenuItem-icon'/>} className="MenuItem"> Inicio </MenuItem></Link>

          <h2 className="sidebar-section">Tablas</h2>
          <Link to="/dishes" className='link'><MenuItem icon={<IonIcon icon={restaurantOutline} className='MenuItem-icon' />} className="MenuItem">Platillos</MenuItem></Link>
          <Link to="/addictions" className='link'><MenuItem icon={<IonIcon icon={gameControllerOutline} className='MenuItem-icon' />} className="MenuItem">Adicciones</MenuItem></Link>
          <Link to="/physicalActivities" className='link'><MenuItem icon={<IonIcon icon={heartOutline} className='MenuItem-icon' />} className="MenuItem">Actividades Fisicas</MenuItem></Link>

          <h2 className="sidebar-section">Administracion</h2>
          <Link to="/dataBase" className='link'><MenuItem icon={<IonIcon icon={serverOutline} className='MenuItem-icon' />} className="MenuItem">Base de datos</MenuItem></Link>
          <Link to="/users" className='link'><MenuItem icon={<IonIcon icon={people} className='MenuItem-icon' />} className="MenuItem">Usuarios</MenuItem></Link>
  
          <hr className="sidebar-divider" />
          <Link to="/" className='link'><MenuItem icon={<IonIcon icon={logOutOutline} className='MenuItem-icon' />} className="MenuItem"> Cerrar Sesion </MenuItem></Link>
        </Menu>
        <br/>
        <div id='footer'>
          <IonIcon icon={logoGithub} className='footer-icon'/>
            <h2>BeArt</h2>
            <h6>V 1.0.0 alpha 1</h6>
          <IonButton expand="block" color="light" href="https://github.com/CuervoTeca/BeArt">Codigo</IonButton>
        </div>
      </Sidebar>
    </div>
  );
};

export default ReactProSidebar;

