import { ApiRequirementRequestsSearchFilterAltDto } from '../../../swagger/models/api-requirement-requests-search-filter';
import { RequirementRequestsSearchFilterAlt } from '../../models/requirement-requests-search-filter-alt.interface';

export function adaptRequirementRequestsSearchFilterAltToUI(source?: ApiRequirementRequestsSearchFilterAltDto | null): RequirementRequestsSearchFilterAlt {
  return (source ?? {}) as RequirementRequestsSearchFilterAlt;
}
