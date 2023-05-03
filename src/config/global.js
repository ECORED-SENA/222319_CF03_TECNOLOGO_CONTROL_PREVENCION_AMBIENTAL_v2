export default {
  global: {
    componenteFormativo:
      'Alistamiento de materiales, equipos e insumos, para la toma de muestras',
    descripcionCurso:
      'Este componente formativo se aborda aspectos generales y claves de la caracterización del estado ambiental de una zona de estudio, en factores como agua, suelo, olores y ruido, como insumo para realizar un diagnóstico ambiental adecuado. Para tal proceso es necesario, fundamentalmente, alistar los materiales de laboratorio, reactivos, equipos y protocolos que permitirán obtener la información y las muestras requeridas, de manera rigurosa y estandarizada.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Alistamiento para tomas de muestras: agua, suelo, olores, ruido',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Características y tipos de contaminación en el agua',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Características y contaminación en el suelo',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Características y contaminación del aire',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Características y tipos de contaminación en el aire por ruido',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Alistamiento de la toma de muestras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Localización del muestreo de agua',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Localización del muestreo de suelo',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Medición de olor',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Localización del muestreo de ruido',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Equipos y materiales para toma de muestras y análisis <em>in situ</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Reconocimiento del material de laboratorio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Equipos y herramientas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Revisión y calibración de los equipos de muestreo',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Calibración de equipos, fichas técnicas y manuales',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Características y contaminación en el suelo',
      referencia:
        'Ecología verde (2018). <em>Contaminación del suelo – Causas, consecuencias y soluciones</em> [Video] Youtube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=dpqDxUK64cs',
    },
    {
      tema: 'Alistamiento de la toma de muestras',
      referencia:
        'EACOL (2015). <em>Monitoreo de ruido –Resolución 627 de 2006 –Colombia</em> [Video] Youtube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=zZd6IZXzz14',
    },
    {
      tema: 'Reconocimiento del material de laboratorio',
      referencia:
        'Universidad nacional de la Patagonia (2015). <em>Química FI UNPSJB Reconocimiento de material de laboratorio. </em>',
      tipo: 'Documento',
      link:
        'http://www.ing.unp.edu.ar/asignaturas/quimica/practicos_de_laboratorio_pdf/lab1.pdf',
    },
    {
      tema: 'Reconocimiento de material del laboratorio',
      referencia:
        'Analytical Lab (2015). <em>Seguridad en laboratorio</em> [Video] Youtube ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=oFKUoVhTzW8',
    },
  ],
  glosario: [
    {
      termino: 'Cuerpos o cursos de agua',
      significado:
        'aquellos cauces o almacenamientos de agua como: arroyos, quebradas, ríos, lagos, lagunas, pantanos, humedales y acuíferos que conforman el sistema hidrográfico de una cuenca geográfica.',
    },
    {
      termino: 'Emisión de ruido',
      significado:
        'presión sonora que, generada en cualquier condición, trasciende al medio ambiente o al espacio público.',
    },
    {
      termino: 'Mapas de ruido',
      significado:
        'representación de los datos sobre una situación acústica existente o pronosticada en función de un indicador de ruido, en la que se indica la superación de un valor límite, el número de personas afectadas en una zona dada y el número de viviendas, centros educativos y hospitales expuestos a determinados valores de ese indicador en dicha zona.',
    },
    {
      termino: 'Monitoreo',
      significado:
        'proceso de muestreo del sistema de suministro de agua para consumo humano, que cubre espacio, tiempo y frecuencia en los puntos concertados.',
    },
    {
      termino: 'Muestra',
      significado:
        'toma puntual de agua en los puntos de muestreo concertados, que refleja la composición física, química y microbiológica representativa del momento.',
    },
    {
      termino: 'Olor ofensivo',
      significado:
        'olor generado por sustancias o actividades industriales, comerciales o de servicio, que produce fastidio, aunque no cause daño a la salud humana.',
    },
    {
      termino: 'Olfatometría',
      significado:
        'técnica sensorial de medición de olores que se usa para determinar el grado de molestia que pueden ocasionar ciertos olores a la población.',
    },
    {
      termino: 'Representatividad',
      significado:
        'lapso de 10 minutos, dentro de los cuales se toma la muestra y contramuestra de agua en el dispositivo instalado en el sitio de monitoreo, concertado entre vigilancia y control.',
    },
    {
      termino: 'Sustancia química peligrosa',
      significado:
        'cualquier químico que represente un peligro bajo uso normal o en una emergencia.',
    },
    {
      termino: 'Suelo',
      significado:
        'sistema natural desarrollado, o desarrollándose, a partir de una mezcla de minerales y restos orgánicos, bajo la influencia del clima y del medio biológico y sirve como medio natural para el crecimiento de las plantas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Departamento de orientación del territorio vivienda y medio ambiente gobierno vasco (1998). <em>Guía Metodológica Investigación de la contaminación del suelo – Toma de muestras. </em>',
      link:
        'https://www.euskadi.eus/contenidos/documentacion/investigacion_cont_suelo/es_doc/adjuntos/01.pdf',
    },
    {
      referencia:
        'Echeverri, C., & González, A. (2011). Protocolo para medir la emisión de ruido generado por fuentes fijas. <em>Revista Ingenierías Universidad de Medellín</em>, 10(18), p. 51-60. ',
      link:
        'https://revistas.udem.edu.co/index.php/ingenierias/article/view/336',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC, 1997). <em>Gestión ambiental. Calidad de suelo. Muestreo. Guía para el diseño de programas de muestreo</em> (4113-1). ',
      link: 'https://es.scribd.com/document/388559183/NTC4113-1',
    },
    {
      referencia:
        'ICONTEC (2004). <em>Calidad del Agua. Muestreo. Parte 3: Directrices para la Preservación y Manejo de Muestras</em> (5667-3). ',
      link:
        'https://tienda.icontec.org/gp-ntc-iso-gestion-ambiental-calidad-del-agua-muestreo-muestro-de-aguas-residuales-ntc-iso5667-10-2022.html',
    },
    {
      referencia:
        'Sánchez, J., Peña, A., Martínez, J. & Valor, I. (2008). <em>Contaminación Ambiental por Olores. Fundamentos Básicos.</em> ',
      link:
        'https://conocimientoabierto.carm.es/jspui/bitstream/20.500.11914/2864/1/AnalisisyEstudiosContaminacion-ContaminacionAmbientalporOlores%20%28I%29%20-%2035499.pdf',
    },
    {
      referencia:
        'Sociedad Americana de Química (2013). <em>Seguridad en laboratorios químicos académicos.</em> ',
      link: 'https://fcial.uta.edu.ec/v3.2/labsacad/ManSegLabsQuimAcad.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable ecosistema de producción de RED Santander	',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Diana Carolina Triana Guarnizo',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Juan Carlos Cárdenas Sánchez',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Gloria Esperanza Ortiz Russi',
          cargo: 'Diseñadora Instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Diana Carolina Triana Guarnizo',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Metodóloga',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador web',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: ' ',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
