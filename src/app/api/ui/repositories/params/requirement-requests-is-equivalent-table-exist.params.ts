import { RequirementRequestsIsEquivalentTableExist$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-is-equivalent-table-exist';

export interface RequirementRequestsIsEquivalentTableExistParams {
  id: number;
}

export const requirementRequestsIsEquivalentTableExistParamsAdapter = {
  adapt(params?: RequirementRequestsIsEquivalentTableExistParams): RequirementRequestsIsEquivalentTableExist$Params {
    if (!params) {
      return {} as RequirementRequestsIsEquivalentTableExist$Params;
    }
    return {
      id: params.id,
    };
  }
};
