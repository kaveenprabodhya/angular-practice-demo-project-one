import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase',
})
export class TitleCaseCustomePipe implements PipeTransform {
  transform(value: string) {
    if (!value) return null;

    let preposition = ['the', 'of'];

    let words = value.split(' ');
    console.log(typeof words);

    for (var i = 0; i < words.length; i++) {
      if (i > 0 && preposition.includes(words[i])) {
        words[i] = words[i].toLowerCase();
      } else {
        words[i] =
          words[i].substr(0, 1).toUpperCase() +
          words[i].substr(1).toLowerCase();
      }
    }
    // console.log(words.join(' '));
    return words.join(' ');
  }
}
