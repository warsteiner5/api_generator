import { RequirementRequestsCanUpdate$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-can-update';

export interface RequirementRequestsCanUpdateParams {
  id: number;
}

export const requirementRequestsCanUpdateParamsAdapter = {
  adapt(params?: RequirementRequestsCanUpdateParams): RequirementRequestsCanUpdate$Params {
    if (!params) {
      return {} as RequirementRequestsCanUpdate$Params;
    }
    return {
      id: params.id,
    };
  }
};
