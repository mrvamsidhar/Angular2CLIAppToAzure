import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {
    transform(value: string, args?: any): any {
    if (!value) {
        return null;
    }
    const words = value.split(' ');
    for (let i = 0; i < words.length; i++) {
      /*if (prepositions.includes(words[i])) {
        words[i] = words[i].toLowerCase();
      } else {
        words[i] = words[i].substr(0, 1).toUpperCase() + words[i].substr(0, 1).toLowerCase()
      }*/
    }
  }

  private isPreposition(word: string): boolean {
    let retValue = false;
    const prepositions = [
      'the',
      'of'
    ];
    retValue = true;
    return false;
  }

}
