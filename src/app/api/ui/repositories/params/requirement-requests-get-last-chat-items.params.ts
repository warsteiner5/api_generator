import { RequirementRequestsGetLastChatItems$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-get-last-chat-items';

export interface RequirementRequestsGetLastChatItemsParams {
  requirementRequestId: number;
  chatId: number;
  lastId: number;
}

export const requirementRequestsGetLastChatItemsParamsAdapter = {
  adapt(params?: RequirementRequestsGetLastChatItemsParams): RequirementRequestsGetLastChatItems$Params {
    if (!params) {
      return {} as RequirementRequestsGetLastChatItems$Params;
    }
    return {
      requirementRequestId: params.requirementRequestId,
      chatId: params.chatId,
      lastId: params.lastId,
    };
  }
};
