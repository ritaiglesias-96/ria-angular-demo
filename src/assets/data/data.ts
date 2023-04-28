import { Button } from '../interfaces';

export const presentation = {
  title: 'Angular Demo',
  nav: {
    title: 'Angular Demo',
    buttons: [
      {
        link: '/ts',
        text: 'Typescript',
        theme: 'outline',
      },
      {
        link: '/nodejs',
        text: 'NodeJS',
        theme: 'dark',
      },
      {
        link: '/cli',
        text: 'CLI',
        theme: 'light',
      },
      {
        link: '/scss',
        text: 'SCSS',
        theme: 'outline',
      },
    ] as Button[],
  },
  home: {
    titulo: '¿Que es Angular?',
    cartas: [
      {
        texto: [
          'Angular es una plataforma y un framework para crear aplicaciones de una sola página en el lado del cliente usando HTML y TypeScript. Angular está escrito en TypeScript,',
        ],
      },
      {
        titulo: '¿Qué es una SPA - Single Page Aplication?',
        texto: [
          'Una SPA es una aplicación Web donde todas las pantallas con las que vaya a interactuar el usuario las muestra en una misma página.',
        ],
      },
      {
        texto: [
          'Implementa la funcionalidad básica y opcional como un conjunto de bibliotecas TypeScript que importas en tus aplicaciones.',
        ],
      },
      {
        titulo: 'Arquitectura',
        texto: [
          'NgModules: proporcionan un contexto de compilación para los componentes, recopilan código relacionado en conjuntos funcionales.',
        ],
      },
      {
        titulo: 'Componentes',
        texto: ['Definen vistas', 'Usan servicios'],
      },
      {
        titulo: 'Módulos, componentes y servicios',
        texto: [
          'Usan decoradores que indican su tipo y proporcionan metadatos',
        ],
      },
      {
        titulo: 'Servicio router',
        texto: [
          'Angular proporciona el servicio Router para ayudarte a definir rutas de navegación entre vistas. El enrutador proporciona capacidades de navegación sofisticadas en el navegador.',
        ],
      },
    ],
  },
  typescript: {
    titulo: 'Typescript',
    secciones: [
      {
        subtitulo: 'Introducción a Typescript',
        texto:
          'TypeScript es un lenguaje de programación de código abierto desarrollado por Microsoft que se basa en JavaScript.Es un lenguaje de programación orientado a objetos que proporciona funciones adicionales para facilitar la escritura y el mantenimiento de código a gran escala. Typescript es un superset de JavaScript. Decimos que una tecnología es un superset de un lenguaje de programación, cuando puede ejecutar programas de la tecnología',
      },
      {
        subtitulo: 'Herramientas de Typescript',
        texto:
          'Algunas de las herramientas que TypeScript ofrece a los desarrolladores son: ',
        herramientas: [
          'Sistema de tipos estático: TypeScript tiene un sistema de tipos estático que permite a los desarrolladores definir tipos de datos para sus variables y parámetros de función. Esto ayuda a detectar errores en tiempo de compilación y mejora la calidad del código.',
          'Integración de editores: TypeScript se integra bien con muchos editores de texto populares, como Visual Studio Code. Estas herramientas ofrecen sugerencias de código en tiempo real, completado automático, refactoring y otras características que pueden ayudar a los desarrolladores a escribir código de manera más rápida y eficiente.',
        ],
      },
      {
        subtitulo: 'Comportamiento en tiempo de ejecución',
        texto:
          'TypeScript también es un lenguaje de programación que preserva el comportamiento en tiempo de ejecución de JavaScript. Como principio, TypeScript nunca cambia el comportamiento en tiempo de ejecución del código JavaScript. Esto significa que si se mueve código de JavaScript a TypeScript, está garantizado que se ejecutará de la misma manera. Mantener el mismo comportamiento en tiempo de ejecución que JavaScript es una premisa fundamental de TypeScript porque significa que puede hacer la transición entre los dos lenguajes fácilmente.',
      },
    ],
  },
  cli: {
    titulo: 'CLI',
    secciones: [
      {
        cardTitle: 'Linea de comandos',
        texto:
          'Permite crear proyectos en los que el CLI podrá añadir archivos y entidades Angular. Será posible añadir módulos, componentes, servicios o directivas en una línea de comandos.',
      },
      {
        cardTitle: 'No se que poner',
        texto:
          'Nos ahorrará escribir mucho código y nos permitirá partir de un esquema de aplicación avanzado y capaz de facilitar los flujos de desarrollo.',
      },
      {
        cardTitle: 'Herramientas',
        texto:
          'Además tiene una serie de herramientas ya configuradas y listas para hacer tareas como, depuración, testing o deploy.',
      },
    ],
  },
};
