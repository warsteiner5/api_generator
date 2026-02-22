import { SuggestDtoOfOrganizationSuggest } from '../../models/suggest-dto-of-organization-suggest.interface';
import { ApiSuggestDtoOfOrganizationSuggestDto } from '../../../swagger/models/api-suggest-dto-of-organization-suggest-dto';
import { apiOrganizationSuggestDtoAdapter } from './api-organization-suggest-dto.adapter';

export const apiSuggestDtoOfOrganizationSuggestDtoAdapter = (source?: SuggestDtoOfOrganizationSuggest | null): ApiSuggestDtoOfOrganizationSuggestDto => {
  return {
    data: source?.data === null ? undefined : apiOrganizationSuggestDtoAdapter(source?.data),
    unrestricted_value: source?.unrestrictedValue,
    value: source?.value,
  };
}
