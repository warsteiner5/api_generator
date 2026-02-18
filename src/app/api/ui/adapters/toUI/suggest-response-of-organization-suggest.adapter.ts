import { ApiSuggestResponseOfOrganizationSuggestDto } from '../../../swagger/models/api-suggest-response-of-organization-suggest-dto';
import { SuggestResponseOfOrganizationSuggest } from '../../models/suggest-response-of-organization-suggest.interface';
import { adaptSuggestDtoOfOrganizationSuggestToUI } from './suggest-dto-of-organization-suggest.adapter';

export function adaptSuggestResponseOfOrganizationSuggestToUI(source?: ApiSuggestResponseOfOrganizationSuggestDto | null): SuggestResponseOfOrganizationSuggest {
  return {
    suggestions: (source?.suggestions ?? []).map((item) => adaptSuggestDtoOfOrganizationSuggestToUI(item)),
  };
}
