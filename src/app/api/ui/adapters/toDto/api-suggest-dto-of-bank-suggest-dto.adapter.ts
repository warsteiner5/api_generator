import { SuggestDtoOfBankSuggest } from '../../models/suggest-dto-of-bank-suggest.interface';
import { ApiSuggestDtoOfBankSuggestDto } from '../../../swagger/models/api-suggest-dto-of-bank-suggest-dto';
import { adaptApiBankSuggestDto } from './api-bank-suggest-dto.adapter';

export function adaptApiSuggestDtoOfBankSuggestDto(source?: SuggestDtoOfBankSuggest | null): ApiSuggestDtoOfBankSuggestDto {
  return {
    data: adaptApiBankSuggestDto(source?.data),
    unrestricted_value: source?.unrestrictedValue,
    value: source?.value,
  };
}
