import { Component, Input, OnInit } from '@angular/core'
import { DataContainerComponent } from '../data-container.component'

@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.css']
})
export class DataTableComponent extends DataContainerComponent implements OnInit {

    @Input() rowIndexing = false

    constructor() {
        super()
    }

    ngOnInit(): void {
        console.log('ngOnInit data table')
    }

    isLink(obj: any): boolean {
        return obj && obj.url
    }

}
