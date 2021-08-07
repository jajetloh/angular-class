import { Component, OnInit } from '@angular/core'

// Values are the number of metres/unit
const lengthUnits = {
  um: 1e-6,
  mm: 1e-3,
  cm: 1e-2,
  m: 1,
  km: 1e3,
  in: 0.0254,
  ft: 0.3048,
  yd: 0.9144,
  mi: 1609.34,
}

@Component({
  selector: 'app-exercise-two',
  templateUrl: './exercise-two.component.html',
  styleUrls: ['./exercise-two.component.css']
})
export class ExerciseTwoComponent implements OnInit {

  valueOne: number = 1
  valueTwo: number = 1000

  selectedUnit1: string = 'm'
  selectedUnit2: string = 'mm'

  lengthUnitsKeys: string[] = Object.keys(lengthUnits)

  constructor() {
  }

  ngOnInit(): void {
  }

  onValueOneChange() {
    this.valueTwo = this.valueOne / lengthUnits[this.selectedUnit2] * lengthUnits[this.selectedUnit1]
  }

  onValueTwoChange() {
    this.valueOne = this.valueTwo / lengthUnits[this.selectedUnit1] * lengthUnits[this.selectedUnit2]
  }

}
