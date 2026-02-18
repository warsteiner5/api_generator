import { ApiKtruCharacteristicValueFormatEnum } from '../../../swagger/models/api-ktru-characteristic-value-format-enum';
import { KtruCharacteristicValueFormatEnum } from '../../enums/ktru-characteristic-value-format.enum';

export function adaptKtruCharacteristicValueFormatEnumToUI(source?: ApiKtruCharacteristicValueFormatEnum | null): KtruCharacteristicValueFormatEnum {
  switch (source) {
    case ApiKtruCharacteristicValueFormatEnum.Undefined:
      return KtruCharacteristicValueFormatEnum.Undefined;
    case ApiKtruCharacteristicValueFormatEnum.Numerical:
      return KtruCharacteristicValueFormatEnum.Numerical;
    case ApiKtruCharacteristicValueFormatEnum.Additional:
      return KtruCharacteristicValueFormatEnum.Additional;
    default:
      throw new Error(`Enum value is not defined: ApiKtruCharacteristicValueFormatEnum=${String(source)}`);
  }
}
