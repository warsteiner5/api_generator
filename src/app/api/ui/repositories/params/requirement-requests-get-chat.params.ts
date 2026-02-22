import { RequirementRequestsGetChat$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-get-chat';

// @ts-ignore
export interface RequirementRequestsGetChatParams {
  requirementRequestId: number;
  chatId: number;
}

export function requirementRequestsGetChatAdapter(params?: RequirementRequestsGetChatParams): RequirementRequestsGetChat$Params {
  if (!params) {
    return {} as RequirementRequestsGetChat$Params;
  }
  return {
      requirementRequestId: params.requirementRequestId,
      chatId: params.chatId,
  };
}
