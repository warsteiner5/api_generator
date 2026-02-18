import { ApiMarketJsonResultOfOrganizationShortInfoDtoOf } from '../../../swagger/models/api-market-json-result-of-organization-short-info-dto-of';
import { MarketJsonResultOfOrganizationShortInfoDtoOf } from '../../models/market-json-result-of-organization-short-info-dto-of.interface';

export function adaptMarketJsonResultOfOrganizationShortInfoDtoOfToUI(source?: ApiMarketJsonResultOfOrganizationShortInfoDtoOf | null): MarketJsonResultOfOrganizationShortInfoDtoOf {
  return (source ?? {}) as MarketJsonResultOfOrganizationShortInfoDtoOf;
}
