import { CompetetiveListGetCompetetiveListItemsByRequirementRequestId$Params } from '../../../swagger/fn/competetive-list/competetive-list-get-competetive-list-items-by-requirement-request-id';

// @ts-ignore
export interface CompetetiveListGetCompetetiveListItemsByRequirementRequestIdParams {
  requirementRequestId: number;
}

export function competetiveListGetCompetetiveListItemsByRequirementRequestIdAdapter(params?: CompetetiveListGetCompetetiveListItemsByRequirementRequestIdParams): CompetetiveListGetCompetetiveListItemsByRequirementRequestId$Params {
  if (!params) {
    return {} as CompetetiveListGetCompetetiveListItemsByRequirementRequestId$Params;
  }
  return {
      requirementRequestId: params.requirementRequestId,
  };
}
