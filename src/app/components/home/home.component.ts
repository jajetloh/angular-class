import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  contentsTableColumns = ['concept', 'details']
  contentsTableData = [
    { concept: 'Components', details: 'Examples of components, and how they can interact with each other.' },
    { concept: 'Services', details: 'Usage of services across components and routes' },
    { concept: 'Pipes', details: 'Transformation of objects in html interpolation' },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
