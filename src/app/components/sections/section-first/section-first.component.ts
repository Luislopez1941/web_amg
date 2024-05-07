import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { QuillModule } from 'ngx-quill';
import { Service } from '../../../services/service.service';

@Component({
  selector: 'app-section-first',
  standalone: true,
  imports: [CommonModule, QuillModule],
  templateUrl: './section-first.component.html',
  styleUrl: './section-first.component.css'
})
export default class SectionFirstComponent {
  web: any;
  image: any;
  imageTwo: any;
  categories: any;
  sectionOne: any;

  constructor(
    private service: Service,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {   
    this.service.getWeb().subscribe(
      (data: any) => {
        this.web = data;
        this.sectionOne = data.secciones[0];
        this.image = data.secciones[0].imagen;
        this.imageTwo = data.secciones[0].imagen2;
        this.categories = data.secciones[0].categorias;

        if (isPlatformBrowser(this.platformId)) {
          // Este código solo se ejecutará en el navegador
          document.documentElement.style.setProperty('--text-sidebar-color', this.web.color_primario);
        }
      }
    );
  }
}
