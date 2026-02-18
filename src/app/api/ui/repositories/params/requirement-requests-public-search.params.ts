import { RequirementRequestsPublicSearch$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-public-search';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface RequirementRequestsPublicSearchParams {
  body?: SearchObjectAlt;
}

export const requirementRequestsPublicSearchParamsAdapter = {
  adapt(params?: RequirementRequestsPublicSearchParams): RequirementRequestsPublicSearch$Params {
    if (!params) {
      return {} as RequirementRequestsPublicSearch$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};
