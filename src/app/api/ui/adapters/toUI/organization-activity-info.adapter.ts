import { ApiOrganizationActivityInfoDto } from '../../../swagger/models/api-organization-activity-info-dto';
import { OrganizationActivityInfo } from '../../models/organization-activity-info.interface';
import { adaptMarketOrganizationAdministratorToUI } from './market-organization-administrator.adapter';
import { adaptMarketOrganizationContactToUI } from './market-organization-contact.adapter';
import { adaptMarketOrganizationStatisticAltToUI } from './market-organization-statistic-alt.adapter';
import { adaptRegionKladrToUI } from './region-kladr.adapter';

export function adaptOrganizationActivityInfoToUI(source?: ApiOrganizationActivityInfoDto | null): OrganizationActivityInfo {
  return {
    administrators: (source?.Administrators ?? []).map((item) => adaptMarketOrganizationAdministratorToUI(item)),
    bestPriceListsIds: source?.BestPriceListsIds ?? [],
    contacts: (source?.Contacts ?? []).map((item) => adaptMarketOrganizationContactToUI(item)),
    deliveryRegions: (source?.DeliveryRegions ?? []).map((item) => adaptRegionKladrToUI(item)),
    homeRegion: adaptRegionKladrToUI(source?.HomeRegion),
    marketOrganizationStatistic: adaptMarketOrganizationStatisticAltToUI(source?.MarketOrganizationStatistic),
    yandexMetrika: source?.YandexMetrika ?? '',
  };
}
