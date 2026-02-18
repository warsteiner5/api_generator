import { CompetetiveListGetCompetetiveListItemsByRequirementRequestId$Params } from '../../../swagger/fn/competetive-list/competetive-list-get-competetive-list-items-by-requirement-request-id';

export interface CompetetiveListGetCompetetiveListItemsByRequirementRequestIdParams {
  requirementRequestId: number;
}

export const competetiveListGetCompetetiveListItemsByRequirementRequestIdParamsAdapter = {
  adapt(params?: CompetetiveListGetCompetetiveListItemsByRequirementRequestIdParams): CompetetiveListGetCompetetiveListItemsByRequirementRequestId$Params {
    if (!params) {
      return {} as CompetetiveListGetCompetetiveListItemsByRequirementRequestId$Params;
    }
    return {
      requirementRequestId: params.requirementRequestId,
    };
  }
};
