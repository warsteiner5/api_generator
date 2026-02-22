import { RequirementRequestsSearchFilterAlt } from '../../models/requirement-requests-search-filter-alt.interface';
import { ApiRequirementRequestsSearchFilterAltDto } from '../../../swagger/models/api-requirement-requests-search-filter';

export const apiRequirementRequestsSearchFilterAltDtoAdapter = (source?: RequirementRequestsSearchFilterAlt | null): ApiRequirementRequestsSearchFilterAltDto => {
  return (source ?? {}) as ApiRequirementRequestsSearchFilterAltDto;
}
