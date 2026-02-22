import { SuggestDtoOfBankSuggest } from '../../models/suggest-dto-of-bank-suggest.interface';
import { ApiSuggestDtoOfBankSuggestDto } from '../../../swagger/models/api-suggest-dto-of-bank-suggest-dto';
import { apiBankSuggestDtoAdapter } from './api-bank-suggest-dto.adapter';

export const apiSuggestDtoOfBankSuggestDtoAdapter = (source?: SuggestDtoOfBankSuggest | null): ApiSuggestDtoOfBankSuggestDto => {
  return {
    data: source?.data === null ? undefined : apiBankSuggestDtoAdapter(source?.data),
    unrestricted_value: source?.unrestrictedValue,
    value: source?.value,
  };
}
