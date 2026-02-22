import { ApiOrganizationActivityInfoDto } from '../../../swagger/models/api-organization-activity-info-dto';
import { OrganizationActivityInfo } from '../../models/organization-activity-info.interface';
import { marketOrganizationAdministratorAdapter } from './market-organization-administrator.adapter';
import { marketOrganizationContactAdapter } from './market-organization-contact.adapter';
import { marketOrganizationStatisticAltAdapter } from './market-organization-statistic-alt.adapter';
import { regionKladrAdapter } from './region-kladr.adapter';

export const organizationActivityInfoAdapter = (source?: ApiOrganizationActivityInfoDto | null): OrganizationActivityInfo => {
  return {
    administrators: source?.Administrators?.map((item) => marketOrganizationAdministratorAdapter(item)),
    bestPriceListsIds: source?.BestPriceListsIds,
    contacts: source?.Contacts?.map((item) => marketOrganizationContactAdapter(item)),
    deliveryRegions: source?.DeliveryRegions?.map((item) => regionKladrAdapter(item)),
    homeRegion: source?.HomeRegion === null ? undefined : regionKladrAdapter(source?.HomeRegion),
    marketOrganizationStatistic: source?.MarketOrganizationStatistic === null ? undefined : marketOrganizationStatisticAltAdapter(source?.MarketOrganizationStatistic),
    yandexMetrika: source?.YandexMetrika,
  };
}
