export const Estado7 = (estado: number) => {


    let obj = {
        Weather: '',
        Imagen: ''
    }

    switch (estado) {

        case 80:

            obj = {
                
                Weather: 'Lluvias leves',
                Imagen: './assets/Lluvia.png'
            }
            
            break;

        case 81:

            obj = {
              
                Weather: 'Lluvias moderadas',
                Imagen: './assets/Lluvia.png'
            }
            
            break;

            case 82:

                obj = {
                  
                    Weather: 'Lluvias violentas',
                    Imagen: './assets/Lluvia.png'
                }
                
                break;
    

    }

    return obj;

}