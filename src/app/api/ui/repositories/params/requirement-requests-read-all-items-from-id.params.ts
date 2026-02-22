import { RequirementRequestsReadAllItemsFromId$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-read-all-items-from-id';

// @ts-ignore
export interface RequirementRequestsReadAllItemsFromIdParams {
  requirementRequestId: number;
  chatId: number;
  itemId: number;
}

export function requirementRequestsReadAllItemsFromIdAdapter(params?: RequirementRequestsReadAllItemsFromIdParams): RequirementRequestsReadAllItemsFromId$Params {
  if (!params) {
    return {} as RequirementRequestsReadAllItemsFromId$Params;
  }
  return {
      requirementRequestId: params.requirementRequestId,
      chatId: params.chatId,
      itemId: params.itemId,
  };
}
