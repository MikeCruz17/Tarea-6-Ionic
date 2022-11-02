import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Page.css';

const Page: React.FC = () => {


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"></IonTitle>
          </IonToolbar>
        </IonHeader>

        <h3 className='centrar-texto-All'>App Navaja Suiza</h3>

        <img className='navaja-img' src="./assets/Navaja Suiza.png" />

        <h4 className='centrar-texto-All texto-naranja-claro'><b>Descripción</b></h4>
        <h6 className='texto-justificado'>Esta app es una clara representación de una navaja suiza, posee diversas opciones como:
          Mostrar lista de universidades por país, predecir género, ver clima actual, etc. 
          Sabemos que la navaja suiza posee diversas herramientas, es todo en uno pero en un mismo
          componente, en este caso una App todo en uno.
        </h6>
       
      </IonContent>
    </IonPage>
  );
};

export default Page;
