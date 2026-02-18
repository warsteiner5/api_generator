import { ApiMarketJsonResultOfPaginationResultOfForeignOrganizationDto } from '../../../swagger/models/api-market-json-result-of-pagination-result-of-foreign-organization-dto';
import { MarketJsonResultOfPaginationResultOfForeignOrganization } from '../../models/market-json-result-of-pagination-result-of-foreign-organization.interface';

export function adaptMarketJsonResultOfPaginationResultOfForeignOrganizationToUI(source?: ApiMarketJsonResultOfPaginationResultOfForeignOrganizationDto | null): MarketJsonResultOfPaginationResultOfForeignOrganization {
  return (source ?? {}) as MarketJsonResultOfPaginationResultOfForeignOrganization;
}
