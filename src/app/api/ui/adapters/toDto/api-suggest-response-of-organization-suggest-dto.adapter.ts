import { SuggestResponseOfOrganizationSuggest } from '../../models/suggest-response-of-organization-suggest.interface';
import { ApiSuggestResponseOfOrganizationSuggestDto } from '../../../swagger/models/api-suggest-response-of-organization-suggest-dto';
import { adaptApiSuggestDtoOfOrganizationSuggestDto } from './api-suggest-dto-of-organization-suggest-dto.adapter';

export function adaptApiSuggestResponseOfOrganizationSuggestDto(source?: SuggestResponseOfOrganizationSuggest | null): ApiSuggestResponseOfOrganizationSuggestDto {
  return {
    suggestions: (source?.suggestions ?? []).map((item) => adaptApiSuggestDtoOfOrganizationSuggestDto(item)),
  };
}
