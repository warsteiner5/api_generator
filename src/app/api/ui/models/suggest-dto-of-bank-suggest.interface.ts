import { BankSuggest } from './bank-suggest.interface';

export interface SuggestDtoOfBankSuggest {
  data: BankSuggest;
  unrestrictedValue: string;
  value: string;
}
