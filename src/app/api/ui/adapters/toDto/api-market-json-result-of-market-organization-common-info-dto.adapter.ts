import { MarketJsonResultOfMarketOrganizationCommonInfo } from '../../models/market-json-result-of-market-organization-common-info.interface';
import { ApiMarketJsonResultOfMarketOrganizationCommonInfoDto } from '../../../swagger/models/api-market-json-result-of-market-organization-common-info-dto';

export function adaptApiMarketJsonResultOfMarketOrganizationCommonInfoDto(source?: MarketJsonResultOfMarketOrganizationCommonInfo | null): ApiMarketJsonResultOfMarketOrganizationCommonInfoDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketOrganizationCommonInfoDto;
}
