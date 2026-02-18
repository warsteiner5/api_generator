import { RequirementRequestsGetForView$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-get-for-view';

export interface RequirementRequestsGetForViewParams {
  id: number;
}

export const requirementRequestsGetForViewParamsAdapter = {
  adapt(params?: RequirementRequestsGetForViewParams): RequirementRequestsGetForView$Params {
    if (!params) {
      return {} as RequirementRequestsGetForView$Params;
    }
    return {
      id: params.id,
    };
  }
};
