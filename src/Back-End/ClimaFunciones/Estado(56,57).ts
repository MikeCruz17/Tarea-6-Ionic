export const Estado4 = (estado: number) => {


    let obj = {
        Weather: '',
        Imagen: ''
    }

    switch (estado) {

        case 56:

            obj = {
                
                Weather: 'Llovizna Engelante ligera',
                Imagen: './assets/Llovizna.png'
            }
            
            break;

            case 57:

            obj = {
              
                Weather: 'Llovizna Engelante densa',
                Imagen: './assets/Llovizna.png'
            }
            
            break;

    }

    return obj;

}