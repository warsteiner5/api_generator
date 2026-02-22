import { SuggestDtoOfAddress } from './suggest-dto-of-address.interface';

// @ts-ignore
export interface BankSuggest {
  address: SuggestDtoOfAddress;
  bic: string;
  bik: string;
  correspondentAccount: string;
}
