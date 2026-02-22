import { ApiDealFullPriceChangeDto } from '../../../swagger/models/api-deal-full-price-change-dto';
import { DealFullPriceChange } from '../../models/deal-full-price-change.interface';
import { dealLotItemPriceChangeAdapter } from './deal-lot-item-price-change.adapter';

export const dealFullPriceChangeAdapter = (source?: ApiDealFullPriceChangeDto | null): DealFullPriceChange => {
  return {
    dealLotItemPriceChanges: source?.DealLotItemPriceChanges?.map((item) => dealLotItemPriceChangeAdapter(item)),
    dealid: source?.Dealid,
    isQuotationWithVat: source?.IsQuotationWithVat,
    quotation: source?.Quotation,
    sumVat: source?.SumVat,
    taxPercent: source?.TaxPercent,
  };
}
