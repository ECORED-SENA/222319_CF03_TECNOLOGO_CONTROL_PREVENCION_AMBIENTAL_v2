<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.pb-md-0.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Calibración de equipos, fichas técnicas y manuales

    .row.mb-4
      .col-lg-5.mb-4(data-aos="fade-right")
        p Se le llama calibración al conjunto de operaciones que establecen, bajo condiciones especificadas, la relación entre los valores de magnitudes indicados por un instrumento o sistema de medición, o valores representados por una medida materializada o un material de referencia y los correspondientes valores aportados por patrones.
        .bg-blue.p-4
          p.mb-0 Por lo tanto, la calibración solamente se puede realizar a instrumentos de medida de cualquier magnitud (tensión, corriente, resistencia, tiempo, frecuencia, potencia óptica etc.) y que exprese la medida en las unidades básicas del Sistema Internacional (SI) o materiales de referencia.
      .col-lg-7(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema5/img.png' alt='Imagen decorativa')

    
    p.mb-4(data-aos="fade") Enseguida, se muestran los aspectos más importantes por tener cuenta, en relación con la calibración de equipos, las fichas técnicas y los manuales:


    .row.mb-4
      .col-md-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema5/img2.png' alt='Imagen decorativa')
      .col-md-8.mb-4(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-green2")
          .row(titulo="Procesos experimentales y técnicos")
            .col-md-11
              p En los procesos experimentales y técnicos, el fin es obtener resultados que puedan arrojar el estado de una muestra, pero estos resultados deben tener total validez científica para que los estudios realizados sean aprobados tanto nacional como internacionalmente.
          .row(titulo="Importancia de la calibración")
            .col-md-11
              p Se requiere calibración del equipo para establecer la trazabilidad metrológica de los resultados informados. Es por esto por lo que usualmente los laboratorios certificados deben mantener un programa de calibración en el cual especifique los procedimientos para mantener cada equipo o instrumento que requiera de este proceso en óptimas condiciones y debe mantenerse la documentación.
          .row(titulo="Conocimiento y aplicación de procedimientos y protocolos")
            .col-md-11
              p Como este proceso puede variar entre las marcas y el tipo de instrumento, siempre es aconsejable que dependiendo del laboratorio donde se van a realizar los ensayos o del cual provengan los equipos de campo, se estudie los procedimientos, protocolos o instructivos de calibración con anterioridad y siempre realizar esta actividad según lo establecido en la documentación del equipo.
          .row(titulo="Calibración como acción especializada")
            .col-md-11
              p  De igual forma, al ser un paso tan importante en materia de prácticas y ensayos de laboratorio, existen entidades que se dedican exclusivamente al desarrollo de actividades de calibración de equipos, que han sido certificadas para la misma y que ofrecen además un documento de soporte denominado certificados de calibración o informes de calibración.
          .row(titulo="Contenido de los certificados")
            .col-md-11
              p  El contenido mínimo necesario que debe contener un certificado de calibración se encuentra establecido en la norma internacional ISO 17025 en su numeral 7.8.2.1.
          .row(titulo="Qué pide la norma")
            .col-md-11
              p Identificación del informe de ensayo, el nombre y dirección del laboratorio, el lugar en que se realizan las actividades laboratorio, nombre del cliente o quien solicita el certificado, método utilizado, descripción del instrumento bajo calibración, identificación del dueño del instrumento, fecha de calibración y próximas calibraciones, referencia al plan y método de muestreo usados para laboratorio, condiciones relevantes observadas.


    h3.subt.text-white.mb-4(data-aos="fade") Hojas de seguridad de productos químicos

    .row.mb-4
      p El manejo de diferentes sustancias químicas para el procesamiento de muestras de agua tanto en campo como en laboratorio, implica un riesgo para el personal que las manipula, este riesgo debe ser controlado, desde el almacenamiento, compra y transporte de la sustancia hasta el momento en el cual se materialice un accidente relacionado a ese producto.
      p Es por esto que debe existir un instrumento que le permita a las personas involucradas (empleados o comunidad) o al personal de asistencia médica (o de servicios de respuesta ante emergencias), saber los compuestos, el tipo de manipulación, cómo almacenarla y cómo reaccionar ante un accidente con la misma.
      p.mb-4 Para profundizar sus conocimientos y habilidades para el manejo seguro de productos químicos, preste atención a lo siguiente:
      .col-md-9.mb-4(data-aos="fade-right")
        TabsA.tema5.color-acento-botones
          .tarjeta.bg-green3.p-4(titulo="Instrumento: Hojas de seguridad")
            h5 Instrumento: Hojas de seguridad
            p.mb-0 Ese instrumento de gestión se denomina #[b Hojas de seguridad de producto], en Colombia este es un elemento fundamental para toda la cadena de manipulación de las sustancias químicas y se convirtió en un eje estratégico para los sistemas de seguridad y salud en el trabajo en cualquier entidad (Pública y privada).
          .tarjeta.bg-green3.p-4(titulo="Estructura del instrumento")
            h5 Estructura del instrumento
            p.mb-0 La estructura de las #[b hojas de seguridad] y su uso obligatorio en las organizaciones fue impuesta por diferentes bases normativas (Decreto 1496 de 2018, Norma Técnica Colombiana 4435, Norma Técnica Colombiana 4532).
          .tarjeta.bg-green3.p-4(titulo="Secciones del instrumento")
            h5 Secciones del instrumento
            p.mb-0 Estas hojas de seguridad son un instrumento que cuenta con 16 ítems o secciones, también conocidas como fichas de seguridad (FDS). El Ministerio de Trabajo, en la Resolución 1486 (2008), en el artículo 8º y 9º, asigna a los fabricantes e importadores la responsabilidad de elaborar, revisar y actualizar las fichas de seguridad (FDS).
          .tarjeta.bg-green3.p-4(titulo="Responsabilidad común")
            h5 Responsabilidad común
            p.mb-0 Sin embargo, es responsabilidad de todos los que van a manipular estas sustancias, conocer la FDS y apropiar sus 16 ítems básicos.
      .col-md-3.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema5/img3.png' alt='Imagen decorativa')

    
    p.mb-4(data-aos="fade") Los 16 ítems, propuestos por la Organización de las Naciones Unidas para el desarrollo industrial, son:

    .row.justify-content-center.mb-4
      .col-md-5.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema5/img4.png' alt='Imagen decorativa')
      .col-md-7.mb-4(data-aos="fade-left")
        ul.lista-ul--color.color-secundario.ps-3.mb-0.fa-ul 
          li.mb-0
            i.fas.fa-check
            | Identificación del producto.
          li.mb-0
            i.fas.fa-check
            | Identificación de peligros.
          li.mb-0
            i.fas.fa-check
            | Composición. (información sobre los componentes)
          li.mb-0
            i.fas.fa-check
            | Primeros auxilios.
          li.mb-0
            i.fas.fa-check
            | Medidas de lucha contra incendios.
          li.mb-0
            i.fas.fa-check
            | Medidas que deben tomarse en caso de vertido accidental.
          li.mb-0
            i.fas.fa-check
            | Manipulación y almacenamiento.
          li.mb-0
            i.fas.fa-check
            | Controles de exposición.
          li.mb-0
            i.fas.fa-check
            | Propiedades físicas y químicas.
          li.mb-0
            i.fas.fa-check
            | Estabilidad y reactividad.
          li.mb-0
            i.fas.fa-check
            | Información toxicológica.
          li.mb-0
            i.fas.fa-check
            | Información ecotoxicológica.
          li.mb-0
            i.fas.fa-check
            | Información relativa a la eliminación del producto.
          li.mb-0
            i.fas.fa-check
            | Información relativa a transporte.
          li.mb-0
            i.fas.fa-check
            | Información sobre la reglamentación.
          li.mb-0
            i.fas.fa-check
            | Otras informaciones.


    h3.subt.text-white.mb-4(data-aos="fade") Manual de Operación de Equipos
    
    .row.mb-4
      .col-md-8.mb-4(data-aos="fade-right")
        p Para todas las empresas de hoy en día la capacitación de nuevo personal para la operación de un determinado equipo implica un gran reto y responsabilidad. Para ello es importante mantener actualizados los procedimientos. En este punto, concretamente, se está haciendo referencia a los procedimientos de los equipos y lo que tiene que tomar en cuenta para realizar un Manual de Operación.
        p En cualquier equipo que se compra siempre viene un manual que dice sus funciones específicas. Cuando este equipo llega a una compañía conlleva un desafío para el personal que la ópera por primera vez, ya que no ha tenido contacto con la máquina. Tiene que familiarizarse y sobre el camino ir monitoreando su funcionamiento.
        p La mejor forma de realizar un Manual de Operaciones es hacerlo de la forma más sencilla, visualmente llamativo y amigable; así despertar el interés y nutrir el conocimiento del personal.
        .bg-green3.p-4
          p.mb-0 El objetivo de un manual de operaciones es obtener resultados consistentes en el desarrollo de nuevo personal, estandarizando el conocimiento de la forma más rápida y sencilla posibles.
      .col-md-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema5/img5.png' alt='Imagen decorativa')

    .row.mb-4
      .col-md-4.mb-4(data-aos="fade-right")  
        img(src='@/assets/curso/temas/tema5/img6.png' alt='Imagen decorativa')
      .col-md-8.mb-4(data-aos="fade-left")
        p Entre otros, los beneficios de un manual de operaciones son:
        ul.lista-ul--color.color-secundario.ps-3.mb-4.fa-ul 
          li.mb-0
            i.fas.fa-check
            | Brinda el conocimiento de operación.
          li.mb-0
            i.fas.fa-check
            | La información está al alcance para el desarrollo de nuevo personal.
          li.mb-0
            i.fas.fa-check
            | Desarrolla al personal de una forma más rápida y minimiza los errores.
          li.mb-0
            i.fas.fa-check
            | Es la base para mantener la forma de trabajar o en su caso mejorarla.
        p Un manual debe tener una estructura formal, para ello es muy importante que cuente elementos como:
        ul.lista-ul--color.color-secundario.ps-3.mb-0.fa-ul 
          li.mb-0
            i.fas.fa-check
            | Portada.
          li.mb-0
            i.fas.fa-check
            | Índice.
          li.mb-0
            i.fas.fa-check
            | Desarrollo de la información.
          li.mb-0
            i.fas.fa-check
            | Apoyo visual.

    p.mb-4(data-aos="fade") El editor debe tener en cuenta que la persona que leerá este manual es alguien quien no ha tenido contacto con el equipo por lo que es de vital importancia:

    .row.fondo-tema5.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-11.d-none.d-lg-block
            SlyderF.text-center.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-down")
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
                h5 Identificar los procedimientos de operación 
                p Con base en ellos se deberán separar las actividades que se realizan y se les dará una secuencia.
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
                h5 Redactar de la forma más sencilla 
                p No utilizar palabras demasiado técnicas, ya que la mayoría de los operadores no son personas con conocimientos de expertos.
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
                h5 Utilizar imágenes 
                p La imagen deberá identificar el área de trabajo y cada una de las actividades. Esto ayuda al operador a digerir la información de una manera más sencilla y recordarla posteriormente
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
                h5 Dar enfoque
                p Es muy importante integrar cualquier información que directamente está ligada a la operación, por ejemplo, equipo de seguridad necesario, qué hacer en casos de emergencia etcétera.
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
                h5 Publicar el manual 
                p Este documento deberá estar aprobado por él o los operadores quienes fueron la fuente de información y por quienes autorizan su publicación.
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
                h5 Dotar de especificidad el manual 
                p El manual puede ser tan detallado como se quiera. Hay que tener en cuenta que, si es lo más específico posible, no se dará pauta a la duda. No hay que olvidar que es un documento vivo y puede sufrir modificaciones, por lo que la información debe actualizarse y documentarse para ser compartida con todo el personal involucrado.
          
          .row.d-lg-none.d-flex.mb-5
            .col-md-6.mb-4  
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4.h-100
                h5 Identificar los procedimientos de operación 
                p Con base en ellos se deberán separar las actividades que se realizan y se les dará una secuencia.
            .col-md-6.mb-4  
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4.h-100
                h5 Redactar de la forma más sencilla 
                p No utilizar palabras demasiado técnicas, ya que la mayoría de los operadores no son personas con conocimientos de expertos.
            .col-md-6.mb-4  
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4.h-100
                h5 Utilizar imágenes 
                p La imagen deberá identificar el área de trabajo y cada una de las actividades. Esto ayuda al operador a digerir la información de una manera más sencilla y recordarla posteriormente
            .col-md-6.mb-4  
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4.h-100
                h5 Dar enfoque
                p Es muy importante integrar cualquier información que directamente está ligada a la operación, por ejemplo, equipo de seguridad necesario, qué hacer en casos de emergencia etcétera.
            .col-md-6.mb-4  
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4.h-100
                h5 Publicar el manual 
                p Este documento deberá estar aprobado por él o los operadores quienes fueron la fuente de información y por quienes autorizan su publicación.
            .col-md-6.mb-4  
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4.h-100
                h5 Dotar de especificidad el manual 
                p El manual puede ser tan detallado como se quiera. Hay que tener en cuenta que, si es lo más específico posible, no se dará pauta a la duda. No hay que olvidar que es un documento vivo y puede sufrir modificaciones, por lo que la información debe actualizarse y documentarse para ser compartida con todo el personal involucrado.



</template>

<script>
export default {
  name: 'Tema5',
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
