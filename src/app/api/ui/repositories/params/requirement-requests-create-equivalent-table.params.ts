import { RequirementRequestsCreateEquivalentTable$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-create-equivalent-table';

export interface RequirementRequestsCreateEquivalentTableParams {
  id: number;
}

export const requirementRequestsCreateEquivalentTableParamsAdapter = {
  adapt(params?: RequirementRequestsCreateEquivalentTableParams): RequirementRequestsCreateEquivalentTable$Params {
    if (!params) {
      return {} as RequirementRequestsCreateEquivalentTable$Params;
    }
    return {
      id: params.id,
    };
  }
};
