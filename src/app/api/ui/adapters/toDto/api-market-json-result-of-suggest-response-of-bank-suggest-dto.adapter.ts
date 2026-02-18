import { MarketJsonResultOfSuggestResponseOfBankSuggest } from '../../models/market-json-result-of-suggest-response-of-bank-suggest.interface';
import { ApiMarketJsonResultOfSuggestResponseOfBankSuggestDto } from '../../../swagger/models/api-market-json-result-of-suggest-response-of-bank-suggest-dto';

export function adaptApiMarketJsonResultOfSuggestResponseOfBankSuggestDto(source?: MarketJsonResultOfSuggestResponseOfBankSuggest | null): ApiMarketJsonResultOfSuggestResponseOfBankSuggestDto {
  return (source ?? {}) as ApiMarketJsonResultOfSuggestResponseOfBankSuggestDto;
}
