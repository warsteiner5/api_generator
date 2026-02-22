import { DealLotItemPriceChange } from './deal-lot-item-price-change.interface';

// @ts-ignore
export interface DealFullPriceChange {
  dealLotItemPriceChanges: DealLotItemPriceChange[];
  dealid: number;
  isQuotationWithVat: boolean;
  quotation: number;
  sumVat: number;
  taxPercent: number;
}
