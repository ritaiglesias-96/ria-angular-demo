import { Component, Input } from '@angular/core';
import { Button } from 'src/assets/interfaces';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() props: Button = { link: '/', text: 'Home', theme: 'dark' };
}
