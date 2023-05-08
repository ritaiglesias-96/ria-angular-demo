import { Component } from '@angular/core';
import { presentation } from 'src/assets/data/data';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.scss']
})
export class DirectivasComponent {
  directivas = presentation.directivas;
}
