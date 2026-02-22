import { RequirementRequestsCreateEquivalentTable$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-create-equivalent-table';

// @ts-ignore
export interface RequirementRequestsCreateEquivalentTableParams {
  id: number;
}

export function requirementRequestsCreateEquivalentTableAdapter(params?: RequirementRequestsCreateEquivalentTableParams): RequirementRequestsCreateEquivalentTable$Params {
  if (!params) {
    return {} as RequirementRequestsCreateEquivalentTable$Params;
  }
  return {
      id: params.id,
  };
}
