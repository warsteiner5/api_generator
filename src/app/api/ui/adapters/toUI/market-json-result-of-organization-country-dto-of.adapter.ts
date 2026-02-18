import { ApiMarketJsonResultOfOrganizationCountryDtoOf } from '../../../swagger/models/api-market-json-result-of-organization-country-dto-of';
import { MarketJsonResultOfOrganizationCountryDtoOf } from '../../models/market-json-result-of-organization-country-dto-of.interface';

export function adaptMarketJsonResultOfOrganizationCountryDtoOfToUI(source?: ApiMarketJsonResultOfOrganizationCountryDtoOf | null): MarketJsonResultOfOrganizationCountryDtoOf {
  return (source ?? {}) as MarketJsonResultOfOrganizationCountryDtoOf;
}
