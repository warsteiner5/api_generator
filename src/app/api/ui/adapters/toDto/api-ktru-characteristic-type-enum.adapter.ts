import { KtruCharacteristicTypeEnum } from '../../enums/ktru-characteristic-type.enum';
import { ApiKtruCharacteristicTypeEnum } from '../../../swagger/models/api-ktru-characteristic-type-enum';

export function adaptApiKtruCharacteristicTypeEnum(source?: KtruCharacteristicTypeEnum | null): ApiKtruCharacteristicTypeEnum {
  switch (source) {
    case KtruCharacteristicTypeEnum.Qualitative:
      return ApiKtruCharacteristicTypeEnum.Qualitative;
    case KtruCharacteristicTypeEnum.Quantitative:
      return ApiKtruCharacteristicTypeEnum.Quantitative;
    default:
      throw new Error(`Enum value is not defined: KtruCharacteristicTypeEnum=${String(source)}`);
  }
}
