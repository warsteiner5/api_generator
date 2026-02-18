/* tslint:disable */
/* eslint-disable */
import { ApiVatRateStateEnum } from '../models/api-vat-rate-state-enum';
export interface ApiMarketOrderChangeDetailDto {
  Id?: number;
  Price?: number;
  PriceOfferId?: number;
  Quantity?: number;
  VatRate?: number | null;
  VatRateState?: ApiVatRateStateEnum;
}
