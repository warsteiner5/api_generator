import { ApiPriceListImportTypeEnum } from '../../../swagger/models/api-price-list-import-type-enum';
import { PriceListImportTypeEnum } from '../../enums/price-list-import-type.enum';

export const priceListImportTypeEnumAdapter = (source?: ApiPriceListImportTypeEnum | null): PriceListImportTypeEnum => {
  switch (source) {
    case ApiPriceListImportTypeEnum.None:
      return PriceListImportTypeEnum.None;
    case ApiPriceListImportTypeEnum.Scheduled:
      return PriceListImportTypeEnum.Scheduled;
    case ApiPriceListImportTypeEnum.Manual:
      return PriceListImportTypeEnum.Manual;
    default:
      throw new Error(`Enum value is not defined: ApiPriceListImportTypeEnum=${String(source)}`);
  }
}
