import { RequirementRequestsReadChatItemByIds$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-read-chat-item-by-ids';

export interface RequirementRequestsReadChatItemByIdsParams {
  requirementRequestId: number;
  chatId: number;
  body?: number[];
}

export const requirementRequestsReadChatItemByIdsParamsAdapter = {
  adapt(params?: RequirementRequestsReadChatItemByIdsParams): RequirementRequestsReadChatItemByIds$Params {
    if (!params) {
      return {} as RequirementRequestsReadChatItemByIds$Params;
    }
    return {
      requirementRequestId: params.requirementRequestId,
      chatId: params.chatId,
      body: params.body,
    };
  }
};
