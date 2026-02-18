/* tslint:disable */
/* eslint-disable */
import { ApiMarketOfferStatusResultDto } from '../models/api-market-offer-status-result-dto';
export interface ApiMarketOfferDatesResultDto {
  Date?: string | null;
  Status?: Array<ApiMarketOfferStatusResultDto> | null;
}
