import { SuggestDtoOfOrganizationSuggest } from '../../models/suggest-dto-of-organization-suggest.interface';
import { ApiSuggestDtoOfOrganizationSuggestDto } from '../../../swagger/models/api-suggest-dto-of-organization-suggest-dto';
import { adaptApiOrganizationSuggestDto } from './api-organization-suggest-dto.adapter';

export function adaptApiSuggestDtoOfOrganizationSuggestDto(source?: SuggestDtoOfOrganizationSuggest | null): ApiSuggestDtoOfOrganizationSuggestDto {
  return {
    data: adaptApiOrganizationSuggestDto(source?.data),
    unrestricted_value: source?.unrestrictedValue,
    value: source?.value,
  };
}
