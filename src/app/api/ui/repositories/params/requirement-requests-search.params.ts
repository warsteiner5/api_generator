import { RequirementRequestsSearch$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-search';
import { RequirementRequestsSearchFilterAlt } from '../../models/requirement-requests-search-filter-alt.interface';
import { apiRequirementRequestsSearchFilterAltDtoAdapter } from '../../adapters/models/api-requirement-requests-search-filter.adapter';

// @ts-ignore
export interface RequirementRequestsSearchParams {
  body?: RequirementRequestsSearchFilterAlt;
}

export function requirementRequestsSearchAdapter(params?: RequirementRequestsSearchParams): RequirementRequestsSearch$Params {
  if (!params) {
    return {} as RequirementRequestsSearch$Params;
  }
  return {
      body: apiRequirementRequestsSearchFilterAltDtoAdapter(params.body),
  };
}
