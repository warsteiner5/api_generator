import { ApiMarketJsonResultOfSuggestResponseOfOrganizationSuggestDto } from '../../../swagger/models/api-market-json-result-of-suggest-response-of-organization-suggest-dto';
import { MarketJsonResultOfSuggestResponseOfOrganizationSuggest } from '../../models/market-json-result-of-suggest-response-of-organization-suggest.interface';

export function adaptMarketJsonResultOfSuggestResponseOfOrganizationSuggestToUI(source?: ApiMarketJsonResultOfSuggestResponseOfOrganizationSuggestDto | null): MarketJsonResultOfSuggestResponseOfOrganizationSuggest {
  return (source ?? {}) as MarketJsonResultOfSuggestResponseOfOrganizationSuggest;
}
