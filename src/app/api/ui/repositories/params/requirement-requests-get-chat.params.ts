import { RequirementRequestsGetChat$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-get-chat';

export interface RequirementRequestsGetChatParams {
  requirementRequestId: number;
  chatId: number;
}

export const requirementRequestsGetChatParamsAdapter = {
  adapt(params?: RequirementRequestsGetChatParams): RequirementRequestsGetChat$Params {
    if (!params) {
      return {} as RequirementRequestsGetChat$Params;
    }
    return {
      requirementRequestId: params.requirementRequestId,
      chatId: params.chatId,
    };
  }
};
