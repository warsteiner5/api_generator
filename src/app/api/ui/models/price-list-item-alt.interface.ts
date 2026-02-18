import { PriceListInfoAlt } from './price-list-info-alt.interface';

export interface PriceListItemAlt {
  deviationPercent: number;
  id: string;
  isActive: boolean;
  priceListInfo: PriceListInfoAlt;
  regions: string[];
}
