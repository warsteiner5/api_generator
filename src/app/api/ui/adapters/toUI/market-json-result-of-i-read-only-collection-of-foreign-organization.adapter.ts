import { ApiMarketJsonResultOfIReadOnlyCollectionOfForeignOrganizationDto } from '../../../swagger/models/api-market-json-result-of-i-read-only-collection-of-foreign-organization-dto';
import { MarketJsonResultOfIReadOnlyCollectionOfForeignOrganization } from '../../models/market-json-result-of-i-read-only-collection-of-foreign-organization.interface';

export function adaptMarketJsonResultOfIReadOnlyCollectionOfForeignOrganizationToUI(source?: ApiMarketJsonResultOfIReadOnlyCollectionOfForeignOrganizationDto | null): MarketJsonResultOfIReadOnlyCollectionOfForeignOrganization {
  return (source ?? {}) as MarketJsonResultOfIReadOnlyCollectionOfForeignOrganization;
}
