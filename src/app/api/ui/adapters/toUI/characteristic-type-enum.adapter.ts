import { ApiCharacteristicTypeEnum } from '../../../swagger/models/api-characteristic-type-enum';
import { CharacteristicTypeEnum } from '../../enums/characteristic-type.enum';

export function adaptCharacteristicTypeEnumToUI(source?: ApiCharacteristicTypeEnum | null): CharacteristicTypeEnum {
  switch (source) {
    case ApiCharacteristicTypeEnum.String:
      return CharacteristicTypeEnum.String;
    case ApiCharacteristicTypeEnum.Number:
      return CharacteristicTypeEnum.Number;
    case ApiCharacteristicTypeEnum.Range:
      return CharacteristicTypeEnum.Range;
    case ApiCharacteristicTypeEnum.List:
      return CharacteristicTypeEnum.List;
    case ApiCharacteristicTypeEnum.YesNo:
      return CharacteristicTypeEnum.YesNo;
    default:
      throw new Error(`Enum value is not defined: ApiCharacteristicTypeEnum=${String(source)}`);
  }
}
