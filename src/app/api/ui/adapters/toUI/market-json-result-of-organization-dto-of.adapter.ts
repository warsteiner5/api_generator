import { ApiMarketJsonResultOfOrganizationDtoOf } from '../../../swagger/models/api-market-json-result-of-organization-dto-of';
import { MarketJsonResultOfOrganizationDtoOf } from '../../models/market-json-result-of-organization-dto-of.interface';

export function adaptMarketJsonResultOfOrganizationDtoOfToUI(source?: ApiMarketJsonResultOfOrganizationDtoOf | null): MarketJsonResultOfOrganizationDtoOf {
  return (source ?? {}) as MarketJsonResultOfOrganizationDtoOf;
}
