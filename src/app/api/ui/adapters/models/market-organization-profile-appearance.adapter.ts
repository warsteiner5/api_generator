import { ApiMarketOrganizationProfileAppearanceDto } from '../../../swagger/models/api-market-organization-profile-appearance-dto';
import { MarketOrganizationProfileAppearance } from '../../models/market-organization-profile-appearance.interface';

export const marketOrganizationProfileAppearanceAdapter = (source?: ApiMarketOrganizationProfileAppearanceDto | null): MarketOrganizationProfileAppearance => {
  return {
    coverGuid: source?.CoverGuid,
    description: source?.Description,
    logoGuid: source?.LogoGuid,
  };
}
