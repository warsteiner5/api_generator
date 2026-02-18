import { RequirementRequestsSearch$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-search';
import { RequirementRequestsSearchFilterAlt } from '../../models/requirement-requests-search-filter-alt.interface';
import { adaptApiRequirementRequestsSearchFilterAltDto } from '../../adapters/toDto/api-requirement-requests-search-filter.adapter';

export interface RequirementRequestsSearchParams {
  body?: RequirementRequestsSearchFilterAlt;
}

export const requirementRequestsSearchParamsAdapter = {
  adapt(params?: RequirementRequestsSearchParams): RequirementRequestsSearch$Params {
    if (!params) {
      return {} as RequirementRequestsSearch$Params;
    }
    return {
      body: adaptApiRequirementRequestsSearchFilterAltDto(params.body),
    };
  }
};
