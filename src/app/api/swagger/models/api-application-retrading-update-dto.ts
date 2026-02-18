/* tslint:disable */
/* eslint-disable */
import { ApiApplicationItemDto } from '../models/api-application-item-dto';
export interface ApiApplicationRetradingUpdateDto {
  ApplicationItems?: Array<ApiApplicationItemDto> | null;
  Id?: number;
  IsQuotationWithVat?: boolean | null;
  Price?: number;
  SumVat?: number | null;
  TaxPercent?: number | null;
  TradeId?: number;
  TradeLotId?: number;
}
