import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "pintsleft",
  pure: false
})

export class PintsLeftPipe implements PipeTransform {
  transform(input: Keg[]){
    var output: Keg[] = [];
    for (var i = 0; i < input.length; i++) {
      if(input[i].pintsLeft < 100) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
