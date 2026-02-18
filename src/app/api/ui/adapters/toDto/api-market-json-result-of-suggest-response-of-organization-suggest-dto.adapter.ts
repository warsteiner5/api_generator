import { MarketJsonResultOfSuggestResponseOfOrganizationSuggest } from '../../models/market-json-result-of-suggest-response-of-organization-suggest.interface';
import { ApiMarketJsonResultOfSuggestResponseOfOrganizationSuggestDto } from '../../../swagger/models/api-market-json-result-of-suggest-response-of-organization-suggest-dto';

export function adaptApiMarketJsonResultOfSuggestResponseOfOrganizationSuggestDto(source?: MarketJsonResultOfSuggestResponseOfOrganizationSuggest | null): ApiMarketJsonResultOfSuggestResponseOfOrganizationSuggestDto {
  return (source ?? {}) as ApiMarketJsonResultOfSuggestResponseOfOrganizationSuggestDto;
}
