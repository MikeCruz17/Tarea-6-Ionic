export const Estado3 = (estado: number) => {


    let obj = {
        Weather: '',
        Imagen: ''
    }

    switch (estado) {

        case 51:

            obj = {
                
                Weather: 'Llovizna ligera',
                Imagen: './assets/Llovizna.png'
            }
            
            break;

            case 53:

            obj = {
              
                Weather: 'Llovizna moderada',
                Imagen: './assets/Llovizna.png'
            }
            
            break;

            case 55:

                obj = {
                  
                    Weather: 'Llovizna densa',
                    Imagen: './assets/Llovizna.png'
                }
                
                break;
    
    }

    return obj;

}