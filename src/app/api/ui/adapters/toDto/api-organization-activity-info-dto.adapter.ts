import { OrganizationActivityInfo } from '../../models/organization-activity-info.interface';
import { ApiOrganizationActivityInfoDto } from '../../../swagger/models/api-organization-activity-info-dto';
import { adaptApiMarketOrganizationAdministratorDto } from './api-market-organization-administrator-dto.adapter';
import { adaptApiMarketOrganizationContactDto } from './api-market-organization-contact-dto.adapter';
import { adaptApiMarketOrganizationStatisticAltDto } from './api-market-organization-statistic.adapter';
import { adaptApiRegionKladrDto } from './api-region-kladr-dto.adapter';

export function adaptApiOrganizationActivityInfoDto(source?: OrganizationActivityInfo | null): ApiOrganizationActivityInfoDto {
  return {
    Administrators: (source?.administrators ?? []).map((item) => adaptApiMarketOrganizationAdministratorDto(item)),
    BestPriceListsIds: source?.bestPriceListsIds ?? [],
    Contacts: (source?.contacts ?? []).map((item) => adaptApiMarketOrganizationContactDto(item)),
    DeliveryRegions: (source?.deliveryRegions ?? []).map((item) => adaptApiRegionKladrDto(item)),
    HomeRegion: adaptApiRegionKladrDto(source?.homeRegion),
    MarketOrganizationStatistic: adaptApiMarketOrganizationStatisticAltDto(source?.marketOrganizationStatistic),
    YandexMetrika: source?.yandexMetrika,
  };
}
