import { CharacteristicSourceEnum } from '../../enums/characteristic-source.enum';
import { ApiCharacteristicSourceEnum } from '../../../swagger/models/api-characteristic-source-enum';

export const apiCharacteristicSourceEnumAdapter = (source?: CharacteristicSourceEnum | null): ApiCharacteristicSourceEnum => {
  switch (source) {
    case CharacteristicSourceEnum.Minpromtorg:
      return ApiCharacteristicSourceEnum.Minpromtorg;
    case CharacteristicSourceEnum.RusPost:
      return ApiCharacteristicSourceEnum.RusPost;
    default:
      throw new Error(`Enum value is not defined: CharacteristicSourceEnum=${String(source)}`);
  }
}
