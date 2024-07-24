import { ICar } from './../../models/Car';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css',
})
export class CarsComponent {
  carForm: ICar = {} as ICar;

  cars: ICar[] = [
    {
      id: 1,
      name: 'Palio',
      manufacturer: 'Fiat',
      price: 30000.0,
      year: 2000,
    },
    {
      id: 2,
      name: 'GTR R-34',
      manufacturer: 'Nissan',
      price: 2500000.0,
      year: 2002,
    },
    {
      id: 3,
      name: 'Charger',
      manufacturer: 'Dodge',
      price: 400000.0,
      year: 1970,
    },
  ];

  currentId: number = this.cars.length;
  isUpdate: boolean = false;

  saveCar() {
    if (!this.isUpdate) {
      this.currentId++;

      this.carForm.id = this.currentId;
      this.cars.push(this.carForm);
    }
    else {
      this.isUpdate = false;
    }

    this.carForm = {} as ICar;
  }

  updateCar(car: ICar) {
    this.isUpdate = true;
    this.carForm = car;
  }

  removeCar(car: ICar) {
    this.cars = this.cars.filter(c => c !== car);

    if (this.isUpdate && this.carForm.id === car.id) {
      this.carForm = {} as ICar;
      this.isUpdate = false;
    }
  }
}
