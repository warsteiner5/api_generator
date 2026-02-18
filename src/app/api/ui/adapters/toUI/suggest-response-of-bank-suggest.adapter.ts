import { ApiSuggestResponseOfBankSuggestDto } from '../../../swagger/models/api-suggest-response-of-bank-suggest-dto';
import { SuggestResponseOfBankSuggest } from '../../models/suggest-response-of-bank-suggest.interface';
import { adaptSuggestDtoOfBankSuggestToUI } from './suggest-dto-of-bank-suggest.adapter';

export function adaptSuggestResponseOfBankSuggestToUI(source?: ApiSuggestResponseOfBankSuggestDto | null): SuggestResponseOfBankSuggest {
  return {
    suggestions: (source?.suggestions ?? []).map((item) => adaptSuggestDtoOfBankSuggestToUI(item)),
  };
}
