import { MarketJsonResultOfPaginationResultOfOrganizationForAutocomplete } from '../../models/market-json-result-of-pagination-result-of-organization-for-autocomplete.interface';
import { ApiMarketJsonResultOfPaginationResultOfOrganizationForAutocompleteDto } from '../../../swagger/models/api-market-json-result-of-pagination-result-of-organization-for-autocomplete-dto';

export function adaptApiMarketJsonResultOfPaginationResultOfOrganizationForAutocompleteDto(source?: MarketJsonResultOfPaginationResultOfOrganizationForAutocomplete | null): ApiMarketJsonResultOfPaginationResultOfOrganizationForAutocompleteDto {
  return (source ?? {}) as ApiMarketJsonResultOfPaginationResultOfOrganizationForAutocompleteDto;
}
