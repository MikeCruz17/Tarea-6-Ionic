
export const ListaUniversidades = async (nombre : string) => {

    // CONSTANTE QUE ALMACENA LA API QUE SERA CONSULTADA.
  const peticion = await fetch(`http://universities.hipolabs.com/search?country=${nombre}`);

  // EXTRACCION DE DATOS DE LA API.
  const data = await peticion.json();


  if(data === null || data === undefined){

    return '';
  }

  return data;

}