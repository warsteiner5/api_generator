import { ApiSuggestResponseOfOrganizationSuggestDto } from '../../../swagger/models/api-suggest-response-of-organization-suggest-dto';
import { SuggestResponseOfOrganizationSuggest } from '../../models/suggest-response-of-organization-suggest.interface';
import { suggestDtoOfOrganizationSuggestAdapter } from './suggest-dto-of-organization-suggest.adapter';

export const suggestResponseOfOrganizationSuggestAdapter = (source?: ApiSuggestResponseOfOrganizationSuggestDto | null): SuggestResponseOfOrganizationSuggest => {
  return {
    suggestions: source?.suggestions?.map((item) => suggestDtoOfOrganizationSuggestAdapter(item)),
  };
}
