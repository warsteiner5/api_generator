import { BankSuggest } from '../../models/bank-suggest.interface';
import { ApiBankSuggestDto } from '../../../swagger/models/api-bank-suggest-dto';
import { apiSuggestDtoOfAddressDtoAdapter } from './api-suggest-dto-of-address-dto.adapter';

export const apiBankSuggestDtoAdapter = (source?: BankSuggest | null): ApiBankSuggestDto => {
  return {
    address: source?.address === null ? undefined : apiSuggestDtoOfAddressDtoAdapter(source?.address),
    bic: source?.bic,
    bik: source?.bik,
    correspondent_account: source?.correspondentAccount,
  };
}
