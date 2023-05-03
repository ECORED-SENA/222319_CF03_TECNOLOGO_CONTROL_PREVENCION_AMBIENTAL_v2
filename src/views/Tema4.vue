<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Reconocimiento del material de laboratorio


    .row.mb-3
      .col-md-5.mb-4(data-aos="fade-right")
        p Se trata de todo aquel material que puede ser empleado en un laboratorio (puede ser de vidrio, madera, metal, plástico, goma y porcelana) para realizar las típicas actividades que en este tipo de lugares se llevan a cabo: investigaciones, experimentos, estudios especiales sobre recursos, partículas u otros.
        .bg-blue.p-3
          p.mb-0 El uso de los instrumentos de laboratorio debe estar orientado al objetivo de la muestra, teniendo en cuenta las características requeridas para muestras fisicoquímicas y microbiológicas; si el procesamiento de la misma será in situ o si se requiere de algún equipo o herramienta.
      .col-md-7.mb-4(data-aos="fade-left")  
        img(src='@/assets/curso/temas/tema4/img.png' alt='Imagen decorativa')


    .row.fondo-tema4.align-items-center.py-4.mb-2
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-12
            h3.subt.text-white.mb-4(data-aos="fade") Recipientes, reactivos e insumos
            p(data-aos="fade") Los recipientes para la toma de muestras más usados para exámenes físicos- químicos y microbiológico, son de vidrio y plástico y varían de acuerdo con la muestra y sus componentes. En algunos casos es requerido el uso de un blanco del recipiente para descartar interferencias.
            p.mb-4(data-aos="fade") En relación con los recipientes y su material de fabricación, tenga presente: 

          h5.text-center.mb-4(data-aos="fade") Características y requisitos del material de recipientes de laboratorio

          .row(data-aos="fade-down")
            .col-md-6.bg-green3
              .p-4.px-md-5.h-100
                .row.mb-4
                  .col-md-2.col-5
                    img(src='@/assets/curso/temas/tema4/ico1.svg' alt='Icono decorativo')
                h5 Recipientes de vidrio
                ul.lista-ul--color.color-secundario
                  li.mb-md-1
                    i.fas.fa-check
                    | Deben ser resistentes a altas temperaturas, ya que deben ser esterilizados a temperaturas de 120 ºC o 160ºC para garantizar que los recipientes están libres de microorganismos antes de la toma de la muestra.
                  li.mb-md-1
                    i.fas.fa-check
                    | Deben ser de vidrios neutros para que durante el proceso de esterilización y de almacenamiento de la muestra no ocurran reacciones donde se liberan productos tóxicos que puedan afectar la viabilidad de los microorganismos presentes en la muestra. 
                  li.mb-md-1
                    i.fas.fa-check
                    | Deben tener tapa rosca, preferiblemente de plástico, con forros de silicona termo-resistentes.
            .col-md-6.bg-green9
              .p-4.px-md-5.h-100
                .row.mb-4
                  .col-md-2.col-5
                    img(src='@/assets/curso/temas/tema4/ico1.svg' alt='Icono decorativo')
                h5 Recipientes de plástico
                p Los recipientes de plástico deben ser de polietileno, policarbonato o teflón si se requiere. El uso de botellas de plástico es recomendado para la toma de muestras a las que se les va a determinar sustancias inorgánicas.
                p Características importantes:
                ul.lista-ul--color.color-secundario
                  li.mb-md-1
                    i.fas.fa-check
                    | Preferiblemente livianos y resistentes.
                  li.mb-md-1
                    i.fas.fa-check
                    | Deben tener tapa rosca del mismo tipo de plástico del recipiente para evitar deformaciones después del proceso de esterilización. 
                  li.mb-md-1
                    i.fas.fa-check
                    | Boca ancha.
                  li.mb-md-1
                    i.fas.fa-check
                    | Tapa protectora.
                  li.mb-md-1
                    i.fas.fa-check
                    | Cierre hermético.

    .bg-yellow.p-4.mb-5(data-aos="fade-down")
      p.mb-0 El lavado y acondicionamiento de los recipientes depende del análisis a desarrollar; el INS (2011), brinda directrices claras sobre el acondicionamiento de materiales para análisis fisicoquímico y microbiológico.

    p.mb-4(data-aos="fade") En cuanto al lavado y acondicionamiento de los recipientes, se deben seguir las siguientes recomendaciones y criterios:

    .row.justify-content-center.align-items-center
      .col-md-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema4/img2.svg' alt='Imagen decorativa')
      .col-md-8.mb-4(data-aos="fade-left")
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Para análisis fisicoquímico") Los recipientes de vidrio nuevos se deben limpiar con agua y detergentes, para eliminar el polvo; después se limpian con una mezcla de ácido crómico- ácido sulfúrico o en su defecto con limpiador neutro y se enjuagan con agua destilada. Los recipientes de polietileno se limpian llenándolos con una solución al 10% ó 1 molar de ácido nítrico o ácido clorhídrico, dejándolos llenos durante 30 minutos. Finalmente se enjuagan con agua destilada o desionizada. Los detergentes no deben usarse con fines de limpieza, cuando haya lugar a determinación de fosfatos, silicatos, boro y surfactantes. 
          p(numero="2" titulo="Para análisis microbiológico") El lavado de debe realizar con detergentes neutros y para eliminar la suciedad, se deben enjuagar con agua corriente hasta eliminar completamente las trazas de jabón, posteriormente se enjuaga con agua destilada y finalmente se dejan secar al medio ambiente o en estufa. 
          p(numero="3" titulo="Esterilización de los recipientes") Los recipientes para la toma de muestras deben estar estériles. Es decir, deben haber sido sometidos a procesos de esterilización. La esterilización hace referencia a procesos físicos o químicos que eliminan cualquier forma de vida. Cuando se dice que un recipiente está estéril es porque en este no hay presencia de microorganismos o esporas termorresistentes. 
          p(numero="4" titulo="Esterilización por calor húmedo") Se realiza en un equipo llamado autoclave en el que mediante el vapor de agua se producen temperaturas de 121 ± 3 ºC y 1 atmósfera de presión. Cuanto se someten los recipientes a estas condiciones durante 15 minutos, los microorganismos o las esporas que estaban presentes en estos, mueren y como consecuencia los recipientes quedan estériles. 
          p(numero="5" titulo="Esterilización por calor seco") Se realiza en un horno que se lleva a una temperatura de 170 ± 10 ºC durante 1 hora. Los recipientes de plástico no se deben esterilizar por este método. Antes de llevar los recipientes al proceso de esterilización estos se deben tapar, sin cerrarlos totalmente. La tapa y el cuello del recipiente se debe cubrir con papel Kraft, mantequilla o aluminio para proteger la boca y la tapa del recipiente en el momento del muestreo. 
          p(numero="6" titulo="Prueba de esterilidad de los recipientes") Se deben realizar pruebas de monitoreo al proceso de esterilización o hacer pruebas a los recipientes para comprobar su esterilidad


    Separador 

    #t_4_1
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 4.1 Equipos y herramientas

    p.mb-4(data-aos="fade") El trabajo práctico de toma de muestras en el sitio siempre se acompaña del uso de equipos y herramientas necesarias para tal fin, teniendo en cuenta no solo las condiciones mínimas de dichos implementos, como que se encuentren calibrados, sino también el uso acorde a las indicaciones de cada equipo.

    .row.fondo2-tema4.align-items-center.py-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-12
            h3.subt.text-white.mb-4(data-aos="fade") Equipo de muestreo manual
            p.mb-4(data-aos="fade") Manejar los equipos para las muestras superficiales es extremar la limpieza del material y procurar procedimientos que eviten la contaminación. En muestras superficiales la recolección se puede hacer manualmente introduciendo la botella colectora bajo la superficie, procurando siempre hacerlo a la misma profundidad (c.a. 25 cm).

          .row.align-items-end.justify-content-center
            .col-md-3.mb-4.mb-md-0.px-md-0(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema4/img3.svg' alt='Imagen decorativa')
            .col-md-7.mb-4.mb-md-0.px-md-0(data-aos="fade-left")
              h5.px-md-4.mb-4 Otras recomendaciones son:
              SlyderE.bg-white.box-shadow.p-4.py-md-3(indicadores="derecha")
                .row
                  p Cuando el objetivo es obtener muestras de agua a profundidades determinadas, se emplean botellas colectoras dotadas de mecanismos de cierre para confinar la masa de agua que se encuentra a la profundidad de interés.
                .row
                  p En estudios oceanográficos, se emplean normalmente botellas Nansen para el análisis de los parámetros fisicoquímicos, pH, salinidad, oxígeno disuelto y nutrientes inorgánicos.
                .row
                  p Las botellas Van Dorn y Niskin, por tener capacidad de mayor volumen, son ideales para la obtención de muestras en el análisis de pigmentos fotosintéticos y contaminantes (pesticidas, metales pesados, etc.).
                .row
                  p Hay que tener bastante precaución cuando se usan estas botellas en el muestreo de aguas con alto contenido de sólidos sedimentables; su forma alargada y un flujo muy lento para extraer la muestra por las llaves, facilitan la sedimentación de los sólidos provocando diferencia en este parámetro entre las primeras y las últimas botellas receptoras que se llenan.


    h3.subt.text-white.mb-4(data-aos="fade") Equipo de muestreo automático
    p.mb-5(data-aos="fade") Es importante resaltar que también existen tomadores de muestras instrumentados y a menudo automatizados. Dentro de estos existen dos tipos principales: los dependientes del tiempo, que recogen muestras discretas, compuestas o continuas y los dependientes del volumen que también recogen estos tipos de muestra y tienen en cuenta las variaciones en el flujo.


    h3.subt.text-white.mb-4(data-aos="fade") Equipos para análisis
    p.mb-4(data-aos="fade") Entre los artefactos y equipos más comunes para el análisis de muestras, se encuentran:

    .tarjeta.fondo-sliderA.p-4.p-md-5.px-md-4.pb-md-3
      SlyderA(tipo="b" data-aos="fade-down")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4
            h4 Termómetro 
            p Termómetro Celsius (centígrado) con columna de mercurio, el cual mínimo debe tener escala marcada cada 0.1°C. Para prevenir rupturas en labores de campo se recomienda un termómetro con cazoleta protectora. En la actualidad se emplean muchos medidores electrónicos provistos con sondas, los cuales poseen termocuplas o termistores en su interior. Con miras a los procesos de validación y certificación de los laboratorios ambientales, los termómetros y sensores de temperatura deben calibrarse al menos una vez al año por una institución competente, siguiendo el protocolo para cada equipo y/o fabricante.
          .col-md-5.mb-4
            img(src='@/assets/curso/temas/tema4/slide-img.png' alt='Imagen decorativa')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4
            h4 pHmetro   
            p La técnica más exacta, usada para la medición del pH, es la potenciométrica, que se fundamenta en la medida de la diferencia de potencial experimentada en dos celdas electroquímicas (denominadas electrodos); se emplea un electrodo combinado de membrana de vidrio y uno de calomel como referencia. Los equipos actuales combinan estas dos celdas electrolíticas en un mismo sensor, y poseen programas electrónicos internos que dan la medida directa a partir de la diferencia de potencial, facilitando la lectura de este parámetro.
          .col-md-5.mb-4
            img(src='@/assets/curso/temas/tema4/slide-img2.png' alt='Imagen decorativa')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4
            h4 Conductímetro 
            p El conocimiento de la salinidad es fundamental en estudios oceanográficos, pues es necesario para la determinación de corrientes y la identificación de masas de aguas. En estudios ambientales es un factor importante porque puede significar la presencia o no de organismos y peces. La salinidad se puede calcular a partir de la conductividad, el resultado es numéricamente menor que el residuo filtrable y se reporta usualmente como gramos por Kg o partes por mil.
          .col-md-5.mb-4
            img(src='@/assets/curso/temas/tema4/slide-img3.png' alt='Imagen decorativa')


    Separador 

    #t_4_2
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 4.2 Revisión y calibración de los equipos de muestreo

    p(data-aos="fade") Para realizar esta actividad siempre se debe contar primero con los manuales de calibración para cada uno de los equipos a utilizar. Para realizar el alistamiento de reactivos y tener claros los estándares requeridos por los mismos.
    p.mb-4(data-aos="fade") El IDEAM en la guía para el monitoreo de vertimientos de aguas superficiales y subterráneas presenta unas consideraciones pertinentes para algunos equipos dadas a continuación:

    .row.mb-4(data-aos="fade-down")
      .col-md-4.mb-4
        .bg-blue3.p-4.p-md-5.h-100
          .row.mb-4
            .col-md-4.col-5
              img.pe-md-4(src='@/assets/curso/temas/tema4/ico2.svg' alt='Icono decorativo')
          h5 Sonda multiparámetro
          p.mb-0 Siempre revisar y calibrar los sensores de por lo menos 24 horas antes de la actividad; el sensor de oxígeno disuelto debe calibrarse entre cada muestreo si existe diferencias en la altitud. (Se puede usar si es aplicable el método winkler como comparación).
      .col-md-4.mb-4  
        .bg-green2.p-4.p-md-5.h-100
          .row.mb-4
            .col-md-4.col-5
              img.pe-md-4(src='@/assets/curso/temas/tema4/ico3.svg' alt='Icono decorativo')
          h5 Medidores de campo sencillos (pHmetro y conductímetro) 
          p.mb-0 El proceso de calibración debe darse diariamente siempre al inicio del primer muestreo.
      .col-md-4.mb-4
        .bg-blue3.p-4.p-md-5.h-100
          .row.mb-4
            .col-md-4.col-5
              img.pe-md-4(src='@/assets/curso/temas/tema4/ico4.svg' alt='Icono decorativo')
          h5 Éxito del muestreo 
          p.mb-0 Se determina según el conocimiento del lugar de muestreo y de la necesidad de los parámetros a identificar. Luego, revisar siempre el equipo antes de ir a tomar la muestra, en aspectos: longitudes de sondas, pilas cargadas, funcionamiento y calibración, entre otras acciones previas obligatorias.


    h3.subt.text-white.mb-4(data-aos="fade") Reconocimiento de material de laboratorio de uso general en ensayos
    p(data-aos="fade") Es necesario que antes de comenzar cualquier trabajo experimental, se tenga conocimiento del material que se utiliza. Cada uno de los materiales tiene una función y su uso debe ser acorde con la tarea por realizar. La utilización inadecuada de este material da lugar a errores en las experiencias realizadas y aumenta el riesgo en el laboratorio.
    p.mb-4(data-aos="fade") Los materiales de laboratorio se clasifican de la siguiente forma: 

    .row.mb-4
      .col-md-8.mb-4(data-aos="fade-right")
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-green2")
          .row(titulo="Volumétricos")
            p Dentro de este grupo se encuentran los materiales de vidrio calibrados a una temperatura dada, permite medir volúmenes exactos de sustancias (matraces, pipetas, buretas, probetas graduadas).
          .row(titulo="De calentamiento o sostén")
            p Son aquellos que sirven para realizar mezclas o reacciones y que además pueden ser sometidos a calentamiento (vaso de precipitado, erlenmeyer, cristalizador, vidrio de reloj, balón, tubo de ensayo).
          .row(titulo="Equipos de medición")
            p Instrumento que se usa para comparar magnitudes físicas mediante un proceso de medición. Como unidades de medida se utilizan objetos y sucesos previamente establecidos como estándares o patrones y de la medición resulta un número que es la relación entre el objeto de estudio y la unidad de referencia. Los instrumentos de medición son el medio por el que se hace esta conversión. Ejemplos: balanza, pHmetro, termómetro.
          .row(titulo="Equipos especiales")
            p Son Equipos auxiliares para el trabajo de laboratorio. Ejemplos: centrífuga, estufa, baño termostático, etc.
        .tarjeta.bg-degrade-green.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.px-md-1(src="@/assets/curso/temas/tema1/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h3.mb-1 Material de Laboratorio
                  p.mb-0 Refuerce su conocimiento de los materiales de laboratorio, estudiando con atención el contenido del Anexo_3_MaterialDeLaboratorio.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_3_MaterialDeLaboratorio.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download  
      .col-md-4.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema4/img4.png' alt='Imagen decorativa')


    h3.subt.text-white.mb-4(data-aos="fade") Técnicas fundamentales de laboratorio, orden y uso de los reactivos
    p.mb-4(data-aos="fade") Cuando varias personas deban hacer uso de los mismos reactivos, cada cual debe ir al lugar del mismo con su vaso para tomar la cantidad necesaria. No llevar los reactivos a la mesada. Los productos químicamente puros o para análisis, extraídos del envase en cantidades excesivas, no deben volverse a poner en el frasco original y tampoco deben ser manejados con los dedos. Al sacar un líquido para pasar a otro envase cuide que los rótulos estén hacia arriba, de ese modo, si chorrea no se perjudican las etiquetas.

    .row.mb-3
      .col-md-5.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema4/img5.png' alt='Imagen decorativa')
      .col-md-7.mb-4(data-aos="fade-left")
        p En relación con el manejo de los tubos de ensayo, tenga presente:
        ul.lista-ul--color.color-secundario.ps-md-3
          li.mb-md-3
            i.fas.fa-check
            | No use tubos de ensayo que tengan rotura cerca del borde, el calor somete al vidrio a tensiones y el tubo bajo la acción de la pinza puede romperse fácilmente.
          li.mb-md-3
            i.fas.fa-check
            | Tome el tubo a uno o dos cm por debajo del borde con la pinza de madera y comience calentando suavemente. Ponga el tubo por encima de la llama sin tocarla agitándola ligeramente.
          li.mb-md-3
            i.fas.fa-check
            | Mantenga siempre el tubo con la boca apuntando en dirección contraria a la de su cuerpo o al de cualquier otra persona que trabaje cerca.
          li.mb-md-3
            i.fas.fa-check
            | Una vez que el líquido se calienta el tubo puede ubicarse dentro de la llama, a corta distancia del fondo, y nunca por encima del nivel del líquido contenido.
          li.mb-md-3
            i.fas.fa-check
            | Si el tubo contiene materiales granulados o en polvo, el calentamiento debe ser más lento aún.
    
    p.mb-4(data-aos="fade") A continuación, se enuncian más generalidades y aspectos clave, sobre el manejo y disposición de los materiales de laboratorio, en el proceso de muestreo:

    .row.align-items-center.mb-4
      .col-md-7.mb-4(data-aos="fade-right")
        .tarjeta.fondo-sliderA.p-4.p-md-5.pb-md-3
          SlyderA(tipo="b" data-aos="fade-down")
            .row.justify-content-center
              .col-md-11
                h4 Balanza  
                p El instrumento que se usa para determinar la masa de una sustancia en el laboratorio es la balanza. La masa no es afectada en su valor por la gravedad, sino el peso. La unidad en que se mide en las balanzas es el gramo o un múltiplo o submúltiplo de este.
            .row.justify-content-center
              .col-md-11
                h4 Tipos de balanzas  
                p Existen muchos tipos de balanzas, pero en los laboratorios actualmente se usan las electrónicas, desplazando a las tradicionales balanzas mecánicas. La ventaja de las balanzas electrónicas es que independientemente de su precisión, todas se utilizan de una manera sencilla y clara. Es conveniente saber que la masa del recipiente en el que se va a efectuar una medida se denomina tara y a la operación de ajustar a cero la lectura de la balanza con el recipiente incluido se denomina.
            .row.justify-content-center
              .col-md-11
                h4 Material de vidrio  
                p Se debe dejar limpio y en lo posible seco luego de cada clase. Cuando la suciedad es reciente, es más fácil removerla. Muchas veces agua y detergente y las escobillas adecuadas son suficientes para una limpieza correcta. En otras ocasiones puede utilizarse solución de hidróxido de sodio como desengrasante.
            .row.justify-content-center
              .col-md-11
                h4 Limpieza profunda  
                p Si la limpieza básica no logra su objetivo y si, además, se desconociera la naturaleza de la suciedad, se puede ensayar el uso de ácido clorhídrico, nítrico y sulfúrico diluido. Cualquiera sea el sistema que se utilice se debe enjuagar muy bien el material de vidrio con agua corriente varias veces y finalmente con agua destilada.
            .row.justify-content-center
              .col-md-11
                h4 Calentamiento de los materiales   
                p El material de vidrio graduado, como probeta, bureta, pipetas, matraz aforado, nunca debe ser sometido a calentamiento. Se pude calentar el material de contención, como: vaso de precipitado, balón, tubos de ensayo, erlenmeyer.
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema4/img6.png' alt='Imagen decorativa')


    h3.subt.text-white.mb-4(data-aos="fade") Manejo de insumos químicos y lectura de volúmenes
    p.mb-4(data-aos="fade") En lo que respecta al manejo de los insumos químicos y a la lectura de volúmenes, tenga en cuenta los aspectos que se enuncian enseguida:

    .row.mb-4
      .col-md-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema4/img7.png' alt='Imagen decorativa')
      .col-md-8.mb-4(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-green2")
          .row(titulo="Sólidos")
            p Se toman con espátulas adecuadas, limpias y secas, para transferirlos a tubos o a cualquier otro tipo de recipiente.
          .row(titulo="Líquidos")
            p En general, un líquido se vierte directamente de un recipiente a otro. Para evitar salpicaduras, se apoya una varilla de vidrio sobre el pico del recipiente de forma que el líquido fluya por la varilla y se recoja en el otro recipiente.
          .row(titulo="Particularidades de los recipientes")
            p Para un recipiente que tiene una abertura pequeña, debe utilizarse un embudo de vidrio seco y limpio. Después de terminar de verter el reactivo de la botella limpiar el líquido que pueda haberse caído por el exterior, lavándola y secándola con un paño. Esto tiene especial importancia cuando se utilizan reactivos corrosivos o venenosos que puedan causar serias quemaduras o heridas.
          .row(titulo="Cantidades y volúmenes")
            p Si las cantidades son pequeñas y el volumen debe ser medido, la forma adecuada de operar es transferir un poco de líquido a un vaso limpio y seco, luego de allí extraer lo necesario con una pipeta. La pipeta a utilizar debe estar limpia y absolutamente seca por dentro y por fuera. El exceso de líquido no debe devolverse al frasco original.
          .row(titulo="Lectura de volúmenes")
            p La superficie libre de los líquidos es horizontal, sin embargo, se curva generalmente hacia arriba, en contacto con las paredes del recipiente que los contiene formando un menisco (meni, del griego luna) cóncavo, como en el agua. Las lecturas se deben realizar en la parte inferior del menisco colocando el ojo al nivel de este para evitar errores de paralaje.



      

</template>

<script>
export default {
  name: 'Tema4',
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
