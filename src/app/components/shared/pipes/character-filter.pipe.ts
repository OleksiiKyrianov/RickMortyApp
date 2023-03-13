import { Pipe, PipeTransform } from '@angular/core';
import { Character } from 'src/app/models/character';

@Pipe({
  name: 'characterFilter'
})
export class CharacterFilterPipe implements PipeTransform {

  transform(characters: Character[], searchTerm: string): Character[] {
    if (!characters || !searchTerm) {
      return characters;
    }

    return characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
