export const Estado8 = (estado: number) => {


    let obj = {
        Weather: '',
        Imagen: ''
    }

    switch (estado) {

        case (95):

            obj = {
                
                Weather: 'Tormenta ligera o moderada',
                Imagen: './assets/Tormenta.png'
            }
            
            break;

            default:

            break;
    }

    return obj;

}