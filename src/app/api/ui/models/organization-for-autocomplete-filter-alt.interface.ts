import { BaseFilterAlt } from './base-filter-alt.interface';

export type OrganizationForAutocompleteFilterAlt = BaseFilterAlt & { 'IsCustomer'?: boolean | null; 'IsSupplier'?: boolean | null; 'Inn'?: string | null; 'Name'?: string | null; 'Kladr'?: string | null; };
