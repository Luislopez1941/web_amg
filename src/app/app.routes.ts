// app.routes.ts
import { Routes } from '@angular/router';
import { RootPageComponent } from './pages/root-page/root-page.component';

export const routes: Routes = [
    {
        path: 'root',
        component: RootPageComponent,
        canActivate: [], 
        children: [
            {
                path: 'section0',
                title: 'Secion 0',
                loadComponent: () => import('./components/sections/section-first/section-first.component'),
            },
            {
                path: 'section1',
                title: 'Secion 1',
                loadComponent: () => import('./components/sections/section-second/section-second.component'),
            },
            {
                path: 'section2',
                title: 'Secion 2',
                loadComponent: () => import('./components/sections/third-section/third-section.component'),
            },
            {
                path: 'section3',
                title: 'Secion 3',
                loadComponent: () => import('./components/sections/four-section/four-section.component'),
            },
        ]
      },
      
      {
        path: '', // Default route
        redirectTo: '/root',
        pathMatch: 'full'
      }
];
