import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';

// @ts-ignore
export interface AcceptedPriceListFilter extends BaseFilterObjectAlt {
  tradeId: number;
  deliveryKladrRegionCode: string;
}
