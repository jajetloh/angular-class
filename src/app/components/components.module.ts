import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CoinComponent } from './coin/coin.component'
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component'


@NgModule({
    declarations: [
        CoinComponent,
        HomeComponent,
        DetailsComponent,
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
