import { OrganizationSuggest } from './organization-suggest.interface';

export interface SuggestDtoOfOrganizationSuggest {
  data: OrganizationSuggest;
  unrestrictedValue: string;
  value: string;
}
