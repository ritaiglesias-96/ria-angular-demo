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
        link: '/ngmodules',
        text: 'NgModules',
        theme: 'dark',
      },
      {
        link: '/cli',
        text: 'CLI',
        theme: 'light',
      },
      {
        link: '/directivas',
        text: 'Directivas',
        theme: 'dark',
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
  ngModules: {
    titulo: 'NgModules',
    cartas: [
      {
        texto:
          'Un NgModule es una clase marcada por el decorador @NgModule. Identifica los componentes del propio módulo, directivas y pipes, haciendo algunos de ellos públicos (a través de la propiedad export) para que los componentes externos puedan utilizarlos.',
      },
      {
        texto:
          'Los módulos son una muy buena forma de organizar una aplicación y extenderla con funcionalidades de bibliotecas externas. Las bibliotecas de Angular son NgModules, como FormsModule, HttpClientModule, and RouterModule.',
      },
      {
        titulo: 'AppModule',
        texto:
          'Todas las apps de Angular contienen como mínimo un módulo, el módulo root, que debe estar presente para arrancar la aplicación en el lanzamiento inicial.',
      },
      {
        texto:
          'Según tu app crezca, puedes refactorizar el módulo root en módulos de funcionalidades, que representan colecciones de funcionalidades similares. Luego, importa esos módulos al módulo root.',
      },
    ],
    codigo:
      "// imports import { BrowserModule } from '@angular/platform-browser'; import { NgModule } from '@angular/core'; import { AppComponent } from './app.component'; // @NgModule decorator with its metadata @NgModule({ declarations: [AppComponent], imports: [BrowserModule], providers: [],   bootstrap: [AppComponent]}) export class AppModule {}",
  },
  sass: {
    titulo: 'SCSS integrado, utilidad y diferencias con CSS',
    cartas: [
      {
        texto:
          'Angular CLI soporta los preprocesadores CSS built-in tales como: SCSS, Less y Stylus. Respecttivamente los siguientes formatos compatibles: sass, scss, less y styl',
      },
      {
        titulo: 'SCSS',
        texto:
          'Sassy Cascading Style Sheets, o Sassy CSS, es un superset del lenguaje CSS que permite a los diseñadores web mas libertad y control a la hora de diseñar agregando nuevas caracteristicas a CSS. Fue desarrollado por Hampton Catlin',
      },
      {
        texto:
          '... Usando SCSS podemos extender CSS con nuevas posibilidades, como el uso de variables, anidado, y otras. Debido a estas ventajas escribir en SCSS puede hacerse mas facil.',
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
  directivas: {
    titulo: 'Directivas de angular',
    introduccion:
      'Las Directivas extienden la funcionalidad del HTML usando para ello una nueva sintaxis. Con ella podemos usar lógica que será ejecutada en el DOM (Document Object Model). Cada Directiva que usamos tiene un nombre, y determina donde puede ser usada, sea en un elemento, atributo, componente o clase. ',
    secciones: [
      {
        subtitulo: 'Directivas de Atributo ',
        texto:
          'Responsables de manipular la apariencia y el comportamiento de los elementos DOM. también se usan para ocultar o mostrar condicionalmente elementos DOM particulares. Angular proporciona muchas directivas de atributos integradas como NgStyle, NgClass. ',
      },
      {
        subtitulo: 'Directivas Estructurales',
        texto:
          'Encargadas de cambiar la estructura del DOM. Funcionan agregando o eliminando elementos del DOM, a diferencia de las directivas de atributos, que solo cambian la apariencia y el comportamiento del elemento. El nombre de la Directiva estructural siempre comienza con un prefijo de asterisco (*), mientras que la Directiva de atributos no contiene ningún prefijo. Las tres directivas estructurales integradas más populares que proporciona Angular son NgIf, NgFor y NgSwitch.',
      },
      {
        subtitulo: 'Componentes',
        texto:
          'Los componentes son directivas con plantillas. La única diferencia entre los Componentes y los otros dos tipos de directivas es la Plantilla. Las directivas estructurales y de atributos no tienen plantillas.',
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
        cardTitle: 'Facilitacion',
        texto:
          'Angular CLI nos ahorrará escribir mucho código y nos permitirá partir de un esquema de aplicación avanzado y capaz de facilitar los flujos de desarrollo.',
      },
      {
        cardTitle: 'Herramientas',
        texto:
          'Además tiene una serie de herramientas ya configuradas y listas para hacer tareas como, depuración, testing o deploy.',
      },
    ],
  },
};
