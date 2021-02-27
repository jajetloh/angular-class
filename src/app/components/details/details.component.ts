import { Component, OnDestroy, OnInit } from '@angular/core'
import { GlowService } from '../../services/glow.service'
import { GlowableComponent } from '../glowable/glowable.component'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent extends GlowableComponent implements OnInit, OnDestroy {

  tableData = [
    { colour: 'Yellow', length: 6, type: 'Primary' },
    { colour: 'Red', length: 3, type: 'Primary' },
    { colour: 'Blue', length: 4, type: 'Primary' },
    { colour: 'Green', length: 5, type: 'Secondary' },
    { colour: 'Purple', length: 6, type: 'Secondary' },
    { colour: 'Black', length: 5, type: 'Greyscale' },
    { colour: 'White', length: 5, type: 'Greyscale' },
    { colour: 'Rainbow', length: 7, type: null },
  ]
  tableProperties = ['colour', 'length', 'type']

  table2Data = [
    { a: 1, b: 2 },
    { a: 'C', b: 'J' },
  ]
  table2Properties = ['a', 'b']

  textBold = false

  twoWayBindData = 'Default text the from .ts file'

  constructor(
    protected glowService: GlowService
  ) {
    super(glowService)
  }

  ngOnInit(): void {
    this.registerComponent('details')
  }

  ngOnDestroy(): void {
    super.ngOnDestroy()
  }

  toggleGlow(id: string, state: boolean): void {
    this.glowService.toggleGlow(id, state)
  }

  toggleBold() {
    this.textBold = !this.textBold
  }

}
