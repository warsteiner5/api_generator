/* tslint:disable */
/* eslint-disable */
import { ApiDealLotItemPriceChangeDto } from '../models/api-deal-lot-item-price-change-dto';
export interface ApiDealFullPriceChangeDto {
  DealLotItemPriceChanges?: Array<ApiDealLotItemPriceChangeDto> | null;
  Dealid?: number;
  IsQuotationWithVat?: boolean | null;
  Quotation?: number | null;
  SumVat?: number | null;
  TaxPercent?: number | null;
}
