/* tslint:disable */
/* eslint-disable */
import { ApiExternalDealTradeProductDto } from '../models/api-external-deal-trade-product-dto';
export interface ApiExternalDealTradeInfoDto {
  Price?: number | null;
  PriceWithVat?: number | null;
  Products?: Array<ApiExternalDealTradeProductDto> | null;
  TradeId?: number;
  TradeName?: string | null;
}
