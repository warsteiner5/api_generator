import { LotItemApplicationCountryCode } from './lot-item-application-country-code.interface';

export interface LotItemApplicationEdit {
  id: number;
  lotItemOrder: number;
  manufacturerCountryCodes: LotItemApplicationCountryCode[];
}
