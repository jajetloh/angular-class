import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'stringify'
})
export class StringifyPipe implements PipeTransform {

  transform(object: any): string {
    return JSON.stringify(object)
  }

}
