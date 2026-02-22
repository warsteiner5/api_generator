import { RequirementRequestsCancelRequirementRequest$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-cancel-requirement-request';

// @ts-ignore
export interface RequirementRequestsCancelRequirementRequestParams {
  id: number;
}

export function requirementRequestsCancelRequirementRequestAdapter(params?: RequirementRequestsCancelRequirementRequestParams): RequirementRequestsCancelRequirementRequest$Params {
  if (!params) {
    return {} as RequirementRequestsCancelRequirementRequest$Params;
  }
  return {
      id: params.id,
  };
}
