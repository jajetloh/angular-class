import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { GlowableComponent } from '../glowable/glowable.component'
import { GlowService } from '../../services/glow.service'

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent extends GlowableComponent implements OnInit, OnDestroy {

  @Input() data: any[]
  @Input() properties: string[]

  @Input() rowIndexing = false

  constructor(
    protected glowService: GlowService
  ) {
    super(glowService)
  }

  ngOnInit(): void {
    this.registerComponent('table')
  }

  ngOnDestroy(): void {
    super.ngOnDestroy()
  }

  isLink(obj: any): boolean {
    return obj && obj.url
  }

}
