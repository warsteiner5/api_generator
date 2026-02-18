import { ApiBankSuggestDto } from '../../../swagger/models/api-bank-suggest-dto';
import { BankSuggest } from '../../models/bank-suggest.interface';
import { adaptSuggestDtoOfAddressToUI } from './suggest-dto-of-address.adapter';

export function adaptBankSuggestToUI(source?: ApiBankSuggestDto | null): BankSuggest {
  return {
    address: adaptSuggestDtoOfAddressToUI(source?.address),
    bic: source?.bic ?? '',
    bik: source?.bik ?? '',
    correspondentAccount: source?.correspondent_account ?? '',
  };
}
