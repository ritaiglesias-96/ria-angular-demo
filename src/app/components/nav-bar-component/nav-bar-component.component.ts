import { Component, Input } from '@angular/core';
import { Button } from 'src/assets/interfaces';

@Component({
  selector: 'app-nav-bar-component',
  templateUrl: './nav-bar-component.component.html',
  styleUrls: ['./nav-bar-component.component.scss']
})
export class NavBarComponentComponent {
  @Input() titulo: string = "";
  @Input() botones: Button[] = [];

}
