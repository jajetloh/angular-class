import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-data-container',
    template: '',
})
export abstract class DataContainerComponent {

    @Input() data: any[]
    @Input() properties: string[]

    constructor() {
    }

}
