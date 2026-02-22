import { CharacteristicOperationEnum } from '../../enums/characteristic-operation.enum';
import { ApiCharacteristicOperationEnum } from '../../../swagger/models/api-characteristic-operation-enum';

export const apiCharacteristicOperationEnumAdapter = (source?: CharacteristicOperationEnum | null): ApiCharacteristicOperationEnum => {
  switch (source) {
    case CharacteristicOperationEnum.Equal:
      return ApiCharacteristicOperationEnum.Equal;
    case CharacteristicOperationEnum.Range:
      return ApiCharacteristicOperationEnum.Range;
    case CharacteristicOperationEnum.GreaterOrEqual:
      return ApiCharacteristicOperationEnum.GreaterOrEqual;
    case CharacteristicOperationEnum.LessOrEqual:
      return ApiCharacteristicOperationEnum.LessOrEqual;
    default:
      throw new Error(`Enum value is not defined: CharacteristicOperationEnum=${String(source)}`);
  }
}
