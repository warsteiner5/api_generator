import { ApiUsedClassificatorTypeEnum } from '../../../swagger/models/api-used-classificator-type-enum';
import { UsedClassificatorTypeEnum } from '../../enums/used-classificator-type.enum';

export function adaptUsedClassificatorTypeEnumToUI(source?: ApiUsedClassificatorTypeEnum | null): UsedClassificatorTypeEnum {
  switch (source) {
    case ApiUsedClassificatorTypeEnum.None:
      return UsedClassificatorTypeEnum.None;
    case ApiUsedClassificatorTypeEnum.Okpd2:
      return UsedClassificatorTypeEnum.Okpd2;
    case ApiUsedClassificatorTypeEnum.Koz:
      return UsedClassificatorTypeEnum.Koz;
    case ApiUsedClassificatorTypeEnum.Yandex:
      return UsedClassificatorTypeEnum.Yandex;
    case ApiUsedClassificatorTypeEnum.Ksr:
      return UsedClassificatorTypeEnum.Ksr;
    default:
      throw new Error(`Enum value is not defined: ApiUsedClassificatorTypeEnum=${String(source)}`);
  }
}
