import { Component } from '@angular/core';
import { presentation } from 'src/assets/data/data';

@Component({
  selector: 'app-css-preprocessors',
  templateUrl: './css-preprocessors.component.html',
  styleUrls: ['./css-preprocessors.component.scss'],
})
export class CssPreprocessorsComponent {
  cssPreprocessors = presentation.sass;
}
