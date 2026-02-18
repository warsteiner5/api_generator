/* tslint:disable */
/* eslint-disable */
import { ApiMarketOrganizationAdministratorDto } from '../models/api-market-organization-administrator-dto';
import { ApiMarketOrganizationContactDto } from '../models/api-market-organization-contact-dto';
import { ApiMarketOrganizationStatisticAltDto } from '../models/api-market-organization-statistic';
import { ApiRegionKladrDto } from '../models/api-region-kladr-dto';
export interface ApiOrganizationActivityInfoDto {
  Administrators?: Array<ApiMarketOrganizationAdministratorDto> | null;
  BestPriceListsIds?: Array<number> | null;
  Contacts?: Array<ApiMarketOrganizationContactDto> | null;
  DeliveryRegions?: Array<ApiRegionKladrDto> | null;
  HomeRegion?: ApiRegionKladrDto | null;
  MarketOrganizationStatistic?: ApiMarketOrganizationStatisticAltDto | null;
  YandexMetrika?: string | null;
}
