import { ApiSuggestDtoOfOrganizationSuggestDto } from '../../../swagger/models/api-suggest-dto-of-organization-suggest-dto';
import { SuggestDtoOfOrganizationSuggest } from '../../models/suggest-dto-of-organization-suggest.interface';
import { adaptOrganizationSuggestToUI } from './organization-suggest.adapter';

export function adaptSuggestDtoOfOrganizationSuggestToUI(source?: ApiSuggestDtoOfOrganizationSuggestDto | null): SuggestDtoOfOrganizationSuggest {
  return {
    data: adaptOrganizationSuggestToUI(source?.data),
    unrestrictedValue: source?.unrestricted_value ?? '',
    value: source?.value ?? '',
  };
}
