/* tslint:disable */
/* eslint-disable */
import { ApiB2BCategoryDto } from '../models/api-b-2-b-category-dto';
import { ApiOkeiShortDto } from '../models/api-okei-short-dto';
import { ApiOkpd2Dto } from '../models/api-okpd-2-dto';
import { ApiParticipantOfferStateEnum } from '../models/api-participant-offer-state-enum';
import { ApiRegionKladrDto } from '../models/api-region-kladr-dto';
export interface ApiMarketOfferShortModelDto {
  Category?: ApiB2BCategoryDto | null;
  CountryCode?: string | null;
  Id?: number;
  Images?: Array<string> | null;
  OfferState?: ApiParticipantOfferStateEnum;
  Okei?: ApiOkeiShortDto | null;
  OkeiCode?: string | null;
  Okpd2Codes?: Array<ApiOkpd2Dto> | null;
  OrganizationGuid?: string;
  Price?: number | null;
  PriceListId?: number | null;
  ProductDescription?: string | null;
  ProductName?: string | null;
  Quantity?: number | null;
  RegionalProductSignTenantId?: number | null;
  Regions?: Array<ApiRegionKladrDto> | null;
  WasApproved?: boolean;
}
