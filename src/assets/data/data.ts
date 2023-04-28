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
  typescript: {
    titulo: 'Typescript',
    secciones: [
      {
        subtitulo: 'Introduccion a TS',
        texto: 'sdaj;lksjdlkajsl',
      },
      {
        subtitulo: 'Introduccion a TS',
        texto: 'sdaj;lksjdlkajsl',
        herramientas: ['sdksaj', 'jashdkjaks', 'ashdjkhak'],
      },
      {
        subtitulo: 'Introduccion a TS',
        texto: 'sdaj;lksjdlkajsl',
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
