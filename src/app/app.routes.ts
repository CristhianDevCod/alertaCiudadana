import { Routes } from '@angular/router';
import { MenuComponent } from './layout/menu/menu.component';
import { LoginComponent } from './layout/login/login.component';
import { PublicacionComponent } from './layout/publicacion/publicacion.component';

export const routes: Routes = [
    {
        path: "",
        component: MenuComponent
    },
    {
        path: "inicio",
        component: MenuComponent
    },
    {
        path: "publicar",
        component: PublicacionComponent
    },
    {
        path: "login",
        component: LoginComponent
    }
];
