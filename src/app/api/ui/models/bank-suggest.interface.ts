import { SuggestDtoOfAddress } from './suggest-dto-of-address.interface';

export interface BankSuggest {
  address: SuggestDtoOfAddress;
  bic: string;
  bik: string;
  correspondentAccount: string;
}
