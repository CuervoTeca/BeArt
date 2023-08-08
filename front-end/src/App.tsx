import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Dishes from './pages/Dishes/Dishes';
import Users from './pages/Users/Users';
import Addictions from './pages/Addictions/Addictions';
import DataBase from './pages/DataBase/DataBase';
import Profile from './pages/Profile/Profile';
import PhysicalActivities from './pages/PhysicalActivities/PhysicalActivities';
import HomeAdmin from './pages/HomeAdmin/HomeAdmin';
import Login from './pages/Login/Login';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
        <Route exact path="/home">
          <Login />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/dishes">
          <Dishes />
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
        <Route exact path="/addictions">
          <Addictions />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/database">
          <DataBase />
        </Route>
        <Route exact path="/physicalActivities">
          <PhysicalActivities />
        </Route>
        <Route path="/homeAdmin">
          <HomeAdmin />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
    </IonReactRouter>
  </IonApp>
);


export default App;
