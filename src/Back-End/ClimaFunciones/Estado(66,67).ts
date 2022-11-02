export const Estado6 = (estado: number) => {


    let obj = {
        Weather: '',
        Imagen: ''
    }

    switch (estado) {

        case 66:

            obj = {
                
                Weather: 'Lluvia helada ligera',
                Imagen: './assets/Lluvia.png'
            }
            
            break;

        case 67:

            obj = {
              
                Weather: 'Lluvia helada fuerte',
                Imagen: './assets/Lluvia.png'
            }
            
            break;

    }

    return obj;

}