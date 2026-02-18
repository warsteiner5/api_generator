import { MarketJsonResultOfPaginationResultOfForeignOrganization } from '../../models/market-json-result-of-pagination-result-of-foreign-organization.interface';
import { ApiMarketJsonResultOfPaginationResultOfForeignOrganizationDto } from '../../../swagger/models/api-market-json-result-of-pagination-result-of-foreign-organization-dto';

export function adaptApiMarketJsonResultOfPaginationResultOfForeignOrganizationDto(source?: MarketJsonResultOfPaginationResultOfForeignOrganization | null): ApiMarketJsonResultOfPaginationResultOfForeignOrganizationDto {
  return (source ?? {}) as ApiMarketJsonResultOfPaginationResultOfForeignOrganizationDto;
}
