import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItemDivider, IonGrid, IonRow, IonCol } from '@ionic/react';
import './Page.css';
import { useState } from 'react';
import { Clima } from '../Back-End/Clima';
import { EstadoFirst } from '../Back-End/ClimaFunciones/Estado(1,2,3)';
import { EstadoSecond } from '../Back-End/ClimaFunciones/Estado(45,48)';
import { Estado3 } from '../Back-End/ClimaFunciones/Estado(51,53,55)';
import { Estado4 } from '../Back-End/ClimaFunciones/Estado(56,57)';
import { Estado5 } from '../Back-End/ClimaFunciones/Estado(61,63,65)';
import { Estado6 } from '../Back-End/ClimaFunciones/Estado(66,67)';
import { Estado7 } from '../Back-End/ClimaFunciones/Estado(80,81,82)';
import { Estado8 } from '../Back-End/ClimaFunciones/Estado(95)';

let conf2 = true;
let Now = '';

const ClimaTiempo: React.FC = () => {

    // USE-STATES

    const [ListaDatos, setListaDatos] = useState<any[]>();

    // ARRAY PARA ALMACENAR POSICIONES DE OBJETOS TIPO ESTRUCTURA.
    let Arr = new Array();
    let Arr2 = new Array();


    // FUNCION PARA REALIZAR VALIDACIONES EN LA API.
    const Identificar = async () => {

        // FUNCION QUE ME RETORNA LOS DATOS.
        const DetallesClima = await Clima();

        // CREACION DE OBJETO.
        let obj = {
            Fecha: '',
            Temperatura: 0,
            Weather: '',
            Imagen: ''
        }

        // DESESTRUCTURANDO LOS DATOS.
        let { hourly } = DetallesClima;

        // CICLO QUE INSERTA LOS DATOS EN EL ARRAY...
        for (let i = 0; i < hourly.weathercode.length; i++) {

            const elemento = DetallesClima.hourly.weathercode[i];

            // EVALUANDO ESTADOS DEL CLIMA...

            if (elemento === 0) {

                obj = {
                    Fecha: hourly.time[i],
                    Temperatura: hourly.temperature_2m[i],
                    Weather: 'Cielo limpio',
                    Imagen: "./assets/sol.png"
                }
            }
            else if (elemento === 1 || elemento === 2 || elemento === 3) {

                const Result = EstadoFirst(elemento);

                obj = {
                    Fecha: hourly.time[i],
                    Temperatura: hourly.temperature_2m[i],
                    Weather: Result.Weather,
                    Imagen: Result.Imagen
                }


            } else if (elemento === 45 || elemento === 48) {

                const Result = EstadoSecond(elemento);

                obj = {
                    Fecha: hourly.time[i],
                    Temperatura: hourly.temperature_2m[i],
                    Weather: Result.Weather,
                    Imagen: Result.Imagen
                }

            } else if (elemento === 51 || elemento === 53 || elemento === 55) {


                const Result = Estado3(elemento);

                obj = {
                    Fecha: hourly.time[i],
                    Temperatura: hourly.temperature_2m[i],
                    Weather: Result.Weather,
                    Imagen: Result.Imagen
                }


            } else if (elemento === 56 || elemento === 57) {

                const Result = Estado4(elemento);

                obj = {
                    Fecha: hourly.time[i],
                    Temperatura: hourly.temperature_2m[i],
                    Weather: Result.Weather,
                    Imagen: Result.Imagen
                }

            } else if (elemento === 61 || elemento === 63 || elemento === 65) {

                const Result = Estado5(elemento);

                obj = {
                    Fecha: hourly.time[i],
                    Temperatura: hourly.temperature_2m[i],
                    Weather: Result.Weather,
                    Imagen: Result.Imagen
                }

            }

            else if (elemento === 66 || elemento === 67) {

                const Result = Estado6(elemento);

                obj = {
                    Fecha: hourly.time[i],
                    Temperatura: hourly.temperature_2m[i],
                    Weather: Result.Weather,
                    Imagen: Result.Imagen
                }

            }

            else if (elemento == 80 || elemento == 81 || elemento == 82) {

                const Result = Estado7(elemento);

                obj = {
                    Fecha: hourly.time[i],
                    Temperatura: hourly.temperature_2m[i],
                    Weather: Result.Weather,
                    Imagen: Result.Imagen
                }

            }

            else if (elemento >= 95) {

                const Result = Estado8(elemento);

                obj = {
                    Fecha: hourly.time[i],
                    Temperatura: hourly.temperature_2m[i],
                    Weather: Result.Weather,
                    Imagen: Result.Imagen
                }

            }

            Arr[i] = obj;

        }

        // LONGITUD DE LOS ELEMENTOS.
        MostrarDatos();

    }

Identificar();

    // FUNCION QUE RECORRE L
    const MostrarDatos = () => {

    
    const Today = new Date();
    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(Today);
    const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(Today);
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(Today);

      // CONSTANTE QUE ALMACENA LA FECHA DEL DIA PROXIMO A LA FECHA ACTUAL.
      const EndDate = `${year}-${month}-${parseInt(day) + 1}`;
      Now = `${year}-${month}-${day}`;
            

        for (let i = 0; i < 48; i++) {

            // EXTRAER LA HORA DE CADA FECHA DEL ARRAY.
            const Fecha = new Date(Arr[i].Fecha);
            const Hora = Fecha.toLocaleTimeString('en-US');

            // VALIDACION PARA AÑADIR TÍTULO.
            if(i === 24){
                conf2 = true;
            }

            // INSERTAR DATOS EN EL ARRAY.
            Arr2.push(<div key={i}>

                <IonGrid fixed={true}>

                {
                    // VALIDACION PARA INSERTAR TITULO.
                   conf2 ?
                       <>
                        <h4 className='centrar-texto-All texto-naranja-claro'>Mañana ({ EndDate})</h4>

                        <IonItemDivider></IonItemDivider>
                       

                       {conf2 = false}
                       
                       </>
                    :

                    <></>

                }

                    <IonRow>
                        <IonCol>{Hora}</IonCol>
                        <IonCol className='centrar-texto-All'>{Arr[i].Temperatura}</IonCol>
                        <IonCol>{Arr[i].Weather}</IonCol>
                        <IonCol><img src={Arr[i].Imagen} height='50' /></IonCol>

                    </IonRow>
                </IonGrid>

                <IonItemDivider></IonItemDivider>

            </div>)


        }

        // INGRESAR ARRAY EN EL USER-STATE.
         setListaDatos(Arr2);       

    }

    
    return (

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle className='centrar-texto'>Clima actual <b className='texto-naranja-claro'>({Now})</b></IonTitle>
                    
                </IonToolbar>

            </IonHeader>

            <IonContent fullscreen>
         
                {

                    // SI LA LISTA NO ES NULA...
                    ListaDatos != null ?


                        <div>
                            <IonItemDivider></IonItemDivider>
                            <IonGrid fixed={true}>
                                <IonRow>
                                    <IonCol><b>Hora</b></IonCol>
                                    <IonCol className='centrar-texto-All'><b>ºC</b></IonCol>
                                    <IonCol><b>Pronóstico</b></IonCol>
                                    <IonCol><b>Referencia</b></IonCol>

                                </IonRow>
                                <IonItemDivider style={{top: -5, position: 'relative'}}></IonItemDivider>
                            </IonGrid>
                            <div>
                                {ListaDatos}
                            </div>

                        </div>

                        :

                        <h4></h4>

                }

            </IonContent>

        </IonPage>
    );
};

export default ClimaTiempo;
