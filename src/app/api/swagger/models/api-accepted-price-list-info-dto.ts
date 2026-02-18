/* tslint:disable */
/* eslint-disable */
import { ApiMarketDealStateEnum } from '../models/api-market-deal-state-enum';
import { ApiPriceRegionDetailDto } from '../models/api-price-region-detail-dto';
import { ApiVatRateStateEnum } from '../models/api-vat-rate-state-enum';
export interface ApiAcceptedPriceListInfoDto {
  CustomerName?: string | null;
  DuringDays?: number | null;
  Id?: number;
  IsFavorite?: boolean;
  Manufacturer?: string | null;
  MinQuantity?: number | null;
  Name?: string | null;
  OfferTerms?: string | null;
  OrganizerId?: number;
  Participant?: string | null;
  PictureGuid?: string | null;
  Price?: number | null;
  PriceRegionDetails?: Array<ApiPriceRegionDetailDto> | null;
  Quantity?: number | null;
  ShortOkeiName?: string | null;
  State?: ApiMarketDealStateEnum;
  StateString?: string | null;
  UnitPrice?: number | null;
  VatRate?: number | null;
  VatRateState?: ApiVatRateStateEnum;
}
