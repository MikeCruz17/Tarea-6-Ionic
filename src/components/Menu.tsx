import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { bodyOutline, homeOutline, libraryOutline, maleFemaleOutline, medkitOutline, thunderstormOutline } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Inicio',
    url: '/Inicio',
    iosIcon: homeOutline,
    mdIcon: homeOutline
  },
  {
    title: 'Predecir género',
    url: '/Genero',
    iosIcon: maleFemaleOutline,
    mdIcon: maleFemaleOutline
  },
  {
    title: 'Edad',
    url: '/Edad',
    iosIcon: bodyOutline,
    mdIcon: bodyOutline
  },
  {
    title: 'Universidades',
    url: '/Universidades',
    iosIcon: libraryOutline,
    mdIcon: libraryOutline
  },
  {
    title: 'Clima',
    url: '/Clima',
    iosIcon: thunderstormOutline,
    mdIcon: thunderstormOutline
  },
  {
    title: 'Acerca de',
    url: '/Acerca',
    iosIcon: medkitOutline,
    mdIcon: medkitOutline
  }
];



const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
        <IonListHeader>Miguel Angel Cruz</IonListHeader>
          <IonNote>2020-10527</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

      </IonContent>
    </IonMenu>
  );
};

export default Menu;
