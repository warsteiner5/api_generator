import { ApiDealFullPriceChangeDto } from '../../../swagger/models/api-deal-full-price-change-dto';
import { DealFullPriceChange } from '../../models/deal-full-price-change.interface';
import { adaptDealLotItemPriceChangeToUI } from './deal-lot-item-price-change.adapter';

export function adaptDealFullPriceChangeToUI(source?: ApiDealFullPriceChangeDto | null): DealFullPriceChange {
  return {
    dealLotItemPriceChanges: (source?.DealLotItemPriceChanges ?? []).map((item) => adaptDealLotItemPriceChangeToUI(item)),
    dealid: source?.Dealid ?? 0,
    isQuotationWithVat: source?.IsQuotationWithVat ?? false,
    quotation: source?.Quotation ?? 0,
    sumVat: source?.SumVat ?? 0,
    taxPercent: source?.TaxPercent ?? 0,
  };
}
