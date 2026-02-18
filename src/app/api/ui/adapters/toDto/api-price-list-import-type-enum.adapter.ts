import { PriceListImportTypeEnum } from '../../enums/price-list-import-type.enum';
import { ApiPriceListImportTypeEnum } from '../../../swagger/models/api-price-list-import-type-enum';

export function adaptApiPriceListImportTypeEnum(source?: PriceListImportTypeEnum | null): ApiPriceListImportTypeEnum {
  switch (source) {
    case PriceListImportTypeEnum.None:
      return ApiPriceListImportTypeEnum.None;
    case PriceListImportTypeEnum.Scheduled:
      return ApiPriceListImportTypeEnum.Scheduled;
    case PriceListImportTypeEnum.Manual:
      return ApiPriceListImportTypeEnum.Manual;
    default:
      throw new Error(`Enum value is not defined: PriceListImportTypeEnum=${String(source)}`);
  }
}
