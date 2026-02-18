import { PriceListTypeEnum } from '../enums/price-list-type.enum';

export interface MzPriceListShortInfo {
  externalId: string;
  id: number;
  name: string;
  type: PriceListTypeEnum;
}
