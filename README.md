## Proyecto Fixture Mundial Qatar 2022

Este proyecto tiene como objetivo mostrar el fixture del Mundial de Fútbol Qatar 2022. Se utiliza Next.js para conectarse a la API "free-api-worldcup2022", ya que la API no permite llamadas desde el frontend. Para solucionar esto, se utilizó el método "getServerSideProps" de Next.js.

## Funcionamiento

Al ingresar al sitio web, se verá una pantalla de bienvenida con dos botones. El botón "Ver grupos" llevará al usuario a una página con tablas que muestran los equipos, resultados y estadísticas de los partidos, como goles hechos, partidos ganados, partidos perdidos, empates, etc. El otro botón en la página de inicio se llama "Resultados completos" y lleva al usuario a una página donde se muestran diferentes tarjetas con información sobre los grupos y los equipos que jugaron, incluyendo el día, la bandera, el marcador, el horario y los goleadores. El usuario también puede hacer clic en la tarjeta que desee para ir a una página donde solo se mostrarán los partidos del grupo seleccionado.

## Tecnologías utilizadas

- Next.js
- API "free-api-worldcup2022"

## Instalación

- Clonar el repositorio: git clone
- Instalar las dependencias: npm install
- Ejecutar el proyecto: npm run dev

## Páginas

La aplicación tiene las siguientes páginas:

- Inicio(`/`) - esta es la página de inicio y presenta una pantalla de bienvenida con dos botones.
- Grupos(`/grupos`) - esta página muestra las tablas de los equipos y sus resultados, incluyendo estadísticas como goles hechos, partidos ganados, perdidos, empates, etc.
- Resultados completos(`resultados`) - esta página presenta diferentes tarjetas (cards) para cada grupo, mostrando los equipos que jugaron, la fecha, la bandera de cada país, el resultado del partido, el horario y los goleadores.
- Partidos de grupo(`grupos/[grupo]`) - esta página muestra solo los partidos de un grupo en particular, según el grupo seleccionado por el usuario en la página de "Resultados completos".

## Contribuciones

Este proyecto es de código abierto y se aceptan contribuciones. Para contribuir, por favor crea un pull request y sigue las pautas de contribución.
