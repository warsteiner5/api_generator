import { RequirementRequestsGetEquivalentTable$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-get-equivalent-table';

export interface RequirementRequestsGetEquivalentTableParams {
  id: number;
}

export const requirementRequestsGetEquivalentTableParamsAdapter = {
  adapt(params?: RequirementRequestsGetEquivalentTableParams): RequirementRequestsGetEquivalentTable$Params {
    if (!params) {
      return {} as RequirementRequestsGetEquivalentTable$Params;
    }
    return {
      id: params.id,
    };
  }
};
