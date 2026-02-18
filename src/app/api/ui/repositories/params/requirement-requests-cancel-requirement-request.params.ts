import { RequirementRequestsCancelRequirementRequest$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-cancel-requirement-request';

export interface RequirementRequestsCancelRequirementRequestParams {
  id: number;
}

export const requirementRequestsCancelRequirementRequestParamsAdapter = {
  adapt(params?: RequirementRequestsCancelRequirementRequestParams): RequirementRequestsCancelRequirementRequest$Params {
    if (!params) {
      return {} as RequirementRequestsCancelRequirementRequest$Params;
    }
    return {
      id: params.id,
    };
  }
};
