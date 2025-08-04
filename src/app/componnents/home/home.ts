import { Component } from '@angular/core';
import { Carousel } from './carousel/carousel';
import { Features } from './features/features';
import { ContentShowCase } from './content-show-case/content-show-case';
import { Testimonials } from './testimonials/testimonials';

@Component({
  selector: 'app-home',
  imports: [Carousel,Features,ContentShowCase,Testimonials],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
