import { Pipe, PipeTransform } from '@angular/core'
import { startCase } from 'lodash'

@Pipe({
  name: 'camelToStartCase'
})
export class CamelToStartCasePipe implements PipeTransform {

  transform(value: string): unknown {
    return startCase(value)
  }

}
