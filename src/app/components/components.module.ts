import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CoinComponent } from './coin/coin.component'
import { HomeComponent } from './home/home.component'
import { DetailsComponent } from './details/details.component'
import { DataTableComponent } from './data-table/data-table.component'
import { CamelToStartCasePipe } from './data-table/camel-to-start-case.pipe'
import { ExternalResourcesComponent } from './external-resources/external-resources.component'


@NgModule({
  declarations: [
    CoinComponent,
    HomeComponent,
    DetailsComponent,
    DataTableComponent,
    CamelToStartCasePipe,
    ExternalResourcesComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CoinComponent,
    HomeComponent
  ]
})
export class ComponentsModule {
}
