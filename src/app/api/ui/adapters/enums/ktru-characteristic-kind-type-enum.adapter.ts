import { ApiKtruCharacteristicKindTypeEnum } from '../../../swagger/models/api-ktru-characteristic-kind-type-enum';
import { KtruCharacteristicKindTypeEnum } from '../../enums/ktru-characteristic-kind-type.enum';

export const ktruCharacteristicKindTypeEnumAdapter = (source?: ApiKtruCharacteristicKindTypeEnum | null): KtruCharacteristicKindTypeEnum => {
  switch (source) {
    case ApiKtruCharacteristicKindTypeEnum.Undefined:
      return KtruCharacteristicKindTypeEnum.Undefined;
    case ApiKtruCharacteristicKindTypeEnum.Unchangeable:
      return KtruCharacteristicKindTypeEnum.Unchangeable;
    case ApiKtruCharacteristicKindTypeEnum.ChangeableWithOneValue:
      return KtruCharacteristicKindTypeEnum.ChangeableWithOneValue;
    case ApiKtruCharacteristicKindTypeEnum.ChangeableWithMultipleValues:
      return KtruCharacteristicKindTypeEnum.ChangeableWithMultipleValues;
    default:
      throw new Error(`Enum value is not defined: ApiKtruCharacteristicKindTypeEnum=${String(source)}`);
  }
}
