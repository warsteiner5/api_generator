import { RequirementRequestsCanUpdate$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-can-update';

// @ts-ignore
export interface RequirementRequestsCanUpdateParams {
  id: number;
}

export function requirementRequestsCanUpdateAdapter(params?: RequirementRequestsCanUpdateParams): RequirementRequestsCanUpdate$Params {
  if (!params) {
    return {} as RequirementRequestsCanUpdate$Params;
  }
  return {
      id: params.id,
  };
}
