import { ApiSuggestDtoOfOrganizationSuggestDto } from '../../../swagger/models/api-suggest-dto-of-organization-suggest-dto';
import { SuggestDtoOfOrganizationSuggest } from '../../models/suggest-dto-of-organization-suggest.interface';
import { organizationSuggestAdapter } from './organization-suggest.adapter';

export const suggestDtoOfOrganizationSuggestAdapter = (source?: ApiSuggestDtoOfOrganizationSuggestDto | null): SuggestDtoOfOrganizationSuggest => {
  return {
    data: source?.data === null ? undefined : organizationSuggestAdapter(source?.data),
    unrestrictedValue: source?.unrestricted_value,
    value: source?.value,
  };
}
