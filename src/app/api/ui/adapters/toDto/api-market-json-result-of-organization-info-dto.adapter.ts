import { MarketJsonResultOfOrganizationInfo } from '../../models/market-json-result-of-organization-info.interface';
import { ApiMarketJsonResultOfOrganizationInfoDto } from '../../../swagger/models/api-market-json-result-of-organization-info-dto';

export function adaptApiMarketJsonResultOfOrganizationInfoDto(source?: MarketJsonResultOfOrganizationInfo | null): ApiMarketJsonResultOfOrganizationInfoDto {
  return (source ?? {}) as ApiMarketJsonResultOfOrganizationInfoDto;
}
