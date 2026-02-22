import { ApiKtruCharacteristicTypeEnum } from '../../../swagger/models/api-ktru-characteristic-type-enum';
import { KtruCharacteristicTypeEnum } from '../../enums/ktru-characteristic-type.enum';

export const ktruCharacteristicTypeEnumAdapter = (source?: ApiKtruCharacteristicTypeEnum | null): KtruCharacteristicTypeEnum => {
  switch (source) {
    case ApiKtruCharacteristicTypeEnum.Qualitative:
      return KtruCharacteristicTypeEnum.Qualitative;
    case ApiKtruCharacteristicTypeEnum.Quantitative:
      return KtruCharacteristicTypeEnum.Quantitative;
    default:
      throw new Error(`Enum value is not defined: ApiKtruCharacteristicTypeEnum=${String(source)}`);
  }
}
