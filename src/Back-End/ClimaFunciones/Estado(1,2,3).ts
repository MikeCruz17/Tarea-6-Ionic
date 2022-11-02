

export const EstadoFirst = (estado: number) => {


    let obj = {
        Weather: '',
        Imagen: ''
    }

    switch (estado) {

        case 1:

            obj = {
                
                Weather: 'Despejado',
                Imagen: './assets/sol.png'
            }
            
            break;

            case 2:

            obj = {
              
                Weather: 'Nublado',
                Imagen: './assets/Nublado.png'
            }
            
            break;
    
        default:

            obj = {
              
                Weather: 'Nublado',
                Imagen: './assets/Nublado.png'
            }

            break;
    }

    return obj;

}