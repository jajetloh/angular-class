import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CoinComponent } from './coin/coin.component'
import { HomeComponent } from './home/home.component'
import { DetailsComponent } from './details/details.component'
import { DataTableComponent } from './data-table/data-table.component'
import { ExternalResourcesComponent } from './external-resources/external-resources.component'
import { PipesModule } from '../pipes/pipes.module'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { ExercisesComponent } from './exercises/exercises.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExerciseOneComponent } from './exercises/exercise-one/exercise-one.component'


@NgModule({
  declarations: [
    CoinComponent,
    HomeComponent,
    DetailsComponent,
    DataTableComponent,
    ExternalResourcesComponent,
    ExercisesComponent,
    ExerciseOneComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    FormsModule,
    RouterModule,
    NgbModule,
  ],
  exports: [
    CoinComponent,
    HomeComponent
  ]
})
export class ComponentsModule {
}
