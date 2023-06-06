<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.pb-md-0.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Equipos y materiales para toma de muestras y análisis <em>in situ</em>

    
    p.mb-4(data-aos="fade") Los equipos deben ser calibrados por lo general anualmente, pero eso depende de cada equipo, a través de un tercero que certifica su buen estado y funcionamiento. El laboratorio debe contar con la hoja de vida del equipo en donde se establezca su plan de verificación, mantenimientos preventivos y correctivos, hoja de seguridad y ficha técnica del fabricante.

    .row.fondo-green.align-items-center.py-4.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-12
            h3.subt.text-white.mb-4(data-aos="fade") Equipos y materiales para toma de muestras de agua
            p(data-aos="fade") Existen algunos parámetros que por sus características o inestabilidad deben ser medidos en el lugar de la recolección (
              em In situ
              | ). Entre estos, dependiendo del tipo de agua y su fin, es posible encontrar la temperatura, olor, color, pH, cloro, conductividad, entre otros.
            p.mb-4(data-aos="fade") La medición de los parámetros 
              em in situ 
              | se puede hacer directamente en el cuerpo de agua o extrayendo una muestra mediante el uso de los recipientes adecuados. Siendo necesario tener en cuenta las siguientes recomendaciones:

          .col-md-6.mb-4(data-aos="fade-right")
            ul.lista-ul--color.color-secundario.ps-md-3.fa-ul 
              li.mb-md-3
                i.fas.fa-check
                | Los equipos de medición deben ser calibrados y verificados antes de la medición.
              li.mb-md-3
                i.fas.fa-check
                | El uso de equipos y kits de medición se debe hacer acorde instrucciones y manuales de operación.
              li.mb-md-0
                i.fas.fa-check
                | En el caso de equipos que hacen uso de electrodos para medición, posterior a su uso este debe ser lavado con agua destilada y conservado acorde a los protocolos del proveedor para garantizar su tiempo de vida útil.
          .col-md-6.mb-4(data-aos="fade-left")
            img(src='@/assets/curso/temas/tema3/img.png' alt='Imagen decorativa')


    p.mb-4(data-aos="fade") La siguiente tabla, enuncia los más comunes equipos y materiales usados en la toma de muestras de agua:

    .row.justify-content-center.mb-5
      .col-md-8(data-aos="fade-down")
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Tabla 8.] Equipos y materiales para la toma de muestras de agua
          .tabla-a.tema1.color-secundario
            table
              thead
                tr.bg-secundario
                  th Para la Toma de Muestras 
              tbody.text-center
                tr
                  td Recipientes plásticos para análisis físico químico de 1lt 
                tr.bg-green4
                  td Recipiente para análisis microbiológico 500ml 
                tr
                  td Recipiente de vidrio transparentes o ámbar dependiendo del análisis físico-químicos de 1lt
                tr.bg-green4
                  td Erlenmeyer para la toma de metales 
                tr
                  td Erlenmeyer para la toma de oxígeno disuelto 
                tr.bg-green4
                  td Erlenmeyer para la toma de fosfatos 
                tr
                  td Envases esterilizados para bacteriológico 
                tr.bg-green4
                  td Frascos de vidrio para grasas 
                tr
                  td Duplicado o blanco 
                tr.bg-green4
                  td Recipientes de refrigeración 
                tr
                  td Frasco lavador con agua destilada 
                tr.bg-green4
                  td Vasija recolectora 
                tr
                  td Gotero
                tr.bg-green4
                  td Embudo
                tr
                  td Bolsa pequeña de basura 
                tr.bg-green4
                  td Reactivos para preservación de las muestras metales 
                tr
                  td Flameador
                tr.bg-green4
                  td Jabón libre de fosfato 
                tr
                  td Soporte metálico 
                tr.bg-green4
                  td Neveras de Icopor o de plástico 
                tr
                  td Cinta de enmascarar 
                tr.bg-green4
                  td Bolsa pequeña de basura 
                tr
                  td Bolsas #[em whirl-pak] de 250ml 
                tr.bg-green4
                  td Toallas o papel absorbente 
                tr
                  td Papel Aluminio 
                tr.bg-green4
                  td Material debidamente rotulado (frascos y recipientes) 
                tr
                  td Guantes de látex 
                tr.bg-green4
                  td Entre otros que se requieran para la toma de muestra según el análisis especifico. 


    .row.fondo-blue2.align-items-center.py-4.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          p.mb-4(data-aos="fade") Otros equipos utilizados en campo son:

          .col-md-12.mb-4(data-aos="fade-right")
            .tarjeta.fondo-sliderA.p-4.p-md-5.px-md-4.pb-md-3
              SlyderA(tipo="b" data-aos="fade-down")
                .row.justify-content-center.align-items-center
                  .col-md-7
                    h4 Equipo multiparámetro 
                    p Para determinación del pH, Conductividad, Temperatura, Oxígeno disuelto, ORP y turbidez. Los diferentes modelos multiparamétricos portátiles son instrumentos de medición muy precisos pensados para aplicaciones móviles en los que sea necesario medir más de un parámetro. Se cuenta con sensores digitales inteligentes IDS donde la señal de medición no se procesa en el instrumento, sino que se genera directamente en el sensor.
                  .col-md-4
                    img(src='@/assets/curso/temas/tema3/img2.png' alt='')  
                .row.justify-content-center.align-items-center
                  .col-md-7
                    h4 Reactivos de calibración del multiparámetro.  
                    p Son soluciones para calibrar los equipos en campo.
                  .col-md-4
                    img(src='@/assets/curso/temas/tema3/img2-2.png' alt='')
                .row.justify-content-center.align-items-center
                  .col-md-7
                    h4 Equipo termohigrómetro  
                    p El termohigrómetro es una combinación de termómetro e higrómetro digital, para medir y visualizar los valores del ambiente, en su pantalla se muestra la temperatura y la humedad del aire.
                  .col-md-4
                    img(src='@/assets/curso/temas/tema3/img2-3.png' alt='')
                .row.justify-content-center.align-items-center
                  .col-md-7
                    h4 Equipo GPS Geoposicionador  
                    p El Geoposicionador (GPS) es un sistema de radionavegación de los Estados Unidos de América, basado en el espacio, que proporciona servicios fiables de posicionamiento, navegación, y cronometría gratuita e ininterrumpidamente a usuarios civiles en todo el mundo. A todo el que cuente con un receptor del GPS, el sistema le proporcionará su localización y la hora exacta en cualesquiera condiciones atmosféricas, de día o de noche, en cualquier lugar del mundo y sin límite al número de usuarios simultáneos.
                  .col-md-4
                    img(src='@/assets/curso/temas/tema3/img2-4.png' alt='')
                .row.justify-content-center.align-items-center
                  .col-md-7
                    h4 Equipo Cámara fotográfica  
                    p Tomar fotografías del lugar, los puntos de muestreo y las actividades realizadas de toma de muestra.
                  .col-md-4
                    img(src='@/assets/curso/temas/tema3/img2-5.png' alt='')
                .row.justify-content-center.align-items-center
                  .col-md-7
                    h4 Equipos para protección personal para la toma de muestra 
                    p Para protección y seguridad de las personas que efectúan el muestreo 
                    ol.lista-ol.fa-ul
                      li.mb-0 
                        span 1.
                        | Overol impermeable para muestreo o aforo 
                      li.mb-0 
                        span 2.
                        | Gafas de Seguridad
                      li.mb-0 
                        span 3.
                        | Frasco de alcohol 
                      li.mb-0 
                        span 4.
                        | Guantes de látex
                      li.mb-0 
                        span 5.
                        | Botas de Caucho
                      li.mb-0
                        span 6.
                        | Botiquín de primeros auxilios
                  .col-md-4
                    img(src='@/assets/curso/temas/tema3/img2-6.png' alt='')
                .row.justify-content-center.align-items-center
                  .col-md-7
                    h4 Equipos utilizados en caudal / aguas superficiales   
                    p Equipo para aforo 
                    ol.lista-ol.fa-ul 
                      li.mb-0 
                        span 1.
                        | Cinta métrica
                      li.mb-0 
                        span 2.
                        | Bateria cargadas
                      li.mb-0 
                        span 3.
                        | Beaker 1000ml
                      li.mb-0
                        span 4.
                        | Balde 
                      li.mb-0
                        span 5.
                        | Varilla del molinete
                      li.mb-0
                        span 6.
                        | Molinete 
                      li.mb-0
                        span 7.
                        | Arnés de seguridad
                      li.mb-0
                        span 8.
                        | Escalera 
                      li.mb-0
                        span 9.
                        | Lazo (línea de seguridad)
                      li.mb-0
                        span 10.
                        | Tuberia de pvc
                  .col-md-4
                    img(src='@/assets/curso/temas/tema3/img2-7.png' alt='')


    h3.subt.text-white.mb-4(data-aos="fade") Equipos y materiales para toma de muestras de suelo
    p.mb-4(data-aos="fade") Todo ejercicio de toma de muestras, requiere disposición, mantenimiento, alistamiento y gestión de equipos y materiales. Los más usados para este caso son:


    .row.justify-content-center.align-items-center.mb-4
      .col-md-5.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema3/img3.png' alt='Imagen decorativa')
      .col-md-7.mb-4(data-aos="fade-left")
        ul.lista-ul--color.color-secundario.fa-ul 
          li.mb-3
            i.fas.fa-check
            | Tabla de apoyo con agarradera para escribir.
          li.mb-3
            i.fas.fa-check
            | Rotuladores y gomas de borrar apropiados para tomar notas, identificar muestras (por ejemplo, rotuladores de secados rápidos e indelebles al agua).
          li.mb-3
            i.fas.fa-check
            | Machete este tipo de herramienta puede ser necesaria para limpiar la vegetación cuando se toman perfiles.
          li.mb-3
            i.fas.fa-check
            | #[b Barrenos:] de taladro, de sonda o tubos y de tipo holandés.
          li.mb-3
            i.fas.fa-check
            | #[b Balde:] se requiere para depositar allí las muestras recolectadas. Se debe asegurar la limpieza y asepsia del recipiente, para evitar posible contaminación de la muestra.
          li.mb-3
            i.fas.fa-check
            | #[b Bolsas plásticas:] deben ser livianas, fáciles de llevar y de bajo costo. Muchas de ellas deben ser revisadas y analizadas para establecer el contenido de PCB (Bifenil policlorados), ya que puede absorber algunos componentes de las sustancias contaminantes.
          li.mb-3
            i.fas.fa-check
            | #[b Recipientes de vidrio:] usados con frecuencia cuando se utilizan indicadores de tipo biológico, los que deben ser refrigerados para su preservación. Cuando se usan frascos o botellas de vidrio para tal fin, se recomienda esterilizarlos en autoclaves para garantizar su asepsia.
          li
            i.fas.fa-check
            | #[b Neveras tipo picnic:] requeridas para congelar o refrigerar las muestras con hielo seco. Las muestras que se refrigeren deben empacarse previamente en recipientes de vidrio.

    p.mb-4(data-aos="fade") Los equipos utilizados en campo, para la toma de muestras de suelo, son:


    .row(data-aos="fade-down")
      .col-md-3.mb-4
        .bg-blue3.p-4.p-md-5.h-100
          .row.mb-4
            .col-md-5.col-5
              img(src='@/assets/curso/temas/tema3/ico1.svg' alt='Icono decorativo')
          h5 Indicador de Ph El pH
          p.mb-0 El pH determina que tan acido está el suelo y tiene un rango de 4-9. El pH se determina sobre la base de la comparación del color.
      .col-md-3.mb-4  
        .bg-green2.p-4.p-md-5.h-100
          .row.mb-4
            .col-md-5.col-5
              img(src='@/assets/curso/temas/tema3/ico2.svg' alt='Icono decorativo')
          h5 Juego de tamices de bolsillo  
          p.mb-0 Juego de tamices manuales, tamaño de bolsillo Altura: 40 mm Contiene 6 discos intercambiables Tamaño de poro: 2,0 – 1,0-0,5-0,25-0,125 y 0,063 mm Diámetro 100mm.
      .col-md-3.mb-4
        .bg-blue3.p-4.p-md-5.h-100
          .row.mb-4
            .col-md-5.col-5
              img(src='@/assets/curso/temas/tema3/ico3.svg' alt='Icono decorativo')
          h5 Penetrómetro de bolsillo 
          p.mb-0 Se utiliza específicamente para determinar la resistencia a la penetración de las capas superiores del suelo. Precisión de lectura: 3% Profundidad máxima de medición 1 cm Intervalo de medición 0 – 500 kPa.
      .col-md-3.mb-4  
        .bg-green2.p-4.p-md-5.h-100
          .row.mb-4
            .col-md-5.col-5
              img(src='@/assets/curso/temas/tema3/ico4.svg' alt='Icono decorativo')
          h5 Medidor de esfuerzo de corte
          p.mb-0 Es un instrumento diseñado para la determinación de la resistencia al corte de los suelos. Contiene 3 anillos para un amplio rango de medición. Se requiere una superficie plana de 25 mm de diámetro. Rango de medición 0 -250 kPa.


    h3.subt.text-white.mb-4(data-aos="fade") Equipos y materiales para toma de muestras de olores
    p(data-aos="fade") Los equipos de uso en la medición y estimación de olores ofensivos, deberán atender a los requerimientos establecidos en normas vigentes y ser utilizados bajo criterios de seguridad y efectividad.
    p.mb-4(data-aos="fade") Los más destacados son:

    .row
      .col-md-8.mb-4(data-aos="fade-right")
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-green2")
          .row(titulo="Equipo de muestreo para fuente puntual")
            p (Ductos o Chimeneas) Se utiliza el método de la sonda. Este método consiste en la “aspiración” mediante una sonda de una fracción alícuota del gas emitido por la fuente.
          .row(titulo="Muestreo de fuentes difusas aireadas")
            p (superficiales activas) Para este tipo de fuentes (reactor biológico de una depuradora o un biofiltro) se utiliza el método de la Campana En estas situaciones se coloca una campana de base cuadrada (1 m2) sobre la superficie a muestrear, de manera que, a la salida de esta, la muestra es succionada mediante una sonda.
          .row(titulo="Muestreo de fuentes difusas no aireadas")
            p (superficiales pasivas). Para este tipo de fuentes (decantador de una depuradora o una parva o pila de compost) se utiliza el método del túnel del viento o “cámara de flujo” (conocida también como Caja Lindvall Para ello, mediante un soplante, se insufla un caudal conocido de aire previamente filtrado, a través de la cámara de flujo, tomando la muestra mediante una sonda a la salida de la misma.
      .col-md-4.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema3/img4.png' alt='Imagen decorativa')

    .row
      .col-md-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema3/img5.png' alt='Imagen decorativa')
      .col-md-8.mb-4(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-green2")
          .row(titulo="Bolsas de gas para muestreo")
            p Bolsas para toma de muestras de gas están fabricados de Nalophan® estas están diseñadas específicamente para responder a las exigencias de calidad de la norma EN 13725, especialmente para minimizar el riesgo de contaminación de muestras, su tamaño puede variar 8, 10 40 o 60 Lt.
          .row.justify-content-center(titulo="Olfatómetro")
            p Es un equipo que permite crear una serie calibrada de diluciones discretas mediante la mezcla del olor ambiental con aire libre de olor. La olfatometría de campo calcula el parámetro “Dilución hasta el Umbral” (D/T) como el cociente (proporción):
            .col-md-5
              img.px-md-2(src='@/assets/curso/temas/tema3/form.svg' alt='Fórmula')
          .row(titulo="TGPS Sistema de Posicionamiento Global")
            p Es un instrumento de localización que toma como referencia para la ubicación y navegación los satélites que están estacionados en la órbita del planeta, permiten determinar la posición de un objeto o persona con una precisión de hasta 1 metro, su funcionamiento o sistema de navegación se reporta en grados, minutos y segundos ubicando la longitud y la latitud del punto que se va a referenciar.
          .row(titulo="Estación Meteorológica Portátil")
            p Una estación meteorológica es un dispositivo que recoge los datos de distintas variables atmosféricas, su finalidad es medir variables como la temperatura, precipitación, presión atmosférica la velocidad y dirección del viento, radiación solar, entre otras variables, su configuración depende del tipo de estudios que se realicen, generalmente en los trabajos de capo es importante que sean portátiles.


    .row.fondo-tema3.align-items-center.py-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-12
            h3.subt.text-white.mb-4(data-aos="fade") Equipos de medición de ruido
            p(data-aos="fade") Los equipos de medición para emisión de ruido y ruido ambiental se clasifican bajo criterios establecidos por la resolución 600 27 de 2006.
            p.mb-4(data-aos="fade") A continuación, se enuncian los principales requerimientos en las mediciones de ruido:


          .col-md-3.mb-4.mb-md-5.px-md-0(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema3/img6.png' alt='Imagen decorativa')
          .col-md-9.mb-4.mb-md-5.px-md-0(data-aos="fade-left")
            SlyderE.bg-white.box-shadow.p-4.px-md-5(indicadores="derecha")
              .row
                .col-md-8
                  h5 Sonómetro   
                  p Internacionalmente los sonómetros que son aceptados son del tipo CLASE 1, los cuales son empleados para hacer las mediciones de ruido ambiental de acuerdo con especificaciones técnicas internacionales que establecen una precisión mayor en la medición. 
                  p La Precisión de los sonómetros según la norma IEC 61672. 
                  p.mb-0 Clase 1. Precisión ± 1 dB
                  p Clase 2. Precisión ± 1.5 dB
                .col-md-4
                  img(src='@/assets/curso/temas/tema3/slide-img1.png' alt='')
              .row
                .col-md-8
                  h5 Pistófono o Calibrador acústico    
                  p Según el “Protocolo para la medición de emisión de ruido, ruido ambiental” La verificación y/o ajuste de la calibración de los sonómetros se deben realizar con calibradores o pistófonos que cumplan con la norma IEC 60942:2003. 
                  p Se debe verificar el cumplimiento del calibrador o pistófono con los requisitos de la norma IEC 60942:2003 por lo menos una vez al año y el cumplimiento del sonómetro con los requisitos de la norma IEC 61672-1:2002 según la clase del sonómetro por lo menos cada dos años en un laboratorio con trazabilidad a patrones nacionales.
                .col-md-4
                  img(src='@/assets/curso/temas/tema3/slide-img2.png' alt='')
              .row
                .col-md-8
                  h5 Trípode    
                  p Estructura u armazón de 3 puntos de apoyo, generalmente articulados y plegables. Sirve para sostener el sonómetro cuya capacidad de extensión telescópica debe ser hasta de 4 metros de altura el giro sobre su propio eje debe ser de 360º para poder hacer las mediciones en los diferentes puntos de acuerdo a lo establecido en el protocolo para el monitoreo de ruido MADS
                .col-md-4
                  img(src='@/assets/curso/temas/tema3/slide-img3.png' alt='')
              .row
                .col-md-8
                  h5 Anemómetro   
                  p Se emplea, en este caso, para medir la velocidad (fuerza del viento) y la dirección del viento. Es uno de los aparatos meteorológicos que se deben emplear en la medición del ruido puesto que su función consiste en determinar si la velocidad del viento está por encima de los 3 m/s.
                .col-md-4
                  img(src='@/assets/curso/temas/tema3/slide-img4.png' alt='')
              .row
                .col-md-8
                  h5 GPS Sistema de Posicionamiento Global    
                  p Es un instrumento de localización que toma como referencia, para la ubicación y navegación, los satélites que están estacionados en la órbita del planeta. Permiten determinar la posición de un objeto o persona con una precisión de hasta 1 metro, su funcionamiento o sistema de navegación se reporta en grados, minutos y segundos ubicando la longitud y la latitud del punto que se va a referenciar. 
                  p Ubica con mucha precisión los puntos en donde se va a ubicar los puntos del monitoreo.
                .col-md-4
                  img(src='@/assets/curso/temas/tema3/slide-img5.png' alt='')




</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
