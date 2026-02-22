/* tslint:disable */
/* eslint-disable */
import { ApiVatRateStateEnum } from '../models/api-vat-rate-state-enum';
export interface ApiMarketOrderChangeDetailDto {
  Id?: number;
  ParticipantOfferId?: number | null;
  Price?: number;
  Quantity?: number;
  VatRate?: number | null;
  VatRateState?: ApiVatRateStateEnum;
}
