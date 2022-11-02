

export const DeterminarGenero = async (nombre: string) => {

  // CONSTANTE QUE ALMACENA LA API QUE SERA CONSULTADA.
  const peticion = await fetch(`https://api.genderize.io/?name=${nombre}`)

  // EXTRACCION DE DATOS DE LA API.
  const data = await peticion.json()

  // DESESTRUCTURACION DE LA CONSTANTE DATA.
  const { gender } = data

  // CREACION DE VARIABLE TIPO SEXO.
  let Sexo = ''

  // SI ES NULO.
  if (data === null || data === '') {

    return ''

  } else {

    switch (gender) {

      case 'male':
        Sexo = 'Hombre'
        break

      default:
        Sexo = 'Mujer'
        break
    }

    return Sexo
  }
}
