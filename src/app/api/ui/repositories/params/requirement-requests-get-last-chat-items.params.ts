import { RequirementRequestsGetLastChatItems$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-get-last-chat-items';

// @ts-ignore
export interface RequirementRequestsGetLastChatItemsParams {
  requirementRequestId: number;
  chatId: number;
  lastId: number;
}

export function requirementRequestsGetLastChatItemsAdapter(params?: RequirementRequestsGetLastChatItemsParams): RequirementRequestsGetLastChatItems$Params {
  if (!params) {
    return {} as RequirementRequestsGetLastChatItems$Params;
  }
  return {
      requirementRequestId: params.requirementRequestId,
      chatId: params.chatId,
      lastId: params.lastId,
  };
}
