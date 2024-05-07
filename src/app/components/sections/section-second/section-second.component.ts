import { Component } from '@angular/core';
import { Service } from '../../../services/service.service';
import { QuillModule } from 'ngx-quill';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-section-second',
  standalone: true,
  imports: [CommonModule, QuillModule, CarouselModule, ButtonModule],
  templateUrl: './section-second.component.html',
  styleUrl: './section-second.component.css'
})
export default class SectionSecondComponent {
  sectionTwo: any;
  categories: any;
  products: any = [
    {
      id: 1,
      name: 'Termo'
    },
    {
      id: 2,
      name: 'Termo'
    },
    {
      id: 3,
      name: 'Termo'
    },
    {
      id: 4,
      name: 'Termo'
    },
    {
      id: 45,
      name: 'Termo'
    }
  ]; // Asegúrate de tener una propiedad 'products' definida en tu componente.
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
        this.sectionTwo = data.secciones[1]
        this.categories = data.secciones[1].categorias
      }
    )

    console.log(this.categories)

  }
}
