export const Clima = async () => {

  // FORMATO DE LA FECHA.
  let Today = new Date();
  let year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(Today);
  let month = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(Today);
  let day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(Today);

  // CONSTANTE QUE ALMACENA LA FECHA ACTUAL.
  const TodayFormat = `${year}-${month}-${day}`;

  // CREACION DE CONSTANTE CON DIA DESPUES A LA FECHA ACTUAL.
  const End = new Date();
  End.setDate(End.getDate() + 1);

  let year2 = new Intl.DateTimeFormat("en", { year: "numeric" }).format(End);
  let month2 = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(End);
  let day2 = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(End);

  // CONSTANTE QUE ALMACENA LA FECHA QUE SIGUE DESPUES DE LA FECHA ACTUAL.
  const TodayFormateEnd = `${year2}-${month2}-${day2}`;

  // CONSTANTE QUE ALMACENA LA API QUE SERA CONSULTADA.
  const peticion = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=18.54&longitude=-69.92&hourly=temperature_2m&daily=weathercode&start_date=${TodayFormat}&end_date=${TodayFormateEnd}&timezone=Etc/GMT-4&hourly=weathercode`
  );

  // EXTRACCION DE DATOS DE LA API.
  const data = await peticion.json();

  // COMPROABACION.

  if (data != null) {
    return data;
  }
};
