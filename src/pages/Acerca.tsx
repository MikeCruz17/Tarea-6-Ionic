import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Page.css';

/* RESPONSIVE */
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

const Acerca: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle className='titulo-centrado'>Sobre el creador</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen style={{ textAlign: 'center' }}>


                <div className='div-justificado'>

                    <br />
                    <img src="./assets/Foto.jpg" className='foto-perfil' />

                    <h4>Miguel Angel Cruz Fernández</h4>
                    <h4 style={{ color: 'orangered' }}>+1 (809) 341-7900</h4>
                    <h6 className='tachado'>miguelangelcruz200217@gmail.com</h6>

                </div>

                <div className='div-justificado'>

                    <br />
                    <p>Si deseas contactarme, presione:</p>

                </div>

                <div className='caja1'>



                    <a href="https://t.me/+18293417900">                 
                    <img src="./assets/Telegram.png" height={70} />
                    </a>  

                </div>

                <div className='caja1'>

                <a href="https://api.whatsapp.com/send/?phone=18293417900&text&type=phone_number&app_absent=0">      
                    <img src="./assets/Whatsapp.png" height={70} />
                    </a>  

                </div>

            </IonContent>
        </IonPage>
    );
};

export default Acerca;