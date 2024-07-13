import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICar } from '../../models/Car';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrl: './car-form.component.css'
})
export class CarFormComponent {
  @Input() car: ICar = {} as ICar;

  @Output() saveEmitter = new EventEmitter();

  save() {
    this.saveEmitter.emit();
  }
}
