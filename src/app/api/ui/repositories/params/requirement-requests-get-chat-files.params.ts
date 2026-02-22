import { RequirementRequestsGetChatFiles$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-get-chat-files';

// @ts-ignore
export interface RequirementRequestsGetChatFilesParams {
  chatId: number;
}

export function requirementRequestsGetChatFilesAdapter(params?: RequirementRequestsGetChatFilesParams): RequirementRequestsGetChatFiles$Params {
  if (!params) {
    return {} as RequirementRequestsGetChatFiles$Params;
  }
  return {
      chatId: params.chatId,
  };
}
