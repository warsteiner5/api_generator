import { BaseFilterAlt } from './base-filter-alt.interface';

// @ts-ignore
export interface OrganizationForAutocompleteFilterAlt extends BaseFilterAlt {
  isCustomer: boolean;
  isSupplier: boolean;
  inn: string;
  name: string;
  kladr: string;
}
