import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItemDivider } from '@ionic/react';
import './Page.css';
import { DeterminarEdad } from '../Back-End/DeterminarEdad';
import { useState } from 'react';

const Edad: React.FC = () => {

    // INTERFAZ CON LA ESTRUCTURA DEL OBJETO ESTADO.
    interface Algo {

        Edad: number,
        Rango: string,
        Imagen: any
    }

    // USE-STATES

    const [Nombre, setNombre] = useState<string>('');
    const [Estado, setEstado] = useState<Algo>();

    // FUNCION PARA REALIZAR VALIDACIONES EN LA API.
    const Identificar = async () => {

        // FUNCION QUE ME RETORNA LOS DATOS.
        const edad = await DeterminarEdad(Nombre);

        let Obj = {
            Edad: 0,
            Rango: '',
            Imagen: <></>
        }

        if (edad >= 1 && edad <= 17) {

            Obj = {
                Edad: edad,
                Rango: 'Joven',
                Imagen: <img className='img-edad' src='./assets/Joven.png'></img>
            }

        } else if (edad >= 18 && edad <= 59) {

            Obj = {
                Edad: edad,
                Rango: 'Adulto',
                Imagen: <img className='img-edad' src='./assets/Adulto.png'></img>
            }


        } else {

            console.log(edad);

            Obj = {

                Edad: edad,
                Rango: 'Anciano',
                Imagen: <img className='img-edad' src='./assets/Anciano.png'></img>
            }

        }

        setEstado(Obj);
    }


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle className='centrar-texto'>Determinar la edad</IonTitle>
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
                    Estado != null ?


                        <div className='espaciado-resultado-genero'>

                            <h3>Usted es: </h3>

                            <h4 className='estilo-texto-edad'><b>{Estado.Rango} ({Estado.Edad} años)</b></h4>

                            {Estado.Imagen}

                        </div>

                        :

                        <h4></h4>

                }

            </IonContent>

        </IonPage>
    );
};

export default Edad;
