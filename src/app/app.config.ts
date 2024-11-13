import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"alerta-ciudadana-6da98","appId":"1:780804947354:web:ec7abc2c440c1acb288e23","storageBucket":"alerta-ciudadana-6da98.appspot.com","apiKey":"AIzaSyBn4bKmWd6uZ1LEjBD4WaiLH0HGYSJe5vI","authDomain":"alerta-ciudadana-6da98.firebaseapp.com","messagingSenderId":"780804947354"})), provideFirestore(() => getFirestore()), provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({"projectId":"alerta-ciudadana-6da98","appId":"1:780804947354:web:ec7abc2c440c1acb288e23","storageBucket":"alerta-ciudadana-6da98.appspot.com","apiKey":"AIzaSyBn4bKmWd6uZ1LEjBD4WaiLH0HGYSJe5vI","authDomain":"alerta-ciudadana-6da98.firebaseapp.com","messagingSenderId":"780804947354"})), provideFirestore(() => getFirestore()), provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({"projectId":"alerta-ciudadana-6da98","appId":"1:780804947354:web:ec7abc2c440c1acb288e23","storageBucket":"alerta-ciudadana-6da98.appspot.com","apiKey":"AIzaSyBn4bKmWd6uZ1LEjBD4WaiLH0HGYSJe5vI","authDomain":"alerta-ciudadana-6da98.firebaseapp.com","messagingSenderId":"780804947354"})), provideAuth(() => getAuth())]
};
