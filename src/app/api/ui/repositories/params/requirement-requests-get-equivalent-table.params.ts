import { RequirementRequestsGetEquivalentTable$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-get-equivalent-table';

// @ts-ignore
export interface RequirementRequestsGetEquivalentTableParams {
  id: number;
}

export function requirementRequestsGetEquivalentTableAdapter(params?: RequirementRequestsGetEquivalentTableParams): RequirementRequestsGetEquivalentTable$Params {
  if (!params) {
    return {} as RequirementRequestsGetEquivalentTable$Params;
  }
  return {
      id: params.id,
  };
}
