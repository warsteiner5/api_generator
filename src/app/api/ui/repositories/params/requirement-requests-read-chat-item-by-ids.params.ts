import { RequirementRequestsReadChatItemByIds$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-read-chat-item-by-ids';

// @ts-ignore
export interface RequirementRequestsReadChatItemByIdsParams {
  requirementRequestId: number;
  chatId: number;
  body?: number[];
}

export function requirementRequestsReadChatItemByIdsAdapter(params?: RequirementRequestsReadChatItemByIdsParams): RequirementRequestsReadChatItemByIds$Params {
  if (!params) {
    return {} as RequirementRequestsReadChatItemByIds$Params;
  }
  return {
      requirementRequestId: params.requirementRequestId,
      chatId: params.chatId,
      body: params.body,
  };
}
