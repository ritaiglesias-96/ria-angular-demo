import { Component } from '@angular/core';
import { presentation } from '../assets/data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  presentacion = presentation;
}
