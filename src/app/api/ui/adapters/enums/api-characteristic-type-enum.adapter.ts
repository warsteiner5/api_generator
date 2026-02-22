import { CharacteristicTypeEnum } from '../../enums/characteristic-type.enum';
import { ApiCharacteristicTypeEnum } from '../../../swagger/models/api-characteristic-type-enum';

export const apiCharacteristicTypeEnumAdapter = (source?: CharacteristicTypeEnum | null): ApiCharacteristicTypeEnum => {
  switch (source) {
    case CharacteristicTypeEnum.String:
      return ApiCharacteristicTypeEnum.String;
    case CharacteristicTypeEnum.Number:
      return ApiCharacteristicTypeEnum.Number;
    case CharacteristicTypeEnum.Range:
      return ApiCharacteristicTypeEnum.Range;
    case CharacteristicTypeEnum.List:
      return ApiCharacteristicTypeEnum.List;
    case CharacteristicTypeEnum.YesNo:
      return ApiCharacteristicTypeEnum.YesNo;
    default:
      throw new Error(`Enum value is not defined: CharacteristicTypeEnum=${String(source)}`);
  }
}
