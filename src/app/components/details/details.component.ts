import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

    tableData = [
        {colour: 'Yellow', length: 6, type: 'Primary'},
        {colour: 'Red', length: 3, type: 'Primary'},
        {colour: 'Blue', length: 4, type: 'Primary'},
        {colour: 'Green', length: 5, type: 'Secondary'},
        {colour: 'Purple', length: 6, type: 'Secondary'},
        {colour: 'Black', length: 5, type: 'Greyscale'},
        {colour: 'White', length: 5, type: 'Greyscale'},
        {colour: 'Rainbow', length: 7, type: null},
    ]
    tableProperties = ['colour', 'length', 'type']

    constructor() {
    }

    ngOnInit(): void {
        console.log('ngOnInit details')
    }

}
