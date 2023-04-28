import { Component } from '@angular/core';
import { presentation } from 'src/assets/data/data';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  homePageData = presentation.home;
}
