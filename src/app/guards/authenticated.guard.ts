import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';

export const authenticatedGuard: CanActivateFn = () => {
  const auth = inject(Auth);
  const router = inject(Router);

  return new Promise<boolean>((resolve) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // Si el usuario está autenticado, redirigir a 'profile'
        router.navigate(['/profile']);
        resolve(false); // Bloquear la navegación a 'registro'
      } else {
        // Permitir la navegación si no está autenticado
        resolve(true);
      }
    });
  });
};
