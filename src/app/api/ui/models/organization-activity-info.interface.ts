import { MarketOrganizationAdministrator } from './market-organization-administrator.interface';
import { MarketOrganizationContact } from './market-organization-contact.interface';
import { MarketOrganizationStatisticAlt } from './market-organization-statistic-alt.interface';
import { RegionKladr } from './region-kladr.interface';

// @ts-ignore
export interface OrganizationActivityInfo {
  administrators: MarketOrganizationAdministrator[];
  bestPriceListsIds: number[];
  contacts: MarketOrganizationContact[];
  deliveryRegions: RegionKladr[];
  homeRegion: RegionKladr;
  marketOrganizationStatistic: MarketOrganizationStatisticAlt;
  yandexMetrika: string;
}
