export const EstadoSecond = (estado: number) => {


    let obj = {
        Weather: '',
        Imagen: ''
    }

    switch (estado) {

        case 45:

            obj = {
                
                Weather: 'Niebla',
                Imagen: './assets/viento.png'
            }
            
            break;

            case 48:

            obj = {
              
                Weather: 'Niebla de escarcha',
                Imagen: './assets/viento.png'
            }
            
            break;
    
    }

    return obj;

}