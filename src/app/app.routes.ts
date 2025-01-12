import { Routes } from '@angular/router';
import { retry } from 'rxjs';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [{
    path:'',
    pathMatch:'full',
    loadComponent:()=> {
        return import('./home/home.component').then((val)=> val.HomeComponent)
    },

},

{
    path:'todos',
    loadComponent:()=> {
        return import('./todos/todos.component').then((val)=> val.TodosComponent)
    },
}
];
