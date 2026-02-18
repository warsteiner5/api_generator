import { MarketJsonResultOfOrganizationShortInfoDtoOf } from '../../models/market-json-result-of-organization-short-info-dto-of.interface';
import { ApiMarketJsonResultOfOrganizationShortInfoDtoOf } from '../../../swagger/models/api-market-json-result-of-organization-short-info-dto-of';

export function adaptApiMarketJsonResultOfOrganizationShortInfoDtoOf(source?: MarketJsonResultOfOrganizationShortInfoDtoOf | null): ApiMarketJsonResultOfOrganizationShortInfoDtoOf {
  return (source ?? {}) as ApiMarketJsonResultOfOrganizationShortInfoDtoOf;
}
