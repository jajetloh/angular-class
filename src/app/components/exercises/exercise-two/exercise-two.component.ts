import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-exercise-two',
  templateUrl: './exercise-two.component.html',
  styleUrls: ['./exercise-two.component.css']
})
export class ExerciseTwoComponent implements OnInit {

  valueOne: number = 1
  valueTwo: number = 2

  constructor() {
  }

  ngOnInit(): void {
  }

  onValueOneChange() {
    this.valueTwo = this.valueOne * 2
  }

  onValueTwoChange() {
    this.valueOne = this.valueTwo / 2
  }

}
