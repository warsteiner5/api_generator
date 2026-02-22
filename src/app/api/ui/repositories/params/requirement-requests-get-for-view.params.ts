import { RequirementRequestsGetForView$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-get-for-view';

// @ts-ignore
export interface RequirementRequestsGetForViewParams {
  id: number;
}

export function requirementRequestsGetForViewAdapter(params?: RequirementRequestsGetForViewParams): RequirementRequestsGetForView$Params {
  if (!params) {
    return {} as RequirementRequestsGetForView$Params;
  }
  return {
      id: params.id,
  };
}
