import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Inicio from './pages/Inicio';

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
import Genero from './pages/Genero';
import Edad from './pages/Edad';
import ClimaTiempo from './pages/ClimaTiempo';
import Acerca from './pages/Acerca';
import ListUniversidad from './pages/ListUniversidad';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">

            <Route path="/" exact={true}>
              <Redirect to="/Inicio" />
            </Route>

            <Route path="/Inicio" exact={true}>
              <Inicio />
            </Route>

            <Route path="/Genero" exact={true}>
              <Genero />
            </Route>

            <Route path="/Edad" exact={true}>
              <Edad />
            </Route>

            <Route path="/Universidades" exact={true}>
              <ListUniversidad />
            </Route>

            <Route path="/Clima" exact={true}>
              <ClimaTiempo />
            </Route>

            <Route path="/Acerca" exact={true}>
              <Acerca />
            </Route>




          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
