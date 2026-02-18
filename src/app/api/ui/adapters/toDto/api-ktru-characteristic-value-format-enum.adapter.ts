import { KtruCharacteristicValueFormatEnum } from '../../enums/ktru-characteristic-value-format.enum';
import { ApiKtruCharacteristicValueFormatEnum } from '../../../swagger/models/api-ktru-characteristic-value-format-enum';

export function adaptApiKtruCharacteristicValueFormatEnum(source?: KtruCharacteristicValueFormatEnum | null): ApiKtruCharacteristicValueFormatEnum {
  switch (source) {
    case KtruCharacteristicValueFormatEnum.Undefined:
      return ApiKtruCharacteristicValueFormatEnum.Undefined;
    case KtruCharacteristicValueFormatEnum.Numerical:
      return ApiKtruCharacteristicValueFormatEnum.Numerical;
    case KtruCharacteristicValueFormatEnum.Additional:
      return ApiKtruCharacteristicValueFormatEnum.Additional;
    default:
      throw new Error(`Enum value is not defined: KtruCharacteristicValueFormatEnum=${String(source)}`);
  }
}
