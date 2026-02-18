import { RequirementRequestsGetChatFiles$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-get-chat-files';

export interface RequirementRequestsGetChatFilesParams {
  chatId: number;
}

export const requirementRequestsGetChatFilesParamsAdapter = {
  adapt(params?: RequirementRequestsGetChatFilesParams): RequirementRequestsGetChatFiles$Params {
    if (!params) {
      return {} as RequirementRequestsGetChatFiles$Params;
    }
    return {
      chatId: params.chatId,
    };
  }
};
