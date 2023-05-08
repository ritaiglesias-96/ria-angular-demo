import { Component, Input } from '@angular/core';
import { presentation } from 'src/assets/data/data';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss']
})
export class TypescriptComponent {
  typescript= presentation.typescript;
}
