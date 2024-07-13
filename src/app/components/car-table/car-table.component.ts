import { Component, Input } from '@angular/core';
import { ICar } from '../../models/Car';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrl: './car-table.component.css'
})
export class CarTableComponent {
  @Input() cars: ICar[] = {} as ICar[];
}
