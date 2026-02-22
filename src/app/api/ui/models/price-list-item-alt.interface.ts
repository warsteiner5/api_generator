import { PriceListInfoAlt } from './price-list-info-alt.interface';

// @ts-ignore
export interface PriceListItemAlt {
  deviationPercent: number;
  id: string;
  isActive: boolean;
  priceListInfo: PriceListInfoAlt;
  regions: string[];
}
