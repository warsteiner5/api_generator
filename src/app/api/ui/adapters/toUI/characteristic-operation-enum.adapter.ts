import { ApiCharacteristicOperationEnum } from '../../../swagger/models/api-characteristic-operation-enum';
import { CharacteristicOperationEnum } from '../../enums/characteristic-operation.enum';

export function adaptCharacteristicOperationEnumToUI(source?: ApiCharacteristicOperationEnum | null): CharacteristicOperationEnum {
  switch (source) {
    case ApiCharacteristicOperationEnum.Equal:
      return CharacteristicOperationEnum.Equal;
    case ApiCharacteristicOperationEnum.Range:
      return CharacteristicOperationEnum.Range;
    case ApiCharacteristicOperationEnum.GreaterOrEqual:
      return CharacteristicOperationEnum.GreaterOrEqual;
    case ApiCharacteristicOperationEnum.LessOrEqual:
      return CharacteristicOperationEnum.LessOrEqual;
    default:
      throw new Error(`Enum value is not defined: ApiCharacteristicOperationEnum=${String(source)}`);
  }
}
