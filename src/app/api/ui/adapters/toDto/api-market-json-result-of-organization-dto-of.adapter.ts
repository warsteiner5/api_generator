import { MarketJsonResultOfOrganizationDtoOf } from '../../models/market-json-result-of-organization-dto-of.interface';
import { ApiMarketJsonResultOfOrganizationDtoOf } from '../../../swagger/models/api-market-json-result-of-organization-dto-of';

export function adaptApiMarketJsonResultOfOrganizationDtoOf(source?: MarketJsonResultOfOrganizationDtoOf | null): ApiMarketJsonResultOfOrganizationDtoOf {
  return (source ?? {}) as ApiMarketJsonResultOfOrganizationDtoOf;
}
