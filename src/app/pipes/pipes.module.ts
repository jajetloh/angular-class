import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StringifyPipe } from './stringify.pipe'
import { CamelToStartCasePipe } from './camel-to-start-case.pipe'


@NgModule({
  declarations: [
    StringifyPipe,
    CamelToStartCasePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StringifyPipe,
    CamelToStartCasePipe
  ],
})
export class PipesModule {
}
