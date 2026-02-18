import { ApiDealLotItemPriceChangeDto } from '../../../swagger/models/api-deal-lot-item-price-change-dto';
import { DealLotItemPriceChange } from '../../models/deal-lot-item-price-change.interface';

export function adaptDealLotItemPriceChangeToUI(source?: ApiDealLotItemPriceChangeDto | null): DealLotItemPriceChange {
  return {
    lotItemId: source?.LotItemId ?? 0,
    quotation: source?.Quotation ?? 0,
    sumVat: source?.SumVat ?? 0,
    taxPercent: source?.TaxPercent ?? 0,
  };
}
