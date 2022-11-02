import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItemDivider } from '@ionic/react';
import './Page.css';
import { DeterminarGenero } from '../Back-End/IdentificarGenero';
import { useState } from 'react';

const Genero: React.FC = () => {

    const [Nombre, setNombre] = useState<string>('');
    const [Result, setResult] = useState<any>();

    const Identificar = async () => {

        // FUNCION QUE ME RETORNA EL SEXO DE LA PERSONA.
        const Sexo = await DeterminarGenero(Nombre);

        if(Sexo === 'Hombre'){
            // USE-STATE QUE ALMACENA EL SEXO DE LA PERSONA.
            setResult(<h2 className='texto-azul centrar-texto-All'>{Sexo}</h2>);
        }
        else{
            setResult(<h2 className='texto-rosa centrar-texto-All'>{Sexo}</h2>);
        }

    }


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle className='centrar-texto'>Género</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>

                <IonItemDivider></IonItemDivider>

                <IonItem>
                    <IonLabel position="floating">Ingrese el nombre</IonLabel>
                    <IonInput onIonChange={e => setNombre(e.detail.value!)} placeholder="Nombre"></IonInput>
                </IonItem>

                <IonButton color='warning' className='boton-derecho' onClick={() => Identificar()}>Identificar</IonButton>

                {
                    // SI EL NOMBRE NO ES NULO.
                    Result != null || Result != '' ?

                    
                        <div className='espaciado-resultado-genero'>

                            <h3>Su sexo: </h3>

                            {Result}
                        </div>

                        :

                        <h4></h4>

                }

            </IonContent>



        </IonPage>
    );
};

export default Genero;
