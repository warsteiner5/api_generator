import { MarketPartnerOrganization } from '../../models/market-partner-organization.interface';
import { ApiMarketPartnerOrganizationDto } from '../../../swagger/models/api-market-partner-organization-dto';

export const apiMarketPartnerOrganizationDtoAdapter = (source?: MarketPartnerOrganization | null): ApiMarketPartnerOrganizationDto => {
  return {
    Id: source?.id,
    Inn: source?.inn,
    Kpp: source?.kpp,
    Name: source?.name,
  };
}
