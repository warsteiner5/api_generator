import { RequirementRequestsUpdateEquivalentTable$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-update-equivalent-table';

// @ts-ignore
export interface RequirementRequestsUpdateEquivalentTableParams {
  id: number;
}

export function requirementRequestsUpdateEquivalentTableAdapter(params?: RequirementRequestsUpdateEquivalentTableParams): RequirementRequestsUpdateEquivalentTable$Params {
  if (!params) {
    return {} as RequirementRequestsUpdateEquivalentTable$Params;
  }
  return {
      id: params.id,
  };
}
