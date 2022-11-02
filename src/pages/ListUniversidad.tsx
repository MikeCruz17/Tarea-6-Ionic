import { IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItemDivider, IonButton } from '@ionic/react';
import './Page.css';
import { useState } from 'react';
import { ListaUniversidades } from '../Back-End/ListaUniversidades';

const Universidad: React.FC = () => {

     // USE-STATE.
     const [Nombre, setNombre] = useState<string>('');
     const [Result, setResult] = useState<any[]>();

    // ARRAY QUE ALMACENARA LOS DATOS DE MANERA TEMPORAL.
    let myArr = new Array();

    const Identificar = async () => {

        // FUNCION QUE ME RETORNA EL SEXO DE LA PERSONA.
        const Datos = await ListaUniversidades(Nombre);

        // OBJETO QUE ALMACENARA DATOS DE LAS UNIVERSIDADES DE FORMA TEMPORAL.

        let obj = {
            Nombre: '',
            Dominio: '',
            Link: ''
        }

        // CICLO QUE INSERTA LOS DATOS EN EL ARRAY...
        for (let i = 0; i < Datos.length; i++) {

            obj = {
                Nombre: Datos[i].name,
                Dominio: Datos[i].domains,
                Link: Datos[i].web_pages
            }

            myArr.push(<div key={i}>

                <IonItemDivider></IonItemDivider>
                <h3 className='centrar-texto-All'>Universidad <b className='texto-naranja-claro'>#{i + 1}</b></h3>
                <IonItemDivider></IonItemDivider>
                <br />
                <h5 style={{ color: 'orange' }} className='centrar-texto-All'>{obj.Nombre}</h5>
                <br />
                <p ><b>Dominio: {obj.Dominio}</b></p>
                <p ><b>Link: <a href={obj.Link}>{obj.Link}</a></b></p>
                <IonItemDivider></IonItemDivider>
                <br />

            </div>)

        }

        setResult(myArr);

    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle className='centrar-texto'>Lista de Universidades</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>

                <IonItemDivider></IonItemDivider>

                <IonItem>
                    <IonLabel position="floating">Nombre del país <b>(en inglés)</b></IonLabel>
                    <IonInput onIonChange={e => setNombre(e.detail.value!)} placeholder="País"></IonInput>
                   
                </IonItem>

                <IonButton onClick={Identificar}>Buscar</IonButton>

             
                {
                    // SI EL NOMBRE NO ES NULO.
                    Result != null ?

                        <div style={{ position: 'relative', top: 60 }}>

                            <h2>Resultados: </h2>

                            {Result}

                        </div>

                        :

                        <h4>Vacio</h4>

                }

            </IonContent>

        </IonPage>
    );
};

export default Universidad;
