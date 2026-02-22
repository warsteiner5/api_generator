import { PriceListTypeEnum } from '../enums/price-list-type.enum';

// @ts-ignore
export interface MzPriceListShortInfo {
  externalId: string;
  id: number;
  name: string;
  type: PriceListTypeEnum;
}
