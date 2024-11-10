import { Routes } from '@angular/router';
import { MenuComponent } from './layout/menu/menu.component';
import { LoginComponent } from './layout/login/login.component';
import { PublicacionComponent } from './layout/publicacion/publicacion.component';
import { UnknownComponent } from './layout/unknown/unknown.component';
import { DetallesComponent } from './layout/menu/noticias/noticia/detalles/detalles.component';
import { BusquedaComponent } from './layout/busqueda/busqueda.component';

export const routes: Routes = [
    {
        path: "",
        component: MenuComponent
    },
    {
        path: "detalles/:id",
        component: DetallesComponent
    },
    {
        path: "publicar",
        component: PublicacionComponent
    },
    {
        path: "busqueda/:query",
        component: BusquedaComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "**",
        component: UnknownComponent
    }
];
