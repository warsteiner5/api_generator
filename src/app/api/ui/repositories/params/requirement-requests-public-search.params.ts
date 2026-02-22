import { RequirementRequestsPublicSearch$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-public-search';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface RequirementRequestsPublicSearchParams {
  body?: SearchObjectAlt;
}

export function requirementRequestsPublicSearchAdapter(params?: RequirementRequestsPublicSearchParams): RequirementRequestsPublicSearch$Params {
  if (!params) {
    return {} as RequirementRequestsPublicSearch$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}
