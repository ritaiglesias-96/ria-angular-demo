import { presentation } from './../../../assets/data/data';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cli',
  templateUrl: './cli.component.html',
  styleUrls: ['./cli.component.scss'],
})
export class CliComponent {
  data = presentation.cli;
}
