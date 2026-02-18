import { MarketJsonResultOfOrganizationCountryDtoOf } from '../../models/market-json-result-of-organization-country-dto-of.interface';
import { ApiMarketJsonResultOfOrganizationCountryDtoOf } from '../../../swagger/models/api-market-json-result-of-organization-country-dto-of';

export function adaptApiMarketJsonResultOfOrganizationCountryDtoOf(source?: MarketJsonResultOfOrganizationCountryDtoOf | null): ApiMarketJsonResultOfOrganizationCountryDtoOf {
  return (source ?? {}) as ApiMarketJsonResultOfOrganizationCountryDtoOf;
}
