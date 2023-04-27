import { Component, Input } from '@angular/core';
import {TypeScript} from 'src/assets/interfaces'

@Component({
  selector: 'app-typescript-component',
  templateUrl: './typescript-component.component.html',
  styleUrls: ['./typescript-component.component.scss']
})
export class TypescriptComponentComponent {

  @Input() titulo: string = 'Typescript';
  @Input() subtitulos: string[]=[];
  @Input() herramientas: string[]=[];
  @Input() textos: string[]=[];
}
