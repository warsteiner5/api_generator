import { RequirementRequestsIsEquivalentTableExist$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-is-equivalent-table-exist';

// @ts-ignore
export interface RequirementRequestsIsEquivalentTableExistParams {
  id: number;
}

export function requirementRequestsIsEquivalentTableExistAdapter(params?: RequirementRequestsIsEquivalentTableExistParams): RequirementRequestsIsEquivalentTableExist$Params {
  if (!params) {
    return {} as RequirementRequestsIsEquivalentTableExist$Params;
  }
  return {
      id: params.id,
  };
}
