import { Button } from '../interfaces';
export const presentation = {
  title: 'Angular Demo',
  nav: {
    title: 'Angular Demo',
    buttons: [
      {
        link: '/typescript',
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
  typescript:{
    titulo:'Typescript',
    secciones: [{
      subtitulo: 'Introducción a Typescript',
      texto: 'TypeScript es un lenguaje de programación de código abierto desarrollado por Microsoft que se basa en JavaScript.Es un lenguaje de programación orientado a objetos que proporciona funciones adicionales para facilitar la escritura y el mantenimiento de código a gran escala. Typescript es un superset de JavaScript. Decimos que una tecnología es un superset de un lenguaje de programación, cuando puede ejecutar programas de la tecnología',
    },
    {
      subtitulo: 'Herramientas de Typescript',
      texto: 'Algunas de las herramientas que TypeScript ofrece a los desarrolladores son: ',
      herramientas:["Sistema de tipos estático: TypeScript tiene un sistema de tipos estático que permite a los desarrolladores definir tipos de datos para sus variables y parámetros de función. Esto ayuda a detectar errores en tiempo de compilación y mejora la calidad del código." , "Integración de editores: TypeScript se integra bien con muchos editores de texto populares, como Visual Studio Code. Estas herramientas ofrecen sugerencias de código en tiempo real, completado automático, refactoring y otras características que pueden ayudar a los desarrolladores a escribir código de manera más rápida y eficiente." ,
      ]
    },
    {
      subtitulo: 'Comportamiento en tiempo de ejecución',
      texto: 'TypeScript también es un lenguaje de programación que preserva el comportamiento en tiempo de ejecución de JavaScript. Como principio, TypeScript nunca cambia el comportamiento en tiempo de ejecución del código JavaScript. Esto significa que si se mueve código de JavaScript a TypeScript, está garantizado que se ejecutará de la misma manera. Mantener el mismo comportamiento en tiempo de ejecución que JavaScript es una premisa fundamental de TypeScript porque significa que puede hacer la transición entre los dos lenguajes fácilmente.',
    },
    ]
  } 
}