import { MarketJsonResultOfIReadOnlyCollectionOfForeignOrganization } from '../../models/market-json-result-of-i-read-only-collection-of-foreign-organization.interface';
import { ApiMarketJsonResultOfIReadOnlyCollectionOfForeignOrganizationDto } from '../../../swagger/models/api-market-json-result-of-i-read-only-collection-of-foreign-organization-dto';

export function adaptApiMarketJsonResultOfIReadOnlyCollectionOfForeignOrganizationDto(source?: MarketJsonResultOfIReadOnlyCollectionOfForeignOrganization | null): ApiMarketJsonResultOfIReadOnlyCollectionOfForeignOrganizationDto {
  return (source ?? {}) as ApiMarketJsonResultOfIReadOnlyCollectionOfForeignOrganizationDto;
}
