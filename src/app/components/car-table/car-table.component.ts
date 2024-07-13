import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICar } from '../../models/Car';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrl: './car-table.component.css'
})
export class CarTableComponent {
  @Input() cars: ICar[] = {} as ICar[];
  @Input() carForm: ICar = {} as ICar;

  @Output() updateEmitter = new EventEmitter();

  update(car: ICar) {
    this.updateEmitter.emit(car);
  }
}
