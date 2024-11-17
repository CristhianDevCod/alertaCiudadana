import { Routes } from '@angular/router';
import { MenuComponent } from './layout/menu/menu.component';
import { LoginComponent } from './layout/login/login.component';
import { PublicacionComponent } from './layout/publicacion/publicacion.component';
import { UnknownComponent } from './layout/unknown/unknown.component';
import { DetallesComponent } from './layout/menu/noticias/noticia/detalles/detalles.component';
import { BusquedaComponent } from './layout/busqueda/busqueda.component';
import { RegistroComponent } from './layout/login/registro/registro.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard'; // Verificar que se importe correctamente
import { ProfileComponent } from './layout/profile/profile.component';
import { authenticatedGuard } from './guards/authenticated.guard';

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
        component: PublicacionComponent,
        ...canActivate(()=> redirectUnauthorizedTo(['/login']))
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
        path: "registro",
        component: RegistroComponent,
        canActivate: [authenticatedGuard]
    },
    {
        path: "profile",
        component: ProfileComponent
    },
    {
        path: "**",
        component: UnknownComponent
    }
];
