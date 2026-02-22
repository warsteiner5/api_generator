import { ApiBankSuggestDto } from '../../../swagger/models/api-bank-suggest-dto';
import { BankSuggest } from '../../models/bank-suggest.interface';
import { suggestDtoOfAddressAdapter } from './suggest-dto-of-address.adapter';

export const bankSuggestAdapter = (source?: ApiBankSuggestDto | null): BankSuggest => {
  return {
    address: source?.address === null ? undefined : suggestDtoOfAddressAdapter(source?.address),
    bic: source?.bic,
    bik: source?.bik,
    correspondentAccount: source?.correspondent_account,
  };
}
