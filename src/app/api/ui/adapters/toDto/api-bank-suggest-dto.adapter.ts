import { BankSuggest } from '../../models/bank-suggest.interface';
import { ApiBankSuggestDto } from '../../../swagger/models/api-bank-suggest-dto';
import { adaptApiSuggestDtoOfAddressDto } from './api-suggest-dto-of-address-dto.adapter';

export function adaptApiBankSuggestDto(source?: BankSuggest | null): ApiBankSuggestDto {
  return {
    address: adaptApiSuggestDtoOfAddressDto(source?.address),
    bic: source?.bic,
    bik: source?.bik,
    correspondent_account: source?.correspondentAccount,
  };
}
