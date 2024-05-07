import { Component } from '@angular/core';
import { Service } from '../../../services/service.service';
import { QuillModule } from 'ngx-quill';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-third-section',
  standalone: true,
  imports: [CommonModule, QuillModule, CarouselModule, ButtonModule],
  templateUrl: './third-section.component.html',
  styleUrl: './third-section.component.css'
})
export default class ThirdSectionComponent {
  sectionTwo: any;
  categories: any;
  
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];
 
  constructor(
  private service:  Service
  ) {   
    this.service.getWeb().subscribe(
      (data: any) => {
        this.sectionTwo = data.secciones[2]
        this.categories = data.secciones[2].categorias
      }
    )

    console.log(this.categories)

  }
}
