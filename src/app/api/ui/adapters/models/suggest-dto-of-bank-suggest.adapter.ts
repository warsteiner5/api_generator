import { ApiSuggestDtoOfBankSuggestDto } from '../../../swagger/models/api-suggest-dto-of-bank-suggest-dto';
import { SuggestDtoOfBankSuggest } from '../../models/suggest-dto-of-bank-suggest.interface';
import { bankSuggestAdapter } from './bank-suggest.adapter';

export const suggestDtoOfBankSuggestAdapter = (source?: ApiSuggestDtoOfBankSuggestDto | null): SuggestDtoOfBankSuggest => {
  return {
    data: source?.data === null ? undefined : bankSuggestAdapter(source?.data),
    unrestrictedValue: source?.unrestricted_value,
    value: source?.value,
  };
}
