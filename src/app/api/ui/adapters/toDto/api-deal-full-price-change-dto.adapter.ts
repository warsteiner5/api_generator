import { DealFullPriceChange } from '../../models/deal-full-price-change.interface';
import { ApiDealFullPriceChangeDto } from '../../../swagger/models/api-deal-full-price-change-dto';
import { adaptApiDealLotItemPriceChangeDto } from './api-deal-lot-item-price-change-dto.adapter';

export function adaptApiDealFullPriceChangeDto(source?: DealFullPriceChange | null): ApiDealFullPriceChangeDto {
  return {
    DealLotItemPriceChanges: (source?.dealLotItemPriceChanges ?? []).map((item) => adaptApiDealLotItemPriceChangeDto(item)),
    Dealid: source?.dealid,
    IsQuotationWithVat: source?.isQuotationWithVat,
    Quotation: source?.quotation,
    SumVat: source?.sumVat,
    TaxPercent: source?.taxPercent,
  };
}
