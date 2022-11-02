export const Estado5 = (estado: number) => {


    let obj = {
        Weather: '',
        Imagen: ''
    }

    switch (estado) {

        case 61:

            obj = {
                
                Weather: 'Lluvia leve',
                Imagen: './assets/Lluvia.png'
            }
            
            break;

            case 63:

            obj = {
              
                Weather: 'Lluvia moderada',
                Imagen: './assets/Lluvia.png'
            }
            
            break;

            case 65:

            obj = {
              
                Weather: 'Lluvia fuerte',
                Imagen: './assets/Lluvia.png'
            }
            
            break;

    }

    return obj;

}