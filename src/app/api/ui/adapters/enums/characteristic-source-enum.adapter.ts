import { ApiCharacteristicSourceEnum } from '../../../swagger/models/api-characteristic-source-enum';
import { CharacteristicSourceEnum } from '../../enums/characteristic-source.enum';

export const characteristicSourceEnumAdapter = (source?: ApiCharacteristicSourceEnum | null): CharacteristicSourceEnum => {
  switch (source) {
    case ApiCharacteristicSourceEnum.Minpromtorg:
      return CharacteristicSourceEnum.Minpromtorg;
    case ApiCharacteristicSourceEnum.RusPost:
      return CharacteristicSourceEnum.RusPost;
    default:
      throw new Error(`Enum value is not defined: ApiCharacteristicSourceEnum=${String(source)}`);
  }
}
