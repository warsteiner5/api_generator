import { RequirementRequestsUpdateEquivalentTable$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-update-equivalent-table';

export interface RequirementRequestsUpdateEquivalentTableParams {
  id: number;
}

export const requirementRequestsUpdateEquivalentTableParamsAdapter = {
  adapt(params?: RequirementRequestsUpdateEquivalentTableParams): RequirementRequestsUpdateEquivalentTable$Params {
    if (!params) {
      return {} as RequirementRequestsUpdateEquivalentTable$Params;
    }
    return {
      id: params.id,
    };
  }
};
