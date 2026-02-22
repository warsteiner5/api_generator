import { KtruCharacteristicKindTypeEnum } from '../../enums/ktru-characteristic-kind-type.enum';
import { ApiKtruCharacteristicKindTypeEnum } from '../../../swagger/models/api-ktru-characteristic-kind-type-enum';

export const apiKtruCharacteristicKindTypeEnumAdapter = (source?: KtruCharacteristicKindTypeEnum | null): ApiKtruCharacteristicKindTypeEnum => {
  switch (source) {
    case KtruCharacteristicKindTypeEnum.Undefined:
      return ApiKtruCharacteristicKindTypeEnum.Undefined;
    case KtruCharacteristicKindTypeEnum.Unchangeable:
      return ApiKtruCharacteristicKindTypeEnum.Unchangeable;
    case KtruCharacteristicKindTypeEnum.ChangeableWithOneValue:
      return ApiKtruCharacteristicKindTypeEnum.ChangeableWithOneValue;
    case KtruCharacteristicKindTypeEnum.ChangeableWithMultipleValues:
      return ApiKtruCharacteristicKindTypeEnum.ChangeableWithMultipleValues;
    default:
      throw new Error(`Enum value is not defined: KtruCharacteristicKindTypeEnum=${String(source)}`);
  }
}
