import { ApiMarketJsonResultOfPaginationResultOfOrganizationForAutocompleteDto } from '../../../swagger/models/api-market-json-result-of-pagination-result-of-organization-for-autocomplete-dto';
import { MarketJsonResultOfPaginationResultOfOrganizationForAutocomplete } from '../../models/market-json-result-of-pagination-result-of-organization-for-autocomplete.interface';

export function adaptMarketJsonResultOfPaginationResultOfOrganizationForAutocompleteToUI(source?: ApiMarketJsonResultOfPaginationResultOfOrganizationForAutocompleteDto | null): MarketJsonResultOfPaginationResultOfOrganizationForAutocomplete {
  return (source ?? {}) as MarketJsonResultOfPaginationResultOfOrganizationForAutocomplete;
}
