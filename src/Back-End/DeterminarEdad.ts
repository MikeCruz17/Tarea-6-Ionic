

export const DeterminarEdad = async (nombre: string) => {

  // CONSTANTE QUE ALMACENA LA API QUE SERA CONSULTADA.
  const peticion = await fetch(`https://api.agify.io/?name=${nombre}`)

  // EXTRACCION DE DATOS DE LA API.
  const data = await peticion.json()

  // DESESTRUCTURANDO LOS DATOS.
  const {age} = data;


    if(data != null){
        return age;
    }else{
        return '';
    }

}
