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
};
