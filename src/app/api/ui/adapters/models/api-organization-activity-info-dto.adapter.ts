import { OrganizationActivityInfo } from '../../models/organization-activity-info.interface';
import { ApiOrganizationActivityInfoDto } from '../../../swagger/models/api-organization-activity-info-dto';
import { apiMarketOrganizationAdministratorDtoAdapter } from './api-market-organization-administrator-dto.adapter';
import { apiMarketOrganizationContactDtoAdapter } from './api-market-organization-contact-dto.adapter';
import { apiMarketOrganizationStatisticAltDtoAdapter } from './api-market-organization-statistic.adapter';
import { apiRegionKladrDtoAdapter } from './api-region-kladr-dto.adapter';

export const apiOrganizationActivityInfoDtoAdapter = (source?: OrganizationActivityInfo | null): ApiOrganizationActivityInfoDto => {
  return {
    Administrators: source?.administrators?.map((item) => apiMarketOrganizationAdministratorDtoAdapter(item)),
    BestPriceListsIds: source?.bestPriceListsIds,
    Contacts: source?.contacts?.map((item) => apiMarketOrganizationContactDtoAdapter(item)),
    DeliveryRegions: source?.deliveryRegions?.map((item) => apiRegionKladrDtoAdapter(item)),
    HomeRegion: source?.homeRegion === null ? undefined : apiRegionKladrDtoAdapter(source?.homeRegion),
    MarketOrganizationStatistic: source?.marketOrganizationStatistic === null ? undefined : apiMarketOrganizationStatisticAltDtoAdapter(source?.marketOrganizationStatistic),
    YandexMetrika: source?.yandexMetrika,
  };
}
