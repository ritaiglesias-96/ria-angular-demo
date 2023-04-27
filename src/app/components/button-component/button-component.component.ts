import { Component, Input } from '@angular/core';
import { Button } from 'src/assets/interfaces';

@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.scss']
})
export class ButtonComponentComponent {
  @Input() props: Button = { link:'/', text: 'Home', theme: 'dark' };

}
