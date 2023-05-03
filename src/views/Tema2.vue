<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 2
      h1 Alistamiento de la toma de muestras

    .row.mb-5
      .fondo-tema2img.p-4(data-aos="fade-down")
        .row.justify-content-center
          .col-md-10.bg-white.p-4.my-md-5
            p El muestreo de un sitio potencialmente alterado por sustancias inorgánicas y/u orgánicas tiene como objetivo la obtención de información sobre la concentración de tales sustancias en el medio sea agua, suelo o aire de manera que pueda establecerse una comparación con los niveles de referencia propuestos para la protección de la salud humana y los ecosistemas.
            p.mb-0 La importancia del muestreo radica en que la información sobre sustancias que alteran la calidad del medio ha de ser significativa y fiable, de manera que la toma de decisiones sobre el sitio potencialmente alterado o contaminado sea adecuada a su particular problemática.

    p.mb-4(data-aos="fade") En el alistamiento de la toma de muestras, debe tenerse en cuenta:

    .row.mb-4
      .col-md-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/img2.png' alt='Imagen decorativa')
      .col-md-8.mb-4(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-green2")
          .row(titulo="Fiabilidad")
            p También influye en el clima la orientación de las laderas. Estas variaciones originan distintos pisos de vegetación.
          .row(titulo="Adecuación del muestreo")
            p Por lo anterior, es importante que la adecuación del muestreo se deba a las peculiares características ambientales de cada sitio.
          .row(titulo="Valor estadístico")
            p Esto es así porque dependiendo del muestreo, el valor estadístico obtenido para cada contaminante reflejará con mayor o menor precisión el valor real existente en el sitio.
    
    .row.mb-4
      .col-md-8.mb-4(data-aos="fade-right")
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-green2")
          .row(titulo="Selección del procedimiento de muestreo ")
            p Por tanto, la selección del procedimiento de muestreo es crucial y de él depende en gran medida que las decisiones tomadas sobre un medio (agua, suelo o aire, potencialmente alterados en su calidad) sean eficaces para abordar y solucionar su problemática.
          .row(titulo="Pasos para la toma de muestras")
            ul.lista-ul--color.color-secundario.ps-3.mb-0
              li.mb-1
                i.fas.fa-check
                | Identificación del sitio de muestreo. 
              li.mb-1
                i.fas.fa-check
                | Realizar alistamiento de los equipos, materiales e insumos para la toma.
              li.mb-1
                i.fas.fa-check
                | Realizar un plan de muestreo.
              li.mb-1
                i.fas.fa-check
                | Toma de la muestra.
              li.mb-1
                i.fas.fa-check
                | Preservación y almacenamiento temporal. 
              li
                i.fas.fa-check
                | Transporte.
          .row(titulo="Garantía")
            p El proceso debe dar garantía de la trazabilidad y custodia de la muestra en todo momento.
      .col-md-4.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img3.png' alt='Imagen decorativa')


    p.mb-4(data-aos="fade") De acuerdo al Instituto nacional de salud (2007) Manual de Instrucciones para la Toma, Preservación y Transporte de Muestras de Agua de Consumo Humano para Análisis de Laboratorio, algunos conceptos básicos a tener en cuenta en el alistamiento de muestras, son:

    .row
      .col-md-9.mb-4(data-aos="fade-right")
        TabsA.tema5.color-acento-botones
          .tarjeta.bg-green3.p-4.p-md-5(titulo="Muestra")
            h5 Muestra
            p.mb-0 Toma puntual en los puntos de muestreo concertados, que refleja la composición física, química y microbiológica representativa del momento, para el proceso de vigilancia de la Autoridad Sanitaria.
          .tarjeta.bg-green3.p-4.p-md-5(titulo="Muestreo")
            h5 Muestreo
            p.mb-0 Proceso de toma de muestras que son analizadas en laboratorios para obtener información sobre la calidad del agua del sitio concertado en que fueron tomadas.
          .tarjeta.bg-green3.p-4.p-md-5(titulo="Cadena de custodi")
            h5 Cadena de custodi
            p.mb-0 Proceso por medio del cual se mantiene una muestra bajo posesión física o control durante su ciclo de vida completo, es decir, desde que se toma hasta que se desecha.
      .col-md-3.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img4.png' alt='Imagen decorativa')


    Separador 

    #t_2_1
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.1 Localización del muestreo de agua

    p(data-aos="fade") El muestreo de aguas puede tener diferentes fines que van desde conocer las características de la fuente de suministro, hasta determinar las condiciones que presenta un vertimiento. Para localizar el sitio de muestreo debe especificarse concretamente el fin de la muestra y el tipo de agua que se quiere muestrea. Dependiendo de esto se especifica el lugar exacto y protocolo aplicable para la actividad. En cualquier caso, siempre es necesario dejar registro detallado del lugar de la toma, incluso si se dispone de GPS se puede posicionar satelitalmente la ubicación.
    p.mb-4(data-aos="fade") De manera general, la Información requerida al momento del muestreo debe ser como mínimo, la siguiente:
    
    .row.justify-content-center.mb-4
      .col-md-3.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/img5.png' alt='Imagen decorativa')
      .col-md-9.mb-4(data-aos="fade-left")
        ul.lista-ul--color.color-secundario.mb-0
          li.mb-1
            i.fas.fa-check
            | Identificación de la muestra (nombre, código, etc.).
          li.mb-1
            i.fas.fa-check
            | Identificación del sitio de muestreo (georreferenciación: latitud, longitud).
          li.mb-1
            i.fas.fa-check
            | Tipo de fuente y características de esta (pozo calzado, perforación, canal, río, represa, aljibe, profundidad del nivel estático y total si fuera pozo o perforación, diámetro de la perforación o pozo, cercanía a pozos negros o industrias, existencia de pozos abandonados, etc.).
          li.mb-1
            i.fas.fa-check
            | Destino (consumo humano, animal, riego, etc.).
          li.mb-1
            i.fas.fa-check
            | Información acerca del establecimiento y nombre del propietario o encargado (con datos de dirección, e-mail y/o teléfono) donde se ha muestreado e información adicional acerca de problemas que detecta el personal que puede atribuirse al agua.
          li.mb-1
            i.fas.fa-check
            | Nombre de quien realizó el muestreo.
          li.mb-1
            i.fas.fa-check
            | Tipo de análisis a efectuar (fisicoquímico y/o microbiológico).
          li.mb-1
            i.fas.fa-check
            | Reactivo empleado para su preservación, en caso de ser utilizado.
          li
            i.fas.fa-check
            | Cualquier otra observación que se considere de importancia.
    
    
    .row.fondo-tema2.align-items-center.pb-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center
          
          .row.mb-5
            .bg-green2.box-shadow.p-4(data-aos="fade-down")
              p.mb-0 Dependiendo del fin de la muestra es posible que se requiera, previo a la actividad, realizar el lavado y desinfección del punto de muestreo, para reducir el riesgo de contaminación por presencia de agentes, elementos o compuestos que puedan estar presentes en la estructura debido a su entorno. Para esto es común emplear diferentes agentes como hipoclorito de sodio o calcio.

          .col-md-12(data-aos="fade")
            h3.subt.text-white.mb-4 Puntos de tomas de muestras
            p El personal de monitoreo deberá obtener toda la información posible y de manera detallada acerca de las estaciones del recurso hídrico por monitorear. Generalmente, esta información es proporcionada por el cliente, ello servirá para planear todo el procedimiento de muestreo.
            p La ubicación de los puntos de muestreo deberá cumplir los siguientes criterios:

          .col-md-8(data-aos="fade-down")
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 4] Criterios en la ubicación de puntos de muestreo
            .tabla-a.tema2.color-secundario.mb-5 
              table
                tbody.bg-white 
                  tr
                    td.colum-1.fw-bold.text-center Determinar el punto de muestreo
                    td Determinar el punto en común acuerdo entre las personas prestadoras y la respectiva autoridad sanitaria.
                  tr.bg-green4  
                    td.colum-1.fw-bold.text-center Puntos fijos
                    td Establecer puntos fijos inmediatamente después del accesorio o componente donde terminan las tuberías de conducción y se da inicio a la red de distribución, en el extremo más alejado de la red que sea más representativo en calidad del agua y a la salida de la infraestructura ubicada en la red de distribución que pueda representar un riesgo de contaminar el agua.
                  tr  
                    td.colum-1.fw-bold.text-center Puntos de interés
                    td Establecer puntos de interés general, es decir localizar puntos de muestreo teniendo en cuenta que representen el funcionamiento hidráulico del sistema.

          p.mb-4(data-aos="fade") Para muestreos que no son de agua para consumo humano siempre se recomienda:     

          .col-md-8(data-aos="fade-down")
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 5] Puntos de muestreo en aguas no aptas para consumo humano
            .tabla-a.tema2.color-secundario.mb-5 
              table
                tbody.bg-white 
                  tr
                    td.colum-1.fw-bold.text-center Identificar, previamente, la zona
                    td Si es posible, georreferenciarla, indagar sobre el uso del recurso, la población y situación actual del mismo.
                  tr.bg-green4  
                    td.colum-1.fw-bold.text-center En aguas residuales
                    td Solicitar los permisos con anterioridad, verificar la zona y llevar los elementos de protección requeridos.
                  tr  
                    td.colum-1.fw-bold.text-center Registro del proceso
                    td Llevar la documentación y material necesario para registrar horas, fechas, lugares de la toma de muestras, etc.
          
          p.mb-4(data-aos="fade") Para el sitio de muestreo se requiere tener en cuenta:
            
          .col-md-3.mb-4.mb-md-0.px-md-0(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/img6.svg' alt='Imagen decorativa')
          .col-md-6.px-md-0(data-aos="fade-left")
            SlyderE.bg-white.box-shadow.p-4.px-md-5(indicadores="derecha")
              .row
                h4 Accesibilidad 
                p El punto de muestreo se sitúa en un lugar de fácil acceso, que cuente con las vías vehiculares y peatonales adecuadas, de tal manera que se facilite obtener las muestras, transportar equipos, recipientes y materiales de muestreo.
              .row
                h4 Representatividad  
                p El punto de recolección de las muestras se ubica de manera que, sea lo más representativo posible de las características generales del cuerpo de agua. Esto significa, que es necesario que el cuerpo de agua se encuentre totalmente mezclado en el punto donde se tomará la muestra; evaluando la turbulencia, velocidad y apariencia física del mismo para asegurar la homogeneidad de la muestra. Cabe señalar, que una excesiva turbulencia puede afectar los valores de algunos parámetros como oxígeno disuelto y pH.
              .row
                h4 Revisión de expedientes   
                p Es indispensable conocer el estado y la exigencia dada por la Entidad Ambiental a cada industria; con ello, se da la respectiva prioridad y orden en la programación fijada en el año. Los permisos y obligaciones de cada una de las industrias se consultan en los expedientes de la corporación ambiental a la que pertenece la industria, así como otro tipo de información necesaria para determinar las características del muestreo (aumento o disminución de la producción, períodos de vacaciones, jornadas laborales, número de empleados, entre otros) que ayudan a determinar el sitio, duración, tipo de muestreo que se debe realizar.
              .row
                h4 Información clave   
                p De cada industria es necesario obtener determinada información que permita establecer los siguientes aspectos:
                ul.lista-ul--color.color-secundario.mb-0
                  li.mb-0
                    i.fas.fa-check
                    | Objeto de caracterización (control y seguimiento al permiso de vertimiento).
                  li.mb-0
                    i.fas.fa-check
                    | Información básica de la empresa (Procesos Productivos). ü Determinación de los sitios de aforo y muestreo (Tipo de PTAR y sus componentes, afluentes y efluentes).
                  li.mb-0
                    i.fas.fa-check
                    | Método de aforo. ü Tipo de descarga. 
                  li.mb-0
                    i.fas.fa-check
                    | Tipo de muestra (pecuaria, domestica, industrial).
              .row
                h4 Definición de la frecuencia de muestreo   
                p Con lo anterior se define la frecuencia del muestreo (15 minutos, 20 minutos, 30 minutos), los parámetros a determinar, la forma de manejo y preservación de las muestras, los tipos de descarga, los sitios de aforo y muestreo que dan lugar a las posibles adecuaciones necesarias que permiten garantizar la confiabilidad en la toma de muestra y la medición del caudal, ya que la representatividad de ésta depende la veracidad de los resultados.



    h3.subt.text-white.mb-4(data-aos="fade") Características de los puntos de muestreo
    p.mb-4(data-aos="fade") La forma de tomar la muestra y el punto de muestreo es condicionada al lugar de este, es por ello que se deben considerar algunas particularidades. Según las diferentes fuentes de agua las características del muestreo deben ser:

    .row.justify-content-center.mb-4.px-md-3(data-aos="fade-down")
      .col-md-6.mb-md-0.mb-4.px-md-0
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.px-0
            figure
              img(src="@/assets/curso/temas/tema2/img-hover1.png", alt="Pozos de agua")
            .text.p-md-2.px-md-4.p-3
              .row.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xl-4
                h5.mt-4.mt-lg-0.mb-3 Pozos de agua
                p Extraer la muestra de agua sólo después que el pozo ha sido bombeado por lo menos durante 15 minutos para asegurar que la muestra representa la calidad de la fuente de agua subterránea.
      .col-md-6.mb-md-0.mb-4.px-md-0
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.px-0(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            figure
              img(src="@/assets/curso/temas/tema2/img-hover2.png", alt="Ríos y arroyos")
            .text.p-md-2.px-md-4.p-3
              .row.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xl-4
                h5.mt-4.mt-lg-0.mb-3 Ríos y arroyos
                p Cuando se toman muestras de un río o un arroyo, los valores analíticos pueden variar con la profundidad, el caudal del arroyo y por la distancia a las orillas. 

    p.mb-4(data-aos="fade") En el proceso, los cuidados a tener en cuenta son:

    .row
      .col-md-8.mb-4(data-aos="fade-right")
        ul.lista-ul--color.color-secundario.ps-3.mb-0
          li.mb-1
            i.fas.fa-check
            | Para que la muestra sea representativa debe ser recolectada a la mitad del área del flujo, independientemente de la modalidad del muestreo.
          li.mb-1
            i.fas.fa-check
            | Es clave tener presente las inundaciones repentinas. 
          li.mb-1
            i.fas.fa-check
            | Se debe seleccionar el punto de muestreo cercano a una estación de aforo para relacionar el caudal del río con la muestra de agua.
          li.mb-1
            i.fas.fa-check
            | En el caso de puntos de muestreo situados en las proximidades de confluencias y descargas, los puntos de muestreo deberán estar ubicados a una distancia tal en que ambas aguas estén uniformemente mezcladas. 
          li.mb-1
            i.fas.fa-check
            | Cuando se trata de lagos y reservorios, estos tipos de cuerpos de agua están sujetos a considerables variaciones por causas normales tales como estratificación a causa de la radiación solar y la velocidad del viento y descargas de fuentes tributarias. 
          li
            i.fas.fa-check
            | Para determinar la representatividad de la calidad del agua en embalses, muchas veces se requiere la toma de muestras en más de una posición.
      .col-md-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img7.png' alt='Imagen decorativa')

    .row.mb-4
      .col-md-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/img8.png' alt='Imagen decorativa')
      .col-md-8(data-aos="fade-left")
        ul.lista-ul--color.color-secundario.ps-3.mb-0
          li.mb-1
            i.fas.fa-check
            | Las ubicaciones dependen de los objetivos del programa de muestreo, el impacto de las fuentes locales de contaminación y el tamaño del cuerpo de agua. 
          li.mb-1
            i.fas.fa-check
            | En todos los casos se debe evitar la toma de muestras en lugares donde exista acumulación de sedimentos o de material flotante.
          li.mb-1
            i.fas.fa-check
            | Si no se dispone de una lancha, recolectar las muestras lo más lejano de la orilla y anotar esta distancia y la profundidad del punto de muestreo. 
          li
            i.fas.fa-check
            | En el muestreo a distancia de las orillas se pueden extraer muestras empleando muestreadores tipo Van Dorm o bombas peristálticas equipadas con mangueras ligeras.


    .row.fondo-gris.align-items-center.py-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-12
            h3.subt.text-white.mb-4(data-aos="fade") Labores a realizar en campo

          .col-md-3.mb-4(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/img9.png' alt='Imagen decorativa')
          .col-md-9.mb-4(data-aos="fade-left")
            p Se realiza la respectiva toma de muestra y es indispensable que, a la vez, se realice análisis en campo de algunos parámetros que deben medirse en su lugar original, a esto se le llama laboratorio en campo o ensayos in situ. Se trata de ensayos o mediciones que realizan de algunos parámetros en campo que, por su naturaleza, si no se realiza de manera inmediata, los resultados arrojados posteriormente no serán verídicos.
            p Para agua de consumo humano se encuentran dentro de estos parámetros: la temperatura, el olor, el sabor, el cloro residual libre y el pH, sin embargo, para otro tipo de aguas como las residuales o las superficiales, estos también son aplicables para mediciones in situ incluyendo conductividad, turbidez y oxígeno disuelto; la medición de estos se realiza con el equipo multiparamétrico.
            .bg-blue2.p-4
              p.mb-0 Estas mediciones se realizan generalmente haciendo uso de equipos portátiles como sondas multiparamétricas, pHmetros y conductímetros. Sin embargo, se debe resaltar que para hacer estos análisis siempre se deben considerar las indicaciones de revisión y calibración de los equipos.

          .col-md-8.mb-4(data-aos="fade-right")
            p.mb-4 La siguiente, es la explicación de algunos parámetros medidos in situ y aspectos a tener en cuenta:
            .tarjeta.bg-green4.p-4.p-md-5.pb-md-3
              SlyderA(tipo="b" data-aos="fade-down")
                .row.justify-content-center
                  .col-md-11
                    h5 Oxígeno disuelto 
                    p Este parámetro proporciona una medida de la cantidad de oxígeno disuelto en el agua. Mantener una concentración adecuada de oxígeno disuelto en el agua es importante para la supervivencia de los peces y otros organismos de vida acuática. La temperatura, el material orgánico disuelto, los oxidantes inorgánicos, etc. afectan sus niveles. La baja concentración de oxígeno disuelto puede ser un indicador de que el agua tiene una alta carga orgánica provocada por aguas residuales.
                .row.justify-content-center
                  .col-md-11
                    h5 Conductividad 
                    p La conductividad de una muestra de agua es una medida de la capacidad que tiene la solución para transmitir corriente eléctrica. Esta capacidad depende de la presencia, movilidad, valencia y concentración de iones, así como de la temperatura del agua. Se debe tener en cuenta que las sales minerales son buenas conductoras y que las materias orgánicas y coloidales tienen poca conductividad.
                .row.justify-content-center
                  .col-md-11
                    h5 pH 
                    p El pH es una medida de la concentración de iones de hidrógeno en el agua. Aguas fuera del rango normal de 6 a 9 pueden ser dañinas para la vida acuática. Estos niveles de pH pueden causar perturbaciones celulares y la eventual destrucción de la flora y fauna acuática. En el campo de abastecimiento de agua el pH tiene importancia en la coagulación química, desinfección, ablandamiento del agua y control de corrosión.
                .row.justify-content-center
                  .col-md-11
                    h5 Temperatura
                    p La temperatura juega un papel muy importante en la solubilidad de los gases, en la disolución de las sales y por lo tanto en la conductividad eléctrica, en la determinación de pH, en el conocimiento del origen de agua y de las eventuales mezclas, etc. Las descargas de agua a altas temperaturas pueden causar daños a la flora y fauna de las aguas receptoras al interferir con la reproducción de las especies, incrementar el crecimiento de bacterias y otros organismos, acelerar las reacciones químicas, reducir los niveles de oxígeno y acelerar la eutrofización.
                .row.justify-content-center
                  .col-md-11
                    h5 Medición de temperatura 
                    p La medición de temperatura en muestras ambientales debe ser una labor realizada in situ, y no aplica por ello los procedimientos de almacenamiento y preservación. El mejor método para la lectura de este parámetro es introducir directamente los equipos de medición (termómetro o sonda) en el cuerpo de agua.
                .row.justify-content-center
                  .col-md-11
                    h5 Turbidez 
                    p La turbidez del agua es provocada por la materia insoluble, en suspensión o dispersión coloidal. Es un fenómeno óptico que consiste esencialmente en una absorción de luz combinado con un proceso de difusión. En caso de requerirse la extracción de una muestra para la medición de los parámetros in situ, es recomendable realizar la medición de los parámetros de inmediato para evitar variación de estos.
          .col-md-4(data-aos="fade-left")
            img(src='@/assets/curso/temas/tema2/img10.png' alt='Imagen decorativa')


    h3.subt.text-white.mb-4(data-aos="fade") En cuanto a la seguridad y la protección personal, es fundamental:

    .row
      .col-md-3.mb-4(data-aos="fade-right")  
        img(src='@/assets/curso/temas/tema2/img11.png' alt='Imagen decorativa')
      .col-md-9.mb-4(data-aos="fade-left")
        p Confirmar que el punto de muestreo y sus alrededores, cumplan con las condiciones meteorológicas adecuadas que garanticen la seguridad del personal de muestreo, de manera que, se minimicen los riesgos y peligros. Así mismo, conocer el estado del orden público; en caso de tratarse de una zona de conflicto, se informa a la autoridad competente la presencia del personal de muestreo indicando el número de integrantes y el tipo de actividad a realizar.
        p En el mismo sentido, el personal de la actividad debe chequear antes de salir al muestreo, su identificación personal, carné de seguro médico, ARL, número de contrato, entre otros. Se deberán identificar los datos y ubicación del centro de atención médico más cercano, ambulancias, policía, grúa o los números telefónicos pertinentes en caso de un incidente durante la actividad.
        .bg-green5.p-4
          p.mb-0 Es fundamental que, durante la ejecución de la toma de muestras, ningún miembro se separe a una distancia considerable del resto del grupo que le impida ser escuchado en caso de emergencia.

    
    Separador 

    #t_2_2
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.2 Localización del muestreo de suelo

    .row.mb-4
      .col-md-7.mb-4(data-aos="fade-right")
        p En la zona en la que se requiere tomar la muestra de suelo se debe consultar información como estudios de suelos, estudios de salinidad y drenaje y vulnerabilidad de los acuíferos, entre otros datos importantes.
        p La localización de los puntos de muestreo (PDM) se apoya fundamentalmente en la información previa existente sobre el sistema o fenómeno a caracterizar, que permite establecer las hipótesis correspondientes, relativas a la distribución tanto horizontal como vertical de la contaminación. De todos modos, se tendrán en cuenta las zonas con mayor riesgo a ser contaminadas.
        p Como base en el diseño del muestreo, se debe considerar:
      .col-md-5(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img12.png' alt='Imagen decorativa')


    .row.justify-content-center.mb-5
      .col-md-8(data-aos="fade-down")
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Tabla 6] Consideraciones para el diseño del muestreo
          .tabla-a.tema2.color-secundario
            table
              tbody.bg-white 
                tr
                  td.colum-1.fw-bold.text-center Extensión
                  td Se deberá formular una hipótesis acerca de la extensión espacial del entorno afectado. 
                tr.bg-green4
                  td.colum-1.fw-bold.text-center Elementos presentes 
                  td Así mismo, se deberá formular una hipótesis de la potencial distribución de los elementos presentes en el suelo en los diferentes medios.  
                tr
                  td.colum-1.fw-bold.text-center Sustento de las hipótesis 
                  td Tales hipótesis se realizarán con base en los resultados obtenidos a partir de la información recolectada en la etapa de reconocimiento.  
                tr.bg-green4
                  td.colum-1.fw-bold.text-center Análisis de información 
                  td Preferiblemente, se debe realizar un análisis de la información mediante un SIG (Sistema de Información Geográfica). 


    .row
      .col-md-3.mb-4(data-aos="fade-right")  
        img(src='@/assets/curso/temas/tema2/img13.png' alt='Imagen decorativa')
      .col-md-9.mb-4(data-aos="fade-left")
        p Los modelos más frecuentes e importantes de distribución espacial de los PDM sitúan sus coordenadas de forma aleatoria (por muestreo al azar) o bien de forma regular (por muestreo sistemático). La elección del muestreo al azar implica que la localización de cada PDM dentro del área de estudio no aporta información adicional sobre el sistema o fenómeno a investigar. El muestreo sistemático, sin embargo, supone la existencia de una interrelación entre la localización espacial y la concentración de alguna de las sustancias estudiadas en cada punto de muestreo.
        p Dentro del muestreo sistemático se distinguen, a su vez, varios tipos:
        .row  
          .col-md-3
            ol.lista-ol
              li.mb-1 
                span.t-green2.fw-bold a)
                | Al azar
              li.mb-1 
                span.t-green2.fw-bold b)
                | Regular
          .col-md-6
            ol.lista-ol
              li.mb-1 
                span.t-green2.fw-bold c)
                | Al tresbolillo o alternado
              li.mb-1 
                span.t-green2.fw-bold d)
                | En gradiente
        p Sobre estos tipos de muestreo se puede tener presente que:
        ul.lista-ul--color.color-secundario.mb-0
          li.mb-1
            i.fas.fa-check
            | Los tres primeros tipos (al azar, regular y alternado) situarían los PDM en toda la extensión del área de estudio.  
          li.mb-1
            i.fas.fa-check
            | Mientras el último tipo (en gradiente) los situaría a lo largo del gradiente o fuente de variación espacial más importante. 
          li
            i.fas.fa-check
            | La distribución de los puntos en el espacio debe considerar tanto el plano horizontal como el vertical, por lo que las consideraciones realizadas deben igualmente aplicarse a la localización en profundidad de los PDM. 

    .row.fondo2-tema2.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-12
            h3.subt.text-white.mb-4(data-aos="fade") Número de puntos de muestreo

          .col-md-9.mb-4(data-aos="fade-right")
            p En general, el número de sitios debe ser suficiente para adecuar la muestra a las variaciones presentes en cada unidad de muestreo, como guía se recomienda tomar los criterios por la EPA y adaptarse para el fin propuesto. En algunas circunstancias, puede ser necesario restringir el muestreo a períodos específicos del año.
            p Por ejemplo, es posible que la característica o sustancia que se va a determinar sea afectada por factores estacionales o actividades humanas (el clima, el acondicionamiento - fertilización del suelo, el uso de pesticidas o herbicidas); esto se debe tener en cuenta en el diseño de un programa de muestreo. No muestrear inmediatamente después de una lluvia o si el perfil del suelo está saturado, conviene siempre esperar 2 ó 3 días a que drene bien.
            p Otros aspectos clave sobre la localización del muestreo de suelo, son:
          .col-md-3(data-aos="fade-left")
            img(src='@/assets/curso/temas/tema2/img14.png' alt='Imagen decorativa')

          .col-md-3.mb-4.mb-md-0.px-md-0(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/img15.svg' alt='Imagen decorativa')
          .col-md-6.mb-4.mb-md-0.px-md-0(data-aos="fade-left")
            SlyderE.bg-white.box-shadow.p-4.px-md-5(indicadores="derecha")
              .row
                h4 Accesibilidad y Topografía del terreno  
                p Durante el diseño del muestreo se debe llevar a cabo un reconocimiento del entorno afectado, dirigido especialmente a comprobar la accesibilidad de las zonas a muestrear, que puede condicionar los equipos a utilizar durante la campaña. Se deberán identificar las zonas de difícil acceso, canales, taludes, laderas de fuerte pendiente, zonas inestables, etc. Si se posee información cartográfica de las vías de acceso y fotografías aéreas, esta actividad se puede realizar en la oficina.
              .row
                h4 Presencia de superficies endurecidas  
                p En ciertos entornos afectados, la superficie del terreno a investigar está constituida por suelos que presentan horizontes endurecidos y capas con grava y gravilla de mayor dureza, que se tendrá que atravesar para muestrear y seguir muestreando en profundidad. Este factor ha de tenerse en cuenta, en la medida que puede requerir equipos específicos (martillos neumáticos, etc.) adicionales a los de perforación y muestreo que se empleen posteriormente.
              .row
                h4 Permisos  
                p Antes de iniciar cualquier investigación de campo se deberán conseguir los permisos oportunos (de ocupación, de perforación, de acceso a los terrenos, etc.), que pueden variar de un caso a otro.


    Separador 

    #t_2_3
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.3  Medición de olor

    p(data-aos="fade") Es muy importante definir cuáles son los métodos para la medición de los olores ofensivos debido a que las características de la medición dependen, especialmente, del alcance o sector que sea objeto del estudio.

    p.mb-4(data-aos="fade") La OMS define cuatro características para los olores:

    .row(data-aos="fade-down")
      .col-md-3.mb-4
        .bg-blue3.p-4.p-md-5.px-md-4.h-100
          .row.mb-4
            .col-md-5.col-5
              img.pe-md-3(src='@/assets/curso/temas/tema2/ico1.svg' alt='Icono decorativo')
          h5 La intensidad    
          p.mb-0 La intensidad, entendida como la fuerza de la sensación percibida. 
      .col-md-3.mb-4  
        .bg-green2.p-4.p-md-5.px-md-4.h-100
          .row.mb-4
            .col-md-5.col-5
              img.pe-md-3(src='@/assets/curso/temas/tema2/ico2.svg' alt='Icono decorativo')
          h5 La calidad    
          p.mb-0 La calidad, que es el carácter diferenciador de un olor, lo que permite identificarlo.
      .col-md-3.mb-4
        .bg-blue3.p-4.p-md-5.px-md-4.h-100
          .row.mb-4
            .col-md-5.col-5
              img.pe-md-3(src='@/assets/curso/temas/tema2/ico3.svg' alt='Icono decorativo')
          h5 La aceptabilidad    
          p.mb-0 La aceptabilidad, como el grado de gusto o disgusto de un olor.
      .col-md-3.mb-4  
        .bg-green2.p-4.p-md-5.px-md-4.h-100
          .row.mb-4
            .col-md-5.col-5
              img.pe-md-3(src='@/assets/curso/temas/tema2/ico4.svg' alt='Icono decorativo')
          h5 El umbral del olor    
          p.mb-0 El umbral del olor, como la concentración mínima de un estímulo odorífico capaz de provocar una respuesta.

    p.mb-4(data-aos="fade") Existen algunas técnicas sensoriales que se emplean para medir el olor. Entre las más usuales están: la olfatometría dinámica, la cual evalúa las diluciones con aire limpio que un olor debe sufrir para no ser detectable por un humano promedio (umbral de detección).

    .bg-blue4.mb-5(data-aos="fade-down")
      .row.align-items-center
        .col-md-2.px-md-4
          img.px-md-4(src='@/assets/curso/temas/tema2/importante.svg' alt='Icono decorativo')
        .col-md-10.py-4.pe-md-5
          p.mb-0 También se emplean otras técnicas sensoriales que incluyen la determinación del carácter de un olor (mapeo triangular) y el nivel de agrado o desagrado de un olor (tono hedónico). La desventaja de este método es que no es específico y consecuentemente no identifica las especies químicas causantes del olor que está presente en el sitio.

    
    h3.subt.text-white.mb-4(data-aos="fade") Olfatometría dinámica

    .row.mb-4
      .col-md-9.mb-4(data-aos="fade-right")
        p El objetivo primordial de un estudio olfatométrico es evaluar si las emisiones de una determinada instalación pueden ser responsables o no de quejas en la población vecina. A esta conclusión se llega con la interpretación de los valores de concentración de inmisión, habitualmente denominados mapas de olores.
        p En lo relacionado con la ubicación del sitio de medición, tenga en cuenta los siguientes aspectos:
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-green2")
          .row(titulo="Reglas para definir número de mediciones")
            p No existe una regla única para definir el número de mediciones y los sitios de monitoreo, dado que la problemática es diferente en cada lugar, por lo que se establecen criterios generales para la definición de la estrategia de medición. 
          .row(titulo="Fases de un estudio olfatométrico ")
            p Para la elaboración de un estudio olfatométrico se deben tener encuentra 3 fases: 
            p.mb-0 #[b Fase I] Elaboración del plan de muestreo 
            p.mb-0 #[b Fase II] Toma de muestra análisis de la concentración 
            p #[b Fase III] Obtención de los resultados de olor de emisión
          .row(titulo="Elaboración del plan de muestreo ")
            p Un estudio olfatométrico supone el conocimiento previo al detalle de todos aquellos aspectos que pueden verse inmersos en la generación de olores de una actividad o instalación. Este conocimiento previo es fundamental para poder establecer un programa de muestreo que responda a los objetivos planteados en el estudio de impacto ambiental por olores.
      .col-md-3.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img16.png' alt='Imagen decorativa')

    .row.mb-4
      .col-md-3.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/img17.png' alt='Imagen decorativa')
      .col-md-9.mb-4(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-green2")
          .row(titulo="Maneras de elaborar el plan de muestreo")
            p.mb-1 1. La visita previa a la instalación a la que se le va a hacer el estudio. 
            p 2. Por medio de la revisión de planos esquemas y demás información que permita visualizar el área de medición.
          .row(titulo="Revisión del esquema de procesos de la instalación objeto de estudio")
            p La manera más apropiada para la identificación de los focos emisores a muestrear es mediante un esquema básico de procesos de la instalación en el que estén representados el proceso a escala; es importante que este esquema se revise entre el especialista que va a ser el estudio y personal de la empresa durante la visita a las instalaciones para tener una percepción del sitio donde se va hacer el estudio.
          .row(titulo="Identificación de los potenciales focos emisores")
            p Sobre el esquema de procesos se identificarán todos los potenciales focos emisores diferenciando las emisiones de focos puntuales, las emisiones de fuentes difusas y las emisiones fugitivas.
          .row(titulo="Selección de día y hora de muestreo – tiempo de muestreo – número de muestras por foco")
            p El objetivo último de un estudio olfatométrico es evaluar si las emisiones de una determinada instalación pueden ser responsables o no de quejas en la población vecina. En el caso de fuentes superficiales sucede, en ocasiones, que la superficie emisora no es homogénea por lo que hay que considerar la realización de distintas tomas en cada una de las zonas identificadas o la realización de muestreos integrados.
        .bg-blue3.p-4.py-3
          p.mb-0 La localización de las estaciones de muestreo será fuera de los límites de las instalaciones de cualquier fuente.

    p.mb-4(data-aos="fade") De acuerdo con el Protocolo para el Monitoreo Control y Vigilancia de Olores Ofensivos, existen dos variables a tener en cuenta, como se muestra en la siguiente tabla:

    .row.justify-content-center
      .col-md-8(data-aos="fade-down")
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Tabla 7] Variables en la medición de olores
          .tabla-a.tema2.color-secundario
            table
              thead
                tr.bg-secundario
                  th Meteorología
                  th Topografía
              tbody.bg-green2 
                tr
                  td 
                    p Dado que los factores meteorológicos determinan el transporte y dispersión de los contaminantes en la atmósfera, los parámetros meteorológicos con los cuales se debe contar como mínimo son:
                    ol.lista-ol
                      li 
                        span.t-green2.fw-bold 1.
                        | Velocidad y dirección del viento: con el fin de establecer la dirección de los contaminantes y su dispersión en la atmósfera.
                      li.mb-1 
                        span.t-green2.fw-bold 2.
                        | Temperatura: variable a medir ya que esta puede influir en la generación de sustancias. Otros parámetros como precipitación, nubosidad, humedad y radiación solar completan el panorama de los fenómenos meteorológicos.
                  td 
                    p Es un factor importante en la selección de los sitios de monitoreo por el efecto de ésta sobre los vientos locales y las condiciones de estabilidad; en general, mientras más complejo el terreno se necesitarán más sitios de medición.


    Separador 

    #t_2_4
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.4 Localización del muestreo de ruido

    p.mb-5(data-aos="fade") Es importante diferenciar que la medición del ruido que se va a realizar debe establecer su alcance, puesto que el 
      b.t-green2 ruido ambiental 
      | se mide teniendo en cuenta un área determinada por su impacto (Parques, Zonas Residenciales, Hospitales, entre otros), en cambio la medición por 
      b.t-green2 emisión de ruido 
      | se mide siempre y cuando esté relacionada con la generación de ruido que puede generar una empresa o proyecto.

    
    h3.subt.text-white.mb-4(data-aos="fade") Horarios parámetros y tiempos de medición

    .row.mb-4
      .col-md-9.mb-4(data-aos="fade-right")
        p Teniendo en cuenta que las percepciones de los sonidos dependen del sitio, las fuentes generadoras, el clima, entre otros, la resolución 627 de 2006 establece los siguientes horarios para la aplicación de los procedimientos de medición y las normas que le aplican de la siguiente manera:
        .row.justify-content-center.mb-4
          .col-md-5
            .bg-yellow.p-4
              h5.mb-0 Diurno: de las 7:01 a las 21:00 horas.
              h5.mb-0 Nocturno: de las 21:01 a las 7:00 horas.
        p En cuanto a los parámetros de medida de ruido, se pueden mencionar los siguientes:
        ul.lista-ul--color.color-secundario.ps-3
          li.mb-0
            i.fas.fa-check
            | Nivel de presión sonora continúo equivalente (LAeq,T).
          li.mb-0
            i.fas.fa-check
            | Filtro de ponderación Frecuencial (A).
          li.mb-0
            i.fas.fa-check
            | Filtro de ponderación temporal lento (Slow).
          li.mb-0
            i.fas.fa-check
            | Ruido Residual, medido como nivel de presión sonora continuo equivalente ponderado A, LAeq,T, Residual.
        p El intervalo unitario de tiempo de medida se establece en una (1) hora, la cual puede ser medida en forma continua o con intervalos de tiempo distribuidos uniformemente hasta obtener, como mínimo, quince (15) minutos de captura de información.   
      .col-md-3(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img18.png' alt='Imagen decorativa')


    p.mb-4(data-aos="fade") Las siguientes, son las condiciones meteorológicas del sitio de medición de ruido:

    .row.mb-5.px-md-3(data-aos="fade-down ")
      .col-md-6.px-md-0
        .hover-tema2.bg-green7.p-4.p-md-5.h-100
          .row.mb-4
            .col-md-2.col-5
              img(src='@/assets/curso/temas/tema2/tema2-4-ico1.svg' alt='Icono decorativo')
          h5 Clima   
          p.mb-0 Es importante que las mediciones se realicen en tiempo seco; es preferible que durante las mediciones no llueva o se presenten lloviznas, truenos o en el caso extremo presencia de granizo.
      .col-md-6.px-md-0
        .hover-tema2.bg-green6.p-4.p-md-5.h-100
          .row.mb-4
            .col-md-2.col-5
              img(src='@/assets/curso/temas/tema2/tema2-4-ico2.svg' alt='Icono decorativo')
          h5 Riesgos de error minimizados o anulados    
          p.mb-0 Adicionalmente los pavimentos y aquellas superficies donde se efectúen las mediciones deben estar completamente secos por ende si esa situación no se presenta las mediciones podrían tener un sesgo de error cuyos resultados NO podrían ser tenidos en cuenta para una mayor representatividad.
      .col-md-6.px-md-0
        .hover-tema2.bg-green4.p-4.p-md-5.h-100
          .row.mb-4
            .col-md-2.col-5
              img(src='@/assets/curso/temas/tema2/tema2-4-ico3.svg' alt='Icono decorativo')
          h5 Viento    
          p.mb-0 Otro factor importante que afecta las mediciones es la velocidad del viento. Si es superior a 3m/s se deberán realizar los respectivos ajustes en las calibraciones con el fin de evitar sesgos en la medición, sin embargo, los equipos de medición como los sonómetros incluyen pantallas protectoras contra el viento la velocidad la medición de la velocidad del viento debe hacerse a la misma altura a la que está ubicado el micrófono y en el momento y en el lugar donde se van a realizar las mediciones del ruido.
      .col-md-6.px-md-0
        .hover-tema2.bg-green2.p-4.p-md-5.h-100
          .row.mb-4
            .col-md-2.col-5
              img(src='@/assets/curso/temas/tema2/tema2-4-ico4.svg' alt='Icono decorativo')
          h5 Velocidad y dirección del viento   
          p.mb-0 Cuando se hacen mediciones de ruido simultáneamente se debe medir la velocidad y dirección del viento que está circulando en el sector de la medición y para ello se emplea un anemómetro.


    p.mb-4(data-aos="fade") Para medir la emisión de ruido generado por fuentes fijas, se deben ubicar los equipos de medición para cada uno de los siguientes casos:

    .row
      .col-md-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/img19.png' alt='Imagen decorativa')
      .col-md-8.mb-4(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-green2")
          .row(titulo="Ruido Ambiental")
            p En las zonas urbanas y de expansión urbana, el ruido ambiental se mide instalando el micrófono a una altura de cuatro (4) m medidos a partir del suelo terrestre y a una distancia equidistante de las fachadas, barreras o muros existentes a ambos lados del punto de medición.
          .row(titulo="Emisión de Ruido")
            p  En el caso de las fuentes fijas de emisión de ruido, puede ocurrir que la fuente se identifique perfectamente o que sea necesario medir la emisión proveniente de una pared o de un área que se considera como fuente de emisión.
          .row(titulo="Localización de la medición ")
            p La medición de la emisión de ruido se realiza a 1.5 m de la fachada de una edificación y a 1.20 m a partir del nivel mínimo donde se encuentre instalada la fuente de emisión de ruido.
          .row(titulo="Estudios de ruido ambiental ")
            p Cuando se realizan los estudios de ruido ambiental, los resultados obtenidos deben ser utilizados para realizar el diagnóstico de los niveles de presión sonora en el ambiente. Los resultados podrán ser llevados a mapas de ruido con el fin de identificar zonas críticas y posibles fuentes de emisión de ruido.
          .row(titulo="Mediciones de emisión de Ruido")
            p Siempre deben hacerse en el espacio público, a 1.50 m del límite de la propiedad en que está instalada la fuente. Con el fin de comparar los resultados con los niveles máximos permisibles de emisión de ruido.

    p.mb-4(data-aos="fade") El sitio de medición se elige efectuando una evaluación previa por medio de un barrido rápido del nivel de ruido emitido, el cual se hace a 1.5 m de la fachada, límites medianeros o división parcelaria. De esta manera se determina el punto de mayor nivel de presión sonora, el cual se toma como sitio de medición, coincidiendo generalmente frente a puertas o ventanas.




</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
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
