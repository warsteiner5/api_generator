import { ApiMarketJsonResultOfSuggestResponseOfBankSuggestDto } from '../../../swagger/models/api-market-json-result-of-suggest-response-of-bank-suggest-dto';
import { MarketJsonResultOfSuggestResponseOfBankSuggest } from '../../models/market-json-result-of-suggest-response-of-bank-suggest.interface';

export function adaptMarketJsonResultOfSuggestResponseOfBankSuggestToUI(source?: ApiMarketJsonResultOfSuggestResponseOfBankSuggestDto | null): MarketJsonResultOfSuggestResponseOfBankSuggest {
  return (source ?? {}) as MarketJsonResultOfSuggestResponseOfBankSuggest;
}
