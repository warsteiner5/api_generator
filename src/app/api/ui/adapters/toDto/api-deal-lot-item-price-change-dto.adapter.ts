import { DealLotItemPriceChange } from '../../models/deal-lot-item-price-change.interface';
import { ApiDealLotItemPriceChangeDto } from '../../../swagger/models/api-deal-lot-item-price-change-dto';

export function adaptApiDealLotItemPriceChangeDto(source?: DealLotItemPriceChange | null): ApiDealLotItemPriceChangeDto {
  return {
    LotItemId: source?.lotItemId,
    Quotation: source?.quotation,
    SumVat: source?.sumVat,
    TaxPercent: source?.taxPercent,
  };
}
