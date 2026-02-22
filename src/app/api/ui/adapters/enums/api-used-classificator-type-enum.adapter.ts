import { UsedClassificatorTypeEnum } from '../../enums/used-classificator-type.enum';
import { ApiUsedClassificatorTypeEnum } from '../../../swagger/models/api-used-classificator-type-enum';

export const apiUsedClassificatorTypeEnumAdapter = (source?: UsedClassificatorTypeEnum | null): ApiUsedClassificatorTypeEnum => {
  switch (source) {
    case UsedClassificatorTypeEnum.None:
      return ApiUsedClassificatorTypeEnum.None;
    case UsedClassificatorTypeEnum.Okpd2:
      return ApiUsedClassificatorTypeEnum.Okpd2;
    case UsedClassificatorTypeEnum.Koz:
      return ApiUsedClassificatorTypeEnum.Koz;
    case UsedClassificatorTypeEnum.Yandex:
      return ApiUsedClassificatorTypeEnum.Yandex;
    case UsedClassificatorTypeEnum.Ksr:
      return ApiUsedClassificatorTypeEnum.Ksr;
    default:
      throw new Error(`Enum value is not defined: UsedClassificatorTypeEnum=${String(source)}`);
  }
}
