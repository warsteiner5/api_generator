import { ApiMarketPartnerOrganizationDto } from '../../../swagger/models/api-market-partner-organization-dto';
import { MarketPartnerOrganization } from '../../models/market-partner-organization.interface';

export const marketPartnerOrganizationAdapter = (source?: ApiMarketPartnerOrganizationDto | null): MarketPartnerOrganization => {
  return {
    id: source?.Id,
    inn: source?.Inn,
    kpp: source?.Kpp,
    name: source?.Name,
  };
}
