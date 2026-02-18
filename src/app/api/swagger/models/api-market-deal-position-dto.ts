/* tslint:disable */
/* eslint-disable */
import { ApiMarketDealPositionCountryDto } from '../models/api-market-deal-position-country-dto';
export interface ApiMarketDealPositionDto {
  DealPositionCountries?: Array<ApiMarketDealPositionCountryDto> | null;
  Id?: number;
  LotItemId?: number;
  Name?: string | null;
  OkeiCode?: string | null;
  OkeiShortName?: string | null;
  Okpd2Code?: string | null;
  Okpd2Name?: string | null;
  PositionNumber?: number;
  Price?: number | null;
  Quantity?: number | null;
}
