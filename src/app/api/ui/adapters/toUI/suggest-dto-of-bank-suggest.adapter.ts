import { ApiSuggestDtoOfBankSuggestDto } from '../../../swagger/models/api-suggest-dto-of-bank-suggest-dto';
import { SuggestDtoOfBankSuggest } from '../../models/suggest-dto-of-bank-suggest.interface';
import { adaptBankSuggestToUI } from './bank-suggest.adapter';

export function adaptSuggestDtoOfBankSuggestToUI(source?: ApiSuggestDtoOfBankSuggestDto | null): SuggestDtoOfBankSuggest {
  return {
    data: adaptBankSuggestToUI(source?.data),
    unrestrictedValue: source?.unrestricted_value ?? '',
    value: source?.value ?? '',
  };
}
