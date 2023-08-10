import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonGrid, IonRow, IonCol, IonPage, IonButton, IonContent, IonCardContent, IonCard, IonCardSubtitle, IonIcon, IonCardTitle } from '@ionic/react';
import './LandingPage.css';
import { useHistory } from 'react-router';
import { arrowDown, logoWhatsapp, logoFacebook, mailOutline } from 'ionicons/icons';

const LandingPage: React.FC = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isButtonHovered2, setIsButtonHovered2] = useState(false);
  const history = useHistory(); // Obtiene la instancia de history para la navegación

  const handleButtonClicked = () => {
    history.push('/home'); // Redirige a la página de inicio de sesión
  };
  const handleButtonClicked2 = () => {
    history.push('/'); // Redirige a la página de inicio de sesión
  };

  const [seExpanded, setIsExpanded] = useState(false);

  function handleMouseOver() {
    setIsExpanded(true);
  }

  function handleMouseOut() {
    setIsExpanded(false);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <IonGrid>
              <IonRow>
                <IonCol size="1">
                  <img src="/src/images/logo.png" alt="Mi Logo" className="logoLading" />
                </IonCol>
                <IonCol size="1.1" className="landing-title">
                  <div
                    className={`title-button ${isButtonHovered ? 'hovered' : ''}`}
                    onMouseEnter={() => setIsButtonHovered(true)}
                    onMouseLeave={() => setIsButtonHovered(false)}
                    onClick={handleButtonClicked}
                  >
                   INGRESAR
                  </div>
                  <div className={`underline ${isButtonHovered ? 'show' : ''}`} />
                </IonCol>
                <IonCol size="4">                 
               </IonCol>
              </IonRow>
            </IonGrid>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="CuadradoBonito">
        <h2 className="min-text">"Una imagen perfecta: Tu Estilo de Vida, Tu Inspiración Gráfica" </h2>
        <h2 className="big-text">BeArt</h2>
        <video autoPlay muted loop className="video-background">
    <source src="/src/images/Oso polar.mp4" type="video/mp4" />
    {/* Agrega más formatos de video si es necesario */}
  </video>
        </div>
        <p className='textoPlano'>
          ¡Descubre tu nuevo ser!
          <IonIcon size="large" icon={arrowDown} className="arrow-icon" />
        </p>
        <p className='LetrasGrandes'>ACERCA DE NOSOTROS!</p>
        
        {/* Agrega el grid de cards */}
        <div className="card-container">
        <IonGrid>
          <IonRow>
            <IonCol size="4">
            <IonCard className="IonCardWithOverlay">
                <img src="/src/images/porposito.jpg" alt="Imagen 1" />
                <IonCardContent>
                <IonCardSubtitle>09/08/23 </IonCardSubtitle><h1>Proposito</h1>
                  <IonCardContent>Facilitar a las personas a llevar una vida saludable, ordenada y con significado mediante una plataforma digital que une las características de una red social y la potencia del aprendizaje automático.</IonCardContent>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="4">
            <IonCard className="IonCardWithOverlay">
                <img src="/src/images/alcance.png" alt="Imagen 2" />
                <IonCardContent>
                <IonCardSubtitle>08/08/23 </IonCardSubtitle><h1>Alcance</h1>
                  <IonCardContent>El alcance de BeArt abarca el desarrollo y lanzamiento de una plataforma web innovadora, enfocada en promover un estilo de vida saludable.</IonCardContent>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="4">
            <IonCard className="IonCardWithOverlay">
                <img src="/src/images/objetivos.jpg" alt="Imagen 3" />
                <IonCardContent>
                <IonCardSubtitle>09/08/23 </IonCardSubtitle><h1>Objetivo</h1>
                  <IonCardContent>Ofrecer a las personas las herramientas y el respaldo requerido para adoptar y mantener un estilo de vida saludable, así como fomentar una toma de decisiones informada.</IonCardContent>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        </div>

        <div className='CuadradoBonito2'>
  <div className='osopn'>
    <img src="/src/images/oso.png" alt="Imagen de BeArt" />
  </div>
  
  <IonCard>
    <IonCardContent>
    <IonCardTitle>BeArt: Tu Estilo de Vida Saludable</IonCardTitle>
    <IonCardSubtitle>BeArt es una plataforma innovadora que combina una red social con aprendizaje automático para ayudarte a controlar tu día a día y promover un estilo de vida saludable.</IonCardSubtitle>
      <p>Nuestro enfoque es brindarte las herramientas y el apoyo para tomar decisiones informadas y alcanzar tus objetivos de bienestar.</p>
      <p>Utilizamos inteligencia artificial para crear imágenes personalizadas basadas en tus logros, respetando tu privacidad y fomentando una comunidad de apoyo.</p>
      <p>Con BeArt, puedes compartir experiencias, conectarte con otros usuarios y disfrutar de una vida más plena y saludable.</p>
    
    </IonCardContent>
  </IonCard>
</div>
      </IonContent>
      <div className="footer-container" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div className="footer-main">
        <p>© 2023 BeArt y asociados. BA . Todos los derechos reservados.</p>
      </div>
      <div className={`footer-expanded ${seExpanded ? "footer-expanded-visible" : ""}`}>
       
   
          <h3> CONTACTO</h3>
          
            <IonIcon size="small" icon={logoFacebook} className="iconLogo" />
            Página de Facebook: BeArt
         
  
            <IonIcon size="small" icon={mailOutline} className="iconLogo" />
            Correo electrónico: BeArt@gmail.com
          
     
            <IonIcon size="small" icon={logoWhatsapp} className="iconLogo" />
            Número: 664-784-9442
    
      
    </div>     
    </div>
    </IonPage>
  );
};

export default LandingPage;
