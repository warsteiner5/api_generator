import { ApiDealLotItemPriceChangeDto } from '../../../swagger/models/api-deal-lot-item-price-change-dto';
import { DealLotItemPriceChange } from '../../models/deal-lot-item-price-change.interface';

export const dealLotItemPriceChangeAdapter = (source?: ApiDealLotItemPriceChangeDto | null): DealLotItemPriceChange => {
  return {
    lotItemId: source?.LotItemId,
    quotation: source?.Quotation,
    sumVat: source?.SumVat,
    taxPercent: source?.TaxPercent,
  };
}
