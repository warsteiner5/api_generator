import { LotItemApplicationCountryCode } from './lot-item-application-country-code.interface';

// @ts-ignore
export interface LotItemApplicationEdit {
  id: number;
  lotItemOrder: number;
  manufacturerCountryCodes: LotItemApplicationCountryCode[];
}
