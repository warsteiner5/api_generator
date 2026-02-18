import { SuggestResponseOfBankSuggest } from '../../models/suggest-response-of-bank-suggest.interface';
import { ApiSuggestResponseOfBankSuggestDto } from '../../../swagger/models/api-suggest-response-of-bank-suggest-dto';
import { adaptApiSuggestDtoOfBankSuggestDto } from './api-suggest-dto-of-bank-suggest-dto.adapter';

export function adaptApiSuggestResponseOfBankSuggestDto(source?: SuggestResponseOfBankSuggest | null): ApiSuggestResponseOfBankSuggestDto {
  return {
    suggestions: (source?.suggestions ?? []).map((item) => adaptApiSuggestDtoOfBankSuggestDto(item)),
  };
}
