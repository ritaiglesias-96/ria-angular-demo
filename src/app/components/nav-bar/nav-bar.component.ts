import { Component, Input } from '@angular/core';
import { Button } from 'src/assets/interfaces';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  @Input() titulo: string = '';
  @Input() botones: Button[] = [];

  isOpen: Boolean = false;

  handleMenu() {
    this.isOpen = !this.isOpen;
  }
}