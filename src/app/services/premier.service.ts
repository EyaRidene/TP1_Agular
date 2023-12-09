import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // le service est visible au niveau de la route et c'est une méthode pour gagner le lazy loading
})
export class PremierService {
  // utilisation d'un aspect hiérarchique de l'injection
  // service = classe contenant code metier qui va servir à l'ensemble des autres éléments de votre écosystème angular
  // design pattern : dependency injection pour le découplage entre les classes

  data = ['data1', 'data1', 'data1', 'data1'];
  constructor() {}
  logger(data: any) {
    console.log(data);
    console.log(this.data);
  }
  addData(data: any) {
    this.data.push(data);
  }
}
