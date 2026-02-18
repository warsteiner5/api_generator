import { MarketOrganizationProfileAppearance } from '../../models/market-organization-profile-appearance.interface';
import { ApiMarketOrganizationProfileAppearanceDto } from '../../../swagger/models/api-market-organization-profile-appearance-dto';

export function adaptApiMarketOrganizationProfileAppearanceDto(source?: MarketOrganizationProfileAppearance | null): ApiMarketOrganizationProfileAppearanceDto {
  return {
    CoverGuid: source?.coverGuid,
    Description: source?.description,
    LogoGuid: source?.logoGuid,
  };
}
