<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Alistamiento para tomas de muestras: agua, suelo, olores, ruido

    .row.justify-content-center
      .col-md-5.mb-4(data-aos="fade-right")
        p El objetivo del muestreo es obtener una parte representativa del material bajo estudio (cuerpo de agua, efluente industrial, agua residual, suelos, emisiones, etc.) para lo cual se analizarán las variables fisicoquímicas y microbiológicas de interés.
        .bg-blue.p-3.mb-4
          p.mb-0 Para esto, se requiere identificar los equipos y materiales de muestreo, el plan de muestreo y protocolos de muestreo específicos según factor ambiental evaluado.
        p Generalmente, el objetivo del muestreo es demostrar que se cumplen las normas especificadas por la legislación ambiental como actividades de prevención y control ambiental y, en otros casos, como medida de corrección y vigilancia cuando se ha ocasionado un impacto ambiental significativo como la contaminación ambiental en un ecosistema.
      .col-md-7(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema1/img.png' alt='Imagen decorativa')


    Separador 

    #t_1_1
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.1 Características y tipos de contaminación en el agua

    .row.justify-content-center.mb-4
      .col-md-5.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema1/img2.png' alt='Imagen decorativa')
      .col-md-7.mb-4(data-aos="fade-left")
        p El agua es la sustancia que más abunda en la tierra y es la única que se encuentra en la atmósfera en estado líquido, sólido y gaseoso. La mayor reserva de agua está en los océanos, que contienen el 97% del agua que existe en la Tierra. Se trata de agua salada, que sólo permite la vida de la flora y fauna marina. El resto es agua dulce, pero no toda está disponible: gran parte permanece siempre helada, formando los casquetes polares y los glaciales.
    
    h3.subt.text-white.mb-4(data-aos="fade") Cuencas, ríos y lagos
    p(data-aos="fade") Una cuenca abarca todo el territorio cuyas aguas confluyen hacia un río, lago o mar. Dentro de una misma cuenca, pueden existir climas (temperatura, insolación, humedad) diferentes, según la altitud del terreno.
    p.mb-4(data-aos="fade") Otros aspectos importantes sobre las cuencas, ríos y lagos son:

    .row.mb-4
      .col-md-8.mb-4(data-aos="fade-right")
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-green2")
          .row(titulo="Influencias del entorno")
            p También influye en el clima la orientación de las laderas. Estas variaciones originan distintos pisos de vegetación. 
          .row(titulo="Geografía y territorio")
            p Dentro del cauce de los ríos, el agua circula desde las regiones más altas hacia las más bajas. En las zonas en pendiente, el agua fluye con mayor velocidad y fuerza. Por esta razón, aumenta la erosión de las riberas, especialmente cuando no están protegidas por vegetación. 
          .row(titulo="Movilidad del agua")
            p Al acercarse a la desembocadura, disminuye la velocidad y aumenta el caudal y la sedimentación del suelo arrastrado. 
          .row(titulo="Acumulación o tránsito lento del agua")
            p Los lagos son grandes masas de agua que permanecen estacionadas en una depresión del terreno. 
      .col-md-4.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema1/img3.png' alt='Imagen decorativa')


    p(data-aos="fade") El agua entra en la atmósfera cuando el calor del sol la evapora, especialmente de los océanos. El aire caliente con vapor de agua disuelto asciende y se enfría a causa de la menor densidad de la atmósfera. Al enfriarse, se condensa y origina gotas de agua tan livianas que permanecen suspendidas en el aire. Estas gotas se agrupan formando nubes. Las nubes son transportadas por los vientos, a veces a grandes distancias.
    p.mb-4(data-aos="fade") Tenga en cuentas los siguientes aspectos y elementos:

    .row.justify-content-center.mb-4
      .col-md-4.mb-4(data-aos="fade-right")
        img.mb-4(src='@/assets/curso/temas/tema1/img4.png' alt='Imagen decorativa')
        img(src='@/assets/curso/temas/tema1/img5.png' alt='Imagen decorativa')
      .col-md-8(data-aos="fade-left")
        LineaTiempoD.color-secundario
          .div(numero="1" titulo="Las precipitaciones")
            p Pueden ser en forma de lluvia, nieve o granizo, se producen cuando las gotas de agua se unen, haciéndose cada vez más grandes y pesadas.
          .div(numero="2" titulo="Causa de las precipitaciones")
            p Esto sucede cuando las nubes se topan con vientos más fríos o cuando ascienden y se enfrían al encontrarse con la ladera de una montaña.
          .div(numero="3" titulo="Interacción de las características del aire")
            p Por ejemplo, y por lo cual se generan las precipitaciones: 
            p.mb-0 Su densidad y temperatura disminuyen cuando aumenta la altitud. 
            p El aire caliente puede contener más humedad que el aire frío.
          .div(numero="4" titulo="Intensidad o ausencia de lluvias")
            p Llueve más en las laderas que se oponen a los vientos húmedos. En la cordillera de los Andes, los vientos cargados de agua vienen del Océano Pacífico y la descargan en las laderas occidentales. En la zona ecuatorial, también traen las lluvias algunos vientos que acumulan la humedad que produce la transpiración de las plantas de la selva amazónica.
          .div(numero="5" titulo="Ruta cíclica del agua")
            p También es frecuente que llueva cuando las nubes pasan sobre corrientes marinas frías. En este caso, el agua se reincorpora nuevamente a los mares sin ser aprovechada por las plantas y los animales terrestres.
          .div(numero="6" titulo="Agua que cae sobre el suelo")
            p Una parte se vuelve a evaporar directamente desde la superficie por acción del calor del sol o de los vientos secos. Otra parte queda retenida en las capas superiores del suelo y es absorbida por las raíces. Luego será evaporada por la transpiración de las plantas. El resto se infiltra hacia las capas profundas (agua de percolación), y aumenta las reservas de agua subterránea.
          .div(numero="7" titulo="Manantiales de agua")
            p Las reservas de agua subterránea pueden volver a la superficie formando manantiales. Los manantiales dan origen a arroyos que luego se unirán a otras aguas de escurrimiento superficial. Así, se originan los ríos que devolverán a los mares y océanos el agua caída sobre el suelo.
          .div(numero="8" titulo="Interrupción del ciclo del agua")
            p Las precipitaciones devuelven al suelo, mares y océanos el agua evaporada por el calor del sol. Este ciclo no se interrumpe jamás. Cuando el agua cae sobre la tierra, se infiltra lentamente en los suelos que contienen materia orgánica. Lo mismo sucede en los terrenos cubiertos de vegetación, porque el follaje atenúa el impacto de la lluvia.
          .div(numero="9" titulo="Acumulación natural del agua")
            p En zonas llanas, el agua puede acumularse en la superficie de los suelos arcillosos y carentes de humus, provocando inundaciones. Si los terrenos son llanos, arenosos y desprovistos de materia orgánica y vegetación protectora, el agua se infiltra con rapidez, llevándose los nutrientes del suelo hacia las aguas subterráneas.

    h3.subt.text-white.mb-4(data-aos="fade") El agua y los seres vivos

    .row.mb-4
      .col-md-8.mb-4(data-aos="fade-right")
        p El agua es indispensable para la vida, porque ningún organismo sobrevive sin ella. Es un constituyente esencial de la materia viva y la fuente de hidrógeno para los organismos. También influye en ellos a través de la atmósfera y el clima.
        p En relación con los seres vivos, el gua:
        .tarjeta.fondo-sliderA.p-4.p-md-5.pb-md-3
          SlyderA(tipo="b" data-aos="fade-down")
            .row.justify-content-center
              .col-md-11
                h4 Nicho de vida  
                p Es el medio en el que se desarrolla la abundante y variada flora y fauna acuática. Los seres vivos están formados en su mayor parte por agua. En el caso de algunos animales marinos el porcentaje de agua puede superar el 95%. Las semillas secas, que conservan sólo rastros de humedad, no pueden germinar sin absorber grandes cantidades de agua.
            .row.justify-content-center
              .col-md-11
                h4 Afectación a la vida de flora y fauna     
                ul.lista-ul--color.color-secundario
                  li.mb-3
                    i.fas.fa-check
                    | El agua interviene en todas las funciones vitales de plantas y animales: · Las plantas verdes realizan la fotosíntesis a partir de agua y dióxido de carbono. Sus raíces captan los nutrientes cuando están disueltos en agua. La savia, una solución, distribuye la sustancia orgánica en el interior de las plantas. 
                  li
                    i.fas.fa-check
                    | En los animales, el agua participa en importantes reacciones bioquímicas que se desarrollan dentro de las células. Además, disuelve y transporta las sustancias necesarias para la alimentación celular y las sustancias tóxicas que el organismo expulsa en forma de sudor y orina.
            .row.justify-content-center
              .col-md-11
                h4 Reproceso del agua tras muerte de seres vivos acuáticos   
                p Los organismos, sobre todo los acuáticos, absorben cantidades importantes de agua, incluso algunos la excretan en el medio natural después de utilizada. Cuando mueren, el agua que contienen vuelve al medio en el proceso de descomposición de la materia. Las plantas terrestres, por su parte, incorporan el agua desde el suelo y la devuelven a la atmósfera con la transpiración y respiración.
            .row.justify-content-center
              .col-md-11
                h4 El agua y los animales terrestres   
                p Los animales terrestres la obtienen a través de distintas fuentes: 
                ul.lista-ul--color.color-secundario
                  li.mb-0
                    i.fas.fa-check
                    | Absorbiéndola a través de la superficie corporal (ranas).
                  li.mb-0
                    i.fas.fa-check
                    | Alimentándose de sustancias que contienen agua o bebiéndola directamente (aves, mamíferos).
                  li
                    i.fas.fa-check
                    | A partir de la descomposición de las grasas que almacenan (algunos animales adaptados al desierto).
            .row.justify-content-center
              .col-md-11
                h4 Otros procesos del agua y los animales terrestres    
                p La mayoría de animales terrestres, reintegran el agua al medio ambiente con la respiración, transpiración y con la orina y excrementos. Después de la muerte y descomposición de vegetales y animales, el agua se reincorpora a su ciclo ambiental, a través de la atmósfera y del suelo.
            .row.justify-content-center
              .col-md-11
                h4 Humedad atmosférica   
                p Este ciclo del agua a través de la vida influye en la humedad atmosférica. Por ejemplo, las selvas tropicales mantienen alta la humedad atmosférica y, en consecuencia, originan lluvias.
      .col-md-4.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema1/img6.png' alt='Imagen decorativa')

    
    h3.subt.text-white.mb-4(data-aos="fade") El agua y la actividad humana

    p.mb-4(data-aos="fade") El agua dulce es imprescindible para la vida, pero la cantidad disponible es escasa y su distribución desigual. Además, varía a lo largo del año y está sujeta a cambios provocados por la actividad humana. Los usos más importantes están relacionados con la agricultura y el consumo industrial y doméstico. Su demanda se ha incrementado notablemente con el crecimiento de la población.

    .row.justify-content-center.mb-2
      .col-md-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema1/img7.png' alt='Imagen decorativa')
      .col-md-8.mb-4(data-aos="fade-left")
        p En las últimas décadas, en relación con el agua y su influencia en la vida de los seres humanos: 
        ul.lista-ul--color.color-secundario.ps-3.mb-0
          li.mb-md-4
            i.fas.fa-check
            | Se han multiplicado las áreas agrícolas dependientes del riego para la producción de alimentos.
          li.mb-md-4
            i.fas.fa-check
            | Las industrias y actividades mineras la emplean para el lavado, enfriamiento, dilución, remojo, procesamiento, eliminación de productos de desecho, etc.
          li.mb-md-4
            i.fas.fa-check
            | Es posible utilizar las caídas de agua para producir electricidad y para mover molinos.
          li.mb-md-4
            i.fas.fa-check
            | Los ríos son un importante medio de transporte y comunicación.

    p.mb-4(data-aos="fade") El siguiente video le muestra los aspectos claves y generales sobre las propiedades del agua. Obsérvelo con atención y procure tomar nota de lo más destacado en su libreta personal de apuntes:
    
    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    Separador 

    #t_1_2
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.2. Características y contaminación en el suelo

    p.mb-4(data-aos="fade") El suelo es un recurso natural no renovable compuesto por sustancias sólidas (materia orgánica, organismos y minerales), agua y aire. La proporción en la que se encuentren estos componentes le confiere al suelo propiedades físicas, químicas y biológicas propias. La productividad de un suelo no sólo depende de los contenidos nutrimentales sino también de las características físicas del mismo, ya que como es bien conocido, el desarrollo de la parte aérea dependerá del desarrollo de la raíz.

    .row.mb-4.px-md-3(data-aos="fade-down ")
      .col-md-6.px-md-0
        .bg-green8.p-4.p-md-5.h-100
          .row.mb-4
            .col-md-2.col-5
              img(src='@/assets/curso/temas/tema1/ico1.svg' alt='Icono decorativo')
          h5 Las propiedades físicas de un suelo    
          p.mb-0 Son el resultado de la interacción que se origina entre las distintas fases del mismo (suelo, agua y aire) y la proporción en la que se encuentran cada una de estas.
      .col-md-6.px-md-0
        .bg-green4.p-4.p-md-5.h-100
          .row.mb-4
            .col-md-2.col-5
              img(src='@/assets/curso/temas/tema1/ico1.svg' alt='Icono decorativo')
          h5 La condición física de un suelo 
          p.mb-0 Determina su capacidad de sostenimiento, facilidad para la penetración de raíces, circulación del aire, capacidad de almacenamiento de agua, drenaje, retención de nutrientes, entre otros factores.

    p.mb-4.text-center(data-aos="fade") Las propiedades físicas, químicas y biológicas del suelo son:

    .row(data-aos="fade-down")
      .col-md-4.mb-4
        .bg-blue3.p-4.p-md-5.h-100
          .row.mb-4
            .col-md-3.col-5
              img(src='@/assets/curso/temas/tema1/ico2.svg' alt='Icono decorativo')
          h5 Propiedades físicas 
          ul.lista-ul--color.color-secundario
            li.mb-1
              i.fas.fa-check
              | Textura. 
            li.mb-1
              i.fas.fa-check
              | Estructura.
            li.mb-1
              i.fas.fa-check
              | Color. 
            li.mb-1
              i.fas.fa-check
              | Densidad Aparente.
            li
              i.fas.fa-check
              | Porosidad capilar.
      .col-md-4.mb-4  
        .bg-green2.p-4.p-md-5.h-100
          .row.mb-4
            .col-md-3.col-5
              img(src='@/assets/curso/temas/tema1/ico3.svg' alt='Icono decorativo')
          h5 Propiedades químicas  
          ul.lista-ul--color.color-secundario
            li.mb-1
              i.fas.fa-check
              | Reacción del suelo.
            li.mb-1
              i.fas.fa-check
              | Salinidad y solicidad.
            li.mb-1
              i.fas.fa-check
              | Capacidad de intercambio. 
            li.mb-1
              i.fas.fa-check
              | Porcentaje de saturación de base.
      .col-md-4.mb-4
        .bg-blue3.p-4.p-md-5.h-100
          .row.mb-4
            .col-md-3.col-5
              img(src='@/assets/curso/temas/tema1/ico4.svg' alt='Icono decorativo')
          h5 Propiedades biológicas    
          ul.lista-ul--color.color-secundario
            li.mb-1
              i.fas.fa-check
              | Organismos del suelo.
            li.mb-1
              i.fas.fa-check
              | Materia Orgánica.
            li.mb-1
              i.fas.fa-check
              | Humus.
            li.mb-1
              i.fas.fa-check
              | Respiración Edáfica.
            li
              i.fas.fa-check
              | Carbono de Biomasas Microbiana.

    p.mb-4(data-aos="fade") La tabla que se muestra enseguida, enuncia los tipos de suelos:

    .row.justify-content-center.mb-5
      .col-md-8(data-aos="fade-down")
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Tabla 1] Tipos de suelos y sus características
          .tabla-a.tema1.color-secundario
            table
              thead
                tr.bg-secundario
                  th.colum-1 Tipo de suelo
                  th Características
              tbody
                tr
                  td HUMIFERO
                  td Es de color oscuro porque tiene abundante humus
                tr.bg-green4
                  td ARCILLOSO
                  td Es de color amarillo o rojizo compuesto de arcilla sí
                tr
                  td ARENOSO
                  td De color gris blanco rojizo amarillo o negro compuesto de arena
                tr.bg-green4
                  td CALIZO  
                  td De color blanco amarillento y sus partículas son finas
                tr
                  td PEDREGOSO
                  td De color gris y está formado por rocas de diversos tamaños no retienen el agua


    .bg-blue4(data-aos="fade-down")
      .row.align-items-center
        .col-md-2.col-5.px-md-4
          img.px-md-4(src='@/assets/curso/temas/tema2/importante.svg' alt='Icono decorativo')
        .col-md-10.py-4.pe-md-5
          p.mb-0 
            b.t-green2 La contaminación del suelo 
            | es una degradación de la calidad del suelo asociada a la presencia de sustancias químicas. Se define como el aumento en la concentración de compuestos químicos, de origen antropogénico, que provoca cambios perjudiciales y reduce su empleo potencial, tanto por parte de la actividad humana, como por la naturaleza.



    Separador 

    #t_1_3
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.3  Características y contaminación del aire

    .row.justify-content-center.mb-4
      .col-md-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema1/img8.png' alt='Imagen decorativa')
      .col-md-8.mb-4(data-aos="fade-left")
        p Es el resultado de la mezcla de gases que componen la atmósfera terrestre y que gracias a la fuerza de gravedad se encuentran sujetos al planeta Tierra. El aire, así como sucede con el agua, es un elemento fundamental y esencial para asegurar la continuidad de la vida en el planeta. Su composición es sumamente delicada y las proporciones de las sustancias que lo integran resultan ser variables: Nitrógeno, Oxígeno, Vapor de agua, Ozono, dióxido de carbono, Hidrógeno y gases nobles como pueden ser el Criptón o el Argón.
        p Los componentes fundamentales del aire son el 
          b.t-green2 nitrógeno 
          | N2 (78,1%) y el 
          b.t-green2 oxígeno 
          | O2 (20,9%), los que en conjunto alcanzan un 99% en volumen de aire seco.
        p Como componentes secundarios se encuentran presentes:
        ul.lista-ul--color.color-secundario.mb-0.ps-md-4
          li.mb-0
            i.fas.fa-check
            | El argón Ar
          li.mb-0
            i.fas.fa-check
            | El dióxido de carbono CO2
          li.mb-0
            i.fas.fa-check
            | El neón Ne
          li.mb-0
            i.fas.fa-check
            | El helio He
          li.mb-0
            i.fas.fa-check
            | El kriptón Kr
          li.mb-0
            i.fas.fa-check
            | El hidrógeno H2
          li.mb-0
            i.fas.fa-check
            | El metano CH4
          li.mb-0
            i.fas.fa-check
            | El xenón Xe

    p.mb-4(data-aos="fade") En relación con la composición del aire, tenga presente:

    .row(data-aos="fade-down")
      .col-md-4.mb-4
        .bg-blue3.p-4.p-md-5.h-100
          .row.mb-4
            .col-md-4.col-5
              img.pe-md-4(src='@/assets/curso/temas/tema1/ico5.svg' alt='Icono decorativo')
          h5 Pequeñas porciones de aire 
          p A nivel de trazas (cantidades muy pequeñas) y dependiendo de la ubicación geográfica, se encuentran presentes compuestos como monóxido de nitrógeno NO, ozono O3, dióxido de azufre SO2, dióxido de nitrógeno NO2, amoníaco NH3 y monóxido de carbono CO.
      .col-md-4.mb-4  
        .bg-blue4.p-4.p-md-5.h-100
          .row.mb-4
            .col-md-4.col-5
              img.pe-md-4(src='@/assets/curso/temas/tema1/ico6.svg' alt='Icono decorativo')
          h5 Proporción de gases en el aire  
          p Las proporciones de estos gases se pueden considerar más o menos constantes hasta una altura aproximada de 25 Km, aunque la concentración de cada uno disminuye con la altura, excepto en los casos de componentes minoritarios como el ozono O3 y los compuestos de nitrógeno, cloro y azufre.
      .col-md-4.mb-4
        .bg-blue3.p-4.p-md-5.h-100
          .row.mb-4
            .col-md-4.col-5
              img.pe-md-4(src='@/assets/curso/temas/tema1/ico7.svg' alt='Icono decorativo')
          h5 Componentes fijos del aire   
          p Existen dos componentes que siempre se encuentran presentes en el aire en cantidades variables: el agua, en sus tres estados (sólido, líquido y gas) y el polvo atmosférico (humo, sal, arena fina, cenizas, esporas, polen, microorganismos, etc). La concentración de vapor de agua puede variar desde 0% en zonas desérticas hasta un 5 a 6% en zonas tropicales.

    p.mb-4(data-aos="fade") En cuanto a las propiedades del aire, estas son:

    .row.justify-content-center.mb-5
      .col-md-8(data-aos="fade-down")
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Tabla 1] Tipos de suelos y sus características
          .tabla-a.tema1.color-secundario
            table
              thead
                tr.bg-secundario
                  th(colspan="2") Propiedades del aire
              tbody
                tr
                  td.fw-bold.text-center.colum-1 Físicas
                  td 
                    ul.lista-ul--color.color-secundario.mb-0
                      li.mb-1
                        i.fas.fa-check
                        | Es de menor peso que el agua. 
                      li.mb-1
                        i.fas.fa-check
                        | Es de menor densidad que el agua.
                      li.mb-1
                        i.fas.fa-check
                        | Tiene volumen indefinido.
                      li.mb-1
                        i.fas.fa-check
                        | No existe en el vacío.
                      li.mb-1
                        i.fas.fa-check
                        | Es incoloro, inodoro e insípido.
                tr.bg-green4
                  td.fw-bold.text-center.colum-1 Químicas
                  td 
                    ul.lista-ul--color.color-secundario.mb-0
                      li.mb-1
                        i.fas.fa-check
                        | Reacciona con la temperatura condensándose en hielo a bajas temperaturas y produce corrientes de aire.
                      li.mb-1
                        i.fas.fa-check
                        | Este compuesto por varios elementos entre ellos el oxígeno (O2) y el dióxido de carbono elementos básicos para la vida.

      
    h3.subt.text-white.mb-4(data-aos="fade") Composición del aire puro
    p.mb-4(data-aos="fade") De acuerdo con la altitud, composición, temperatura y otras características, la atmósfera que rodea a la Tierra comprende las siguientes capas o regiones:

    ImagenInfografica.color-acento-botones.mb-5(data-aos="fade-down")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/img-infog.svg', alt='Niveles de la atmósfera')

      .tarjeta.bg-yellow.p-3(x="19%" y="88%" numero="+")
        .h4.mb-2 Tropósfera: 
        p Alcanza una altura media de 12 km. (es de 7km. En los polos y de 16km. En los trópicos) y en ella encontramos, junto con el aire, polvo, humo y vapor de agua, entre otros componentes.
      .tarjeta.bg-yellow.p-3(x="40%" y="71%" numero="+")
        .h4.mb-2 Estratósfera: 
        p Zona bastante mente fría que se extiende de los 12 a los 50km de altura; en su capa superior (entre los 20 y los 50km) contiene gran cantidad de ozono (O3), el cual es de enorme importancia para la vida en la tierra por que absorbe la mayor parte de los rayos ultravioleta del sol.
      .tarjeta.bg-yellow.p-3(x="53%" y="48%" numero="+")
        .h4.mb-2 Mesósfera: 
        p Zona que se sitúa entre los 50 y los 100km de altitud; su temperatura media es de 10 °C; en ella los meteoritos adquieren altas temperaturas y en su gran mayoría se volatilizan y consumen.
      .tarjeta.bg-yellow.p-3(x="63.5%" y="28%" numero="+")
        .h4.mb-2 Ionósfera:  
        p Empieza después de los 100km. Y va desapareciendo gradualmente hasta los 500km de altura. En esta región, constituida por oxígeno (02), la temperatura aumenta hasta los 1000°C; los rayos X y ultravioleta del Sol ionizan el aire enrarecido, produciendo átomos y moléculas cargados eléctricamente (que reciben el nombre de iones) y electrones libres.
      .tarjeta.bg-yellow.p-3(x="71%" y="10%" numero="+")
        .h4.mb-2 Exósfera: 
        p Comienza a 500km. de altura y extiende más allá de los 1000km; está formada por una capa de helio y otra de hidrogeno. Después de esa capa se halla una enorme banda de radiaciones (conocida como magnetosfera) que se extiende hasta unos 55000km de altura, aunque no constituye propiamente un estrato atmosférico.


    .bg-blue4.mb-5(data-aos="fade-down")
      .row.align-items-center
        .col-md-2.col-5.px-md-4
          img.px-md-4(src='@/assets/curso/temas/tema2/importante.svg' alt='Icono decorativo')
        .col-md-10.py-4.pe-md-5
          p.mb-0 
            b.t-green2 La contaminación del aire 
            | es uno de los problemas ambientales más importantes, y es resultado de las actividades del hombre. Las causas que originan esta contaminación son diversas, pero el mayor índice es provocado por las actividades industriales, comerciales, domésticas y agropecuarias.


    .row.fondo-tema1.align-items-center.pb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center
          
          .col-md-12(data-aos="fade")
            h3.subt.text-white.mb-4 Contaminación por OLOR

          .col-md-7.mb-4(data-aos="fade-right")
            p Cuando se habla de olor se hace referencia a esa sensación que da como respuesta la recepción de un estímulo por el sistema olfativo, esta reacción se genera por una variedad de gases vapores que dependen en gran parte de la volatilidad de las sustancias presentes en el aire que se respira.
            p Uno de los sentidos que por excelencia tiene gran complejidad es el sentido del olfato que al igual que el gusto hacen parte de los sentidos qué involucran quimiorreceptores los cuales son estimulados por sustancias químicas presentes en el aire, por ende, las sensaciones relacionadas que producen olores que en ocasiones se vuelven ofensivos se convierten en contaminantes que perturban a las comunidades y la sociedad.
            .bg-blue3.p-3
              p.mb-0 El sentido del olfato, al igual que el sentido del gusto, es un sentido químico. Se denominan sentidos químicos porque detectan compuestos químicos en el ambiente, con la diferencia de que el sentido del olfato funciona a distancias mucho más largas que el sentido del gusto.
          .col-md-5.mb-4(data-aos="fade-left")  
            img(src='@/assets/curso/temas/tema1/img9.png' alt='Imagen decorativa')

          p.mb-4(data-aos="fade") El proceso del olfato sigue, más o menos, estos pasos:

          .col-md-4.mb-4(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema1/img10.png' alt='Imagen decorativa')
          .col-md-8.mb-4(data-aos="fade-left")
            AcordionA(tipo="b" clase-tarjeta="tarjeta bg-green2")
              .row(titulo="Recepción de moléculas")
                p Las moléculas del olor en forma de vapor (compuestos químicos) que están flotando en el aire llegan a las fosas nasales y se disuelven en las mucosidades (que se ubican en la parte superior de cada fosa nasal).
              .row(titulo="Detección de olores")
                p En el epitelio olfatorio, las células receptoras especializadas, también llamadas neuronas receptoras del olfato, detectan los olores. Estas neuronas son capaces de detectar miles de olores diferentes.
              .row(titulo="Transmisión de la información")
                p Las neuronas receptoras del olfato transmiten la información a los bulbos olfatorios, que se encuentran en la parte de atrás de la nariz.
              .row(titulo="Proceso químico- cerebral")
                p Los bulbos olfatorios tienen receptores sensoriales que en realidad son parte del cerebro que envían mensajes directamente a: 
                ul.lista-ul--color.color-secundario.mb-0
                  li.mb-1
                    i.fas.fa-check
                    | Los centros más primitivos del cerebro donde se estimulan las emociones y memorias (estructuras del sistema límbico). 
                  li.mb-1
                    i.fas.fa-check
                    | Los centros “avanzados” donde se modifican los pensamientos conscientes (neo corteza).
              .row(titulo="Memoria")
                p Estos centros cerebrales perciben olores y tienen acceso a recuerdos que nos traen a la memoria personas, lugares o situaciones relacionadas con estas sensaciones olfativas.

          p.mb-4(data-aos="fade") Para comprender más y mejor, los conceptos y metodologías relacionados con el aire y los procesos olfativos, aprópiese de las siguientes definiciones:

          .col-md-3.mb-4.mb-md-5.px-md-0(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema1/img11.svg' alt='Imagen decorativa')
          .col-md-7.mb-4.mb-md-5.px-md-0(data-aos="fade-left")
            SlyderE.bg-white.box-shadow.p-4.px-md-5(indicadores="derecha")
              .row
                h5 Olor  
                p Propiedad organoléptica perceptible por el órgano olfativo cuando inspira determinadas sustancias volátiles. 
              .row
                h5 Olor ofensivo   
                p Es el olor generado por sustancias o actividades industriales, comerciales o de servicio, que produce fastidio, aunque no cause daño a la salud humana.
              .row
                h5 Sustancia de olor ofensivo   
                p Es aquella que, por sus propiedades organolépticas, composición y tiempo de exposición puede causar olores desagradables. 
              .row
                h5 Emisión  
                p Transferencia de contaminantes de la atmósfera a un receptor. Se entiende por inmisión la acción opuesta a la emisión. Aire inmiscible es el aire respirable al nivel de la tropósfera. 
              .row
                h5 Factor hedónico   
                p Factor subjetivo que permite definir si un olor es agradable, desagradable, nauseabundo, etc. 
              .row
                h5 Umbral   
                p Valor mínimo de una magnitud a partir del cual se produce un efecto determinado. 
              .row
                h5 Umbral de molestia   
                p Es la concentración a la que una pequeña parte de la población (< 5%) manifiesta molestias durante un periodo corto de tiempo. Dado que la sensación de molestia puede estar influenciada por factores sicológicos y socioeconómicos un umbral de molestia no puede definirse solo con base en la concentración. 
              .row
                h5 Umbral de tolerancia   
                p El umbral de tolerancia es equivalente al umbral de molestia. 
              .row
                h5 Unidad de olor   
                p Es la cantidad de (una mezcla de) sustancias olorosas presentes en un metro cúbico de gas oloroso (en condiciones normales 1 atmósfera de presión y 0 °C de temperatura) origina una respuesta fisiológica en el umbral del panel. 
              .row
                h5 Unidad de olor europea   
                p Cantidad de sustancia olorosa qué coma cuando se evapora en 1 metro cúbico de gas neutro en condiciones normales, origina una respuesta fisiológica de un panel (umbral de detección) equivalente al que origina una masa de olor de referencia europea more evaporada en 1 metro cúbico de gas neutro en condiciones normales. 
              .row
                h5 Olfatometría
                p Técnica sensorial de medición de olores que se usa para determinar el grado de molestia que pueden ocasionar ciertos olores a la población. 

          .col-md-5.mb-4.mb-md-0(data-aos="fade-right")
            p La normatividad en olores es un aspecto de compleja regulación debido a que las molestias que producen los olores se convierten de cierta manera en conceptos muy subjetivos y dependen en cierta manera de la percepción individual y de las personas que están expuestas al olor con diferentes niveles de sensibilidad y percepción.
          .col-md-7.mb-4.mb-md-0(data-aos="fade-left")
            .tarjeta.bg-degrade-green.p-3
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2
                  img.px-md-1(src="@/assets/curso/temas/tema1/pdf.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0.text-white
                      h3.mb-1 Normatividad del Aire
                      p.mb-0 Amplíe sus conocimientos sobre la normatividad que regula el tratamiento y la gestión del aire y los olores, visitando el Anexo_1_NormatividadDelAire.
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_1_NormatividadDelAire.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download


    Separador 

    #t_1_4
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.4. Características y tipos de contaminación en el aire por ruido

    p(data-aos="fade") El ruido ha sido considerado un contaminante y un problema ambiental importante que afecta a el ser humano y al ecosistema que lo rodea, sin embargo, el ruido hace parte de la cotidianidad de las personas, dada la exposición directa e indirecta en actividades al tráfico vehicular, procesos productivos, actividades sociales, obras civiles entre otros, siendo impactantes en gran medida para la salud física y mental.
    p.mb-4(data-aos="fade") Entre otras afectaciones a la salud, por exposición al ruido, se pueden mencionar:
    
    .row.justify-content-center
      .col-md-5.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema1/img12.png' alt='Imagen decorativa')
      .col-md-7.mb-4(data-aos="fade-left")
        ul.lista-ul--color.color-secundario.mb-0
          li.mb-0
            i.fas.fa-check
            | Estrés.
          li.mb-0
            i.fas.fa-check
            | Afectación o perturbación del sueño.
          li.mb-0
            i.fas.fa-check
            | Depresión, Agresividad, Ira.
          li.mb-0
            i.fas.fa-check
            | Perdida o disminución auditiva.
          li.mb-0
            i.fas.fa-check
            | Mala Comunicación.
          li.mb-0
            i.fas.fa-check
            | Perturbaciones en el sistema nervioso.
          li.mb-0
            i.fas.fa-check
            | Socioacusia.
          li.mb-0
            i.fas.fa-check
            | Problemas cardiovasculares.
          li.mb-0
            i.fas.fa-check
            | Ineficacia Laboral.

    p.mb-4(data-aos="fade") La siguiente tabla le muestra algunos conceptos y definiciones clave para comprender las características y tipos de contaminación en el aire, por ruido:

    .row.justify-content-center.mb-4
      .col-md-8(data-aos="fade-down")
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Tabla 3] Conceptos y definiciones sobre contaminación del aire por ruido
          .tabla-a.tema1.color-secundario
            table
              thead
                tr.bg-secundario
                  th.colum-1 Conceptos
                  th Definición
              tbody
                tr
                  td.fw-bold.text-center Decibel (dB)
                  td Décima parte del Bel, razón de energía, potencia o intensidad que cumple con la siguiente expresión: Log R = 1dB/10 
                tr
                  td.fw-bold.text-center Presión sonora 
                  td Es la diferencia entre la presión total instantánea en un punto cuando existe una onda sonora y la presión estática en dicho punto. 
                tr
                  td.fw-bold.text-center Sonido
                  td Sensación percibida por el órgano auditivo, debida generalmente a la incidencia de ondas de comprensión (longitudinales) propagadas en el aire. Por extensión se aplica el calificativo del sonido, a toda perturbación que se propaga en un medio elástico, produzca sensación audible o no. 
                tr
                  td.fw-bold.text-center Sonómetro
                  td Es un instrumento de medición de presión sonora, compuesto de micrófono, amplificador, filtros de ponderación e indicador de medida, destinado a la medida de niveles sonoros, siguiendo unas determinadas especificaciones. 
                tr
                  td.fw-bold.text-center Resolución
                  td Documento por la cual se establece la norma nacional de emisión de ruido y ruido ambiental. (627 de 2006). 


    .row.justify-content-center(data-aos="fade-down")
      .col-md-8
        .tarjeta.bg-degrade-green.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.px-md-3(src="@/assets/curso/temas/tema1/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h3.mb-1 Reglamentacion del ruido en Colombia.
                  p.mb-0 Conozca algunas generalidades de la historia de la reglamentación del ruido en Colombia, estudiando con atención el Anexo_2_ReglamentacionDelRuidoEnColombia.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_2_ReglamentacionDelRuidoEnColombia.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download


      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
