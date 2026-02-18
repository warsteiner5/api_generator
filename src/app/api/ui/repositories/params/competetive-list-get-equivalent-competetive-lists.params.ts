import { CompetetiveListGetEquivalentCompetetiveLists$Params } from '../../../swagger/fn/competetive-list/competetive-list-get-equivalent-competetive-lists';

export interface CompetetiveListGetEquivalentCompetetiveListsParams {
  requirementRequestId: number;
}

export const competetiveListGetEquivalentCompetetiveListsParamsAdapter = {
  adapt(params?: CompetetiveListGetEquivalentCompetetiveListsParams): CompetetiveListGetEquivalentCompetetiveLists$Params {
    if (!params) {
      return {} as CompetetiveListGetEquivalentCompetetiveLists$Params;
    }
    return {
      requirementRequestId: params.requirementRequestId,
    };
  }
};
