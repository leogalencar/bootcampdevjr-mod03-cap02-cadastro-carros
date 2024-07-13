import { Component } from '@angular/core';
import { ICar } from '../../models/Car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  carForm: ICar = {} as ICar;

  cars: ICar[] = [
    {
      id: 1,
      name: "Palio",
      manufacturer: "Fiat",
      price: 30000.0,
      year: 2000
    },
    {
      id: 2,
      name: "GTR R-34",
      manufacturer: "Nissan",
      price: 2500000.0,
      year: 2002
    },
    {
      id: 3,
      name: "Charger",
      manufacturer: "Dodge",
      price: 400000.0,
      year: 1970
    }
  ]

  currentId: number = this.cars.length;

  saveCar() {
    this.currentId++;

    this.carForm.id = this.currentId;
    this.cars.push(this.carForm);
    this.carForm = {} as ICar;
  }
}
