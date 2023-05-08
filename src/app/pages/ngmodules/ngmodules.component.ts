import { Component } from '@angular/core';
import { presentation } from 'src/assets/data/data';

@Component({
  selector: 'app-ngmodules',
  templateUrl: './ngmodules.component.html',
  styleUrls: ['./ngmodules.component.scss'],
})
export class NgmodulesComponent {
  ngmodulesData = presentation.ngModules;
}
